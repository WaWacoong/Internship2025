import React from 'react';
import { Users, Heart } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Users className="w-8 h-8 text-blue-600" />
              <Heart className="w-4 h-4 text-red-500 absolute -right-1 -top-1" />
            </div>
            <h1 className="text-4xl font-bold">OUR TEAM</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="/src/public/images/img6.jfif" 
            alt="Our Team" 
            className="rounded-lg shadow-xl max-w-3xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Team; 