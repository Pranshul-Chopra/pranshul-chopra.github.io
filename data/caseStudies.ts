export interface CaseStudy {
  id: string;
  number: string;
  badge: string;
  category: string;
  title: string;
  tagline: string;
  problem: string;
  role: string;
  timeframe: string;
  statusNote?: string;
  keyDecisions: {
    decision: string;
    tradeoff: string;
    impact: string;
  }[];
  metrics: { label: string; value: string }[];
  tags: string[];
  links: {
    caseStudy?: string;
    liveDemo?: string;
    github?: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "pranshulos",
    number: "01",
    badge: "FLAGSHIP PRODUCT",
    category: "Product Ownership · Systems Architecture · v1.0 → v2.4.5",
    title: "PranshulOS",
    tagline: "Local-First Windows Productivity Environment",
    problem:
      "Users suffer severe cognitive fragmentation switching between 5+ cloud SaaS tabs (Notion, Todoist, Calendars). Cloud latency, mandatory logins, subscription walls, and tracking degrade daily deep focus.",
    role: "Solo Product Owner & Systems Builder",
    timeframe: "4 Months (Active Backlog & Release Gates)",
    keyDecisions: [
      {
        decision: "Zero-Account Local-First Positioning",
        tradeoff: "Explicitly kept cloud sync and multi-user collaboration out of scope.",
        impact: "Guaranteed offline availability, sub-millisecond SQLite queries, and machine-level data isolation.",
      },
      {
        decision: "Ruthless Scope Pruning (v2.0 AI Cut → v2.4 Chibi Reintroduction)",
        tradeoff: "Cut LLM + Screen Assist in v2.0 after identifying scope bloat; reintroduced as contextual layer in v2.4.",
        impact: "Preserved a lightweight desktop core, then launched 1-Click Action Cards with direct SQLite apply.",
      },
      {
        decision: "Stack Reliability Pivot (pywebview → Electron in v2.1)",
        tradeoff: "Prioritised installation reliability over Python stack familiarity.",
        impact: "Eliminated repeated Windows distribution failures and unlocked 60 FPS node-graph rendering.",
      },
      {
        decision: "Mental Model Separation (Routines vs Tasks)",
        tradeoff: "Separated daily recurring habits from one-off tasks based on user feedback.",
        impact: "Aligned workspace architecture with distinct psychological commitments and habit tracking.",
      },
    ],
    metrics: [
      { label: "Release Tests Passed", value: "105 / 105" },
      { label: "RAM Regression Fixed", value: "~400 MB saved" },
      { label: "Architecture", value: "Local-First Isolation" },
      { label: "Product Iteration", value: "v1.0 → v2.4.5" },
    ],
    tags: ["Product Discovery", "PRDs / FRDs", "Backlog Scoping", "Electron", "Flask", "SQLite"],
    links: {
      caseStudy: "https://pranshul-chopra.github.io/PranshulOS-Case-Study/",
      liveDemo: "https://pranshulos.vercel.app",
      github: "https://github.com/Pranshul-Chopra/PranshulOS-",
    },
  },
  {
    id: "fluidcb",
    number: "02",
    badge: "AI PRODUCT ARCHITECTURE",
    category: "Context Infrastructure · Prompt Engineering · Memory Systems",
    title: "FLUIDCB",
    tagline: "Experimental Conversational AI System",
    problem:
      "Modern multi-turn LLMs suffer from severe context window explosion, hallucination, context drift, and expensive latency when forced to re-read entire conversation histories on every turn.",
    role: "AI Product Architect & Systems Designer",
    timeframe: "Iterative Experimental System",
    keyDecisions: [
      {
        decision: "Multi-Tier Memory Architecture",
        tradeoff: "Separated memory into short-term, session, and long-term context with decay curves.",
        impact: "Maintained continuity without bloating context windows, tracking confidence and contradictions.",
      },
      {
        decision: "Cost & Latency Optimization Pipeline",
        tradeoff: "Replaced unstructured LLM calls with deterministic intent logic and gated summarisation.",
        impact: "Drastically reduced token burn and latency on repeated routine queries.",
      },
      {
        decision: "Hybrid Retrieval Engine",
        tradeoff: "Blended semantic vector similarity, recency weighting, and BM25 experiments.",
        impact: "Balanced retrieval relevance against context-window token expenditure.",
      },
    ],
    metrics: [
      { label: "Memory Retention", value: "Multi-Tier" },
      { label: "Cost Optimization", value: "Gated Calls" },
      { label: "Inference Mode", value: "Local LLMs" },
    ],
    tags: ["Context Engineering", "Multi-Tier Memory", "Local LLMs", "Hybrid Retrieval", "Cost Optimization"],
    links: {
      github: "https://github.com/Pranshul-Chopra",
    },
  },
  {
    id: "cif",
    number: "03",
    badge: "ACTIVE EXPLORATION",
    category: "Research in Progress · Conceptual Evaluation Proposal",
    title: "Context Integrity Framework (CIF)",
    tagline: "Architectural Proposal & Evaluation Methodology",
    problem:
      "Teams lack a rigorous methodology to benchmark whether an LLM system maintains conversational continuity, constraint adherence, and goal stability across dozens of user turns.",
    role: "Author & Architectural Researcher",
    timeframe: "Ongoing Conceptual Exploration",
    statusNote:
      "Active research exploration and proposed evaluation methodology — does not make commercial claims or production guarantees.",
    keyDecisions: [
      {
        decision: "4-Pillar Evaluation Methodology",
        tradeoff: "Proposed comprehensive metrics instead of simple single-turn accuracy benchmarks.",
        impact: "Formulates theoretical dimensions for constraint persistence, decision stability, goal coherence, and token efficiency.",
      },
      {
        decision: "Structured State Management",
        tradeoff: "Mandates explicit state trees over raw chat transcript concatenation.",
        impact: "Enables programmatic validation of agent alignment across extended dialog flows.",
      },
    ],
    metrics: [
      { label: "Status", value: "Exploring" },
      { label: "Benchmark Dimensions", value: "4 Pillars" },
      { label: "Focus Area", value: "Continuity & Cost" },
    ],
    tags: ["Active Exploration", "Systems Research", "Benchmark Design", "Constraint Persistence"],
    links: {
      github: "https://github.com/Pranshul-Chopra",
    },
  },
];
