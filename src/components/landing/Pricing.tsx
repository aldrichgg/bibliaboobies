import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const includedFeatures = [
  'God Is Good - A Bíblia para colorir (60 desenhos)',
  'Bônus: Devocional Hábitos Vencedores',
  'Bônus: Guia de Cores Terapêuticas',
  'Bônus: Playlist para momentos de oração',
  'Bônus: Acesso à comunidade VIP',
  'Bônus: Marcadores de página temáticos',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container flex justify-center">
        <Card className="w-full max-w-lg shadow-2xl border-2 border-accent bg-card">
          <CardHeader className="text-center p-8">
            <CardDescription className="text-lg text-primary font-semibold">
              Apenas nesta página, você tem acesso ao
            </CardDescription>
            <CardTitle className="text-3xl font-headline text-primary">
              God Is Good - a Bíblia para colorir + 5 bônus exclusivos
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4 px-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary">6x de R$ 8,64</p>
              <p className="text-lg text-foreground/80">ou R$ 29,90 à vista!</p>
            </div>
            <ul className="w-full space-y-2 pt-4">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 p-8">
            <Button asChild size="lg" variant="accent" className="w-full text-lg h-14">
              <Link href="#">Quero dar vida à Bíblia!</Link>
            </Button>
            <p className="text-xs text-center text-muted-foreground pt-2">*condição especial de LANÇAMENTO, últimas vagas.</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
