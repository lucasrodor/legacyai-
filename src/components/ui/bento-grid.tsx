"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
    className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto", className)}>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.8, 
                        delay: index * 0.1,
                        ease: [0.25, 0.4, 0.25, 1]
                    }}
                    className={cn(
                        "group relative p-8 rounded-[2rem] overflow-hidden transition-all duration-500",
                        "border border-gray-200 bg-white",
                        "hover:shadow-xl hover:border-primary/20",
                        "hover:-translate-y-1 will-change-transform",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        item.colSpan === 3 ? "md:col-span-3" : "",
                        {
                            "shadow-xl -translate-y-1":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-500`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:24px_24px]" />
                    </div>

                    <div className="relative flex flex-col h-full justify-between space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/5 group-hover:bg-primary transition-all duration-500">
                                {React.cloneElement(item.icon as React.ReactElement, { 
                                    className: cn((item.icon as React.ReactElement).props.className, "w-7 h-7 text-primary group-hover:text-white transition-colors duration-500") 
                                })}
                            </div>
                            {item.status && (
                                <span
                                    className={cn(
                                        "text-xs font-heading font-bold px-3 py-1.5 rounded-full",
                                        "bg-gray-100 text-gray-600",
                                        "transition-all duration-500 group-hover:bg-primary group-hover:text-white"
                                    )}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-heading font-black text-gray-900 tracking-tight text-2xl uppercase italic">
                                {item.title}
                                {item.meta && (
                                    <span className="ml-3 text-sm text-gray-400 font-medium normal-case not-italic">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed font-sans">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center space-x-2 text-xs">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 font-medium transition-all duration-300 hover:border-primary/30"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
