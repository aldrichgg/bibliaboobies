'use client';

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = [
  'Ana', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena', 'Isabela', 'João',
  'Larissa', 'Miguel', 'Natália', 'Otávio', 'Patrícia', 'Rafael', 'Sofia', 'Thiago', 'Valentina', 'William'
];

const cities = [
  'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Salvador, BA', 'Fortaleza, CE', 'Brasília, DF',
  'Curitiba, PR', 'Manaus, AM', 'Recife, PE', 'Porto Alegre, RS', 'Goiânia, GO', 'Belém, PA', 'Florianópolis, SC',
  'Vitória, ES', 'Natal, RN', 'Cuiabá, MT', 'Campo Grande, MS', 'João Pessoa, PB', 'Maceió, AL', 'Aracaju, SE'
];

export function SalesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [purchase, setPurchase] = useState({ name: '', city: '' });

  useEffect(() => {
    const showRandomPurchase = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setPurchase({ name: randomName, city: randomCity });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Popup visible for 5 seconds
    };

    // Initial delay
    const initialTimeout = setTimeout(showRandomPurchase, 8000);

    // Subsequent popups
    const interval = setInterval(() => {
      showRandomPurchase();
    }, 15000); // New popup every 15 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 flex items-center gap-4 rounded-2xl border-2 border-primary/20 bg-card p-4 shadow-2xl shadow-primary/20 transition-all duration-500",
        "transform-gpu",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Sparkles className="h-6 w-6 text-primary" />
      </div>
      <div>
        <p className="font-bold text-primary-dark">{purchase.name} acabou de comprar!</p>
        <p className="text-sm text-gray-600">de {purchase.city}</p>
      </div>
    </div>
  );
}
