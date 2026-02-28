import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center p-6 mt-20">
      <div className="glass w-full max-w-7xl px-6 py-3 rounded-3xl flex flex-col md:flex-row items-center justify-between text-emerald-200 tracking-tight font-semibold text-sm">
        <p>&copy; {new Date().getFullYear()} Verdant Profile. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="/" className="hover:text-emerald-500 transition-colors">Home</a>
          <a href="/coding" className="hover:text-emerald-500 transition-colors">Coding</a>
          <a href="/trading" className="hover:text-emerald-500 transition-colors">Trading</a>
          <a href="/travel" className="hover:text-emerald-500 transition-colors">Travel</a>
          <a href="/contact" className="hover:text-emerald-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};