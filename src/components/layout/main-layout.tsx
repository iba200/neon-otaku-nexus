import { Navigation } from "../ui/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen floating-orbs">
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};