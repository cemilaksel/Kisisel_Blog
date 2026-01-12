
import React from 'react';

interface ContactProps {
  onEmailClick: () => void;
  onLinkedInClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onEmailClick, onLinkedInClick }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left space-y-2">
        <h3 className="text-2xl font-bold tracking-tight">Geleceği Birlikte Kurgulayalım</h3>
        <p className="text-zinc-400 text-sm font-medium">Yeni fırsatlar ve kurumsal işbirlikleri için kapım her zaman açık.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button 
          onClick={onEmailClick}
          className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-zinc-900 text-sm font-bold transition-all hover:bg-blue-50 hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/5"
        >
          <span className="relative flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            E-posta Gönder
          </span>
        </button>
        <button 
          onClick={onLinkedInClick}
          className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-zinc-700/50 border border-zinc-600 text-white text-sm font-bold transition-all hover:bg-zinc-700 hover:scale-[1.02] active:scale-95 backdrop-blur-sm"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
