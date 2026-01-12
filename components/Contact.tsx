
import React from 'react';

interface ContactProps {
  onEmailClick: () => void;
  onLinkedInClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onEmailClick, onLinkedInClick }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold text-zinc-900">İletişime Geçin</h3>
        <p className="text-zinc-500 text-sm">Yeni fırsatlar ve işbirlikleri için benimle bağlantı kurabilirsiniz.</p>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onEmailClick}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all shadow-md active:scale-95"
        >
          E-posta Gönder
        </button>
        <button 
          onClick={onLinkedInClick}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-zinc-200 text-zinc-700 text-sm font-semibold hover:bg-zinc-50 transition-all shadow-sm active:scale-95"
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Contact;
