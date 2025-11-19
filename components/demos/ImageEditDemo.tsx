import React, { useState, useRef } from 'react';
import { Edit, Upload, ArrowRight } from 'lucide-react';
import { Button } from '../Button';
import { editImage } from '../../services/geminiService';

export const ImageEditDemo: React.FC = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!sourceImage || !prompt.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const editedUrl = await editImage(sourceImage, prompt);
      setResult(editedUrl);
    } catch (err: any) {
      setError(err.message || "Failed to edit image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ai-panel rounded-2xl border border-white/10 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
            <Edit size={24} />
          </div>
          <h3 className="text-xl font-bold">AI Image Editing</h3>
        </div>
        <p className="text-gray-400 mb-6 text-sm">
          Upload an image and tell the AI how to modify it. Uses Gemini 2.5 Flash Image model.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer transition-colors ${sourceImage ? 'border-ai-accent bg-ai-accent/5' : 'border-gray-700 hover:border-gray-500 hover:bg-white/5'}`}
            >
              {sourceImage ? (
                <img src={sourceImage} alt="Source" className="h-full w-full object-contain rounded-lg p-2" />
              ) : (
                <>
                  <Upload className="text-gray-500 mb-2" />
                  <span className="text-sm text-gray-400">Click to upload source</span>
                </>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            
            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Instruction (e.g., 'Add a neon sign')"
                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
              />
              <Button 
                onClick={handleEdit} 
                isLoading={loading}
                disabled={!sourceImage || !prompt.trim()}
                className="py-2 px-4 text-sm"
                variant="secondary"
              >
                Edit
              </Button>
            </div>
          </div>

          {/* Output Section */}
          <div className="relative bg-black/30 rounded-xl h-64 md:h-auto flex items-center justify-center border border-white/5">
             {loading ? (
                <div className="text-center">
                   <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                   <span className="text-xs text-purple-400">Processing...</span>
                </div>
             ) : result ? (
               <img src={result} alt="Edited" className="max-h-full max-w-full rounded-lg shadow-lg" />
             ) : (
               <div className="text-gray-600 flex flex-col items-center">
                 <ArrowRight className="mb-2 opacity-20" />
                 <span className="text-sm">Edited image appears here</span>
               </div>
             )}
          </div>
        </div>
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      </div>
    </div>
  );
};