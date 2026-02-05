"use client";
import React from "react";

export function CV({ lang }) {
    const cvFile = lang === 'es' ? '/cv/cv-es.pdf' : '/cv/cv-en.pdf';

    return (
        <section id="cv" className="py-20 bg-slate-900 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-8">
                    {lang === 'es' ? "Currículum Vitae" : "Curriculum Vitae"}
                </h2>
                <p className="text-slate-400 mb-12">
                    {lang === 'es'
                        ? "Puedes ver mi trayectoria completa aquí:"
                        : "You can view my complete trajectory here:"
                    }
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href={cvFile}
                        download
                        className="px-8 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2"
                    >
                        <i className="fas fa-download"></i>
                        {lang === 'es' ? "Descargar CV" : "Download CV"}
                    </a>
                    <a
                        href={cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-slate-700 text-white font-medium rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2"
                    >
                        <i className="fas fa-eye"></i>
                        {lang === 'es' ? "Ver en pestaña" : "View Online"}
                    </a>
                </div>
            </div>
        </section>
    );
}
