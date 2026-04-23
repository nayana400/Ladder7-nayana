import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import mindGymHero from "../../../assets/Images/products/mind_gym_hero.png";

const MindGym = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const highlights = [
        {
            title: "Personal Growth & Self-Awareness",
            desc: "Unlock your potential by understanding your mental patterns, leading to greater clarity and success.",
            icon: (
                <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Upskilling for a Balanced Life",
            desc: "Comprehensive skill development that prepares you for modern professional and personal environments.",
            icon: (
                <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                                Mental Fitness for Everyone
                            </span>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Mind Gym: Enhance <span className="text-[oklch(42.4%_0.199_265.638)]">Mental Well-Being.</span>
                            </h1>
                            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                An interactive program focused on stress management and decision-making skills to help you maintain a healthy mind.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-[oklch(42.4%_0.199_265.638)] hover:brightness-110 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-[oklch(42.4%_0.199_265.638)]/20"
                                >
                                    Start Your Journey Today
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="order-1 lg:order-2 group">
                            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <img
                                    src={mindGymHero}
                                    alt="Mind Gym Program"
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
                                Empowering Growth through <span className="text-[oklch(42.4%_0.199_265.638)]">Holistic Development.</span>
                            </h2>
                            
                            {/* Framework Alignment Card */}
                            <div className="bg-white p-8 rounded-2xl border-2 border-[oklch(42.4%_0.199_265.638)]/10 shadow-lg shadow-[oklch(42.4%_0.199_265.638)]/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[oklch(42.4%_0.199_265.638)]/5 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[oklch(42.4%_0.199_265.638)]/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Framework Alignment</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic">
                                    "Our curriculum is meticulously aligned with the <strong>UNICEF Global Framework on Transferable Skills</strong> and the <strong>Ikigai philosophy</strong>, ensuring a balance between purpose, skill, and societal contribution."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full text-left">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[oklch(42.4%_0.199_265.638)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-200">
                                    <h2 className="text-2xl font-bold mb-8 text-slate-900 border-b pb-4">Bridging Science and Well-Being</h2>
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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1: Stress Management Techniques */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-teal-300 to-[oklch(42.4%_0.199_265.638)] rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="absolute top-4 right-4 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>

                            <div className="relative z-30 pt-4 md:pt-8 pr-12 text-left">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Stress Management Techniques</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[260px]">Interactive exercises to manage stress effectively and maintain a balanced mindset in high-pressure situations.</p>
                            </div>
                        </div>

                        {/* Card 2: Enhanced Decision-Making Skills */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10 flex flex-col justify-between">
                            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-tr from-cyan-400 to-teal-100 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="absolute bottom-6 left-6 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.5m-6.15 0H5.378c-1.13 0-2.073.96-2.176 2.083A48.3 48.3 0 0 0 3 8.358v10.392c0 1.242 1.008 2.25 2.25 2.25h9z" />
                                </svg>
                            </div>

                            <div className="relative z-30 pl-16 md:pl-20 flex-1 text-left">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Decision-Making Skills</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">Sharpen cognitive abilities for more informed and confident decisions through logical frameworks and bias awareness.</p>
                            </div>
                        </div>

                        {/* Card 3: Practical Mental Health Strategies */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10 flex flex-col justify-between">
                            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="absolute top-4 left-4 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </div>

                            <div className="relative z-30 pt-2 lg:pt-4 pl-[4.5rem] flex-1 text-left">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Mental Health Strategies</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">Real-world tools and techniques for daily routines that support long-term well-being and emotional regulation.</p>
                            </div>
                        </div>

                        {/* Card 4: Holistic Mental Well-Being */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-tl from-indigo-500 via-[oklch(42.4%_0.199_265.638)] to-purple-300 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute bottom-6 right-6 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-1">
                                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>

                            <div className="relative z-30 flex-1 pr-16 md:pr-24 text-left">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Holistic Mental Well-Being</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">Combines stress reduction with cognitive enhancement for a fulfilling life aligned with your core values.</p>
                            </div>
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
                        Ready to transform your mental landscape?
                    </h2>
                    <p className="text-base text-blue-50 mb-10 max-w-2xl mx-auto">
                        Join thousands of others in the Mind Gym program and start building a more resilient, focused, and happier you today.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-3 md:py-4 bg-white text-[oklch(42.4%_0.199_265.638)] font-extrabold text-lg rounded-full hover:bg-gray-100 transition-all shadow-xl"
                    >
                        Start Your Journey Now
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default MindGym;

