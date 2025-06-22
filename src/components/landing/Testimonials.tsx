import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  { src: "https://bibliatecamapeada.com/wp-content/uploads/2024/05/D646AAEE-5108-44FD-8717-DACD26AC72B1-1-768x768.jpeg", alt: "Depoimento 1" },
  { src: "https://bibliatecamapeada.com/wp-content/uploads/2024/05/Feedback-BibliaTeca-3-1-768x768.png", alt: "Depoimento 2" },
  { src: "https://bibliatecamapeada.com/wp-content/uploads/2024/01/60DB653D-25DC-4E9E-B14A-80FBA94628D2-768x768.png", alt: "Depoimento 3" },
  { src: "https://bibliatecamapeada.com/wp-content/uploads/2024/01/83F35227-A068-4FC6-9E6F-BF4301BC0CB5-768x768.jpg", alt: "Depoimento 4" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center gap-1 text-yellow-500 mb-4">
            <Star fill="currentColor" className="w-8 h-8" />
            <Star fill="currentColor" className="w-8 h-8" />
            <Star fill="currentColor" className="w-8 h-8" />
            <Star fill="currentColor" className="w-8 h-8" />
            <Star fill="currentColor" className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-dark">
            Já recebemos + de 1.000 feedbacks de famílias <span className="text-pink-500">impactadas</span> pela nossa didática!
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Veja o que as famílias estão dizendo sobre essa experiência transformadora.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-[1/1]">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
