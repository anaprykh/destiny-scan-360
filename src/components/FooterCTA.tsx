import { MessageCircle } from "lucide-react";

const FooterCTA = () => {
  const whatsappLink = "https://wa.me/1234567890"; // Replace with actual number
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="container mx-auto text-center">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary gap-2 inline-flex mb-8"
        >
          <MessageCircle className="w-5 h-5" />
          Message on WhatsApp
        </a>
        
        <p className="text-sm text-muted-foreground">
          © {currentYear} Evgenia Ivanova — Life Diagnostics
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
