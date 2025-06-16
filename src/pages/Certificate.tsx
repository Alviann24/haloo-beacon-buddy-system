
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
      <div className="min-h-screen py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with classical statue */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="text-9xl">🏛️</div>
            </div>
            <div className="relative z-10">
              <h1 className="text-6xl font-bold text-white mb-4">CERTIFICATES</h1>
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <div className="text-4xl">🏛️</div>
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="text-2xl">😎</div>
                </div>
              </div>
              <div className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full inline-block font-semibold">
                Certificate Achievement
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                {/* Certificate Design */}
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 relative">
                  {/* Decorative border */}
                  <div className="absolute inset-4 border-4 border-yellow-600 rounded-lg"></div>
                  <div className="absolute inset-6 border-2 border-yellow-500 rounded-lg"></div>
                  
                  {/* Certificate content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-yellow-800 mb-2">
                      <div className="text-2xl mb-2">🏆</div>
                      <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                      <p className="text-sm mb-2">{cert.organization}</p>
                      <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {cert.achievement}
                      </div>
                      <p className="text-xs leading-tight">{cert.description}</p>
                    </div>
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    {cert.year}
                  </div>
                  
                  {/* Type badge */}
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {cert.type}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full text-white">
                    <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                    <p className="text-sm text-white/80 mb-3">{cert.description}</p>
                    <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement summary */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Achievement Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                  <p className="text-white/80">Certificates Earned</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
                  <p className="text-white/80">Competition Wins</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">3</div>
                  <p className="text-white/80">Years Active</p>
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
