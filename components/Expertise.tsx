
import React from 'react';

interface ExpertiseProps {
  items: string[];
}

const Expertise: React.FC<ExpertiseProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span 
          key={index} 
          className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200 hover:bg-zinc-200 transition-colors cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Expertise;
