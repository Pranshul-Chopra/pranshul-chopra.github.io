"use client";

import {
  FileText,
  Target,
  Users,
  ShieldAlert,
  CheckCircle,
  Database,
  Cpu,
  Workflow,
  Sparkles,
  Layers,
  Terminal,
  Activity,
} from "lucide-react";

export function PMPrimitivesMarquee() {
  const row1 = [
    { title: "PRDs & FRDs", desc: "Unambiguous Functional Specs", icon: FileText },
    { title: "Backlog Scoping", desc: "Value vs Effort Pruning", icon: Target },
    { title: "Mental Model Separation", desc: "Routines vs One-Off Tasks", icon: Users },
    { title: "Threat Modeling & Security", desc: "Audit Mitigations to Engineering Specs", icon: ShieldAlert },
    { title: "Release Quality Gates", desc: "105/105 Test Validation", icon: CheckCircle },
    { title: "Optimization Under Constraints", desc: "Resource & Latency Bounds", icon: Database },
    { title: "Context Window Optimization", desc: "Memory Decay & Gating", icon: Cpu },
    { title: "Product Experimentation", desc: "Iterative User Attachments", icon: Sparkles },
  ];

  const row2 = [
    { title: "pywebview → Electron", desc: "Distribution Reliability Pivot", icon: Workflow },
    { title: "RAM Leak Elimination", desc: "~400 MB Process Teardown", icon: Activity },
    { title: "Chibi Companion Layer", desc: "Contextual AI Agent Actions", icon: Sparkles },
    { title: "Deterministic Fallbacks", desc: "Slashing LLM Cost & Latency", icon: Terminal },
    { title: "Multi-Tier AI Memory", desc: "Short, Session & Long Term", icon: Layers },
    { title: "Zero Telemetry Promise", desc: "Machine-Only Privacy", icon: Database },
    { title: "1-Click DB Action Cards", desc: "Eliminating User Friction", icon: CheckCircle },
    { title: "Microsoft Store vs GitHub", desc: "Auto-Update Distribution", icon: FileText },
  ];

  return (
    <section className="py-12 border-y border-[#d4a843]/15 bg-[#0a0f1a]/85 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-[0.68rem] font-mono uppercase tracking-[0.25em] text-gold">
          PRODUCT MANAGEMENT COMPETENCIES &amp; SYSTEMS DECISIONS
        </p>
      </div>

      {/* Row 1 - Infinite Left */}
      <div className="relative w-full overflow-hidden flex mb-4">
        <div className="animate-marquee-infinite flex gap-4">
          {[...row1, ...row1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`r1-${idx}`}
                className="tapestry-card flex items-center gap-3.5 px-5 py-3 rounded-xl transition-colors shadow-sm shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-[#090d17] border border-[#d4a843]/20 flex items-center justify-center text-gold">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-wide text-zinc-100">
                    {item.title}
                  </span>
                  <span className="text-[0.65rem] font-mono text-sky/70">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 - Infinite Right */}
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee-infinite flex gap-4" style={{ animationDirection: "reverse" }}>
          {[...row2, ...row2].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`r2-${idx}`}
                className="tapestry-card flex items-center gap-3.5 px-5 py-3 rounded-xl transition-colors shadow-sm shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-[#090d17] border border-sky/20 flex items-center justify-center text-sky">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-wide text-zinc-100">
                    {item.title}
                  </span>
                  <span className="text-[0.65rem] font-mono text-zinc-400">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
