import React, { useState } from 'react';
import { Video, Play, Key } from 'lucide-react';
import { Button } from '../Button';
import { generateVideo, ensureApiKey } from '../../services/geminiService';

export const VideoGenDemo: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError(null);
    setStatus("Checking permissions...");

    try {
      const hasKey = await ensureApiKey();
      if (!hasKey) {
        throw new Error("API Key selection is required for Veo video generation.");
      }

      const url = await generateVideo(prompt, setStatus);
      setVideoUrl(url);
      setStatus("Complete!");
    } catch (err: any) {
      setError(err.message || "Video generation failed.");
      setStatus("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ai-panel rounded-2xl border border-white/10 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-white/5">
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-3">
            <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
              <Video size={24} />
            </div>
            <h3 className="text-xl font-bold">Veo Video Generation</h3>
           </div>
           <div className="flex items-center gap-2 text-xs text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
              <Key size={12} />
              <span>Requires API Key Selection</span>
           </div>
        </div>
        
        <p className="text-gray-400 mb-6 text-sm">
          Generate 720p video content from text prompts using Google's Veo model. Note: This process can take 1-2 minutes.
        </p>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A cinematic drone shot of a waterfall in a jungle, 4k, photorealistic"
            className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <Button 
            onClick={handleGenerate} 
            isLoading={loading}
            disabled={!prompt.trim()}
            variant="primary"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500"
          >
            Generate Video
          </Button>
        </div>
        {status && <p className="text-ai-accent text-sm mt-3 animate-pulse">{status}</p>}
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      </div>

      <div className="aspect-video bg-black flex items-center justify-center relative">
        {loading ? (
           <div className="w-full h-full flex flex-col items-center justify-center space-y-4 bg-black/50 backdrop-blur-sm">
             <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
             <p className="text-gray-300 font-mono text-sm">{status}</p>
           </div>
        ) : videoUrl ? (
          <video controls autoPlay loop className="w-full h-full object-cover">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="text-gray-700 flex flex-col items-center">
            <Play size={64} className="opacity-20 mb-4" />
            <p className="text-sm">Video preview area</p>
          </div>
        )}
      </div>
    </div>
  );
};