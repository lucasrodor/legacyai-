"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        const newErrors: Record<string, boolean> = {};
        if (!data.name) newErrors.name = true;
        if (!data.whatsapp) newErrors.whatsapp = true;
        if (!data.hospedagem) newErrors.hospedagem = true;
        if (!data.units) newErrors.units = true;
        if (!data.difficulty) newErrors.difficulty = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus("submitting");
        
        // Simulating submission
        setTimeout(() => {
            const firstName = (data.name as string).split(' ')[0];
            setName(firstName);
            
            // @ts-ignore
            window.formData = data;
            // TODO: integrar com backend
            const submitForm = (formData: any) => { console.log("Submitting:", formData); };
            submitForm(data);

            setStatus("success");
            window.scrollTo({ top: document.getElementById('form')?.offsetTop, behavior: 'smooth' });
        }, 1500);
    };

    return (
        <section id="form" className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-4xl text-black">
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-primary/10 border border-primary/20 px-4 py-1 rounded-full mb-4"
                    >
                        <span className="text-primary text-xs font-bold tracking-widest uppercase">VAGAS LIMITADAS</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-black font-heading text-4xl md:text-6xl font-bold mb-6"
                    >
                        Descubra se a Legacy AI <br className="hidden md:block" /> é certa para você
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-text text-lg max-w-xl mx-auto font-medium"
                    >
                        Preencha abaixo e um especialista entra em contato em até 24h
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-2xl relative"
                >
                    {status !== "success" ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Nome */}
                                <div className="form-group">
                                    <label className="block font-bold text-sm mb-2 uppercase tracking-wide">Nome completo *</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className={cn("w-full border rounded-xl p-4 text-black bg-white transition-all", errors.name ? "border-primary" : "border-gray-200")} 
                                        placeholder="Seu nome"
                                        onChange={() => setErrors({...errors, name: false})}
                                    />
                                    {errors.name && <p className="text-primary text-xs mt-1">Por favor, insira seu nome.</p>}
                                </div>
                                {/* WhatsApp */}
                                <div className="form-group">
                                    <label className="block font-bold text-sm mb-2 uppercase tracking-wide">WhatsApp (com DDD) *</label>
                                    <input 
                                        type="tel" 
                                        name="whatsapp" 
                                        className={cn("w-full border rounded-xl p-4 text-black bg-white transition-all", errors.whatsapp ? "border-primary" : "border-gray-200")} 
                                        placeholder="(00) 00000-0000"
                                        onChange={() => setErrors({...errors, whatsapp: false})}
                                    />
                                    {errors.whatsapp && <p className="text-primary text-xs mt-1">WhatsApp é obrigatório.</p>}
                                </div>
                                {/* E-mail */}
                                <div className="form-group">
                                    <label className="block font-bold text-sm mb-2 uppercase tracking-wide">E-mail</label>
                                    <input type="email" name="email" className="w-full border border-gray-200 rounded-xl p-4 text-black bg-white" placeholder="seu@email.com" />
                                </div>
                                {/* Tipo de Hospedagem */}
                                <div className="form-group">
                                    <label className="block font-bold text-sm mb-2 uppercase tracking-wide">Tipo de hospedagem *</label>
                                    <select 
                                        name="hospedagem" 
                                        defaultValue=""
                                        className={cn("w-full border rounded-xl p-4 text-black bg-white transition-all", errors.hospedagem ? "border-primary" : "border-gray-200")}
                                        onChange={() => setErrors({...errors, hospedagem: false})}
                                    >
                                        <option value="" disabled>Selecione uma opção</option>
                                        <option value="Hotel/Pousada">Hotel/Pousada</option>
                                        <option value="Chalé/Cabana">Chalé/Cabana</option>

                                        <option value="Resort">Resort</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                    {errors.hospedagem && <p className="text-primary text-xs mt-1">Selecione o tipo.</p>}
                                </div>
                                {/* Unidades */}
                                <div className="form-group">
                                    <label className="block font-bold text-sm mb-2 uppercase tracking-wide">Quantos quartos/unidades? *</label>
                                    <select 
                                        name="units" 
                                        defaultValue=""
                                        className={cn("w-full border rounded-xl p-4 text-black bg-white transition-all", errors.units ? "border-primary" : "border-gray-200")}
                                        onChange={() => setErrors({...errors, units: false})}
                                    >
                                        <option value="" disabled>Selecione uma opção</option>
                                        <option value="Até 10">Até 10</option>
                                        <option value="11 a 30">11 a 30</option>
                                        <option value="31 a 60">31 a 60</option>
                                        <option value="Mais de 60">Mais de 60</option>
                                    </select>
                                    {errors.units && <p className="text-primary text-xs mt-1">Selecione a quantidade.</p>}
                                </div>
                                {/* Dificuldade */}
                                <div className="form-group">
                                    <label className="block font-bold text-sm mb-2 uppercase tracking-wide">Maior dificuldade hoje? *</label>
                                    <select 
                                        name="difficulty" 
                                        defaultValue=""
                                        className={cn("w-full border rounded-xl p-4 text-black bg-white transition-all", errors.difficulty ? "border-primary" : "border-gray-200")}
                                        onChange={() => setErrors({...errors, difficulty: false})}
                                    >
                                        <option value="" disabled>Selecione uma opção</option>
                                        <option value="Demoro para responder leads">Demoro para responder leads</option>
                                        <option value="Recebo muitas mensagens mas poucas reservas">Muitas mensagens, poucas reservas</option>
                                        <option value="Falta de atendimento 24h">Falta de atendimento 24h</option>
                                        <option value="Quero reduzir dependência de OTAs">Reduzir dependência de OTAs</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                    {errors.difficulty && <p className="text-primary text-xs mt-1">Informe sua dificuldade.</p>}
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === "submitting"}
                                className="btn-shimmer w-full py-5 text-white font-bold text-xl rounded-xl uppercase tracking-widest mt-8 transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                            >
                                {status === "submitting" ? "ENVIANDO..." : "QUERO MINHA IA EM 15 DIAS →"}
                            </button>

                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                <span>✓ Sem compromisso</span>
                                <span>✓ Consultoria gratuita</span>
                                <span>✓ Resposta em 24h</span>
                            </div>
                        </form>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12 flex flex-col items-center"
                        >
                            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                                <CheckCircle className="w-12 h-12" />
                            </div>
                            <h3 className="text-black font-heading font-bold text-4xl mb-4"> ✅ Perfeito, {name.split(' ')[0]}!</h3>
                            <p className="text-gray-text text-xl max-w-sm mb-10 leading-relaxed font-medium">
                                Recebemos suas informações. Um especialista da TwoLegacy vai entrar em contato em até 24h.
                            </p>
                            <div className="bg-gray-100 border border-green-200 px-8 py-4 rounded-2xl text-green-800 text-base font-bold tracking-tight">
                                Sua vaga está pré-garantida.
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
