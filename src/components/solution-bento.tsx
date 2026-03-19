"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, Calendar, Brain, Globe, Zap, ArrowUpRight } from "lucide-react";
import { AuroraBackground } from "./ui/aurora-background";
import { BentoGrid, type BentoItem } from "./ui/bento-grid";
import { GradientButton } from "./ui/gradient-button";

export function SolutionBento() {
    const items: BentoItem[] = [
        {
            title: "Atendimento 24/7",
            description: "Responda a hóspedes a qualquer hora, mesmo de madrugada e feriados. Sem perda de leads.",
            icon: <Clock />,
            tags: ["24Horas", "Plantão"],
            status: "Novo",
            colSpan: 2
        },
        {
            title: "Conversas Naturais",
            description: "Interações personalizadas e humanas que convertem clientes no WhatsApp.",
            icon: <MessageSquare />,
            tags: ["Nativo"],
        },
        {
            title: "Calendário",
            description: "Conecte seu sistema de reservas para verificar disponibilidade e agendar automaticamente.",
            icon: <Calendar />,
            tags: ["Agendamento"],
        },
        {
            title: "Qualificação IA",
            description: "A IA identifica e prioriza os leads mais propensos a reservar, otimizando seu tempo.",
            icon: <Brain />,
            tags: ["Filtro", "ROI"],
            colSpan: 2
        },
        {
            title: "Multilíngue",
            description: "Comunique-se com hóspedes de todo o mundo em seu idioma nativo, sem barreiras.",
            icon: <Globe />,
            tags: ["Global"],
        },
        {
            title: "Respostas Instantâneas",
            description: "Elimine o tempo de espera e aumente a satisfação do cliente com respostas imediatas.",
            icon: <Zap />,
            tags: ["Performance"],
            colSpan: 2
        }
    ];

    return (
        <AuroraBackground 
            as="section"
            id="recursos"
            className="py-24 md:py-32 relative overflow-hidden" 
            showRadialGradient={false}
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="font-heading text-4xl md:text-7xl font-black text-zinc-900 uppercase mb-4 tracking-tighter italic"
                    >
                        RECURSOS E <span className="text-primary">VANTAGENS</span>
                    </motion.h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[20px] w-1 bg-primary" />
                        <p className="text-gray-600 text-lg md:text-xl font-heading">Como a Legacy AI transforma sua hospitalidade</p>
                    </div>
                </div>

                <BentoGrid items={items} />

                <div className="mt-20 flex justify-center">
                    <GradientButton
                        asChild
                        className="rounded-full px-10 py-4 shadow-2xl shadow-primary/10"
                    >
                        <a href="https://inlead.digital/quiz-legacy-ai" className="flex items-center gap-2">
                            <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">Quero ter acesso</span>
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </GradientButton>
                </div>
            </div>
        </AuroraBackground>
    );
}
