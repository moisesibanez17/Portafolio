"use client";
import React from "react";

const experience = [
    {
        date_es: "Septiembre 2025 — Presente",
        date_en: "September 2025 — Present",
        company: "Grupo ABG",
        desc_es: "Desarrollo de scripts avanzados de automatización Nivel 2 y gestión de infraestructura en Azure.",
        desc_en: "Development of advanced Level 2 automation scripts and Azure infrastructure management.",
        tags: ["PowerShell", "Azure", "Python"]
    },
    {
        date_es: "Enero 2024 — Mayo 2025",
        date_en: "January 2024 — May 2025",
        company: "Grupo Plasencia",
        desc_es: "Responsable de automatización de procesos TI y gestión de Active Directory.",
        desc_en: "Responsible for IT process automation and Active Directory management.",
        tags: ["Batch", "Python", "Active Directory"]
    }
];

export function Experience({ lang }) {
    return (
        <section id="experiencia" className="py-20 bg-slate-900 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                    {lang === 'es' ? "Experiencia" : "Experience"}
                </h2>

                <div className="space-y-12">
                    {experience.map((exp, i) => (
                        <div key={i} className="relative pl-8 border-l border-slate-700 group">
                            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {exp.company}
                                </h3>
                                <span className="text-sm font-medium text-slate-500 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                                    {lang === 'es' ? exp.date_es : exp.date_en}
                                </span>
                            </div>

                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {lang === 'es' ? exp.desc_es : exp.desc_en}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-700 px-2 py-0.5 rounded italic">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
