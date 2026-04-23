import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import mirrorMeHero from "../../../assets/Images/products/mirror_me_hero.png";

const MirrorMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const highlights = [
        {
            title: "Self-Reflection & Insight",
            desc: "Discover your hidden strengths and understand your unique personality traits through guided reflection.",
            icon: (
                <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            title: "Behavioral Analysis",
            desc: "Gain a deeper understanding of your responses to different situations and how to optimize your behavior.",
            icon: (
                <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Navbar />
            <div className="h-20"></div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-12 text-left">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[oklch(42.4%_0.199_265.638)] uppercase border border-[oklch(42.4%_0.199_265.638)]/30 bg-[oklch(42.4%_0.199_265.638)]/5 rounded-full">
                                Discover Your True Potential
                            </span>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Mirror Me - <span className="text-[oklch(42.4%_0.199_265.638)]">Reflective Growth for a Better You</span>
                            </h1>
                            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                Gain a deeper understanding of your talents, IQ, EQ, and personal goals through insightful exercises that align self-awareness with life goals.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-[oklch(42.4%_0.199_265.638)] hover:brightness-110 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-[oklch(42.4%_0.199_265.638)]/20"
                                >
                                    Start Your Journey
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="order-1 lg:order-2 group">
                            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <img
                                    src={mirrorMeHero}
                                    alt="Mirror Me Program"
                                    className="w-full h-full object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detail Section */}
            <section className="py-24 bg-slate-50 text-left">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Seeing Yourself through a <span className="text-[oklch(42.4%_0.199_265.638)]">New Lens.</span>
                            </h2>
                            
                            {/* Framework Alignment Card */}
                            <div className="bg-white p-8 rounded-2xl border-2 border-[oklch(42.4%_0.199_265.638)]/10 shadow-lg shadow-[oklch(42.4%_0.199_265.638)]/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[oklch(42.4%_0.199_265.638)]/5 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[oklch(42.4%_0.199_265.638)]/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Psychometric Foundations</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic">
                                    "Mirror Me utilizes advanced psychometric models and behavioral science to provide a comprehensive and accurate reflection of your personality and potential."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full text-left">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[oklch(42.4%_0.199_265.638)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-200">
                                    <h2 className="text-2xl font-bold mb-8 text-slate-900 border-b pb-4">Depth of Analysis</h2>
                                    <ul className="space-y-8">
                                        {highlights.map((item, index) => (
                                            <li key={index} className="flex items-start gap-5">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[oklch(42.4%_0.199_265.638)]/10 flex items-center justify-center">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Feature Cards Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <div className="mb-16">
                        <span className="text-[oklch(42.4%_0.199_265.638)] font-bold tracking-widest uppercase text-sm mb-4 block">The Mirror Me Experience</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Core Program Pillars</h2>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Our structured approach acts as a "mirror," ensuring you see a clear picture of your potential and align self-awareness with life goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1: Enhanced Self-Awareness */}
                        <div className="relative rounded-2xl p-10 overflow-hidden bg-white border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group z-10 flex flex-col items-center">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-400 to-[oklch(42.4%_0.199_265.638)] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-20 h-20 rounded-2xl bg-[oklch(42.4%_0.199_265.638)]/10 flex items-center justify-center text-[oklch(42.4%_0.199_265.638)] mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Self-Awareness</h3>
                            <p className="text-gray-600 leading-relaxed">Deeper insights into your personality, cognitive skills, and emotional intelligence. Understand the "why" behind your actions.</p>
                        </div>

                        {/* Card 2: Simplified Reflection */}
                        <div className="relative rounded-2xl p-10 overflow-hidden bg-white border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group z-10 flex flex-col items-center">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplified Reflection</h3>
                            <p className="text-gray-600 leading-relaxed">Straightforward and accessible exercises for self-improvement. No jargon, just clear pathways to mental clarity and growth.</p>
                        </div>

                        {/* Card 3: Goal Alignment */}
                        <div className="relative rounded-2xl p-10 overflow-hidden bg-white border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group z-10 flex flex-col items-center">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M21.75 12H19.5m-1.591 5.834l-1.591-1.591M12 21.75V19.5m-5.834-.166l1.591-1.591M2.25 12h2.25m1.591-5.834l1.591 1.591" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Goal Alignment</h3>
                            <p className="text-gray-600 leading-relaxed">Harmonizing personal and professional ambitions with true potential. Bridge the gap between who you are and who you want to be.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-[oklch(42.4%_0.199_265.638)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-white rounded-full"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[40px] border-white rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to meet your real self?
                    </h2>
                    <p className="text-base text-blue-50 mb-10 max-w-2xl mx-auto">
                        Join thousands of others who have transformed their lives through the power of structured self-reflection.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-3 md:py-4 bg-white text-[oklch(42.4%_0.199_265.638)] font-extrabold text-lg rounded-full hover:bg-gray-100 transition-all shadow-xl"
                    >
                        Join the Program Now
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default MirrorMe;
