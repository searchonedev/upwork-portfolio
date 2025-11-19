import React from 'react';

const items = [
  { id: 1, type: 'Image', src: 'https://picsum.photos/800/800?random=1', title: 'Cyberpunk City', desc: 'Generated with Imagen 3' },
  { id: 2, type: 'Image', src: 'https://picsum.photos/800/600?random=2', title: 'Abstract Fluid', desc: 'Texture synthesis' },
  { id: 3, type: 'Video', src: 'https://picsum.photos/800/450?random=3', title: 'Neon Drive', desc: 'Veo Video Generation' }, // Placeholder for video thumbnail
  { id: 4, type: 'Image', src: 'https://picsum.photos/800/800?random=4', title: 'Character Concept', desc: 'Consistent character consistency' },
  { id: 5, type: 'Image', src: 'https://picsum.photos/800/1000?random=5', title: 'Product Mockup', desc: 'AI Photography' },
  { id: 6, type: 'Video', src: 'https://picsum.photos/800/450?random=6', title: 'Cloud Lapse', desc: 'Cinematic motion' },
];

export const PortfolioGrid: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A curation of AI-generated imagery and video content, demonstrating precision, creativity, and technical control over generative models.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl bg-ai-panel border border-white/5 aspect-[4/3] cursor-pointer">
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-ai-accent text-xs font-bold uppercase tracking-wider mb-1">{item.type}</span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
            {item.type === 'Video' && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};