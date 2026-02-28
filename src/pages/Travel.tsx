import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe, Plane } from 'lucide-react';

export const Travel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-[calc(100vh-200px)] px-6 py-12"
    >
      <div className="glass p-8 rounded-3xl max-w-4xl w-full text-center">
        <Globe className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-500 mb-6">
          Adventures Across the Globe: My Travel Stories
        </h2>
        <p className="text-lg text-emerald-200 mb-8 leading-relaxed">
          Beyond the keyboard and market charts, I'm an avid traveler, constantly seeking new cultures, landscapes, and experiences. From the bustling streets of Tokyo to the serene mountains of Patagonia, each journey enriches my perspective and fuels my creativity.
        </p>
        <p className="text-md text-emerald-300 mb-8 leading-relaxed">
          I believe travel is the best education, broadening horizons and inspiring new ideas.
        </p>
        <Button variant="primary" icon={Plane} onClick={() => alert('Travel blog coming soon!')}>
          See My Destinations
        </Button>
      </div>
    </motion.div>
  );
};