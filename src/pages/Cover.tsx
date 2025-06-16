import React from 'react';
import Layout from '../components/Layout';
import { ChevronDown } from 'lucide-react';

const Cover = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-[#E5DFDA]/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-[#E5DFDA]/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-[#E5DFDA]/40 rounded-full blur-lg"></div>
        </div>

        {/* Main content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 relative">
              {/* Greek statue silhouette */}
              <div className="w-full h-full bg-[#E5DFDA]/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#E5DFDA]/50">
                <div className="text-4xl sm:text-5xl md:text-6xl text-[#E5DFDA]">🏛️</div>
              </div>
              {/* Sunglasses overlay */}
              <div className="absolute top-10 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2">
                <div className="text-2xl sm:text-3xl md:text-4xl">😎</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#E5DFDA] mb-4 leading-tight">
            PORTO
            <br />
            <span className="bg-gradient-to-r from-[#E5DFDA] to-[#E5DFDA]/80 bg-clip-text text-transparent">
              FOLIO
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-[#E5DFDA]/80">
            <div className="w-8 sm:w-12 h-px bg-[#E5DFDA]/50"></div>
            <p className="text-base sm:text-lg">afzainizam</p>
            <div className="w-8 sm:w-12 h-px bg-[#E5DFDA]/50"></div>
          </div>
        </div>

        {/* Scroll indicator with text */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <p className="text-[#E5DFDA]/70 text-sm md:text-base font-medium">
              Lihat halaman selanjutnya
            </p>
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#E5DFDA]/70" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cover;
