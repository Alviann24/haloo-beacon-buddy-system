
import React from 'react';
import Layout from '../components/Layout';

const Cover = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-pink-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-purple-400/30 rounded-full blur-lg"></div>
        </div>

        {/* Main content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 relative">
              {/* Greek statue silhouette */}
              <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <div className="text-4xl sm:text-5xl md:text-6xl text-white">🏛️</div>
              </div>
              {/* Sunglasses overlay */}
              <div className="absolute top-10 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2">
                <div className="text-2xl sm:text-3xl md:text-4xl">😎</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            PORTO
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              FOLIO
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <div className="w-8 sm:w-12 h-px bg-white/50"></div>
            <p className="text-base sm:text-lg">afzainizam</p>
            <div className="w-8 sm:w-12 h-px bg-white/50"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1 md:mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cover;
