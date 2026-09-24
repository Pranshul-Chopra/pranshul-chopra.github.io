"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Github, Linkedin, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Decision Log", href: "#decisions" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0f1a]/95 border-b border-[#d4a843]/20 py-3.5 shadow-xl shadow-black/80"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Avatar */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/40">
              <img
                src="/pranshul.jpeg"
                alt="Pranshul Chopra"
                className="w-full h-full object-cover object-[10%_90%] group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-semibold text-base sm:text-lg tracking-wider text-white group-hover:text-gold transition-colors">
                Pranshul <span className="text-gold">Chopra</span>
              </span>
              <span className="text-[0.62rem] font-mono text-sky tracking-widest uppercase hidden sm:inline">
                Product Builder · Technical PM
              </span>
            </div>
          </Link>

          {/* Desktop Nav Destinations */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.14em] text-zinc-400 hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-sky/40 text-zinc-300 hover:text-sky transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold/40 text-zinc-300 hover:text-gold transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-zinc-950 bg-gold hover:bg-gold-bright transition-all duration-200 shadow-md shadow-gold/20 hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PORTFOLIO_CONFIG.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md text-[0.7rem] font-mono font-bold uppercase tracking-wider bg-gold text-zinc-950"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-zinc-400 hover:text-white rounded-lg border border-white/10 bg-white/[0.03]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#0a0f1a] border-t border-[#d4a843]/20 p-6 flex flex-col justify-between overflow-y-auto sm:hidden"
          >
            <div className="flex flex-col gap-2 pt-2">
              <div className="text-[0.68rem] font-mono uppercase tracking-widest text-sky mb-2">
                Product Portfolio Index
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium text-zinc-200 active:bg-white/10"
                >
                  <span>{link.name}</span>
                  <span className="text-gold text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a
                href={PORTFOLIO_CONFIG.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gold text-zinc-950 font-bold text-sm shadow-lg shadow-gold/25"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Curriculum Vitae</span>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-white"
                >
                  <Linkedin className="w-4 h-4 text-sky" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-white"
                >
                  <Github className="w-4 h-4 text-gold" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
