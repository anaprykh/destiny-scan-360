import { Calendar, Zap, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Расклад Таро",
    description: "Расклад на фамильной колоде карт покажет, что сейчас происходит в вашей жизни, в каком состоянии находится ситуация, что скрыто от вас и к чему всё идёт дальше"
  },
  {
    icon: Zap,
    title: "Чтение по руке",
    description: "По линиям руки раскрывается, что заложено вам по судьбе, какие у вас сильные и слабые стороны, через какие жизненные повороты вы проходите и что несёт в себе ваш род"
  },
  {
    icon: Users,
    title: "Просмотр по фотографии",
    description: "По фотографии будет понятно ваше текущее состояние, есть ли на вас внешнее влияние, чужое воздействие, зависть, сглаз или другой негатив"
  },
  {
    icon: Clock,
    title: "Общий итог",
    description: "После этого всё складывается в одну картину, чтобы понять причину происходящего и увидеть дальнейшее направление"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Что Вы получите за <span className="text-gold">30 минут</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Как проходит диагностика
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
