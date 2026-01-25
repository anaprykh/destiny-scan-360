import { Check, Map, Lightbulb, Shield, Compass } from "lucide-react";

const results = [
  { icon: Map, text: "A clear 12-month life trajectory" },
  { icon: Lightbulb, text: "Understanding of your inner mechanisms" },
  { icon: Shield, text: "Awareness of what blocks your energy, money, and stability" },
  { icon: Compass, text: "A sense of control and direction" }
];

const ResultSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              The Outcome
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Clarity You Can Rely On
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              After the diagnostics, you gain clarity you can rely on for the entire year.
            </p>
          </div>
          
          {/* Results grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {results.map((result, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border hover:border-gold/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <result.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-foreground">{result.text}</p>
              </div>
            ))}
          </div>
          
          {/* Quote block */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-gold/5 to-transparent border border-gold/10">
            <p className="text-xl md:text-2xl font-serif italic text-foreground/90">
              "It feels like the fog is gone and a clear map is switched on."
            </p>
          </div>
        </div>
      </div>
      
      <div className="section-divider mt-24 mx-auto max-w-4xl" />
    </section>
  );
};

export default ResultSection;
