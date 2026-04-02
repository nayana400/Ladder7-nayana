import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import aboutImage from '../../assets/Images/about.webp';

import IndustryExperts from './IndustryExperts';
import Technologies from './Technologies';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans relative">
            <Navbar />

            {/* Hero Section (Re-styled for depth) */}
            <div className="pt-[6rem] md:pt-[7rem] px-4 md:px-8 max-w-[1500px] mx-auto w-full mb-16">
                <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-[2.5rem] shadow-2xl flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${aboutImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-center px-4"
                    >
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter">Who We Are</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium">
                            Empowering businesses through innovative digital solutions and strategic technology consulting.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 pb-24">

                {/* Mission and Vision Grid (Prioritized at Top) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/[0.04] border border-gray-100/60 relative overflow-hidden group"
                    >
                        {/* Signature Quarter-Circle Corner Shape - Top Right */}
                        <div
                            className="absolute -top-2 -right-2 w-24 h-24 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                            style={{ background: 'oklch(48.8% .243 264.376)', borderRadius: '0 24px 0 70px' }}
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-4">
                            <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </span>
                            Our Mission
                        </h3>
                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[0.15em] mb-4 relative z-10">Engineering Excellence. Delivering Outcomes.</p>
                        <p className="text-gray-600 leading-relaxed text-base relative z-10 font-medium">
                            Success requires flawless execution. Ladder7 Nextstep Solutions was founded to provide organizations with the architectural rigor, engineering maturity, and strategic clarity required to turn complex digital challenges into measurable market dominance. We engineer resilient, future-proof businesses.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-purple-900/[0.04] border border-gray-100/60 relative overflow-hidden group"
                    >
                        {/* Signature Quarter-Circle Corner Shape - Top Right */}
                        <div
                            className="absolute -top-2 -right-2 w-24 h-24 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                            style={{ background: 'oklch(48.8% .243 264.376)', borderRadius: '0 24px 0 70px' }}
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-4">
                            <span className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </span>
                            Our Vision
                        </h3>
                        <p className="text-purple-600 text-sm font-semibold uppercase tracking-[0.15em] mb-4 relative z-10">Bridging Ambition & Technical Execution.</p>
                        <p className="text-gray-600 leading-relaxed text-base relative z-10 font-medium">
                            To engineer the definitive standard for the intelligent enterprise. We envision a digital landscape where complex technology is no longer a bottleneck, but a frictionless, invisible engine for growth. Our goal is to empower every organization—from ambitious SMBs to global giants—to operate with predictive intelligence, limitless scalability, and absolute architectural resilience. We are building a future where your technology ecosystem actively anticipates the market, enabling you to lead it rather than react to it.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Container (Quantitative Impact) */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/[0.03] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
                            <span className="text-5xl font-black text-blue-600 mb-2">99.9%</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Uptime Engineered</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-purple-900/[0.03] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
                            <span className="text-5xl font-black text-purple-600 mb-2">50+</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Global Clients</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-emerald-900/[0.03] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
                            <span className="text-5xl font-black text-emerald-500 mb-2">250+</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Major Deployments</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-rose-900/[0.03] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
                            <span className="text-5xl font-black text-rose-500 mb-2">50+</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">POC</span>
                        </div>
                    </motion.div>
                </div>

                {/* IndustryExperts Component (Proof of Leadership) */}
                <IndustryExperts />

                {/* Technologies Component (100% Akira PLC Fidelity) */}
                <Technologies />

            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
