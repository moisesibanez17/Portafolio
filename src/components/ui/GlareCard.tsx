"use client";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";

export const GlareCard = ({ children, className }) => {
    return (
        <div className={cn(
            "relative isolate overflow-hidden rounded-[48px] border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-300",
            className
        )}>
            <div className="relative z-10 h-full flex flex-col justify-start">
                {children}
            </div>
            <div className="pointer-events-none absolute inset-0 z-20 mix-blend-soft-light opacity-[0.03] bg-[url('https://res.cloudinary.com/dqv0qzffu/image/upload/v1704403164/grain_h04qea.png')] bg-[size:150px_150px]" />
        </div>
    );
};
