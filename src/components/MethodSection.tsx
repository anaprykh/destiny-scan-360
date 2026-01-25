const MethodSection = () => {
  const levels = [
    { label: "External events", desc: "your year mapped month by month" },
    { label: "Inner personal code", desc: "palm reading and hidden blocks" },
    { label: "Hidden influences", desc: "energy, money, and people impact" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8">
          Three-Level Life Scan
        </h2>
        
        <div className="card-burgundy rounded-xl p-6 md:p-8">
          <ul className="space-y-4">
            {levels.map((level, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-gold font-serif text-lg font-medium w-6 flex-shrink-0">
                  {index + 1}.
                </span>
                <p className="text-foreground/90">
                  <span className="font-medium">{level.label}:</span>{" "}
                  <span className="text-muted-foreground">{level.desc}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default MethodSection;
