"use client";

import { motion } from "framer-motion";
import { Hotel, Palmtree, Tent, Waves, Home } from "lucide-react";

export function AudienceSection() {
    const types = [
        { icon: Hotel, label: "Hotéis & Pousadas", delay: 0 },
        { icon: Palmtree, label: "Chalés & Cabanas", delay: 0.1 },
        { icon: Tent, label: "Chácaras & Eventos", delay: 0.2 },
        { icon: Waves, label: "Resorts", delay: 0.3 },
        { icon: Home, label: "Espaços para Locação", delay: 0.4 }
    ];

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white font-heading font-black text-4xl md:text-7xl text-center mb-20 uppercase tracking-tighter"
                >
                    Feito para quem vive de <span className="text-primary block md:inline">hospitalidade</span>
                </motion.h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {types.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[2.5rem] flex flex-col items-center justify-center group hover:border-primary/50 transition-all duration-500 min-h-[280px]"
                        >
                            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-500 bg-primary/10 p-6 rounded-3xl">
                                <type.icon className="w-16 h-16" />
                            </div>
                            <span className="text-white font-heading font-bold text-2xl md:text-3xl text-center group-hover:text-primary transition-colors">{type.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
