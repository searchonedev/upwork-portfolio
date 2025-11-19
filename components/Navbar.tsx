import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-ai-dark/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ai-accent to-ai-pink flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">VisionaryAI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#portfolio" className="hover:text-ai-accent transition-colors">Portfolio</a>
              <a href="#services" className="hover:text-ai-accent transition-colors">Services</a>
              <a href="#demos" className="hover:text-ai-accent transition-colors">Live Demos</a>
              <a 
                href="https://www.upwork.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-ai-dark px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm"
              >
                Hire on Upwork <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};