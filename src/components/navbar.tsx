"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5",
                scrolled && "py-4 bg-black/80 border-white/10"
            )}
        >
            <div className="flex items-center gap-2">
                <span className="text-white font-heading font-black text-2xl tracking-tighter uppercase relative whitespace-nowrap">
                    Legacy AI
                    <div className="absolute -right-6 top-1 w-4 h-[20px] bg-primary skew-x-[-20deg]" />
                </span>
            </div>
            <GradientButton
                asChild
                className="rounded-full px-5 py-2 md:px-10 md:py-3"
            >
                <a href="https://inlead.digital/quiz-legacy-ai" className="flex items-center gap-2">
                    <span className="text-[10px] md:text-sm font-black uppercase tracking-widest whitespace-nowrap">Quero ter acesso</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </a>
            </GradientButton>
        </nav>
    );
}
