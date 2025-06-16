
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
      <div className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-8">EXPERIENCE</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              My professional journey in graphic design and visual communication
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-purple-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-2xl">💼</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-yellow-400 font-semibold">{exp.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="bg-purple-600/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white px-3 py-1 rounded-full text-sm border border-white/20"
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
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-white font-bold text-xl mb-2">Design Software</h3>
                <p className="text-white/80">Adobe Creative Suite, Figma, Sketch</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🖌️</div>
                <h3 className="text-white font-bold text-xl mb-2">Illustration</h3>
                <p className="text-white/80">Digital Art, Vector Graphics, Character Design</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-white font-bold text-xl mb-2">Digital Design</h3>
                <p className="text-white/80">UI/UX, Web Design, Social Media Graphics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
