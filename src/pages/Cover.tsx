
import React from 'react';
import Layout from '../components/Layout';

const Cover = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-400/30 rounded-full blur-lg"></div>
        </div>

        {/* Main content */}
        <div className="text-center z-10">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              {/* Greek statue silhouette */}
              <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <div className="text-6xl text-white">🏛️</div>
              </div>
              {/* Sunglasses overlay */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div className="text-4xl">😎</div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            PORTO
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              FOLIO
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <div className="w-12 h-px bg-white/50"></div>
            <p className="text-lg">afzainizam</p>
            <div className="w-12 h-px bg-white/50"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cover;
