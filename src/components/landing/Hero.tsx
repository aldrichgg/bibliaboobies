import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
          Tempo de qualidade com Deus e em família.
        </h1>
        <p className="text-lg text-foreground/80 max-w-prose">
          Inspirado no sucesso Bobbie Goods — um fenômeno que ganhou os lares com desenhos terapêuticos e acolhedores — nasceu o God Is Good: uma coleção cristã com 60 desenhos para colorir, do Antigo ao Novo Testamento.
        </p>
        <Button asChild size="lg" variant="accent" className="text-lg">
          <Link href="#pricing">Quero dar vida à Bíblia!</Link>
        </Button>
      </div>
      <div className="relative w-full h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="https://placehold.co/800x600.png"
          alt="Família colorindo desenhos da Bíblia"
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
          data-ai-hint="family coloring bible"
        />
      </div>
    </section>
  );
}
