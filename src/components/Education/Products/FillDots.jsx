import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import fillDotsHero from "../../../assets/Images/products/fill_dots_hero.png";

const FillDots = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const highlights = [
        {
            title: "Skill Gap Analysis",
            desc: "Identify the specific missing skills between your current profile and your target career role.",
            icon: (
                <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
        {
            title: "Industry-Aligned Upskilling",
            desc: "Access curated learning pathways designed by industry experts to ensure you are market-ready.",
            icon: (
                <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                                A Ladder7 Specialized Program
                            </span>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Fill Dots: <span className="text-[oklch(42.4%_0.199_265.638)]">Bridging Skill Gaps for Career Advancement</span>
                            </h1>
                            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                Tailored training solutions to help you advance to your next career level, whether you are a corporate professional, student, or returning to the workforce.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-[oklch(42.4%_0.199_265.638)] hover:brightness-110 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-[oklch(42.4%_0.199_265.638)]/20"
                                >
                                    Join Fill Dots Today
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="order-1 lg:order-2 group">
                            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <img
                                    src={fillDotsHero}
                                    alt="Fill Dots Program"
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
                                Connecting Ambition with <span className="text-[oklch(42.4%_0.199_265.638)]">Professional Readiness.</span>
                            </h2>
                            
                            {/* Framework Alignment Card */}
                            <div className="bg-white p-8 rounded-2xl border-2 border-[oklch(42.4%_0.199_265.638)]/10 shadow-lg shadow-[oklch(42.4%_0.199_265.638)]/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[oklch(42.4%_0.199_265.638)]/5 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[oklch(42.4%_0.199_265.638)]/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Career Roadmap Building</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic">
                                    "Our approach focuses on identifying industry requirements and mapping them to your potential, ensuring a seamless transition into your dream role."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full text-left">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[oklch(42.4%_0.199_265.638)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-200">
                                    <h2 className="text-2xl font-bold mb-8 text-slate-900 border-b pb-4">Bridge the Distance</h2>
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
                        <span className="text-[oklch(42.4%_0.199_265.638)] font-bold tracking-widest uppercase text-sm mb-4 block">Our Specialized Programs</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Tailored Career Solutions</h2>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Explore how we tailor our expertise to your specific career stage and professional goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1: Customized Skill Development */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group z-10 flex flex-col items-center">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12m0-4.5H17.25" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Skill Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Tailored programs to upskill corporate professionals for higher roles, ensuring they meet the demands of their next career move.</p>
                        </div>

                        {/* Card 2: Bridging Career Barriers */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group z-10 flex flex-col items-center">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">Bridging Career Barriers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Focused on eliminating skill gaps and overcoming obstacles, ensuring participants are fully prepared for career progression.</p>
                        </div>

                        {/* Card 3: Interview Readiness */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group z-10 flex flex-col items-center">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-16 h-16 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Readiness</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Targeted coaching to help students overcome interview fears and prepare for their first steps into the professional world.</p>
                        </div>

                        {/* Card 4: Career Restart Support */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group z-10 flex flex-col items-center">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-16 h-16 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Restart Support</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Specialized training for individuals returning after a break, helping them regain confidence and close skill gaps effectively.</p>
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
                        Ready to take your next career step?
                    </h2>
                    <p className="text-base text-blue-50 mb-10 max-w-2xl mx-auto">
                        Don't let skill gaps hold you back. Join the Fill Dots program today and start your journey toward professional excellence with Ladder7.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-3 md:py-4 bg-white text-[oklch(42.4%_0.199_265.638)] font-extrabold text-lg rounded-full hover:bg-gray-100 transition-all shadow-xl"
                    >
                        Contact a Career Specialist
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FillDots;
