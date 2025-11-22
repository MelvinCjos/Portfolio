import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            © {currentYear} Melvin Chacko Jose. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
