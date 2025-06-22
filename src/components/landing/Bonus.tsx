import Image from 'next/image';

export function Bonus() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start space-y-6">
          <p className="font-bold text-pink-500 tracking-widest uppercase">E não para por aí</p>
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-dark">
            Receba um <span className="text-pink-500">Presente</span> Para a Família
          </h2>
          <p className="text-lg text-gray-700 max-w-prose">
            Além do BíbliaTeca Mapeada, nós vamos te presentear com nosso pack de <strong>50 Devocionais Infantis</strong>.
          </p>
          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-600">
            “Não se amoldem ao padrão deste mundo, but transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.” – Romanos 12:2
          </blockquote>
        </div>
        <div className="relative w-full h-96 lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group shadow-blue-200/50">
          <Image
            src="https://static-media.hotmart.com/HSSe26yFZ6FS4hm3HIDA1VjxD0U=/300x300/filters:quality(100)/hotmart/product_pictures/5deae535-16bd-4d7e-a2ab-63398fb473bd/de200mapasmentais1.png"
            alt="50 Devocionais Infantis"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
