import Image from 'next/image';

export function ProductSection() {
  return (
    <section className="py-20 md:py-28 bg-pink-50">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-96 lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group shadow-pink-200/50">
          <Image
            src="https://bibliatecamapeada.com/wp-content/uploads/2025/02/MOCKUPS-23-2-1024x908.png"
            alt="God Is Good Coloring Book"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-start space-y-6">
          <p className="font-bold text-pink-500 tracking-widest uppercase">A Solução Perfeita</p>
          <blockquote className="text-2xl md:text-3xl font-bold font-headline text-primary-dark border-l-4 border-pink-300 pl-4">
            “Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas”.
            <cite className="block not-italic mt-2 text-xl font-semibold">- Jesus</cite>
          </blockquote>
          <p className="text-lg text-gray-700 max-w-prose">
            A melhor forma de ultrapassar estas barreiras é alcançando o coração delas! Para te ajudar, nós criamos um material que vai mudar a forma como seu filho(a) enxerga a Bíblia!
          </p>
        </div>
      </div>
    </section>
  );
}
