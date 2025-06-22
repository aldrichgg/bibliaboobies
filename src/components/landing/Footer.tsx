import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-blue-100 border-t border-blue-200">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="https://bibliatecamapeada.com/wp-content/uploads/2025/01/Design-sem-nome-12-300x300.png"
                alt="God Is Good Logo"
                width={60}
                height={60}
              />
            </Link>
            <p className="text-sm text-gray-600">
              Tornando a Palavra de Deus acessível e divertida para todas as idades.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
             <h3 className="font-bold font-headline text-lg text-primary-dark">Contato e Suporte</h3>
             <a href="mailto:bibliatecamapeada@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-primary-dark transition-colors">
               <Mail className="h-5 w-5" />
               <span>bibliatecamapeada@gmail.com</span>
             </a>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold font-headline text-lg mb-4 text-primary-dark">Siga-nos nas redes</h3>
            <div className="flex space-x-4">
              <Button asChild variant="ghost" size="icon" className="text-pink-500 hover:bg-pink-100 rounded-full">
                <Link href="#" target="_blank" aria-label="WhatsApp">
                  <MessageCircle className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-pink-500 hover:bg-pink-100 rounded-full">
                <Link href="#" target="_blank" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>God Is Good © 2024 – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
