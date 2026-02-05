"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid.tsx";
import { cn } from "../lib/utils.ts";
import {
    IconArrowWaveRightUp,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    IconBolt,
    IconCode,
    IconCpu,
} from "@tabler/icons-react";

export function AboutMe({ lang, translations }) {
    const items = [
        {
            title: lang === 'es' ? "Infraestructura & Soporte" : "Infrastructure & Support",
            description: lang === 'es'
                ? "Soporte avanzado y resolución de problemas de hardware, software y conectividad."
                : "Advanced support and troubleshooting for hardware, software, and connectivity.",
            header: <Skeleton className="bg-gradient-to-br from-emerald-500/30 to-emerald-500/10" image="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800" />,
            icon: <IconBolt className="h-4 w-4 text-emerald-400" />,
            className: "md:col-span-2",
        },
        {
            title: lang === 'es' ? "Automatización" : "Automation",
            description: lang === 'es'
                ? "Scripts en PowerShell, Python y Batch para optimizar procesos."
                : "PowerShell, Python, and Batch scripts to optimize processes.",
            header: <Skeleton className="bg-gradient-to-br from-cyan-500/30 to-cyan-500/10" image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" />,
            icon: <IconCode className="h-4 w-4 text-cyan-400" />,
            className: "md:col-span-1",
        },
        {
            title: lang === 'es' ? "Gestión Cloud" : "Cloud Management",
            description: lang === 'es'
                ? "Administración de Microsoft 365 y Azure Active Directory."
                : "Microsoft 365 and Azure Active Directory administration.",
            header: <Skeleton className="bg-gradient-to-br from-blue-500/30 to-blue-500/10" image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" />,
            icon: <IconCpu className="h-4 w-4 text-blue-400" />,
            className: "md:col-span-1",
        },
        {
            title: lang === 'es' ? "Habilidades" : "Skills",
            description: "HTML, CSS, JavaScript, Python, SQL, Java.",
            header: <Skeleton className="bg-gradient-to-br from-indigo-500/30 to-indigo-500/10" image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" />,
            icon: <IconTableColumn className="h-4 w-4 text-indigo-400" />,
            className: "md:col-span-2",
        },
    ];

    return (
        <section id="sobre-mi" className="py-24 bg-slate-950 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-16 text-center">
                    {lang === 'es' ? "Sobre Mí" : "About Me"}
                </h2>
                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

const Skeleton = ({ className, image }) => (
    <div className={cn("flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-slate-900 border border-slate-800/50 overflow-hidden relative group", className)}>
        {image && (
            <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"
                alt=""
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/20 to-slate-950/80"></div>
    </div>
);
