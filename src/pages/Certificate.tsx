
import React from 'react';
import Layout from '../components/Layout';

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: 'PIAGAM PENGHARGAAN',
      organization: 'Lomba Nasional',
      achievement: 'JUARA 1',
      description: 'Lomba Nasional Kreativitas Mahasiswa LO Kreatif 2021',
      year: '2021',
      type: 'Competition'
    },
    {
      id: 2,
      title: 'SERTIFIKAT',
      organization: 'LO Kreatif 2022',
      achievement: 'Participant',
      description: 'Sertifikat peserta lomba kreativitas tingkat nasional',
      year: '2022',
      type: 'Participation'
    },
    {
      id: 3,
      title: 'CERTIFICATE OF ACHIEVEMENT',
      organization: 'Design Competition',
      achievement: 'Winner',
      description: 'International design competition certificate',
      year: '2023',
      type: 'Achievement'
    },
    {
      id: 4,
      title: 'AWARD CERTIFICATE',
      organization: 'Creative Festival',
      achievement: '2nd Prize',
      description: 'Creative design festival award certificate',
      year: '2023',
      type: 'Award'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-10 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with classical statue */}
          <div className="text-center mb-12 md:mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="text-6xl md:text-9xl">🏛️</div>
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#E5DFDA] mb-4">CERTIFICATES</h1>
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 relative">
                <div className="w-full h-full bg-[#E5DFDA]/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#E5DFDA]/50">
                  <div className="text-3xl md:text-4xl">🏛️</div>
                </div>
                <div className="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2">
                  <div className="text-xl md:text-2xl">😎</div>
                </div>
              </div>
              <div className="bg-[#E5DFDA] text-[#3D348B] px-3 md:px-4 py-1 md:py-2 rounded-full inline-block font-semibold text-sm md:text-base">
                Certificate Achievement
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-[#E5DFDA]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#E5DFDA]/30 hover:border-[#E5DFDA]/50 transition-all duration-300 hover:scale-105"
              >
                {/* Certificate Design */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#E5DFDA] to-[#E5DFDA]/90 p-4 md:p-6 relative">
                  {/* Decorative border */}
                  <div className="absolute inset-3 md:inset-4 border-2 md:border-4 border-[#3D348B] rounded-lg"></div>
                  <div className="absolute inset-4 md:inset-6 border-1 md:border-2 border-[#3D348B]/70 rounded-lg"></div>
                  
                  {/* Certificate content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-[#3D348B] mb-2">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🏆</div>
                      <h3 className="font-bold text-sm md:text-lg mb-1">{cert.title}</h3>
                      <p className="text-xs md:text-sm mb-1 md:mb-2">{cert.organization}</p>
                      <div className="bg-[#3D348B] text-[#E5DFDA] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold mb-1 md:mb-2">
                        {cert.achievement}
                      </div>
                      <p className="text-xs leading-tight">{cert.description}</p>
                    </div>
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-[#3D348B] text-[#E5DFDA] px-1 md:px-2 py-1 rounded text-xs md:text-sm font-semibold">
                    {cert.year}
                  </div>
                  
                  {/* Type badge */}
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#3D348B]/80 text-[#E5DFDA] px-1 md:px-2 py-1 rounded text-xs">
                    {cert.type}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D348B]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 md:p-6 w-full text-[#E5DFDA]">
                    <h4 className="font-bold text-base md:text-lg mb-2">{cert.title}</h4>
                    <p className="text-xs md:text-sm text-[#E5DFDA]/80 mb-3">{cert.description}</p>
                    <button className="w-full bg-[#E5DFDA]/20 backdrop-blur-sm text-[#E5DFDA] py-2 rounded-lg font-medium hover:bg-[#E5DFDA]/30 transition-colors text-sm md:text-base">
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement summary */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-[#E5DFDA]/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#E5DFDA]/30 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#E5DFDA] mb-4 md:mb-6">Achievement Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#E5DFDA] mb-2">15+</div>
                  <p className="text-[#E5DFDA]/80 text-sm md:text-base">Certificates Earned</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#E5DFDA] mb-2">5+</div>
                  <p className="text-[#E5DFDA]/80 text-sm md:text-base">Competition Wins</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#E5DFDA] mb-2">3</div>
                  <p className="text-[#E5DFDA]/80 text-sm md:text-base">Years Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
