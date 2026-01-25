import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import DiagnosticLevels from "@/components/DiagnosticLevels";
import ResultSection from "@/components/ResultSection";
import AboutSection from "@/components/AboutSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onBookClick={scrollToForm} />
      <BenefitsSection />
      <DiagnosticLevels />
      <ResultSection />
      <AboutSection />
      <LeadForm ref={formRef} />
      <Footer />
    </main>
  );
};

export default Index;
