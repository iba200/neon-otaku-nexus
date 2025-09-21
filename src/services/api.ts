const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

// Types
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  rank: string;
  points: number;
  articles_count: number;
  topics_count: number;
  bio?: string;
  created_at: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  summary: string;
  image_url: string;
  author: User;
  category: string;
  is_featured: boolean;
  likes_count: number;
  views_count: number;
  read_time: number;
  created_at: string;
  updated_at: string;
}

export interface ForumTopic {
  id: string;
  title: string;
  content: string;
  author: User;
  category: string;
  views_count: number;
  replies_count: number;
  last_reply_at: string;
  created_at: string;
  is_pinned: boolean;
}

export interface ForumMessage {
  id: string;
  content: string;
  author: User;
  topic_id: string;
  likes_count: number;
  created_at: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  article_id: string;
  parent_id?: string;
  likes_count: number;
  created_at: string;
  replies?: Comment[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

// API Service Class
class ApiService {
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('access_token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth
  async login(data: LoginRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async refreshToken(): Promise<{ access_token: string }> {
    const refreshToken = localStorage.getItem('refresh_token');
    return this.request<{ access_token: string }>('/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
    });
  }

  async getProfile(): Promise<User> {
    return this.request<User>('/auth/me');
  }

  // Users
  async getUsers(page = 1, limit = 10): Promise<{ users: User[]; total: number }> {
    return this.request<{ users: User[]; total: number }>(`/users?page=${page}&limit=${limit}`);
  }

  async getUser(id: string): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }

  async getUserRanking(): Promise<User[]> {
    return this.request<User[]>('/users/ranking');
  }

  async updateProfile(id: string, data: Partial<User>): Promise<User> {
    return this.request<User>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Articles
  async getArticles(page = 1, limit = 10, category?: string): Promise<{ articles: Article[]; total: number }> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category && { category }),
    });
    return this.request<{ articles: Article[]; total: number }>(`/articles?${params}`);
  }

  async getArticle(id: string): Promise<Article> {
    return this.request<Article>(`/articles/${id}`);
  }

  async createArticle(data: Omit<Article, 'id' | 'author' | 'created_at' | 'updated_at' | 'likes_count' | 'views_count'>): Promise<Article> {
    return this.request<Article>('/articles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateArticle(id: string, data: Partial<Article>): Promise<Article> {
    return this.request<Article>(`/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteArticle(id: string): Promise<void> {
    return this.request<void>(`/articles/${id}`, {
      method: 'DELETE',
    });
  }

  async likeArticle(id: string): Promise<{ liked: boolean; likes_count: number }> {
    return this.request<{ liked: boolean; likes_count: number }>(`/articles/${id}/like`, {
      method: 'POST',
    });
  }

  // Forum
  async getForumTopics(page = 1, limit = 10, category?: string): Promise<{ topics: ForumTopic[]; total: number }> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category && { category }),
    });
    return this.request<{ topics: ForumTopic[]; total: number }>(`/forum/topics?${params}`);
  }

  async getForumTopic(id: string): Promise<ForumTopic> {
    return this.request<ForumTopic>(`/forum/topics/${id}`);
  }

  async createForumTopic(data: Omit<ForumTopic, 'id' | 'author' | 'created_at' | 'views_count' | 'replies_count' | 'last_reply_at'>): Promise<ForumTopic> {
    return this.request<ForumTopic>('/forum/topics', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async replyToTopic(topicId: string, content: string): Promise<ForumMessage> {
    return this.request<ForumMessage>(`/forum/topics/${topicId}/reply`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  async getTopicMessages(topicId: string, page = 1, limit = 20): Promise<{ messages: ForumMessage[]; total: number }> {
    return this.request<{ messages: ForumMessage[]; total: number }>(`/forum/topics/${topicId}/messages?page=${page}&limit=${limit}`);
  }

  // Comments
  async createComment(data: { content: string; article_id: string; parent_id?: string }): Promise<Comment> {
    return this.request<Comment>('/comments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getArticleComments(articleId: string): Promise<Comment[]> {
    return this.request<Comment[]>(`/comments/article/${articleId}`);
  }

  async replyToComment(commentId: string, content: string): Promise<Comment> {
    return this.request<Comment>(`/comments/${commentId}/reply`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  async likeComment(commentId: string): Promise<{ liked: boolean; likes_count: number }> {
    return this.request<{ liked: boolean; likes_count: number }>(`/comments/${commentId}/like`, {
      method: 'POST',
    });
  }
}

export const apiService = new ApiService();

// Auth helpers
export const setAuthTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

export const clearAuthTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

export const getAccessToken = () => localStorage.getItem('access_token');
export const isAuthenticated = () => !!getAccessToken();