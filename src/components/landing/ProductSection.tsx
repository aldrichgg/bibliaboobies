import Image from 'next/image';

export function ProductSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-96 lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group shadow-primary/20">
          <Image
            src="https://placehold.co/600x800.png"
            alt="God is Good Coloring Book"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="coloring book religious"
          />
        </div>
        <div className="flex flex-col items-start space-y-6">
          <p className="font-bold text-accent tracking-widest uppercase">A Solução Perfeita</p>
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            "Deixem vir a mim as crianças..."
          </h2>
          <p className="text-lg text-foreground/80 max-w-prose italic">
            Jesus nos ensinou a importância dos pequenos. Para te ajudar a ultrapassar as barreiras, criamos um material que vai mudar a forma como seu filho(a) enxerga a Bíblia!
          </p>
          <p className="text-lg text-foreground/80 max-w-prose">
            O <strong>God Is Good</strong> é a ponte entre a imaginação das crianças e as histórias sagradas. Cada página é um convite para explorar a fé e meditar nos versículos de forma lúdica e criativa.
          </p>
        </div>
      </div>
    </section>
  );
}
