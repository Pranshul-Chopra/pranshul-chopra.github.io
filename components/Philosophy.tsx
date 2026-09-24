"use client";

import { Compass, Target, ShieldCheck, Cpu, HardDrive } from "lucide-react";

export function Philosophy() {
  const principles = [
    {
      number: "01",
      title: "Diagnosis Before Features",
      tagline: "Uncover the user's underlying mental model.",
      desc: "Users rarely ask for the real root solution — they request patches for symptoms. In PranshulOS, observing users struggle with daily habits versus deadlines revealed two distinct psychological constructs, leading to the deliberate architectural separation of Routines from Tasks.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Ruthless Scoping & Pruning",
      tagline: "Great PMs know what to kill.",
      desc: "In v2.0, experimental LLM chat and screen vision were ballooning latency and cloud costs. I made the hard call to cut AI entirely to protect the core desktop promise. Once the foundation was rock-solid, AI returned in v2.4 — not as a generic chatbot, but as an actionable Plan Mode with 1-click execution cards.",
      icon: Target,
    },
    {
      number: "03",
      title: "Distribution Dictates Stack",
      tagline: "Installation reliability over developer comfort.",
      desc: "A product that crashes during installation doesn't exist to the user. When pywebview struggled with erratic Windows webview runtimes, I prioritized user onboarding over my familiarity with Python, migrating the entire frontend shell to Electron for deterministic distribution.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Optimization Under Constraints",
      tagline: "High-leverage engineering within bounded resources.",
      desc: "Every architectural choice carries strict trade-offs across RAM, disk I/O, offline availability, and user privacy. Rather than assuming unbounded cloud compute, I design systems that maximize user value under hard local constraints — balancing responsive performance, privacy boundaries, and rock-solid installation reliability.",
      icon: Cpu,
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.68rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          PRODUCT PHILOSOPHY &amp; APPROACH
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          How I Think About Products
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Product management is the disciplined practice of diagnosis, trade-offs, and relentless iteration. These four convictions govern every PRD and roadmap I build.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.number}
              className="tapestry-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#090d17] border border-[#d4a843]/20 flex items-center justify-center text-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-sky font-bold">
                    PRINCIPLE {p.number}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
                  {p.title}
                </h3>
                <p className="font-mono text-xs text-gold-bright mb-4">
                  {p.tagline}
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Domain: Technical Product Management</span>
                <span className="text-gold">Verified in Production</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
