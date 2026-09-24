export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: { name: string; level: string; description: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Product Direction & Systems Strategy",
    subtitle: "Taking products from diagnosis to release",
    skills: [
      { name: "Product Discovery", level: "Core", description: "Identifying root friction versus superficial symptom requests." },
      { name: "Diagnosis & Metrics", level: "Core", description: "Instrumenting quantifiable operational criteria (latency, memory, retention)." },
      { name: "Scoping & Prioritisation", level: "Core", description: "Rigorous backlog scoping; knowing what NOT to build." },
      { name: "User Feedback Synthesis", level: "Core", description: "Translating ambiguous user complaints into actionable mental models." },
      { name: "Product Experimentation", level: "Practiced", description: "Validating user attachment and workflow patterns through iterative builds." },
      { name: "Threat Modeling & Security", level: "Practiced", description: "Transforming vulnerability audits into prioritized engineering specifications." },
    ],
  },
  {
    title: "Product Practice & Documentation",
    subtitle: "Clarity, alignment, and execution discipline",
    skills: [
      { name: "PRDs & FRDs", level: "Core", description: "High-density product requirement docs with unambiguous functional specs." },
      { name: "Acceptance Criteria", level: "Core", description: "Binary testable conditions for engineering handoff and sign-off." },
      { name: "User Flows & Edge Cases", level: "Core", description: "Mapping error states, offline fallbacks, and recovery paths." },
      { name: "Data Models & Schemas", level: "Practiced", description: "Designing relational tables (SQLite) matching domain entities." },
      { name: "Release Gates & QA", level: "Core", description: "Maintaining regression suites and release sign-off (105/105 tests)." },
      { name: "Technical Trade-offs", level: "Core", description: "Balancing distribution reliability, latency, and system complexity." },
    ],
  },
  {
    title: "Technical Fluency & AI Architecture",
    subtitle: "Deep understanding of implementation constraints",
    skills: [
      { name: "Local-First Architecture", level: "Advanced", description: "ACID SQLite persistence, optimization under constraints, on-device processing." },
      { name: "Context Engineering", level: "Advanced", description: "Multi-tier conversational memory (short-term, session, long-term)." },
      { name: "Electron & Desktop Shells", level: "Practiced", description: "Native windowing, background tray docking, local IPC bridges." },
      { name: "Python / Flask Daemons", level: "Advanced", description: "Local microservices binding strictly to localhost 127.0.0.1." },
      { name: "Local LLMs & Ollama", level: "Practiced", description: "On-device private inference, structured JSON output generation." },
      { name: "Hybrid Retrieval", level: "Practiced", description: "Balancing semantic search, recency, and BM25 token cost." },
    ],
  },
];
