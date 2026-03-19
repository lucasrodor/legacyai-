"use client";

import { motion, Variants } from "framer-motion";
import { GradientButton } from "./gradient-button";
import { ArrowUpRight } from "lucide-react";

function HeroGeometric({
    title1 = "LEGACY AI",
    description = "Tenha a sua hospedagem vendendo 24h por dia, qualificada e automatizada via WhatsApp com a LegacyAI",
}: {
    title1?: string;
    description?: string;
}) {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            {/* New High-Quality Silk Background */}
            <div 
                className="absolute inset-0 bg-no-repeat bg-cover bg-left md:bg-center opacity-70 mix-blend-screen"
                style={{ backgroundImage: 'url("/hero-silk-new.png")' }}
            />
            
            {/* Ambient Dark Overlay for Premium Look */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

            {/* Subtle Vertical Dots decoration */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-10 pointer-events-none hidden md:flex">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center relative">
                    
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center mb-6"
                    >
                        <div className="flex gap-1">
                            <div className="w-12 md:w-16 h-[5px] bg-primary skew-x-[-25deg]" />
                            <div className="w-5 md:w-8 h-[5px] bg-primary skew-x-[-25deg] opacity-60" />
                        </div>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black mb-8 tracking-tighter leading-none skew-x-[-15deg] uppercase">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                                {title1}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base md:text-xl text-white/80 mb-12 leading-relaxed font-heading max-w-2xl mx-auto px-4">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <GradientButton asChild className="relative rounded-full px-10 py-4 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-500 border border-white/10">
                                <a href="https://inlead.digital/quiz-legacy-ai" className="flex items-center gap-2">
                                    <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">Quero ter acesso</span>
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </a>
                            </GradientButton>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
