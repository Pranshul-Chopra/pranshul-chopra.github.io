"use client";

import { useState } from "react";
import { PRODUCT_DECISIONS, DecisionItem } from "@/data/decisions";
import { GitCommit, CheckCircle2, ArrowRight, ShieldCheck, Filter } from "lucide-react";

export function DecisionLog() {
  const [filter, setFilter] = useState<string>("all");

  const filteredDecisions =
    filter === "all"
      ? PRODUCT_DECISIONS
      : PRODUCT_DECISIONS.filter((d) => d.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="decisions" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.68rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          TRADE-OFFS &amp; GOVERNANCE
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Product Decision Log
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Real products require hard trade-offs. Here is the decision log documenting when, why, and how key architectural pivots were made.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: "all", label: "All Decisions (5)" },
            { id: "scoping", label: "Scoping & Scope Pruning" },
            { id: "architecture", label: "Stack & Distribution" },
            { id: "reliability", label: "Reliability & Security" },
            { id: "ux", label: "UX & Experimentation" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                filter === tab.id
                  ? "bg-gold text-zinc-950 font-bold border-gold shadow-md shadow-gold/20"
                  : "bg-navy-800 text-zinc-400 hover:text-white border-white/10 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Decision Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDecisions.map((dec) => (
          <div
            key={dec.id}
            className="tapestry-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-0.5 rounded bg-[#090d17] border border-sky/20 font-mono text-[0.65rem] text-sky font-semibold">
                  {dec.version}
                </span>
                <span className="font-mono text-xs text-gold uppercase tracking-wider">
                  {dec.category}
                </span>
              </div>

              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-3">
                {dec.title}
              </h3>

              {/* The Problem */}
              <div className="mb-4">
                <span className="text-[0.65rem] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                  Problem Context
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {dec.problem}
                </p>
              </div>

              {/* Alternatives Considered */}
              <div className="mb-4">
                <span className="text-[0.65rem] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                  Alternatives Evaluated
                </span>
                <ul className="space-y-1">
                  {dec.alternativesConsidered.map((alt, i) => (
                    <li key={i} className="text-[0.72rem] font-mono text-zinc-400 flex items-start gap-1.5">
                      <span className="text-zinc-600">•</span>
                      <span>{alt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chosen Path & Rationale */}
              <div className="p-3.5 rounded-xl tapestry-inner-box mb-4">
                <span className="text-[0.65rem] font-mono text-gold-bright uppercase tracking-widest block mb-0.5">
                  PM Rationale &amp; Decision
                </span>
                <p className="text-xs font-mono text-white mb-1.5 font-bold">
                  {dec.chosenPath}
                </p>
                <p className="text-[0.72rem] text-zinc-400 font-sans leading-relaxed">
                  {dec.rationale}
                </p>
              </div>
            </div>

            {/* Measured Outcome */}
            <div className="pt-4 border-t border-white/10 flex items-start gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Outcome: {dec.outcome}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
