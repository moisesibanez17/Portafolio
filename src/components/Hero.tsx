"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles.tsx";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function Hero({ translations }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLElement>) => {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section
            id="inicio"
            onMouseMove={handleMouseMove}
            className="h-[100vh] w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md relative group"
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
                }}
            />

            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#10b981"
                />
            </div>

            <div className="relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center mb-6 md:mb-8">
                        <div className="relative group/avatar">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-25 group-hover/avatar:opacity-50 transition duration-1000 group-hover/avatar:duration-200"></div>
                            <img
                                src="/avatar.jpg"
                                alt="Moisés Ibáñez"
                                className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-2 border-emerald-500/50 object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20 font-sans tracking-tight leading-tight">
                        {translations.greeting} <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                            {translations.name}
                        </span>
                    </h1>

                    <div className="hidden md:block w-[40rem] h-10 relative mx-auto mt-4">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-1/4" />
                    </div>

                    <p className="mt-6 md:mt-4 text-slate-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-4">
                        {translations.lead}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 px-6 sm:px-0">
                        <a
                            href="#proyectos"
                            className="w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all text-center shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
                        >
                            {translations["btn-projects"]}
                        </a>
                        <a
                            href="#contacto"
                            className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-900 transition-all text-center active:scale-95"
                        >
                            {translations["btn-contact"]}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
