"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

export function FAQAccordion() {
    const faqs = [
        {
            question: "Vou perder o toque humano?",
            answer: "A Legacy AI é treinada para ser uma extensão da sua equipe, mantendo a empatia e a personalização. Ela responde 24/7, mas você sempre pode intervir e assumir a conversa."
        },
        {
            question: "E se a IA errar alguma informação?",
            answer: "Sua IA é alimentada com a sua base de conhecimento real. Se ela encontrar algo que não sabe, ela direciona para um humano imediatamente, garantindo segurança total."
        },
        {
            question: "15 dias é rápido demais?",
            answer: "Nosso processo de onboarding é otimizado para que sua IA esteja no ar e vendendo o mais rápido possível, sem atritos ou complexidade técnica para você."
        }
    ];

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white font-heading font-black text-4xl md:text-7xl text-center mb-16 uppercase tracking-tighter"
                >
                    Sua dúvida tem <span className="text-primary block md:inline">resposta</span>
                </motion.h2>
                
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500"
                        >
                            <details className="group">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl md:text-2xl font-heading font-black text-white group-hover:text-primary group-open:text-primary transition-colors uppercase tracking-tight">{faq.question}</span>
                                    <span className="text-primary group-open:rotate-180 transition-transform duration-500">
                                        <ChevronDown className="w-8 h-8" />
                                    </span>
                                </summary>
                                <div className="p-10 pt-10 text-gray-400 text-xl leading-loose border-t border-white/5 font-heading">
                                    {faq.answer}
                                </div>
                            </details>
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
