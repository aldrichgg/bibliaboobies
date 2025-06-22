import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-primary-dark">
          Tempo de qualidade com <span className="text-yellow-500">Deus</span> e em <span className="text-pink-500">família</span>.
        </h1>
        <p className="text-lg text-gray-700 max-w-prose">
          Inspirado no sucesso Bobbie Goods — um fenômeno que ganhou os lares com desenhos terapêuticos e acolhedores — nasceu o BíbliaTeca Mapeada: uma coleção cristã com 60 desenhos para colorir, do Antigo ao Novo Testamento.
        </p>
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold tracking-wider">
          <Link href="#pricing">QUERO DAR VIDA À BÍBLIA!</Link>
        </Button>
      </div>
      <div className="relative w-full h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/50 group">
        <Image
          src="https://bibliatecamapeada.com/wp-content/uploads/2025/05/MOCKUPS-48-768x543.png"
          alt="Família colorindo desenhos da Bíblia"
          fill
          data-ai-hint="coloring book"
          className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
