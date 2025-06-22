import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift } from 'lucide-react';

const includedFeatures = [
  'Acesso ao BíbliaTeca Mapeada - A Bíblia para colorir (60 desenhos)',
  'Bônus: Devocional Hábitos Vencedores',
  'Bônus: Guia de Cores Terapêuticas',
  'Bônus: Playlist para momentos de oração',
  'Bônus: Acesso à comunidade VIP',
  'Bônus: Marcadores de página temáticos',
  'Bônus: Acesso vitalício ao material',
  'Bônus: Desenhos em alta resolução para impressão',
  'Bônus: Suporte exclusivo para tirar dúvidas',
  'Bônus Extra: 10 Desenhos Adicionais de Páscoa',
  'Bônus Extra: 10 Desenhos Adicionais de Natal',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-blue-50">
      <div className="container flex justify-center">
        <Card className="w-full max-w-lg shadow-2xl border-4 border-yellow-400 bg-white shadow-yellow-200/50 rounded-3xl">
          <CardHeader className="text-center p-8">
            <Gift className="w-16 h-16 mx-auto text-yellow-500 animate-pulse" />
            <CardTitle className="text-3xl font-headline text-primary-dark mt-4">
              Oferta Especial de Lançamento
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Acesso completo ao <span className="font-bold text-pink-500">BíbliaTeca Mapeada</span> + 10 Bônus Exclusivos
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4 px-8">
            <div className="text-center bg-yellow-100 rounded-2xl p-6 w-full border-2 border-dashed border-yellow-400">
              <p className="text-xl text-gray-600 line-through">De R$ 97,00 por apenas</p>
              <p className="text-5xl font-bold text-primary-dark font-headline">12x de R$ 4,99</p>
              <p className="text-lg text-gray-700 mt-1">ou R$ 49,90 à vista!</p>
            </div>
            <ul className="w-full space-y-3 pt-4">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-500 shrink-0 bg-green-100 rounded-full p-1" />
                  <span className="text-gray-700">{feature.startsWith('Bônus Extra') ? <strong>{feature}</strong> : feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 p-8">
            <Button asChild size="lg" className="w-full text-lg h-16 bg-green-500 hover:bg-green-600 text-white font-bold tracking-wider shadow-lg animate-pulse">
              <Link href="#">QUERO GARANTIR MINHA VAGA!</Link>
            </Button>
            <p className="text-xs text-center text-gray-500 pt-2">*Vagas limitadas com preço promocional.</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
