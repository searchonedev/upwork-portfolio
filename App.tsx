import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Services } from './components/Services';
import { ImageGenDemo } from './components/demos/ImageGenDemo';
import { ImageEditDemo } from './components/demos/ImageEditDemo';
import { VideoGenDemo } from './components/demos/VideoGenDemo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ai-dark text-white selection:bg-ai-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <PortfolioGrid />
        
        <section id="demos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Interactive Playground</h2>
             <p className="text-gray-400 max-w-2xl">
               Don't just take my word for it. Test the underlying technology I use to build applications. 
               These demos connect directly to Google's Gemini & Veo models.
             </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ImageGenDemo />
            <ImageEditDemo />
          </div>
          <div className="grid grid-cols-1 gap-8">
            <VideoGenDemo />
          </div>
        </section>

        <section className="py-20 border-t border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to start your project?</h2>
          <a 
            href="https://www.upwork.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Contact Me on Upwork
          </a>
        </section>
      </main>

      <footer className="bg-black py-8 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} VisionaryAI Portfolio. Powered by Google Gemini & Veo.</p>
      </footer>
    </div>
  );
};

export default App;