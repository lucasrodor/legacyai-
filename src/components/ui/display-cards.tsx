"use client";

import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-5 text-primary" />,
  title = "Destaque",
  description = "Aumente sua conversão com IA.",
  date = "Agora",
  iconClassName = "bg-primary/20",
  titleClassName = "text-primary",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-52 w-[24rem] -skew-y-[6deg] select-none flex-col justify-between rounded-2xl border-2 border-zinc-200 bg-white backdrop-blur-xl px-6 py-5 transition-all duration-500 hover:z-50 hover:-translate-y-24 hover:skew-y-0 hover:bg-zinc-50 hover:border-primary/30 group shadow-xl hover:shadow-2xl",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className={cn("inline-block rounded-xl p-2.5 transition-colors group-hover:bg-primary bg-primary/10 [&_svg]:group-hover:text-white", iconClassName)}>
            {icon}
          </span>
          <p className={cn("text-xl font-heading font-black uppercase tracking-tight italic", titleClassName, "group-hover:text-primary transition-colors")}>
            {title}
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-xl text-zinc-900 font-medium group-hover:text-primary transition-colors">
            {description}
        </p>
        <div className="flex items-center justify-between">
            <p className="text-zinc-500 text-sm font-heading">{date}</p>
            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
        </div>
      </div>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      title: "Automação",
      description: "Atendimento 100% autônomo e humanizado.",
      date: "Implementação Imediata",
      className: "[grid-area:stack] hover:-translate-y-24 before:absolute before:inset-0 before:rounded-2xl before:bg-black/40 grayscale hover:grayscale-0 before:transition-opacity hover:before:opacity-0 duration-500",
    },
    {
      title: "Conversão",
      description: "Transforme visitantes em reservas reais.",
      date: "ROI Garantido",
      className: "[grid-area:stack] translate-x-12 translate-y-12 hover:-translate-y-12 before:absolute before:inset-0 before:rounded-2xl before:bg-black/20 hover:before:opacity-0 duration-500",
    },
    {
      title: "Inovação",
      description: "O futuro da hospitalidade chegou.",
      date: "Legacy AI 2024",
      className: "[grid-area:stack] translate-x-24 translate-y-24 hover:translate-y-4",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 py-10">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
