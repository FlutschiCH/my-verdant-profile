import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Code } from 'lucide-react';

export const Coding = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-[calc(100vh-200px)] px-6 py-12"
    >
      <div className="glass p-8 rounded-3xl max-w-4xl w-full text-center">
        <Code className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-500 mb-6">
          My Python Coding Journey
        </h2>
        <p className="text-lg text-emerald-200 mb-8 leading-relaxed">
          As a passionate Python developer, I thrive on building efficient, scalable, and robust solutions. My expertise spans data analysis, automation, web development (with frameworks like FastAPI and Django), and crafting intricate algorithms for various applications.
        </p>
        <p className="text-md text-emerald-300 mb-8 leading-relaxed">
          I enjoy diving into new challenges, optimizing performance, and contributing to open-source projects.
        </p>
        <Button variant="primary" icon={Github} onClick={() => window.open('https://github.com/your-github', '_blank')}>
          View My GitHub
        </Button>
      </div>
    </motion.div>
  );
};