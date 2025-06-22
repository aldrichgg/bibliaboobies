import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como vou receber o material?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link para download do seu material em PDF, pronto para imprimir e colorir."
  },
  {
    question: "Para qual idade é recomendado?",
    answer: "Para pais e filhos de todas as idades. As ilustrações são desenvolvidas para serem apreciadas por crianças, enquanto os versículos e temas proporcionam reflexão para jovens e adultos."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! O material é seu para sempre. Você pode imprimir os desenhos quantas vezes desejar para uso pessoal e em família."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos pagamentos via Cartão de Crédito, PIX e Boleto Bancário. O pagamento é processado em um ambiente 100% seguro."
  }
]

export function Faq() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Ainda restou alguma dúvida?
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg font-headline hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <p className="text-lg text-foreground/80">
            Entre em contato com a nossa equipe e esclarecemos tudo pra você: <a href="mailto:bibliatecamapeada@gmail.com" className="font-semibold text-primary hover:underline">bibliatecamapeada@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
