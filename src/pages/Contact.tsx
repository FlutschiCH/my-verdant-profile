import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-[calc(100vh-200px)] px-6 py-12"
    >
      <div className="glass p-8 rounded-3xl max-w-4xl w-full text-center">
        <Mail className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-500 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-emerald-200 mb-8 leading-relaxed">
          Have a project idea, a trading strategy to discuss, or just want to chat about travel? Feel free to reach out! I'm always open to connecting with fellow enthusiasts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" icon={Mail} onClick={() => window.location.href='mailto:your.email@example.com'}>
            Email Me
          </Button>
          <Button variant="secondary" icon={Linkedin} onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}>
            LinkedIn
          </Button>
          <Button variant="glass" icon={Twitter} onClick={() => window.open('https://twitter.com/yourhandle', '_blank')}>
            Twitter
          </Button>
        </div>
      </div>
    </motion.div>
  );
};