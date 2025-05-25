import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <AppHeader /> */}
      <main className="flex-grow">{children}</main>
      {/* <AppFooter /> */}
    </div>
  );
} 