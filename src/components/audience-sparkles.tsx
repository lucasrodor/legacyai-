"use client"

import { Sparkles } from "@/components/ui/sparkles"
import { motion } from "framer-motion"
import { Hotel, Home, Tent, MapPin } from "lucide-react"

const audiences = [
  {
    title: "Hotéis & Pousadas",
    icon: Hotel,
    description: "Automação total no check-in, reservas e atendimento ao hóspede 24/7."
  },
  {
    title: "Chalés & Cabanas",
    icon: Home,
    description: "Experiência premium e personalizada para refúgios exclusivos."
  },
  {
    title: "Resorts",
    icon: Tent,
    description: "Gestão complexa simplificada com IA para larga escala e múltiplos serviços."
  },
  {
    title: "Espaços para Locação",
    icon: MapPin,
    description: "Otimização de ocupação e comunicação rápida para propriedades de aluguel."
  }
]

export function AudienceSparkles() {
  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-heading font-black text-4xl md:text-7xl uppercase tracking-tighter"
          >
            Feito para quem vive de <span className="text-primary block md:inline">hospitalidade</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-white font-heading font-bold text-xl mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND EFFECTS - CENTERED VERTICALLY */}
      <div className="absolute inset-x-0 top-0 w-full h-full pointer-events-none overflow-hidden [mask-image:radial-gradient(circle_at_center,white,transparent_85%)]">
        {/* RED GLOW CENTERED */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,26,43,0.3),transparent_70%)] opacity-60" />
        
        {/* SPARKLES REFINED - DENSE BUT SUBTLE */}
        <div className="absolute inset-0 opacity-40">
          <Sparkles
            density={1800}
            size={1.0}
            speed={0.6}
            className="absolute inset-0 h-full w-full"
            color="#FFFFFF"
          />
        </div>
      </div>
    </section>
  )
}
