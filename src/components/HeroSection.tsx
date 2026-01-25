import { MessageCircle, Calendar } from "lucide-react";
import evgeniaPortrait from "@/assets/evgenia-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection = ({ onBookClick }: HeroSectionProps) => {
  const whatsappLink = "https://wa.me/380671556445"; // Replace with actual number

  return (
    <section 
      className="min-h-screen flex items-center py-20 px-4 relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Евгения Иванова
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Уникальная Диагностика Жизни 
              <span className="block gradient-gold-text">для 2026 года </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Что вас ожидает в 2026 году? — Индивидульный прогноз
            </p>
            
            <p className="text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Уже за 30 минут Вы поймете, что необходимо делать и что лучше избегать, чтобы достичь желаемых целей и обрести силы справиться со всеми препятствиями 
            </p>
            
            {/* Price */}
            <div className="mb-10">
              <div className="inline-flex items-baseline gap-3">
                <span className="text-muted-foreground line-through text-lg">€50</span>
                <span className="text-4xl font-serif font-bold text-gold">€15</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Специальная цена</p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onBookClick}
                className="btn-primary gap-2"
              >
                <Calendar className="w-5 h-5" />
                Забронировать Консультацию
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
              >
                <MessageCircle className="w-5 h-5" />
               Свяжитесь в WhatsApp
              </a>
            </div>
          </div>
          
          {/* Portrait Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden glow-gold">
                <img 
                  src={evgeniaPortrait} 
                  alt="Evgenia Ivanova - Life Diagnostics Expert"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/20 rounded-full animate-pulse-soft" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-gold/30 rounded-full animate-pulse-soft" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
