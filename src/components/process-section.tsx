"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

export function ProcessSection() {
    const steps = [
        { step: "01", title: "DIAGNÓSTICO", desc: "Entendemos seu negócio, precificação e fluxos de atendimento." },
        { step: "02", title: "TREINAMENTO", desc: "Alimentamos a IA com sua base de conhecimento e tons de voz." },
        { step: "03", title: "GO-LIVE", desc: "Sua IA entra no ar atendendo e fechando reservas no WhatsApp." }
    ];

    return (
        <section className="bg-black py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.05] blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="font-heading text-4xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter"
                    >
                        PRÓXIMOS <span className="text-primary">PASSOS</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg md:text-xl font-heading uppercase tracking-widest font-bold">
                        Do diagnóstico ao faturamento
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {steps.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/5 p-12 rounded-[3.5rem] relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
                        >
                             <span className="text-primary font-black text-8xl opacity-[0.15] absolute -right-2 -top-2 italic group-hover:opacity-40 transition-all duration-700 pointer-events-none select-none">{item.step}</span>
                            <h4 className="text-2xl font-heading font-black text-white mb-6 italic tracking-widest uppercase">{item.title}</h4>
                            <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                            
                            <div className="mt-8 overflow-hidden h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <GradientButton asChild className="rounded-full px-10 py-4 shadow-2xl shadow-primary/20">
                        <a href="https://inlead.digital/quiz-legacy-ai" className="flex items-center gap-2">
                             <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">Quero ter acesso</span>
                             <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </GradientButton>
                </div>
            </div>
        </section>
    );
}
