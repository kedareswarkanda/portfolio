import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubSection from "@/components/GithubSection";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import AskKedareswarAI from "@/components/AskKedareswarAI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Sections Stack */}
      <main className="flex-1 flex flex-col">
        {/* Fullscreen Hero Particle Deck */}
        <Hero />

        {/* Storytelling & Profile Grid */}
        <About />

        {/* Interactive Vertical Timeline */}
        <Journey />

        {/* Capability Matrix & Tabs */}
        <Skills />

        {/* Problems & Solutions projects showcase */}
        <Projects />

        {/* Git Open Source Contribution Monitor */}
        <GithubSection />

        {/* Professional career timeline */}
        <Experience />

        {/* National wins & peer publications counters */}
        <Achievements />

        {/* Checked licenses list */}
        <Certifications />

        {/* Secure SMTP Socket form & channels */}
        <Contact />
      </main>

      {/* AI Assistant Cloning Widget */}
      <AskKedareswarAI />

      {/* Footer & hits telemetry counter */}
      <Footer />
    </>
  );
}
