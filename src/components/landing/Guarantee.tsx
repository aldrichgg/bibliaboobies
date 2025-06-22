import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8 py-16 text-center md:text-left">
        <Image 
          src="https://bibliatecamapeada.com/wp-content/uploads/2023/10/Etiqueta-Selo-de-Garantia-30-Dias-Criativo-Dourado-300x300.png"
          alt="Selo de Garantia"
          width={120}
          height={120}
          className="shrink-0"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary-dark">
            Garantia BíbliaTeca Mapeada
          </h2>
          <p className="mt-2 text-lg text-gray-700 max-w-2xl">
            Confiamos tanto na qualidade do nosso material, que estamos te oferecendo uma garantia de 7 dias! Caso não esteja totalmente satisfeito, dentro deste prazo, devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
