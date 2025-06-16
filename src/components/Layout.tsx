
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 ${className}`}>
      <Navigation />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
