'use client'
import Navbar2 from '@/components/Navbar2';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      {children}
    </div>
  );
}