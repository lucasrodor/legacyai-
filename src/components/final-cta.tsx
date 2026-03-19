"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            {/* Background Gradients */}
            {/* Background Image & Gradients */}
            <div 
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 transition-opacity duration-1000 mix-blend-lighten"
                style={{ backgroundImage: 'url("/hotel-overlay.png")' }}
            />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white font-heading font-bold text-4xl md:text-6xl mb-8 leading-tight"
                    >
                        Não perca mais nenhuma <span className="text-primary italic">reserva</span> por falta de atendimento
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Implemente a inteligência artificial comercial da Legacy AI em até 15 dias e transforme seu WhatsApp em uma máquina de vendas 24h.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a 
                            href="https://inlead.digital/quiz-legacy-ai"
                            className="btn-shimmer text-white px-12 py-6 rounded-full font-heading font-black text-xl uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-primary/40 inline-block"
                        >
                            Quero ter acesso
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
