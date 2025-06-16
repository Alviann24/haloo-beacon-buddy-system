
import React from 'react';
import Layout from '../components/Layout';

const Profile = () => {
  return (
    <Layout>
      <div className="min-h-screen py-10 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-[#E5DFDA] space-y-6 md:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5DFDA] mb-4 md:mb-6">ABOUT ME</h1>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed">
                  <p>
                    Hi, I'm <span className="font-semibold text-[#E5DFDA]">Afzainizam Nur Fahmi S.Ds.</span>
                  </p>
                  <p>
                    A professional graphic designer and illustrator with more than 5 years of 
                    experience. Has a strong desire to grow with a wealth of achievements & 
                    experiences. Expert in operating design tools, such as Adobe Illustrator, Adobe 
                    Photoshop, Procreate, etc.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#E5DFDA] mb-3 md:mb-4">Education</h2>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#E5DFDA] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#E5DFDA] font-semibold text-sm md:text-base">2019 - 2023</p>
                      <p className="font-semibold text-sm md:text-base">Sekolah Tinggi Informatika dan Komputer Indonesia</p>
                      <p className="text-[#E5DFDA]/80 text-sm md:text-base">Bachelor of Visual Communication Design</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#E5DFDA] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#E5DFDA] font-semibold text-sm md:text-base">2016 - 2019</p>
                      <p className="font-semibold text-sm md:text-base">SMA Negeri 1 Glenmore</p>
                      <p className="text-[#E5DFDA]/80 text-sm md:text-base">Social Science</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Software Skills */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#E5DFDA] mb-3 md:mb-4">Software Skills</h2>
                <div className="flex space-x-3 md:space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3D348B] rounded-lg flex items-center justify-center text-[#E5DFDA] font-bold text-lg md:text-xl">
                    Ps
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3D348B] rounded-lg flex items-center justify-center text-[#E5DFDA] font-bold text-lg md:text-xl">
                    Ai
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3D348B] rounded-lg flex items-center justify-center text-[#E5DFDA] font-bold text-lg md:text-xl">
                    Pr
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 h-64 sm:h-80 md:h-96 bg-[#E5DFDA]/20 rounded-2xl backdrop-blur-sm border border-[#E5DFDA]/30 overflow-hidden mx-auto">
                  <div className="w-full h-full bg-gradient-to-b from-[#E5DFDA]/30 to-[#3D348B]/30 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl md:text-8xl">👨‍💻</div>
                  </div>
                </div>
                
                {/* Location badge */}
                <div className="absolute top-4 right-4 bg-[#E5DFDA] text-[#3D348B] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-center">
                  Banyuwangi<br />East Java
                </div>
                
                {/* Birth date badge */}
                <div className="absolute bottom-4 left-4 bg-[#E5DFDA] text-[#3D348B] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-center">
                  November 7th<br />2000
                </div>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="mt-12 md:mt-16 bg-[#3D348B]/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-[#E5DFDA]/20">
            <h2 className="text-xl md:text-2xl font-bold text-[#E5DFDA] mb-4 md:mb-6">Contact Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3 text-[#E5DFDA]">
                <div className="w-8 h-8 bg-[#E5DFDA] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-sm md:text-base break-all">089676064423</span>
              </div>
              <div className="flex items-center space-x-3 text-[#E5DFDA]">
                <div className="w-8 h-8 bg-[#E5DFDA] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">📷</span>
                </div>
                <span className="text-sm md:text-base">afzainizam</span>
              </div>
              <div className="flex items-center space-x-3 text-[#E5DFDA]">
                <div className="w-8 h-8 bg-[#E5DFDA] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🎵</span>
                </div>
                <span className="text-sm md:text-base">afznrfm</span>
              </div>
              <div className="flex items-center space-x-3 text-[#E5DFDA]">
                <div className="w-8 h-8 bg-[#E5DFDA] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">✉️</span>
                </div>
                <span className="text-sm md:text-base break-all">afzainizam.nf11@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
