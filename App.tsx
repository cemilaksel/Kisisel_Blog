
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
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="w-8 h-8 border-4 border-zinc-200 border-t-zinc-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-zinc-200 selection:text-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-20">
        
        {/* View Component: Profile / Header */}
        <Hero 
          name={data.name} 
          role={data.role} 
          city={data.city} 
          bio={data.bio} 
        />

        {/* View Component: Expertise Section */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Uzmanlık Alanları</h2>
          <Expertise items={data.specialties} />
        </section>

        {/* View Component: Experience Section */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Deneyim</h2>
          <Experience items={data.experience} />
        </section>

        {/* View Component: Contact Section (Handled via Controller actions) */}
        <section className="pt-8 border-t border-zinc-200">
          <Contact 
            onEmailClick={actions.handleEmailContact} 
            onLinkedInClick={actions.openLinkedIn} 
          />
        </section>

        <footer className="text-center pt-12 pb-8 text-zinc-400 text-xs font-medium">
          <p>© {new Date().getFullYear()} {data.name} — {data.city}</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
