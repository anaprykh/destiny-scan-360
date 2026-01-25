import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import WhatYouGet from "@/components/WhatYouGet";
import MethodSection from "@/components/MethodSection";
import BookingForm from "@/components/BookingForm";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onBookClick={scrollToForm} />
      <WhatYouGet />
      <MethodSection />
      <BookingForm ref={formRef} />
      <FooterCTA />
    </main>
  );
};

export default Index;
