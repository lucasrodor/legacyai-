"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsMarquee() {
    const testimonials = [
        {
            name: "Lucas M.",
            place: "Chalés do Sol",
            text: "A entrega foi surpreendente. Minha IA atende os clientes no WhatsApp com uma naturalidade que eu não esperava. As reservas estão vindo sozinhas.",
            delay: 0
        },
        {
            name: "Sarah B.",
            place: "Pousada Maravilha",
            text: "O atendimento 24/7 mudou meu jogo. Eu não preciso mais ficar grudada no celular no final de semana. A Legacy AI qualifica e eu só finalizo.",
            delay: 0.1
        },
        {
            name: "Roberto K.",
            place: "Hotel Central",
            text: "A qualificação automática é incrível. Antes eu perdia horas com curiosos, agora só recebo leads que realmente têm interesse em fechar a reserva.",
            delay: 0.2
        }
    ];

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            {/* Ambient Red Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-primary/[0.05] blur-[100px] rounded-full translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Process Section (New from Stitch) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { step: "01", title: "REUNIÃO DE DIAGNÓSTICO", desc: "Entendemos seu negócio, precificação e fluxos de atendimento." },
                            { step: "02", title: "TREINAMENTO DA IA", desc: "Alimentamos a IA com sua base de conhecimento e tons de voz." },
                            { step: "03", title: "GO-LIVE (LANÇAMENTO)", desc: "Sua IA entra no ar atendendo e fechando reservas no WhatsApp." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/40 transition-all"
                            >
                                <span className="text-primary font-black text-6xl opacity-20 absolute -right-4 -top-4 italic">{item.step}</span>
                                <h4 className="text-xl font-heading font-black text-white mb-4 italic tracking-widest uppercase">{item.title}</h4>
                                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="font-heading text-4xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter"
                    >
                        O QUE OS NOSSOS <span className="text-primary">CLIENTES DIZEM</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg md:text-xl font-heading uppercase tracking-widest font-bold">
                        Mais de 50 hospedagens já vendem com IA
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay }}
                            className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[3rem] p-12 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between min-h-[400px]"
                        >
                            <div className="absolute top-0 right-10 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V9C12.017 6.79086 13.8079 5 16.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 17.2091 21.2261 19 19.017 19H16.017C15.4647 19 15.017 19.4477 15.017 20V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017V9C1.017 6.79086 2.80786 5 5.017 5H8.017C10.2261 5 12.017 6.79086 12.017 9V15C12.017 17.2091 10.2261 19 8.017 19H5.01701C4.46473 19 4.01701 19.4477 4.01701 20V21H3.017Z" /></svg>
                            </div>

                            <div>
                                <div className="flex gap-1 text-primary mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-xl leading-relaxed font-heading italic">
                                    "{item.text}"
                                </p>
                            </div>

                            <div className="mt-12">
                                <h4 className="text-white font-heading font-black text-2xl uppercase tracking-wider">{item.name}</h4>
                                <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">{item.place}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
