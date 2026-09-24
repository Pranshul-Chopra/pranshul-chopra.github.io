"use client";

import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";
import { ArrowUpRight, CheckCircle2, FileText, ExternalLink, Github, Sparkles, Compass } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.68rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          FEATURED PRODUCT CASE STUDIES
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Diagnosis, Decisions &amp; Execution
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Deep dives into end-to-end product ownership, architectural trade-offs, and systems engineering from zero to production release.
        </p>
      </div>

      {/* Case Studies Stacked Cards */}
      <div className="space-y-12 sm:space-y-16">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="tapestry-card rounded-2xl sm:rounded-3xl border border-[#d4a843]/20 bg-[#0d1424]/95 overflow-hidden shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Left Column: PM Breakdown & Decisions */}
              <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#d4a843]/15">
                <div>
                  {/* Category & Number Flag */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-gold/15 border border-gold/30 text-gold-bright font-mono text-[0.68rem] font-bold uppercase tracking-wider">
                      {study.badge}
                    </span>
                    <span className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-500">
                      {study.number}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase text-sky tracking-wider block mb-2">
                    {study.category}
                  </span>

                  <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-gold-bright mb-6">
                    {study.tagline}
                  </p>

                  {/* The Problem / Diagnosis */}
                  <div className="p-4 rounded-xl tapestry-inner-box mb-6">
                    <span className="text-[0.65rem] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                      Problem Diagnosis &amp; Market Need
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-light">
                      {study.problem}
                    </p>
                  </div>

                  {/* Key PM Decisions & Trade-Offs */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-400 block">
                      Core Product Decisions &amp; Trade-offs
                    </span>
                    <div className="space-y-2.5">
                      {study.keyDecisions.map((kd, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-[#090d17]/80 border border-white/[0.08] text-xs font-mono space-y-1"
                        >
                          <div className="text-white font-bold flex items-center gap-1.5">
                            <span className="text-gold">✦</span>
                            <span>{kd.decision}</span>
                          </div>
                          <div className="text-zinc-400 text-[0.7rem] pl-4">
                            <span className="text-zinc-500">Trade-off:</span> {kd.tradeoff}
                          </div>
                          <div className="text-sky text-[0.7rem] pl-4">
                            <span className="text-zinc-500">Impact:</span> {kd.impact}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                  {study.links.caseStudy && (
                    <a
                      href={study.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-gold-bright transition-all shadow-md shadow-gold/20"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Read Case Study</span>
                    </a>
                  )}
                  {study.links.liveDemo && (
                    <a
                      href={study.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-xs font-mono font-semibold uppercase tracking-wider text-white transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-sky" />
                      <span>Live Product</span>
                    </a>
                  )}
                  {study.links.github && (
                    <a
                      href={study.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Systems Specs, Role & Metrics (No Image Placeholder) */}
              <div className="lg:col-span-5 bg-[#0a0f1a]/85 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Role Header Card */}
                  <div className="p-4 rounded-xl tapestry-inner-box mb-6">
                    <span className="text-[0.65rem] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                      Ownership &amp; Architecture Role
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-gold-bright font-bold">
                      {study.role}
                    </span>
                  </div>

                  {/* Active Exploration Callout if Applicable */}
                  {study.statusNote && (
                    <div className="p-4 rounded-xl bg-sky/5 border border-sky/25 mb-6 text-xs font-mono text-sky-200 leading-relaxed">
                      <div className="flex items-center gap-2 text-sky font-bold mb-1 uppercase tracking-wider text-[0.68rem]">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Research Status</span>
                      </div>
                      <p className="text-[0.72rem] text-zinc-300">{study.statusNote}</p>
                    </div>
                  )}

                  {/* Impact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl tapestry-inner-box"
                      >
                        <span className="font-cinzel text-lg sm:text-xl font-bold text-white block">
                          {m.value}
                        </span>
                        <span className="text-[0.65rem] font-mono text-gold uppercase tracking-wider">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills / Tags */}
                  <div className="space-y-2">
                    <span className="text-[0.65rem] font-mono text-zinc-500 uppercase tracking-widest block">
                      Execution Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[0.68rem] font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-right mt-6">
                  <span className="text-[0.68rem] font-mono text-zinc-500">
                    Timeframe: {study.timeframe}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
