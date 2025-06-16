
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  if (isMobile) {
    return (
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white font-bold text-lg">
              Portfolio
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="mt-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-white text-purple-900'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg text-sm font-medium text-center"
              >
                let's collaborate
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  }

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
