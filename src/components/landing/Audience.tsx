import { CheckCircle2 } from 'lucide-react';

const audiencePoints = [
  {
    title: "Para quem valoriza princípios",
    description: "Em um mundo com tantas distrações, entende a importância de transmitir valores e princípios cristãos às crianças desde cedo, de forma didática, leve e eficiente."
  },
  {
    title: "Para quem quer dar vida à Bíblia",
    description: "De Gênesis a Apocalipse. Cada página é um convite para explorar a imaginação e meditar sobre os principais acontecimentos através dos 60 versículos relacionados ao tema."
  },
  {
    title: "Para pais, professores e líderes",
    description: "É pai/mãe, professor, pastor ou líder de ministério e deseja enriquecer e incentivar o conhecimento dos pequenos sobre a Palavra de forma lúdica, didática e ilustrada."
  }
];

export function Audience() {
  return (
    <section className="bg-blue-50 py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-dark">
            O <span className="text-yellow-500">God Is Good</span> é pra você que:
          </h2>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {audiencePoints.map((point) => (
            <div key={point.title} className="flex items-start space-x-4">
              <CheckCircle2 className="h-12 w-12 text-accent-foreground mt-1 shrink-0 bg-accent rounded-full p-2" />
              <div>
                <h3 className="text-xl font-bold font-headline text-primary-dark">{point.title}</h3>
                <p className="mt-2 text-gray-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
