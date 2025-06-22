import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2 mr-4">
          <Image 
            src="https://bibliatecamapeada.com/wp-content/uploads/2025/01/Design-sem-nome-12-300x300.png"
            alt="BíbliaTeca Mapeada Logo"
            width={60}
            height={60}
          />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold tracking-wider shadow-lg animate-pulse">
              <Link href="#pricing">QUERO O MEU AGORA!</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
