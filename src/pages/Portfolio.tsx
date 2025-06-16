
import React from 'react';
import Layout from '../components/Layout';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, title: 'Design Project 1', category: 'Graphic Design' },
    { id: 2, title: 'Design Project 2', category: 'Illustration' },
    { id: 3, title: 'Design Project 3', category: 'Branding' },
    { id: 4, title: 'Design Project 4', category: 'Web Design' },
    { id: 5, title: 'Design Project 5', category: 'Print Design' },
    { id: 6, title: 'Design Project 6', category: 'Digital Art' },
    { id: 7, title: 'Design Project 7', category: 'Social Media' },
    { id: 8, title: 'Design Project 8', category: 'UI/UX' },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-10 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 md:mb-8">PORTFOLIO</h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-2">
              create designs for every activity that I post on Instagram to make it look more attractive
            </p>
            <p className="text-white/60 text-sm md:text-base">
              for other design recap results, you can see them on Instagram @afzainizam
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-400/30 to-pink-400/30 flex items-center justify-center">
                  <div className="text-3xl md:text-4xl">🎨</div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1">{item.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm">{item.category}</p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 md:p-4 w-full">
                    <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors text-sm md:text-base">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social media post simulation */}
          <div className="mt-12 md:mt-16 max-w-sm md:max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-xl aspect-square mb-3 md:mb-4 flex items-center justify-center">
                <div className="text-4xl md:text-6xl">📱</div>
              </div>
              
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex space-x-3 md:space-x-4">
                  <button className="text-white hover:text-red-400 transition-colors text-lg md:text-xl">❤️</button>
                  <button className="text-white hover:text-blue-400 transition-colors text-lg md:text-xl">💬</button>
                  <button className="text-white hover:text-green-400 transition-colors text-lg md:text-xl">📤</button>
                </div>
                <button className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">🔖</button>
              </div>
              
              <p className="text-white/80 text-xs md:text-sm mb-2">
                <span className="font-semibold">●●●</span> Liked afzainizam and others
              </p>
              
              <div className="flex items-center justify-center space-x-4 md:space-x-6 text-white/60 mt-3 md:mt-4">
                <button className="hover:text-white transition-colors text-lg md:text-xl">🏠</button>
                <button className="hover:text-white transition-colors text-lg md:text-xl">🔍</button>
                <button className="hover:text-white transition-colors text-lg md:text-xl">➕</button>
                <button className="hover:text-white transition-colors text-lg md:text-xl">🛒</button>
                <button className="hover:text-white transition-colors text-lg md:text-xl">👤</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
