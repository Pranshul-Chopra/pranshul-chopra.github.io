"use client";

import { SKILL_CATEGORIES } from "@/data/skills";
import { CheckCircle2, Sparkles, Layers } from "lucide-react";

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.68rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          CORE CAPABILITIES &amp; FLUENCY
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Product &amp; Systems Toolkit
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          From high-level product discovery and PRDs down to schema design, edge cases, and deterministic execution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="tapestry-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="mb-6 pb-4 border-b border-[#d4a843]/15">
                <h3 className="font-cinzel text-xl font-bold text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs font-mono text-sky">
                  {cat.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="p-3 rounded-xl tapestry-inner-box">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-white">
                        {skill.name}
                      </span>
                      <span className="text-[0.62rem] font-mono px-2 py-0.5 rounded bg-gold/15 text-gold-bright border border-gold/25 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[0.72rem] text-zinc-400 leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <span className="text-[0.65rem] font-mono text-zinc-500">
                Verified through shipped systems
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
