
import React from 'react';
import Logo from './Logo';

const LogoShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Logo A & V
        </h1>
        
        {/* Size Variations */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Ukuran Berbeda</h2>
          <div className="flex items-end justify-center space-x-8 flex-wrap gap-4">
            <div className="text-center">
              <Logo size="sm" />
              <p className="mt-2 text-sm text-gray-600">Small</p>
            </div>
            <div className="text-center">
              <Logo size="md" />
              <p className="mt-2 text-sm text-gray-600">Medium</p>
            </div>
            <div className="text-center">
              <Logo size="lg" />
              <p className="mt-2 text-sm text-gray-600">Large</p>
            </div>
            <div className="text-center">
              <Logo size="xl" />
              <p className="mt-2 text-sm text-gray-600">Extra Large</p>
            </div>
          </div>
        </div>

        {/* Style Variations */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Variasi Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <div className="text-center">
              <Logo variant="default" />
              <p className="mt-2 text-sm text-gray-600">Default</p>
            </div>
            <div className="text-center">
              <Logo variant="gradient" />
              <p className="mt-2 text-sm text-gray-600">Gradient</p>
            </div>
            <div className="text-center">
              <Logo variant="outline" />
              <p className="mt-2 text-sm text-gray-600">Outline</p>
            </div>
            <div className="text-center">
              <Logo variant="minimal" />
              <p className="mt-2 text-sm text-gray-600">Minimal</p>
            </div>
          </div>
        </div>

        {/* Different Backgrounds */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Pada Background Berbeda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Logo variant="default" />
              <p className="mt-2 text-sm text-gray-600">Background Putih</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <Logo variant="gradient" />
              <p className="mt-2 text-sm text-white">Background Gelap</p>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg shadow-md text-center">
              <Logo variant="outline" />
              <p className="mt-2 text-sm text-gray-600">Background Biru Muda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
