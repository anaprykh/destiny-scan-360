import { MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/1234567890"; // Replace with actual number
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Block */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Ready to discover your <span className="text-gold">2026 life map</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              30-minute consultation — just <span className="text-gold font-semibold">€15</span>
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2 inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </div>
          
          {/* Divider */}
          <div className="section-divider mb-8" />
          
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Evgenia Ivanova — Life Diagnostics
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
