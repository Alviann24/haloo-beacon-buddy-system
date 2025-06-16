
import React from 'react';
import Layout from '../components/Layout';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Graphic Designer',
      company: 'Creative Studio Indonesia',
      period: '2022 - Present',
      description: 'Lead designer for major branding projects, managing team of junior designers and creating visual identity for various clients.',
      skills: ['Adobe Creative Suite', 'Brand Identity', 'Team Leadership']
    },
    {
      id: 2,
      title: 'Freelance Designer',
      company: 'Various Clients',
      period: '2020 - 2022',
      description: 'Provided design services for small to medium businesses, creating logos, marketing materials, and digital assets.',
      skills: ['Logo Design', 'Marketing Materials', 'Client Management']
    },
    {
      id: 3,
      title: 'Junior Designer',
      company: 'Digital Agency Banyuwangi',
      period: '2019 - 2020',
      description: 'Started career as junior designer, learning industry best practices and working on various client projects.',
      skills: ['Web Design', 'Social Media Graphics', 'Print Design']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-10 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#E5DFDA] mb-6 md:mb-8">EXPERIENCE</h1>
            <p className="text-[#E5DFDA]/80 text-base md:text-lg max-w-2xl mx-auto">
              My professional journey in graphic design and visual communication
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E5DFDA] to-[#3D348B]"></div>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start space-x-6 md:space-x-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#E5DFDA] to-[#3D348B] rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-lg md:text-2xl">💼</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-[#E5DFDA]/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#E5DFDA]/30 hover:border-[#E5DFDA]/50 transition-all duration-300">
                      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-[#E5DFDA] mb-1">{exp.title}</h3>
                          <p className="text-[#E5DFDA] font-semibold text-sm md:text-base">{exp.company}</p>
                        </div>
                        <div className="md:mt-0">
                          <span className="bg-[#3D348B]/50 text-[#E5DFDA] px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-[#E5DFDA]/80 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="text-[#E5DFDA] font-semibold mb-3 text-sm md:text-base">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gradient-to-r from-[#3D348B]/20 to-[#E5DFDA]/20 text-[#E5DFDA] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-[#E5DFDA]/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#E5DFDA] text-center mb-8 md:mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-[#E5DFDA]/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#E5DFDA]/30 text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎨</div>
                <h3 className="text-[#E5DFDA] font-bold text-lg md:text-xl mb-2">Design Software</h3>
                <p className="text-[#E5DFDA]/80 text-sm md:text-base">Adobe Creative Suite, Figma, Sketch</p>
              </div>
              <div className="bg-[#E5DFDA]/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#E5DFDA]/30 text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🖌️</div>
                <h3 className="text-[#E5DFDA] font-bold text-lg md:text-xl mb-2">Illustration</h3>
                <p className="text-[#E5DFDA]/80 text-sm md:text-base">Digital Art, Vector Graphics, Character Design</p>
              </div>
              <div className="bg-[#E5DFDA]/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#E5DFDA]/30 text-center md:col-span-2 lg:col-span-1">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📱</div>
                <h3 className="text-[#E5DFDA] font-bold text-lg md:text-xl mb-2">Digital Design</h3>
                <p className="text-[#E5DFDA]/80 text-sm md:text-base">UI/UX, Web Design, Social Media Graphics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
