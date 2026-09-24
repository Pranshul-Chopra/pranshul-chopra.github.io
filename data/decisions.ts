export interface DecisionItem {
  id: string;
  version: string;
  title: string;
  category: "Scoping" | "Architecture" | "Reliability" | "UX & Distribution";
  problem: string;
  alternativesConsidered: string[];
  chosenPath: string;
  rationale: string;
  outcome: string;
}

export const PRODUCT_DECISIONS: DecisionItem[] = [
  {
    id: "electron-pivot",
    version: "v2.1",
    title: "pywebview → Electron Architecture Migration",
    category: "Architecture",
    problem:
      "Repeated distribution and rendering crashes on various Windows builds due to erratic native webview runtimes.",
    alternativesConsidered: [
      "Persisting with pywebview and patching Windows registry dependencies",
      "Switching to PyQt / PySide QWebEngine (heavy binary footprint)",
      "Adopting Electron for unified, deterministic Chromium runtime",
    ],
    chosenPath: "Replaced pywebview with Electron as the native shell.",
    rationale:
      "Installation reliability on the user's desktop takes priority over developer stack familiarity.",
    outcome:
      "Zero distribution runtime crashes across Windows 10/11; unlocked 60 FPS hardware-accelerated canvas for Blueprints.",
  },
  {
    id: "ai-scope-reset",
    version: "v2.0",
    title: "Pruning AI Chat & Screen Assist to Protect Core Positioning",
    category: "Scoping",
    problem:
      "Experimental LLM chat and screen vision expanded product scope into a sluggish, unfocused AI playground.",
    alternativesConsidered: [
      "Keeping AI chat pinned in the sidebar",
      "Complete removal of AI to reset focus around local-first productivity",
    ],
    chosenPath: "Cut LLM + Screen Assist entirely in v2.0.",
    rationale:
      "A productivity shell must excel at deterministic task execution before introducing stochastic AI interfaces.",
    outcome:
      "Sub-millisecond latency restored; later enabled reintroducing AI in v2.4 as an actionable Plan Mode layer rather than a generic chatbot.",
  },
  {
    id: "chibi-experiment",
    version: "v2.2 → v2.4",
    title: "Chibi: From User-Attachment Experiment to Contextual Agent",
    category: "UX & Distribution",
    problem:
      "Users abandoned routine trackers after 3–5 days due to lack of emotional reinforcement or tangible feedback.",
    alternativesConsidered: [
      "Standard notification badges and email reminders",
      "Persistent desktop character mascot with reactive physics celebrations",
    ],
    chosenPath: "Designed Chibi as an emotional attachment experiment, progressively evolving into an AI execution hub.",
    rationale:
      "Gamified, contextual micro-interactions build durable daily habits faster than sterile corporate dashboards.",
    outcome:
      "High user retention; Chibi evolved into Plan Mode with 1-click execution cards modifying SQLite tables.",
  },
  {
    id: "ram-leak-fix",
    version: "v2.3.2",
    title: "Diagnosing & Eliminating ~400 MB-per-launch RAM Regression",
    category: "Reliability",
    problem:
      "Testers reported gradual memory ballooning (~400 MB per app session) causing fan spin on lightweight laptops.",
    alternativesConsidered: [
      "Periodic background process restarts",
      "Root-cause memory profiling to identify process zombie leaks",
    ],
    chosenPath: "Traced repeated browser-process creation in child webviews and fixed lifecycle teardown.",
    rationale:
      "A background productivity OS must maintain a whisper-quiet hardware footprint (<120 MB idle).",
    outcome:
      "RAM usage capped below 110 MB; validated through continuous regression testing.",
  },
  {
    id: "security-audit",
    version: "v2.4.0",
    title: "Security Audit Mitigations into Engineering Specs",
    category: "Reliability",
    problem:
      "Security audit identified vulnerabilities across stored XSS, URL validation, CSRF, and path traversal in local server endpoints.",
    alternativesConsidered: [
      "Relying on localhost IP binding as sole security boundary",
      "Comprehensive validation layer with strict payload bounds and sanitized IPC",
    ],
    chosenPath: "Converted all external audit findings into explicit prioritized engineering requirements and implemented sanitization.",
    rationale:
      "Local-first software makes a sacred promise of machine privacy; local endpoints must be hardened against malicious web payloads.",
    outcome:
      "All vulnerabilities patched; 105/105 automated release gate tests passing.",
  },
];
