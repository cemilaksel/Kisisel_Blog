
import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  city: string;
  bio: string;
  email: string;
  linkedin: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, city, bio, email, linkedin }) => {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-100 border-4 border-white shadow-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
        <svg 
          className="w-20 h-20 text-blue-300" 
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
          <p className="text-lg md:text-xl text-blue-700/80 font-medium mt-1">{role}</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-blue-500/60 text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{city}, Türkiye</span>
          </div>
          
          <a 
            href={`mailto:${email}`} 
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="group-hover:underline underline-offset-4">{email}</span>
          </a>

          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors group"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="group-hover:underline underline-offset-4">LinkedIn</span>
          </a>
        </div>

        <p className="text-zinc-700 leading-relaxed text-lg max-w-2xl">
          {bio}
        </p>
      </div>
    </header>
  );
};

export default Hero;
