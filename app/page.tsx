import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PMPrimitivesMarquee } from "@/components/PMPrimitivesMarquee";
import { Philosophy } from "@/components/Philosophy";
import { CaseStudies } from "@/components/CaseStudies";
import { DecisionLog } from "@/components/DecisionLog";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-zinc-100 relative selection:bg-gold/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section with Avatar, Status Pill & PM Metrics */}
      <Hero />

      {/* Infinite Product Management Competencies & Primitives Marquee */}
      <PMPrimitivesMarquee />

      {/* Product Philosophy: How I Think as a PM */}
      <Philosophy />

      {/* Featured PM Case Studies (PranshulOS, FLUIDCB, CIF) */}
      <CaseStudies />

      {/* Product Decision & Trade-offs Governance Log */}
      <DecisionLog />

      {/* Interactive PM, Documentation & Systems Skills Matrix */}
      <SkillsMatrix />

      {/* Contact Channels & Opportunities */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
