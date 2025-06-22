import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift } from 'lucide-react';

const includedFeatures = [
  'Acesso ao God Is Good (60 desenhos)',
  'Bônus: 50 Devocionais infantis',
  'Bônus: Acesso vitalício',
  'Bônus: Desenhos em alta resolução',
  'Bônus: Suporte exclusivo',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-blue-50">
      <div className="container flex justify-center">
        <Card className="w-full max-w-2xl shadow-2xl bg-white shadow-primary/20 rounded-3xl overflow-hidden border-4 border-primary/20">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl font-headline text-primary-dark">
                  Oferta Especial!
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-2">
                  Acesso completo e imediato a todo o material.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="w-full space-y-3">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-6 w-6 text-green-600 shrink-0 bg-green-100 rounded-full p-1" />
                      <span className={`text-gray-700 ${feature.startsWith('Bônus') ? 'font-semibold' : ''}`}>{feature.replace('Bônus: ', '').replace('Acesso ao God Is Good', 'God Is Good')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gradient-to-br from-yellow-100 to-pink-100">
                <Gift className="w-16 h-16 mx-auto text-yellow-500" />
                <div className="text-center w-full">
                  <p className="text-base text-gray-700">Acesso ao God Is Good - a Bíblia para colorir + 5 bônus exclusivos por apenas:</p>
                  <p className="text-5xl font-bold text-primary-dark font-headline my-2">R$ 29,90</p>
                  <p className="text-lg text-gray-700 font-semibold">ou 6x de R$ 8,64</p>
                </div>
                <Button asChild size="lg" className="w-full text-lg h-16 bg-green-500 hover:bg-green-600 text-white font-bold tracking-wider">
                  <Link href="https://pay.kirvano.com/5f30f347-3bd4-4900-8d37-21b93a049048">Quero dar vida à Bíblia!</Link>
                </Button>
                <p className="text-xs text-center text-gray-500 pt-2">*condição especial de LANÇAMENTO, últimas vagas.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
