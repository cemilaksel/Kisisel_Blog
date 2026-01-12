
import React from 'react';

interface ExpertiseProps {
  items: string[];
}

const Expertise: React.FC<ExpertiseProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <span 
          key={index} 
          className="px-5 py-2.5 bg-white text-blue-900/80 rounded-2xl text-sm font-semibold border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all cursor-default select-none"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Expertise;
