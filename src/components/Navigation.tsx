
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'cover', path: '/' },
    { name: 'profile', path: '/profile' },
    { name: 'experience', path: '/experience' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'certificate', path: '/certificate' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
          >
            let's collaborate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
