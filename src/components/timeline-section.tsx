"use client";

import { motion } from "framer-motion";

export function TimelineSection() {
    const steps = [
        {
            number: 1,
            title: "Lead chega no WhatsApp",
            description: "IA responde em < 10 segundos",
            delay: 0
        },
        {
            number: 2,
            title: "IA qualifica e apresenta opções",
            description: "Pergunta datas, número de pessoas, preferências",
            delay: 0.1
        },
        {
            number: 3,
            title: "Reserva fechada",
            description: "Encaminha para humano ou motor de reservas diretas",
            delay: 0.2
        }
    ];

    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-4xl md:text-6xl font-bold text-center mb-24 text-black"
                >
                    Do lead à reserva em segundos
                </motion.h2>
                
                <div className="relative max-w-5xl mx-auto">
                    {/* Progress Line Container */}
                    <div className="absolute left-[31px] md:left-0 md:top-[48px] md:w-full h-[85%] md:h-[2px] w-[2px] bg-gray-100 z-0">
                        <motion.div 
                            className="absolute bg-primary top-0 left-0 h-full w-full origin-top md:origin-left"
                            initial={{ scaleY: 0, scaleX: 0 }}
                            whileInView={{ scaleY: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group"
                            >
                                <div className="relative mr-8 md:mr-0 md:mb-8 shrink-0">
                                    <motion.div 
                                        className="w-16 h-16 md:w-24 md:h-24 bg-primary text-white rounded-full flex items-center justify-center text-2xl md:text-4xl font-black shadow-xl shadow-primary/20 z-10 relative"
                                        whileInView={{ scale: [0.8, 1.1, 1] }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.3, duration: 0.5 }}
                                    >
                                        {step.number}
                                    </motion.div>
                                </div>

                                <div className="pt-1 md:pt-0">
                                    <h4 className="text-black font-heading font-bold text-xl md:text-2xl mb-1 md:mb-3">{step.title}</h4>
                                    <p className="text-gray-text leading-relaxed font-medium text-sm md:text-base max-w-[200px] md:max-w-none">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
