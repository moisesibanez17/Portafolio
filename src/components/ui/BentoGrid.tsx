import React from "react";
import { cn } from "../../lib/utils";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-slate-900 dark:border-white/[0.1] border border-slate-800/50 justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/bento:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                        {icon}
                        <div className="font-sans font-bold text-neutral-200">
                            {title}
                        </div>
                    </div>
                    <div className="font-sans font-normal text-neutral-400 text-xs">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};
