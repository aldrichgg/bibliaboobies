import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-xl">BíbliaTeca Mapeada</span>
            </Link>
            <p className="text-sm text-foreground/70">
              Tornando a Palavra de Deus acessível e divertida para todas as idades.
            </p>
          </div>
          <div className="flex flex-col items-center">
             <h3 className="font-bold font-headline text-lg mb-4 text-primary">Contato</h3>
             <p className="text-foreground/70">Ainda restou alguma dúvida?</p>
             <p className="text-foreground/70">Entre em contato com a nossa equipe:</p>
             <a href="mailto:bibliatecamapeada@gmail.com" className="font-bold text-primary hover:underline mt-1">
               bibliatecamapeada@gmail.com
             </a>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold font-headline text-lg mb-4 text-primary">Siga-nos</h3>
            <div className="flex space-x-4">
              <Button asChild variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Link href="#" target="_blank" aria-label="WhatsApp">
                  <MessageCircle className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Link href="#" target="_blank" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-foreground/60">
          <p>BíbliaTeca Mapeada © 2024 – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
