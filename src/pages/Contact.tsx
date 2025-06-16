
import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-8 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-8">LET'S COLLABORATE</h1>
            <p className="text-white/80 text-lg">
              Ready to work together? Get in touch and let's create something amazing!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Project Type</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm">
                    <option value="">Select project type</option>
                    <option value="logo">Logo Design</option>
                    <option value="branding">Brand Identity</option>
                    <option value="web">Web Design</option>
                    <option value="print">Print Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none transition-colors backdrop-blur-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">WhatsApp</p>
                      <p className="text-white font-semibold">089676064423</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white font-semibold">afzainizam.nf11@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-xl">📷</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Instagram</p>
                      <p className="text-white font-semibold">@afzainizam</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xl">🎵</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">TikTok</p>
                      <p className="text-white font-semibold">@afznrfm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-white/80">
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
