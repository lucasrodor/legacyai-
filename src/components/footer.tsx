"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-black py-20 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-8 mb-12"
                >
                    <div className="flex items-center gap-3">
                        <span className="text-white font-heading font-black text-4xl tracking-tighter uppercase relative">
                            Legacy AI
                            <div className="absolute -right-10 top-0 w-8 h-[30px] bg-primary skew-x-[-20deg]" />
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm font-heading font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Contato</a>
                    </div>
                </motion.div>

                <div className="w-16 h-[1px] bg-white/10 mx-auto mb-12" />

                <p className="text-white/20 text-[10px] tracking-[0.4em] font-bold uppercase">
                    © 2026 TWO LEGACY COMPANY. TODOS OS DIREITOS RESERVADOS.
                </p>
            </div>
        </footer>
    );
}
