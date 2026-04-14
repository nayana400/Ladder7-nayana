import React from 'react';
import { motion } from 'framer-motion';

const CoreValues = () => {
    const techPillars = [
        {
            title: "Uncompromising Engineering Excellence",
            desc: "Designed for scalability, security, and sub-second performance at every digital layer.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9" /></svg>
            ),
            dotPos: "top-1 left-1"
        },
        {
            title: "Vendor-Neutral Objectivity",
            desc: "Independent, unbiased architectural recommendations tailored precisely to your goals.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            ),
            dotPos: "top-0 left-2"
        },
        {
            title: "Radical Transparency",
            desc: "Clear data, honest risk assessments, and unvarnished visibility into every process.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            ),
            dotPos: "top-2 left-0"
        },
        {
            title: "Outcome-Driven Innovation",
            desc: "Focus on technologies that reduce friction and drive tangible ROI for your business.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            ),
            dotPos: "top-1 left-1"
        }
    ];

    return (
        <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">

            {/* Signature Akira Wavy Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10,10 Q10,15 30,10 T70,10 T110,10" fill="none" stroke="#002855" strokeWidth="0.2" />
                    <path d="M-10,30 Q10,35 30,30 T70,30 T110,30" fill="none" stroke="#002855" strokeWidth="0.2" />
                    <path d="M-10,50 Q10,55 30,50 T70,50 T110,50" fill="none" stroke="#002855" strokeWidth="0.2" />
                    <path d="M-10,70 Q10,75 30,70 T70,70 T110,70" fill="none" stroke="#002855" strokeWidth="0.2" />
                    <path d="M-10,90 Q10,95 30,90 T70,90 T110,90" fill="none" stroke="#002855" strokeWidth="0.2" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold text-[#1A2B3C] tracking-tight mb-2"
                    >
                        Our Core Values
                    </motion.h2>
                </div>

                {/* Grid Container - Compact 4-Column Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techPillars.map((tech, index) => (
                        <Card key={index} tech={tech} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ tech, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white w-full p-10 rounded-[28px] shadow-sm hover:bg-[oklch(0.56_0.25_299.37)] transition-all duration-500 border border-gray-100 flex flex-col items-start text-left group cursor-pointer relative"
    >
        {/* Icon with Brand Color and Original Animation */}
        <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-x-2">
            <div className="text-[oklch(0.56_0.25_299.37)] transition-colors duration-500 group-hover:scale-110 group-hover:text-white">
                {tech.icon}
            </div>
        </div>

        <div className="space-y-3 text-left">
            <h3 className="text-xl font-bold text-[#1A2B3C] tracking-tight group-hover:text-white transition-colors duration-500">
                {tech.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                {tech.desc}
            </p>
        </div>
    </motion.div>
);

export default CoreValues;
