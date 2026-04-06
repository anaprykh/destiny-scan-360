import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
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
      <section className="px-4 -mt-8 relative z-10">
  <div className="max-w-5xl mx-auto">
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 md:px-10 py-6 md:py-8">
      <p className="text-base md:text-xl text-white/85 leading-relaxed font-light text-center">
        Если вы оказались в сложной, запутанной или повторяющейся жизненной ситуации, важно сначала увидеть её истинную причину. Диагностика помогает понять, с чем вы действительно имеете дело
      </p>
    </div>
  </div>
</section>
      <BenefitsSection />
      <AboutSection />
      <LeadForm ref={formRef} />
      <Footer />
    </main>
  );
};

export default Index;
