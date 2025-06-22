import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="bg-secondary">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8 py-16 text-center md:text-left">
        <ShieldCheck className="h-24 w-24 text-primary shrink-0" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary">
            Garantia BíbliaTeca Mapeada
          </h2>
          <p className="mt-2 text-lg text-foreground/80 max-w-2xl">
            Confiamos tanto na qualidade do nosso material, que estamos te oferecendo uma garantia de 7 dias! Caso não esteja totalmente satisfeito, dentro deste prazo, devolvemos 100% do seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
}
