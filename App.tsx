
import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { usePortfolio } from './usePortfolio';

const App: React.FC = () => {
  const { data, isLoading, actions } = usePortfolio();

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="selection:bg-blue-200 selection:text-blue-900">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12">
        
        {/* Profile Header Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-white/50 transition-all hover:shadow-blue-900/10">
          <Hero 
            name={data.name} 
            role={data.role} 
            city={data.city} 
            bio={data.bio}
            email={data.email}
            linkedin={data.linkedin}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Expertise Section Card */}
          <section className="md:col-span-5 bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-white/50 h-fit">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600/80 mb-6">Uzmanlık Alanları</h2>
            <Expertise items={data.specialties} />
          </section>

          {/* Experience Section Card */}
          <section className="md:col-span-7 bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-white/50">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600/80 mb-8">Kariyer Yolculuğu</h2>
            <Experience items={data.experience} />
          </section>
        </div>

        {/* Contact Footer Card */}
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl shadow-zinc-900/20 text-white">
          <Contact 
            onEmailClick={actions.handleEmailContact} 
            onLinkedInClick={actions.openLinkedIn} 
          />
        </section>

        <footer className="text-center pt-8 pb-4 text-blue-900/40 text-[10px] font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {data.name} — {data.city}</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
