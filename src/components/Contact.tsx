"use client";
import React from "react";
import { motion } from "framer-motion";

export function Contact({ lang }) {
    return (
        <section id="contacto" className="py-32 bg-slate-950 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        {lang === 'es' ? "¿Hablamos?" : "Let's Talk"}
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        {lang === 'es'
                            ? "¿Tienes un proyecto en mente o simplemente quieres saludar? Mi bandeja de entrada siempre está abierta."
                            : "Have a project in mind or just want to say hi? My inbox is always open."
                        }
                    </p>

                    <a
                        href="mailto:moisesibanez17@gmail.com"
                        className="inline-flex items-center justify-center px-10 py-4 bg-emerald-500 text-slate-950 font-bold text-lg rounded-2xl hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                        {lang === 'es' ? "Enviar mensaje" : "Send Message"}
                    </a>

                    <div className="mt-16 flex justify-center gap-8">
                        <a href="https://github.com/moisesibanez17" className="text-slate-500 hover:text-white transition-colors text-2xl">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/moisesibanez17" className="text-slate-500 hover:text-white transition-colors text-2xl">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
