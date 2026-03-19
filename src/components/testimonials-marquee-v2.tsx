"use client"

import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { motion } from "framer-motion"

interface TestimonialsSectionProps {
  title?: string
  description?: string
  className?: string
}

const testimonials = [
  {
    author: {
      name: "Lucas M.",
      handle: "Chalés do Sol",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "A entrega foi surpreendente. Minha IA atende os clientes no WhatsApp com uma naturalidade que eu não esperava. As reservas estão vindo sozinhas."
  },
  {
    author: {
      name: "Sarah B.",
      handle: "Pousada Maravilha",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "O atendimento 24/7 mudou meu jogo. Eu não preciso mais ficar grudada no celular no final de semana. A Legacy AI qualifica e eu só finalizo."
  },
  {
    author: {
      name: "Roberto K.",
      handle: "Hotel Central",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "A qualificação automática é incrível. Antes eu perdia horas com curiosos, agora só recebo leads que realmente têm interesse em fechar a reserva."
  }
]

export function TestimonialsMarqueeV2({ 
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-white text-zinc-900 border-t border-zinc-100",
      "py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex w-full flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6 px-4 text-center">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="font-heading text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter italic max-w-4xl"
            >
                O que os nossos <span className="text-primary">clientes dizem</span>
            </motion.h2>
            <p className="text-zinc-600 text-lg md:text-xl font-heading uppercase tracking-widest font-bold max-w-2xl">
                Mais de 50 hospedagens já vendem com IA
            </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* BASE MARQUEE WITH FRAMER MOTION */}
          <div className="flex w-full overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)]">
            <motion.div 
              animate={{ 
                x: ["0%", "-50%"] 
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex shrink-0 items-center justify-around [gap:var(--gap)]"
            >
              {/* TWO SETS FOR INFINITE LOOP */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex shrink-0 items-center [gap:var(--gap)]">
                  {testimonials.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-white sm:block z-10" />
        </div>
      </div>
    </section>
  )
}
