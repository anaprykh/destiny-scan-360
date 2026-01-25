import { MessageCircle, Calendar } from "lucide-react";
import evgeniaPortrait from "@/assets/evgenia-portrait.jpg";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection = ({ onBookClick }: HeroSectionProps) => {
  const whatsappLink = "https://wa.me/1234567890"; // Replace with actual number

  return (
    <section className="min-h-screen flex items-center py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-5">
              Life Diagnostics for 2026 —
              <span className="block gradient-gold-text">Complete Clarity in 30 Minutes</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
              A private 1-on-1 Esoteric Check-Up to understand your year, your energy, and your direction.
            </p>
            
            {/* Price */}
            <div className="mb-8">
              <p className="text-lg">
                30-minute consultation — <span className="text-gold font-bold text-2xl">€15</span>{" "}
                <span className="text-muted-foreground line-through">€50</span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onBookClick}
                className="btn-primary gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Consultation
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden glow-gold">
              <img 
                src={evgeniaPortrait} 
                alt="Evgenia Ivanova"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
