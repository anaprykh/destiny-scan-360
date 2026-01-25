const WhatYouGet = () => {
  const items = [
    "Your 12-month life trajectory with key turning points",
    "Where your energy and money leak",
    "Who and what influences your results",
    "When to act and when to pause"
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="section-divider mb-16" />
        
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8">
          In one 30-minute session, you will clearly understand:
        </h2>
        
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 text-lg">
              <span className="w-2 h-2 rounded-full bg-gold mt-2.5 flex-shrink-0" />
              <span className="text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default WhatYouGet;
