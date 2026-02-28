import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center"
    >
      <div className="glass p-8 rounded-3xl max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-500 mb-6">
          Hello, I'm a Python Enthusiast, Market Strategist, and Global Explorer.
        </h2>
        <p className="text-lg text-emerald-200 mb-8 leading-relaxed">
          Welcome to my personal space, where I share my passions for crafting elegant Python code, navigating the financial markets, and discovering the world's hidden gems. Dive in to learn more about my projects, insights, and adventures.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" onClick={() => window.location.href='/coding'}>
            Explore My Code <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="secondary" onClick={() => window.location.href='/trading'}>
            My Trading World
          </Button>
          <Button variant="glass" onClick={() => window.location.href='/travel'}>
            Travel Stories
          </Button>
        </div>
      </div>
    </motion.div>
  );
};