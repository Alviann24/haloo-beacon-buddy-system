
import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen py-10 md:py-20 px-4 md:px-8 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 md:mb-8">LET'S COLLABORATE</h1>
            <p className="text-white/80 text-base md:text-lg">
              Ready to work together? Get in touch and let's create something amazing!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send a Message</h2>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-white/80 mb-2 text-sm md:text-base">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 text-sm md:text-base">Project Type</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm text-sm md:text-base">
                    <option value="">Select project type</option>
                    <option value="logo">Logo Design</option>
                    <option value="branding">Brand Identity</option>
                    <option value="web">Web Design</option>
                    <option value="print">Print Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2 text-sm md:text-base">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold py-2 md:py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Get in Touch</h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg md:text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs md:text-sm">WhatsApp</p>
                      <p className="text-white font-semibold text-sm md:text-base">089676064423</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg md:text-xl">✉️</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs md:text-sm">Email</p>
                      <p className="text-white font-semibold text-sm md:text-base break-all">afzainizam.nf11@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg md:text-xl">📷</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs md:text-sm">Instagram</p>
                      <p className="text-white font-semibold text-sm md:text-base">@afzainizam</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg md:text-xl">🎵</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs md:text-sm">TikTok</p>
                      <p className="text-white font-semibold text-sm md:text-base">@afznrfm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Response Time</h3>
                <p className="text-white/80 text-sm md:text-base">
                  I typically respond to messages within 24 hours. For urgent projects, 
                  feel free to reach out via WhatsApp for faster communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
