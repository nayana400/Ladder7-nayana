import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import career1 from '../../assets/Images/careers/career1.webp';

const CareersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const highlights = [
        {
            title: "Work on What's Next",
            desc: "Architect AI-driven platforms and headless commerce engines for the world's leading brands.",
            icon: (
                <svg className="w-5 h-5 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Learn from Industry Veterans",
            desc: "Work side-by-side with Principal Architects and former Big Four consultants in a flat hierarchy.",
            icon: (
                <svg className="w-5 h-5 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            )
        },
        {
            title: "Make a Measurable Impact",
            desc: "Our code handles millions of daily transactions. See your work live on global stages within weeks.",
            icon: (
                <svg className="w-5 h-5 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <Navbar />
            {/* Navigation Spacer */}
            <div className="h-20"></div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-12">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[oklch(42.4%_0.199_265.638)] uppercase border border-[oklch(42.4%_0.199_265.638)]/30 bg-[oklch(42.4%_0.199_265.638)]/5 rounded-full">
                                We are hiring globally
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Engineer the Future of <br className="hidden md:block" />
                                <span className="text-[oklch(42.4%_0.199_265.638)]">Digital Business.</span>
                            </h1>
                            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                Build intelligent ecosystems and next-generation digital platforms for Fortune 100 enterprises and high-growth innovators.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#openings"
                                    className="px-8 py-4 bg-[oklch(42.4%_0.199_265.638)] hover:brightness-110 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-[oklch(42.4%_0.199_265.638)]/20"
                                >
                                    Explore Open Roles
                                </a>
                                <Link
                                    to="/services#tech-stack"
                                    className="px-8 py-4 border-2 border-[oklch(42.4%_0.199_265.638)] text-[oklch(42.4%_0.199_265.638)] text-lg font-bold rounded-full hover:bg-[oklch(42.4%_0.199_265.638)]/5 transition-all transform hover:scale-105 inline-block"
                                >
                                    Our Tech Stack
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="order-1 lg:order-2 group">
                            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <img
                                    src={career1}
                                    alt="Careers at Ladder7"
                                    className="w-full h-full object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detail Section */}
            <section id="details" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Proven at Global Scale.<br />
                                <span className="text-[oklch(42.4%_0.199_265.638)]">Executed with Agility.</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Top-tier engineers and strategists don’t just want a job; they want to solve complex problems at scale. At Ladder7, we bridge the gap between strategic consulting and elite software engineering.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                When you join our team, you aren't just maintaining legacy code. You are architecting Agentic AI systems, deploying global Adobe Experience Manager (AEM) infrastructures, and building headless digital experiences that dictate market leadership.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[oklch(42.4%_0.199_265.638)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-200">
                                    <ul className="space-y-8">
                                        {highlights.map((item, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(42.4%_0.199_265.638)]/10 flex items-center justify-center">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h3>
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
            {/* Environment Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            An environment engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-blue-600">excellence</span>.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            We hire brilliant minds and give them the autonomy, tools, and psychological safety required to innovate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1: Uncompromising Quality */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-300 to-[oklch(42.4%_0.199_265.638)] rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute top-4 right-4 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </div>

                            <div className="relative z-30 pt-4 md:pt-8 pr-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Uncompromising Quality</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    We don't cut corners. We believe in clean architecture and rigorous testing as standard.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Radical Transparency */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-tr from-indigo-400 to-teal-100 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute bottom-6 left-6 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>

                            <div className="relative z-30 pl-16 md:pl-20 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Radical Transparency</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    From financial performance to strategic roadmaps, information flows freely to everyone.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Continuous Evolution */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-purple-500 via-orange-400 to-yellow-300 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute top-4 left-4 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.456-2.455l.258-1.036.259 1.036a3.375 3.375 0 0 0 2.455 2.456l1.036.258-1.036.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 22.5l-.394-1.933a2.25 2.25 0 0 0-1.713-1.713L12.46 18.45l1.933-.394a2.25 2.25 0 0 0 1.713-1.713l.394-1.933.394 1.933a2.25 2.25 0 0 0 1.713 1.713l1.933.394-1.933.394a2.25 2.25 0 0 0-1.713 1.713Z" />
                                </svg>
                            </div>

                            <div className="relative z-30 pt-2 lg:pt-4 pl-[4.5rem] flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Evolution</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    10% of your time dedicated to learning, R&D projects, and professional certifications.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Inclusive by Design */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-tl from-emerald-500 via-[oklch(42.4%_0.199_265.638)] to-teal-300 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute bottom-6 right-6 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-1">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-3.833-6.248 4.124 4.124 0 0 0-3.214 1.594 5.473 5.473 0 0 1 2.75 4.223ZM12 15c3.314 0 6 2.686 6 6H6c0-3.314 2.686-6 6-6Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                            </div>

                            <div className="relative z-30 flex-1 pr-16 md:pr-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusive by Design</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Diversity is our engine. We foster a culture where every perspective elevates our collective output.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks & Benefits Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Life at Ladder7: <span className="text-[oklch(42.4%_0.199_265.638)]">Perks & Benefits</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            We believe in supporting our team members both professionally and personally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Perk 1: Flexible & Hybrid Work */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[oklch(42.4%_0.199_265.638)] mb-6 group-hover:bg-[oklch(42.4%_0.199_265.638)] group-hover:text-white transition-all duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible & Hybrid Work</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Work from our hubs or your home office. We focus on outcomes, not office hours.
                            </p>
                        </div>

                        {/* Perk 2: Competitive Compensation */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3 1.343 3 3-1.343 3-3 3m0-13a9 9 0 110 18 9 9 0 010-18zm0 0V6m0 12v2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Compensation</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Top-of-market salaries, performance bonuses, and equity participation for every role.
                            </p>
                        </div>

                        {/* Perk 3: Health & Wellness */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Wellness</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Premium healthcare plans, with a well-being focused career growth.
                            </p>
                        </div>

                        {/* Perk 4: Career Velocity */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Velocity</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Transparent promotion paths and mentorship to accelerate your professional growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Current Openings Section */}
            <section id="openings" className="py-16 bg-white relative overflow-hidden scroll-mt-24">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <div className="max-w-3xl mx-auto mb-10 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
                            Current <span className="text-[oklch(42.4%_0.199_265.638)]">Openings</span>
                        </h2>
                        <p className="text-base text-slate-600 leading-relaxed font-medium">
                            Join us in building the next generation of digital infrastructure.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl p-8 border-2 border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-slate-400">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3l18 18" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No Openings</h3>
                        <p className="text-slate-600">
                            Check back later or join our talent network below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Talent Network Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-5xl mx-auto bg-[oklch(0.57_0.26_302.67)] rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-[oklch(0.57_0.26_302.67)]/30 border border-white/10 relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl opacity-50"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                            <div className="flex-1 space-y-6 text-white">
                                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                                    Don’t See the <span className="text-white/80">Perfect Fit?</span>
                                </h2>
                                <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-medium">
                                    We are always looking for exceptional talent. If you have a passion for elite engineering and digital strategy, we want to hear from you.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href="mailto:careers@ladder7.in"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[oklch(0.57_0.26_302.67)] text-lg font-bold rounded-full hover:bg-slate-50 transition-all transform hover:scale-105 shadow-xl shadow-black/20"
                                >
                                    Join Our Talent Network
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
