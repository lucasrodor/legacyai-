"use client";

import { motion } from "framer-motion";
import { Counter } from "./counter";

export function SocialProofBar() {
    return (
        <section className="bg-primary py-8 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 text-white text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center flex-1 text-center py-4 md:py-0"
                    >
                        <span className="text-2xl md:text-4xl font-black"><Counter target={82} />% dos hóspedes</span>
                        <span className="text-xs md:text-base opacity-90 font-bold uppercase tracking-widest mt-1">reservam com quem responde primeiro</span>
                    </motion.div>
                    <div className="hidden md:block w-px h-16 bg-white/20"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center flex-1 text-center py-4 md:py-0"
                    >
                        <span className="text-2xl md:text-4xl font-black">Atendimento em &lt; 10s</span>
                        <span className="text-xs md:text-base opacity-90 font-bold uppercase tracking-widest mt-1">enquanto você dorme</span>
                    </motion.div>
                    <div className="hidden md:block w-px h-16 bg-white/20"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center flex-1 text-center py-4 md:py-0"
                    >
                        <span className="text-2xl md:text-4xl font-black">Implementação em 15 dias</span>
                        <span className="text-xs md:text-base opacity-90 font-bold uppercase tracking-widest mt-1">seu negócio já vendendo com IA</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
