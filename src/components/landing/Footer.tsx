import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, MessageCircle, Heart } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="flex items-center space-x-2 self-center md:self-start">
              <Image 
                src="https://bibliatecamapeada.com/wp-content/uploads/2025/01/Design-sem-nome-12-300x300.png"
                alt="God Is Good Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="font-headline text-2xl font-bold text-primary">God Is Good</span>
            </Link>
            <p className="text-sm text-foreground/80 max-w-xs">
              Tornando a Palavra de Deus acessível e divertida para todas as idades.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-headline text-xl font-bold text-primary">Navegação</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Oferta</Link></li>
              <li><Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Depoimentos</Link></li>
              <li><Link href="#faq" className="text-foreground/80 hover:text-primary transition-colors">Dúvidas</Link></li>
              <li><Link href="#guarantee" className="text-foreground/80 hover:text-primary transition-colors">Garantia</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-headline text-xl font-bold text-primary">Contato e Redes</h3>
             <a href="mailto:bibliatecamapeada@gmail.com" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
               <Mail className="h-5 w-5" />
               <span>bibliatecamapeada@gmail.com</span>
             </a>
             <div className="flex space-x-2 pt-2">
               <Button asChild variant="outline" size="icon" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                 <Link href="#" target="_blank" aria-label="WhatsApp">
                   <MessageCircle className="h-6 w-6" />
                 </Link>
               </Button>
               <Button asChild variant="outline" size="icon" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                 <Link href="#" target="_blank" aria-label="Instagram">
                   <Instagram className="h-6 w-6" />
                 </Link>
               </Button>
             </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-foreground/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>God Is Good © 2024 – Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="w-4 h-4 text-primary" fill="currentColor" /> pela equipe God Is Good.
          </p>
        </div>
      </div>
    </footer>
  );
}
