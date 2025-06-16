
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
    <div className={`min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 ${className}`}>
      <Navigation />
      <div className={isMobile ? "pt-24" : "pt-20"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
