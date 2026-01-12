
import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-0 md:before:left-1/4 before:w-px before:bg-zinc-200">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 md:grid md:grid-cols-4 md:gap-8 md:pl-0">
          {/* Dot marker */}
          <div className="absolute left-[-5px] md:left-[24.3%] top-1.5 w-[11px] h-[11px] rounded-full bg-zinc-300 border-2 border-zinc-50 z-10" />
          
          <div className="md:col-span-1 text-sm font-semibold text-zinc-400 mb-2 md:mb-0">
            {item.period}
          </div>
          
          <div className="md:col-span-3 space-y-2">
            <h3 className="text-xl font-bold text-zinc-900 leading-none">{item.role}</h3>
            <p className="text-zinc-500 font-medium">{item.company}</p>
            {item.description && (
              <p className="text-zinc-600 leading-relaxed text-sm">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
