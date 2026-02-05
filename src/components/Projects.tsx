"use client";
import React from "react";
import { GlareCard } from "./ui/GlareCard.tsx";
import projects from "../data/projects.json";

export function Projects({ lang }) {
    return (
        <section id="proyectos" className="py-20 bg-slate-950 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                    {lang === 'es' ? 'Mis Proyectos' : 'My Projects'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <GlareCard key={project.id} className="flex flex-col group overflow-hidden">
                            <div className="w-full h-52 overflow-hidden relative bg-slate-900">
                                <img
                                    src={project.image}
                                    alt={project.title_es}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                            </div>

                            <div className="flex-1 flex flex-col p-6 pt-4">
                                <div className="mb-auto">
                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                                        {lang === 'es' ? project.title_es : project.title_en}
                                    </h3>
                                    <p className="text-slate-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                                        {lang === 'es' ? project.desc_es : project.desc_en}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20 uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-auto">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700/50 transition-all duration-200 active:scale-95"
                                    >
                                        {lang === 'es' ? 'Código' : 'Code'}
                                    </a>
                                </div>
                            </div>
                        </GlareCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
