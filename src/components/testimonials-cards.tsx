"use client";

import DisplayCards from "@/components/ui/display-cards";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function TestimonialsCards() {
  const testimonials = [
    {
      icon: <Star className="size-5 text-primary fill-current" />,
      title: "Lucas M.",
      meta: "Chalés do Sol",
      description: "A entrega foi surpreendente. Minha IA atende os clientes no WhatsApp com uma naturalidade que eu não esperava. As reservas estão vindo sozinhas.",
      date: "Há 1 semana",
      className: "[grid-area:stack] hover:-translate-y-28 transition-all duration-700 before:absolute before:inset-0 before:rounded-2xl before:bg-white/60 grayscale hover:grayscale-0 before:transition-all hover:before:opacity-0 pointer-events-auto",
    },
    {
      icon: <Star className="size-5 text-primary fill-current" />,
      title: "Sarah B.",
      meta: "Pousada Maravilha",
      description: "O atendimento 24/7 mudou meu jogo. Eu não preciso mais ficar grudada no celular no final de semana. A Legacy AI qualifica e eu só finalizo.",
      date: "Há 3 dias",
      className: "[grid-area:stack] translate-x-12 translate-y-12 hover:-translate-y-16 transition-all duration-700 before:absolute before:inset-0 before:rounded-2xl before:bg-white/30 hover:before:opacity-0 pointer-events-auto",
    },
    {
      icon: <Star className="size-5 text-primary fill-current" />,
      title: "Roberto K.",
      meta: "Hotel Central",
      description: "A qualificação automática é incrível. Antes eu perdia horas com curiosos, agora só recebo leads que realmente têm interesse em fechar a reserva.",
      date: "Hoje",
      className: "[grid-area:stack] translate-x-24 translate-y-24 hover:translate-y-8 transition-all duration-700 pointer-events-auto",
    },
  ];

  return (
    <section className="relative bg-white py-24 md:py-40 overflow-hidden border-t border-zinc-100">
      <div className="container mx-auto px-6 relative z-30">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="relative w-full lg:w-1/2 h-[500px] flex items-center justify-center order-2 lg:order-1">
            <div className="scale-75 md:scale-100 lg:scale-110">
              <DisplayCards cards={testimonials} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              <h2 className="text-zinc-900 font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8 italic">
                O que os nossos <span className="text-primary">clientes dizem</span>
              </h2>
              <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-8">
                Mais de <span className="text-zinc-900 font-bold">50 hospedagens</span> já transformaram seu atendimento com a Legacy AI. Clique nos cards ao lado para ver os resultados reais.
              </p>
              <div className="flex items-center gap-4 text-primary font-heading font-bold uppercase tracking-widest text-sm bg-primary/5 py-3 px-6 rounded-2xl w-fit">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span>Excelência Comprovada</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SUBTLE BACKGROUND DECOR */}
      <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(139,26,43,0.03),transparent_50%)] pointer-events-none" />
    </section>
  );
}
