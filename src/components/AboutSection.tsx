import evgeniaPortrait from "@/assets/evgenia-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 px-4 cosmic-bg">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-64 h-80 rounded-2xl overflow-hidden glow-gold">
                  <img 
                    src={evgeniaPortrait} 
                    alt="Evgenia Ivanova"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-3 border border-gold/20 rounded-2xl -z-10" />
              </div>
            </div>
            
            {/* Text */}
            <div className="text-center md:text-left">
              <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
                КТО Я 
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Евгения Иванова
              </h2>
              <p className="text-gold mb-6">Потомственная ясновидящая в четвёртом поколении</p>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Автор трёхуровневой системы диагностики жизни, основанной 
                  на древних эзотерических знаниях.
                </p>
                <p>
                  Специализируется на направлении жизни, энергетическом балансе, 
                  финансовых потоках и анализе судьбы.
                </p>
                <p>
                  Более 19 лет практики, помогая людям находить ясность
                  и направление в жизни.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
                <span className="px-4 py-2 rounded-full bg-gold/10 text-gold text-sm">
                  Жизненный путь
                </span>
                <span className="px-4 py-2 rounded-full bg-gold/10 text-gold text-sm">
                  Энергия и баланс
                </span>
                <span className="px-4 py-2 rounded-full bg-gold/10 text-gold text-sm">
                  Судьба и предназначение
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
