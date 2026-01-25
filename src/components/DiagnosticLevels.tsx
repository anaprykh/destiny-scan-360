import { Star, Heart, Eye } from "lucide-react";

const levels = [
  {
    number: "01",
    icon: Star,
    title: "External Events",
    subtitle: "12-Month Forecast",
    items: [
      "Monthly life map with clear milestones",
      "Key moments when destiny changes direction",
      "Growth periods and unstable phases",
      "Money cycles and opportunity windows"
    ]
  },
  {
    number: "02",
    icon: Heart,
    title: "Inner Personal Code",
    subtitle: "Palm Reading",
    items: [
      "Inborn potential and hidden resources",
      "True reasons behind repeating problems",
      "Emotional and financial blocks",
      "Personality weak points you may not be aware of"
    ]
  },
  {
    number: "03",
    icon: Eye,
    title: "Hidden Influences",
    subtitle: "Photo Analysis",
    items: [
      "Energy and money leaks in your field",
      "Influence of people and environment",
      "Hidden conflicts and external pressure",
      "Current energetic state assessment"
    ]
  }
];

const DiagnosticLevels = () => {
  return (
    <section className="py-24 px-4 relative cosmic-bg">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            The Method
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Three-Level Diagnostic System
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete life scan combining three powerful perspectives into one unified analysis
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="card-cosmic rounded-2xl p-8 h-full hover:border-gold/30 transition-all duration-300">
                {/* Level number */}
                <span className="absolute top-6 right-6 text-5xl font-serif text-gold/10 group-hover:text-gold/20 transition-colors">
                  {level.number}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <level.icon className="w-7 h-7 text-gold" />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold mb-2">{level.title}</h3>
                <p className="text-gold text-sm mb-6">{level.subtitle}</p>
                
                {/* Items */}
                <ul className="space-y-3">
                  {level.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connector line */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticLevels;
