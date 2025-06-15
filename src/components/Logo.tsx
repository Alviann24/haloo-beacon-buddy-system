
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'gradient' | 'outline' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'default' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-24 h-24 text-4xl',
    lg: 'w-32 h-32 text-5xl',
    xl: 'w-48 h-48 text-7xl'
  };

  const variantStyles = {
    default: 'bg-blue-600 text-white shadow-lg',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 bg-transparent',
    minimal: 'text-gray-800 bg-transparent'
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      ${variantStyles[variant]}
      rounded-2xl flex items-center justify-center font-bold
      transition-all duration-300 hover:scale-105 hover:shadow-xl
      relative overflow-hidden
    `}>
      <div className="flex items-center space-x-1">
        <span className="transform -rotate-12 origin-bottom">A</span>
        <span className="transform rotate-12 origin-bottom">V</span>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-2 w-4 h-4 border border-current rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border border-current rounded-full"></div>
      </div>
    </div>
  );
};

export default Logo;
