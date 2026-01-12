
import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-400/50 before:via-blue-200/30 before:to-transparent">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 group">
          {/* Dot marker with ping effect */}
          <div className="absolute left-[-5px] top-1.5 w-[12px] h-[12px] rounded-full bg-blue-500 border-2 border-white z-10 transition-transform group-hover:scale-125 shadow-sm" />
          
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 order-2 sm:order-1">
                {item.period}
              </span>
              <span className="text-xs font-bold text-blue-800/40 order-1 sm:order-2">
                {item.company}
              </span>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-zinc-800 leading-tight group-hover:text-blue-900 transition-colors">
                {item.role}
              </h3>
              {item.description && (
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
