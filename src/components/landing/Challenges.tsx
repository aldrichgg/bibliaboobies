import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, HelpCircle, MessagesSquare } from 'lucide-react';

const challenges = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Estímulos tecnológicos",
    description: "Em um mundo dominado pelo entretenimento visual, a leitura da Bíblia pode parecer menos atrativa comparada a experiências mais dinâmicas.",
  },
  {
    icon: <HelpCircle className="h-8 w-8 text-primary" />,
    title: "Barreira de contexto",
    description: "As histórias bíblicas podem parecer distantes da realidade atual, dificultando o interesse em aprender sobre as Escrituras.",
  },
  {
    icon: <MessagesSquare className="h-8 w-8 text-primary" />,
    title: "Barreira linguística",
    description: "Termos e linguagens antigas dificultam a conexão e o entendimento dos pequenos sobre os reais ensinamentos da Palavra.",
  },
];

export function Challenges() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Tudo seria diferente se lêssemos a Bíblia para as crianças
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Se você não sabe como despertar o interesse dos pequenos pela Palavra, saiba que é mais comum do que você imagina. Existem algumas barreiras que dificultam essa conexão:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20 bg-card rounded-2xl">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  {challenge.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
