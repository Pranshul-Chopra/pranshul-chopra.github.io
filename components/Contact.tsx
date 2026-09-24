"use client";

import { Mail, Linkedin, Github, FileText, ArrowRight, MapPin, Send } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative overflow-hidden">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090d17] border border-gold/30 text-xs font-mono text-gold mb-6">
        <span>LET'S CONNECT</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
        Let's build products that matter.
      </h2>

      <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
        Whether discussing product strategy, systems trade-offs, or new opportunities, I'd love to chat.
      </p>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
        <a
          href={`mailto:${PORTFOLIO_CONFIG.email}`}
          className="tapestry-card p-5 rounded-2xl flex flex-col justify-between group"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#090d17] border border-gold/25 text-gold flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
              Email
            </span>
            <span className="text-xs font-mono text-white truncate block">
              {PORTFOLIO_CONFIG.email}
            </span>
          </div>
          <span className="text-gold text-xs font-mono mt-3 inline-flex items-center gap-1">
            Send Email →
          </span>
        </a>

        <a
          href={PORTFOLIO_CONFIG.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="tapestry-card p-5 rounded-2xl flex flex-col justify-between group"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#090d17] border border-sky/25 text-sky flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
              LinkedIn
            </span>
            <span className="text-xs font-mono text-white block">
              Pranshul Chopra
            </span>
          </div>
          <span className="text-sky text-xs font-mono mt-3 inline-flex items-center gap-1">
            Connect →
          </span>
        </a>

        <a
          href={PORTFOLIO_CONFIG.github}
          target="_blank"
          rel="noopener noreferrer"
          className="tapestry-card p-5 rounded-2xl flex flex-col justify-between group"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#090d17] border border-white/15 text-zinc-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Github className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
              GitHub
            </span>
            <span className="text-xs font-mono text-white block">
              @Pranshul-Chopra
            </span>
          </div>
          <span className="text-gold text-xs font-mono mt-3 inline-flex items-center gap-1">
            Repositories →
          </span>
        </a>

        <a
          href={PORTFOLIO_CONFIG.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tapestry-card p-5 rounded-2xl flex flex-col justify-between group"
        >
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#090d17] border border-gold/30 text-gold-bright flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileText className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
              Resume
            </span>
            <span className="text-xs font-mono text-white block">
              View Adobe PDF
            </span>
          </div>
          <span className="text-gold-bright text-xs font-mono mt-3 inline-flex items-center gap-1">
            Open CV →
          </span>
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
        <MapPin className="w-3.5 h-3.5 text-gold" />
        <span>Manipal University Jaipur · Jaipur, Rajasthan, India</span>
      </div>
    </section>
  );
}
