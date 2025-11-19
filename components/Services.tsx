import React from 'react';
import { Terminal, Palette, Clapperboard, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Terminal className="w-8 h-8 text-ai-accent" />,
    title: "Prompt Engineering",
    desc: "Crafting precise, efficient prompts to extract the highest quality outputs from LLMs and Diffusion models."
  },
  {
    icon: <Palette className="w-8 h-8 text-purple-500" />,
    title: "Custom Asset Generation",
    desc: "Creating consistent assets for games, web design, and marketing campaigns using Imagen & Gemini."
  },
  {
    icon: <Clapperboard className="w-8 h-8 text-pink-500" />,
    title: "AI Video Production",
    desc: "Generating and editing short-form video content with Veo, perfect for social media automation."
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    title: "API Integration",
    desc: "Building React applications that leverage the Google GenAI SDK for real-time creative tools."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};