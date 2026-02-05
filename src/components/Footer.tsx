import { MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/18456078579"; // Replace with actual number
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
       <div className="mb-6 text-center">
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-semibold underline"
  >
    +1 (845) 607-8579
  </a>
</div>

          {/* CTA Block */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Готовы открыть для себя <span className="text-gold">сценарий вашего 2026 года</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              30-минутная консультация — только за <span className="text-gold font-semibold">€15</span>
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2 inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Свяжитесь в WhatsApp
            </a>
          </div>
          
          {/* Divider */}
          <div className="section-divider mb-8" />
          
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Евгения Иванова — Диагностика Жизни
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {2026} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
