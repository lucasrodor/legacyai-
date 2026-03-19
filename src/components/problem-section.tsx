"use client";

import { motion } from "framer-motion";
import { Clock, Smartphone, TrendingDown } from "lucide-react";

export function ProblemSection() {
    const cards = [
        {
            icon: Clock,
            title: "Você não responde 24h",
            description: "Leads chegam de madrugada, no fim de semana, no feriado. Sem resposta = reserva perdida."
        },
        {
            icon: Smartphone,
            title: "WhatsApp cheio ≠ Agenda cheia",
            description: "Volume não é conversão. Mensagens sem qualificação viram tempo desperdiçado."
        },
        {
            icon: TrendingDown,
            title: "Depois de 5 minutos, a chance despenca",
            description: "Estudos mostram que o interesse cai drasticamente em minutos. Velocidade vence."
        }
    ];

    return (
        <section className="bg-black py-24 md:py-32 overflow-hidden relative">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white/60 font-heading font-medium text-lg md:text-2xl mb-4 italic"
                >
                    “Se a reserva depende de você...”
                </motion.h2>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white font-heading font-black text-5xl md:text-8xl uppercase leading-none"
                >
                    <span className="text-primary block mb-2">VOCÊ NÃO TEM</span>
                    ESCALA
                </motion.h3>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                    >
                        <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all" />
                        
                        <div className="mb-8 bg-primary/20 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-all duration-500 shadow-lg shadow-primary/20">
                            <card.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="text-white font-heading font-bold text-2xl mb-4 group-hover:text-primary transition-colors">{card.title}</h4>
                        <p className="text-gray-400 leading-relaxed text-lg">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
