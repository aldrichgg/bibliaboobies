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
            Além do BíbliaTeca Mapeada, nós vamos te presentear com o nosso <strong>Devocional Hábitos Vencedores</strong>.
          </p>
          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-600">
            “Não se amoldem ao padrão deste mundo, but transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.” – Romanos 12:2
          </blockquote>
        </div>
        <div className="relative w-full h-96 lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group shadow-blue-200/50">
          <Image
            src="https://placehold.co/600x800.png"
            alt="Devocional Hábitos Vencedores"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="devotional book bible"
          />
        </div>
      </div>
    </section>
  );
}
