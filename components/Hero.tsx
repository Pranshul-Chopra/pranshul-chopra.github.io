"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, ExternalLink } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/site";

export function Hero() {
  const metrics = [
    { label: "Product Ownership", value: "4 Months", sub: "Diagnosis to Release" },
    { label: "Release Quality Gate", value: "105 / 105", sub: "Tests Passing" },
    { label: "Memory Regression", value: "~400 MB", sub: "Diagnosed & Fixed" },
    { label: "Systems Architecture", value: "Under Constraints", sub: "Resource & Latency Bounds" },
  ];

  return (
    <section id="about" className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Main Avatar Card with Lore Antique Ring (Matching index.html) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mb-8"
      >
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto">
          {/* Concentric antique ring matching index.html avatar-ring */}
          <div className="absolute -inset-2 rounded-full border border-gold/25 pointer-events-none" />
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold/40 bg-navy-900 shadow-xl">
            <img
              src="/pranshul.jpeg"
              alt="Pranshul Chopra"
              className="w-full h-full object-cover object-[10%_90%]"
            />
          </div>
        </div>
      </motion.div>

      {/* Name & Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4">
          Pranshul <span className="text-gold">Chopra</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-sky mb-6">
          Product Builder · Systems Intuition &amp; Technical Fluency
        </p>

        {/* Filigree Accent Line */}
        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-6 opacity-60">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold text-xs font-cinzel">✦</span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
          Bridging user mental models with engineering reality. I take products from problem diagnosis and rigorous scoping through technical trade-offs to production release.
        </p>
      </motion.div>

      {/* Action CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto"
      >
        <a
          href={PORTFOLIO_CONFIG.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-zinc-950 bg-gold hover:bg-gold-bright transition-all duration-200 shadow-md border border-gold hover:scale-[1.02] active:scale-[0.98]"
        >
          <FileText className="w-4 h-4" />
          <span>Curriculum Vitae</span>
        </a>
        <a
          href="#case-studies"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider text-white bg-[#0e1525] hover:bg-[#141e35] border border-[#d4a843]/25 hover:border-gold/50 transition-all duration-200"
        >
          <span>Explore Case Studies</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
        </a>
        <a
          href={PORTFOLIO_CONFIG.pranshulOSLive}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider text-sky hover:text-white bg-[#0e172a] hover:bg-[#142340] border border-sky/25 hover:border-sky/50 transition-all"
        >
          <span>PranshulOS App</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      {/* PM Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full max-w-4xl mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-0.5">
              {m.value}
            </span>
            <span className="font-mono text-xs font-semibold text-gold tracking-wide uppercase">
              {m.label}
            </span>
            <span className="text-[0.68rem] text-zinc-400 font-mono mt-0.5">
              {m.sub}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
