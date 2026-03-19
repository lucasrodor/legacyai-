"use client";

import DisplayCards from "@/components/ui/display-cards";
import { motion } from "framer-motion";
import { Bot, TrendingUp, Sparkles } from "lucide-react";

export function SuccessCards() {
  const successCards = [
    {
      icon: <Bot className="size-6 text-primary" />,
      title: "IA Autônoma",
      description: "Nossa IA aprende o tom de voz da sua marca e responde como um consultor real.",
      date: "Disponível Imediatamente",
      className: "[grid-area:stack] hover:-translate-y-28 transition-all duration-700 before:absolute before:inset-0 before:rounded-2xl before:bg-black/60 grayscale hover:grayscale-0 before:transition-all hover:before:opacity-0 pointer-events-auto",
    },
    {
      icon: <TrendingUp className="size-6 text-primary" />,
      title: "Alta Conversão",
      description: "Reduza o tempo de resposta de 2 horas para 2 segundos e veja suas reservas subirem.",
      date: "Aumente o seu ROI",
      className: "[grid-area:stack] translate-x-12 translate-y-12 hover:-translate-y-16 transition-all duration-700 before:absolute before:inset-0 before:rounded-2xl before:bg-black/30 hover:before:opacity-0 pointer-events-auto",
    },
    {
      icon: <Sparkles className="size-6 text-primary" />,
      title: "Exclusividade",
      description: "A tecnologia de luxo que grandes resorts usam, agora acessível para você.",
      date: "Premium Experience",
      className: "[grid-area:stack] translate-x-24 translate-y-24 hover:translate-y-8 transition-all duration-700 pointer-events-auto",
    },
  ];

  return (
    <section className="relative bg-white py-12 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-heading font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6 block"
            >
              Tecnologia de Ponta
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-900 font-heading font-black text-3xl md:text-6xl uppercase tracking-tighter mb-4 md:mb-8 italic leading-tight"
            >
              O futuro da <span className="text-primary">hospitalidade</span> em suas mãos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-base md:text-xl leading-relaxed mb-4 md:mb-10"
            >
              Integramos os modelos de IA mais avançados do mundo para que você foque no que importa: <span className="text-zinc-900 font-bold">encantar seus hóspedes</span>. Enquanto você descansa, a Legacy AI trabalha para fechar novas reservas.
            </motion.p>
          </div>

          <div className="relative h-[220px] md:h-[500px] flex items-center justify-center">
            <div className="scale-[0.6] sm:scale-75 md:scale-100 lg:scale-110 -ml-12 md:ml-0">
              <DisplayCards cards={successCards.map(card => ({
                ...card,
                className: card.className.replace('translate-x-12', 'translate-x-10 md:translate-x-12')
                                       .replace('translate-x-24', 'translate-x-20 md:translate-x-24')
                                       .replace('translate-y-12', 'translate-y-10 md:translate-y-12')
                                       .replace('translate-y-24', 'translate-y-20 md:translate-y-24')
              }))} />
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-40 translate-x-1/4 translate-y-1/4" />
    </section>
  );
}
