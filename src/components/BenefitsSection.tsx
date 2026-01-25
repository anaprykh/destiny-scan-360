import { Calendar, Zap, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "12-Month Life Scenario",
    description: "Your complete life map with key turning points and decisive moments"
  },
  {
    icon: Zap,
    title: "Strengths & Weak Zones",
    description: "Understand your resources and vulnerabilities for the coming year"
  },
  {
    icon: Users,
    title: "Hidden Influences",
    description: "Discover who influences you and where energy and financial leaks occur"
  },
  {
    icon: Clock,
    title: "Perfect Timing",
    description: "Know when to act boldly and when it's better to pause and wait"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            What You Get in <span className="text-gold">30 Minutes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            In a single consultation, you will discover the complete picture of your year ahead
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-cosmic rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section-divider mt-24 mx-auto max-w-4xl" />
    </section>
  );
};

export default BenefitsSection;
