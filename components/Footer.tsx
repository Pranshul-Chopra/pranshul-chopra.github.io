"use client";

import { ArrowUp, Heart } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#d4a843]/15 bg-[#070b13] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-cinzel text-base font-semibold text-white">
            Pranshul <span className="text-gold">Chopra</span>
          </span>
          <p className="text-xs text-zinc-400 mt-1 font-mono">
            Product Builder &middot; Systems Thinker &middot; B.Tech CSE @ MUJ
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <a
            href={PORTFOLIO_CONFIG.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Curriculum Vitae
          </a>
          <a
            href={PORTFOLIO_CONFIG.pranshulOSCaseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky transition-colors"
          >
            PranshulOS Case Study
          </a>
          <a
            href={PORTFOLIO_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PORTFOLIO_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs font-mono text-zinc-500">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-gold transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/10"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span>© 2026 Pranshul Chopra. Built with craft &amp; conviction.</span>
        </div>
      </div>
    </footer>
  );
}
