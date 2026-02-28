import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass w-full max-w-7xl px-6 py-3 rounded-3xl flex items-center justify-between tracking-tight font-semibold">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className="text-emerald-500 font-bold tracking-tight text-xl">
            Verdant Profile
          </span>
        </div>

        {/* Navigation Links - AI will likely add more here */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-sm font-semibold text-emerald-300 hover:text-emerald-500 transition-colors"
          >
            Home
          </a>
          <a
            href="/coding"
            className="text-sm font-semibold text-emerald-300 hover:text-emerald-500 transition-colors"
          >
            Coding
          </a>
          <a
            href="/trading"
            className="text-sm font-semibold text-emerald-300 hover:text-emerald-500 transition-colors"
          >
            Trading
          </a>
          <a
            href="/travel"
            className="text-sm font-semibold text-emerald-300 hover:text-emerald-500 transition-colors"
          >
            Travel
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold text-emerald-300 hover:text-emerald-500 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            variant="glass"
            className="hidden sm:flex border-none"
          >
            Connect
          </Button>
          <Button variant="primary">Say Hello</Button>
        </div>
      </div>
    </nav>
  );
};
