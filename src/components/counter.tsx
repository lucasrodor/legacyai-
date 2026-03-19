"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useSpring, useTransform } from "framer-motion";

export function Counter({ target }: { target: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const count = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            count.set(target);
        }
    }, [isInView, count, target]);

    useEffect(() => {
        return rounded.on("change", (latest) => setDisplay(latest));
    }, [rounded]);

    return (
        <span ref={ref}>
            {display}
        </span>
    );
}
