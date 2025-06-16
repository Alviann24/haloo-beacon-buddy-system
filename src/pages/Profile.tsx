
import React from 'react';
import Layout from '../components/Layout';

const Profile = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-purple-200 mb-6">ABOUT ME</h1>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Hi, I'm <span className="font-semibold text-yellow-300">Afzainizam Nur Fahmi S.Ds.</span>
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
                <h2 className="text-2xl font-bold text-yellow-300 mb-4">Education</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-yellow-300 font-semibold">2019 - 2023</p>
                      <p className="font-semibold">Sekolah Tinggi Informatika dan Komputer Indonesia</p>
                      <p className="text-gray-300">Bachelor of Visual Communication Design</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-yellow-300 font-semibold">2016 - 2019</p>
                      <p className="font-semibold">SMA Negeri 1 Glenmore</p>
                      <p className="text-gray-300">Social Science</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Software Skills */}
              <div>
                <h2 className="text-2xl font-bold text-yellow-300 mb-4">Software Skills</h2>
                <div className="flex space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    Ps
                  </div>
                  <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    Ai
                  </div>
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    Pr
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-80 h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
                
                {/* Location badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Banyuwangi<br />East Java
                </div>
                
                {/* Birth date badge */}
                <div className="absolute bottom-4 left-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                  November 7th<br />2000
                </div>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="mt-16 bg-purple-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">📱</span>
                </div>
                <span>089676064423</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">📷</span>
                </div>
                <span>afzainizam</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">🎵</span>
                </div>
                <span>afznrfm</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">✉️</span>
                </div>
                <span>afzainizam.nf11@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
