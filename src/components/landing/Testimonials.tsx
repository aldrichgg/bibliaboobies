import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  { src: "https://placehold.co/400x500.png", alt: "Depoimento 1", hint: "child drawing happy" },
  { src: "https://placehold.co/400x500.png", alt: "Depoimento 2", hint: "family praying together" },
  { src: "https://placehold.co/400x500.png", alt: "Depoimento 3", hint: "child reading bible" },
  { src: "https://placehold.co/400x500.png", alt: "Depoimento 4", hint: "coloring page religious" },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            +1.000 famílias impactadas pela nossa didática!
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Veja o que as famílias estão dizendo sobre essa experiência transformadora.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={testimonial.hint}
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
