
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { Icon } from './icons/Icon';

interface AiImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Assume process.env.API_KEY is available in the execution environment
const API_KEY = (process.env as any).API_KEY ?? (window as any).VITE_API_KEY;

export const AiImageModal: React.FC<AiImageModalProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }
    if (!API_KEY) {
        alert('API Key is not configured. Please contact the site administrator.');
        setError('API Key is not configured.');
        return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: '1:1',
        },
      });

      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
      setGeneratedImage(imageUrl);

    } catch (e) {
      console.error(e);
      setError('Failed to generate image. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleClose = () => {
    // Reset state on close
    setPrompt('');
    setError(null);
    setGeneratedImage(null);
    setIsLoading(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-light-card dark:bg-dark-card rounded-2xl shadow-2xl z-10 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold font-heading text-primary dark:text-primary-light">AI Art Generator</h2>
              <button
                onClick={handleClose}
                className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <Icon name="x" />
              </button>
            </div>
            
            <div className="space-y-4">
                <p className="text-sm text-light-text/80 dark:text-dark-text/80">Enter a prompt to create a unique image with Google's Gemini API.</p>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A futuristic city skyline at sunset, cyberpunk style"
                    className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={3}
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerateImage}
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light disabled:bg-primary/50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Generating...' : 'Generate Image'}
                </button>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div className="w-full aspect-square bg-light-bg dark:bg-dark-bg rounded-lg flex items-center justify-center mt-4">
                    {isLoading && (
                         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    )}
                    {generatedImage && !isLoading && (
                        <img src={generatedImage} alt="AI generated art" className="w-full h-full object-contain rounded-lg"/>
                    )}
                    {!generatedImage && !isLoading && (
                         <p className="text-light-text/50 dark:text-dark-text/50">Your image will appear here</p>
                    )}
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
