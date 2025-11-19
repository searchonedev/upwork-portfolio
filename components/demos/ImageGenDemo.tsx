import React, { useState } from 'react';
import { Wand2, Download } from 'lucide-react';
import { Button } from '../Button';
import { generateImage } from '../../services/geminiService';

export const ImageGenDemo: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const imgUrl = await generateImage(prompt);
      setResult(imgUrl);
    } catch (err: any) {
      setError(err.message || "Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ai-panel rounded-2xl border border-white/10 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <Wand2 size={24} />
          </div>
          <h3 className="text-xl font-bold">Imagen Generation</h3>
        </div>
        <p className="text-gray-400 mb-6 text-sm">
          Test my prompt engineering capabilities. Enter a description below to generate a high-quality image using Imagen 4.0.
        </p>
        
        <div className="flex gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., A futuristic robot painting a canvas in a flower field, cinematic lighting"
            className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-ai-accent focus:ring-1 focus:ring-ai-accent transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <Button 
            onClick={handleGenerate} 
            isLoading={loading}
            disabled={!prompt.trim()}
          >
            Generate
          </Button>
        </div>
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      </div>

      <div className="relative min-h-[400px] bg-black/30 flex items-center justify-center p-6">
        {loading ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-ai-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-400 animate-pulse">Dreaming up your image...</p>
          </div>
        ) : result ? (
          <div className="relative group max-w-md w-full">
            <img src={result} alt="Generated" className="w-full rounded-lg shadow-2xl shadow-ai-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-lg">
              <a 
                href={result} 
                download={`imagen-${Date.now()}.jpg`}
                className="bg-white text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200"
              >
                <Download size={16} /> Download
              </a>
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-center">
            <Wand2 size={48} className="mx-auto mb-4 opacity-20" />
            <p>Result will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};