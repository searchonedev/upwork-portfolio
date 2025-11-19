import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai-accent/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ai-pink/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Available for new projects on Upwork</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight">
          Bringing Imagination to Life with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-accent via-ai-purple to-ai-pink">
            Generative AI
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          I specialize in building custom AI pipelines for image generation, video synthesis, and automated editing using the latest Google Gemini & Veo models.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#demos"
            className="px-8 py-4 rounded-lg bg-white text-ai-dark font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            Try Live Demos <PlayCircle size={20} />
          </a>
          <a 
            href="https://www.upwork.com"
            target="_blank"
            rel="noreferrer" 
            className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
          >
            View Upwork Profile <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};