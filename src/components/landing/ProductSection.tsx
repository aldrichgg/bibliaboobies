import Image from 'next/image';

export function ProductSection() {
  return (
    <section className="py-20 md:py-28 bg-pink-50">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-96 lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group shadow-pink-200/50">
          <Image
            src="https://bibliatecamapeada.com/wp-content/uploads/2025/02/MOCKUPS-23-2-1024x908.png"
            alt="BíbliaTeca Mapeada Coloring Book"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-start space-y-6">
          <p className="font-bold text-pink-500 tracking-widest uppercase">A Solução Perfeita</p>
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-dark">
            "Deixem vir a mim as <span className="text-pink-500">crianças...</span>"
          </h2>
          <p className="text-lg text-gray-700 max-w-prose italic">
            Jesus nos ensinou a importância dos pequenos. Para te ajudar a ultrapassar as barreiras, criamos um material que vai mudar a forma como seu filho(a) enxerga a Bíblia!
          </p>
          <p className="text-lg text-gray-700 max-w-prose">
            O <strong>BíbliaTeca Mapeada</strong> é a ponte entre a imaginação das crianças e as histórias sagradas. Cada página é um convite para explorar a fé e meditar nos versículos de forma lúdica e criativa.
          </p>
        </div>
      </div>
    </section>
  );
}
