
import React from 'react';
import Navigation from './Navigation';
import { useIsMobile } from '../hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#3D348B] via-[#3D348B] to-[#E5DFDA] ${className}`}>
      <Navigation />
      <div className={isMobile ? "pt-24" : "pt-20"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
