
import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  city: string;
  bio: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, city, bio }) => {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-zinc-200 border-4 border-white shadow-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
        <svg 
          className="w-20 h-20 text-zinc-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1" 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      </div>

      <div className="text-center md:text-left space-y-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">{name}</h1>
          <p className="text-lg md:text-xl text-zinc-500 font-medium mt-1">{role}</p>
        </div>
        
        <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{city}, Türkiye</span>
        </div>

        <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl">
          {bio}
        </p>
      </div>
    </header>
  );
};

export default Hero;
