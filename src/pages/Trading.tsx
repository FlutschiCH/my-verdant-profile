import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign } from 'lucide-react';

export const Trading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-[calc(100vh-200px)] px-6 py-12"
    >
      <div className="glass p-8 rounded-3xl max-w-4xl w-full text-center">
        <TrendingUp className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-500 mb-6">
          Navigating the Markets: My Trading Insights
        </h2>
        <p className="text-lg text-emerald-200 mb-8 leading-relaxed">
          With a keen interest in financial markets, I combine technical analysis with fundamental understanding to develop and execute trading strategies. My focus includes algorithmic trading, risk management, and identifying opportunities across various asset classes.
        </p>
        <p className="text-md text-emerald-300 mb-8 leading-relaxed">
          I believe in data-driven decisions and continuous learning to adapt to ever-changing market conditions.
        </p>
        <Button variant="primary" icon={DollarSign} onClick={() => alert('Trading insights coming soon!')}>
          Learn About My Strategies
        </Button>
      </div>
    </motion.div>
  );
};