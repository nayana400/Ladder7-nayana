import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ladder from "../../../assets/Images/products/myladder-hero.webp";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import OurJourney from "../OurJourney";

const MyLadder = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const highlights = [
        "Goal-oriented skill development mapped to market needs.",
        "Continuous improvement cycles to ensure steady progress.",
        "Evidence-based methodology for long-term satisfaction.",
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
                                Next-Gen Career Growth
                            </span>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                                Achieve Success with <span className="text-[oklch(42.4%_0.199_265.638)]">Personalized Growth.</span>
                            </h1>
                            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                MyLadder is a structured, step-by-step program designed to help you climb the ladder to your desired career milestones with precision and clarity.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-[oklch(42.4%_0.199_265.638)] hover:brightness-110 text-white text-lg font-bold  rounded-full transition-all transform hover:scale-105 shadow-xl shadow-[oklch(42.4%_0.199_265.638)]/20"
                                >
                                    Start Your Journey Today
                                </Link>

                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="order-1 lg:order-2 group">
                            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <img
                                    src={ladder}
                                    alt="My Ladder Program"
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
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                A Systematic Process for <span className="text-[oklch(42.4%_0.199_265.638)]">Unlimited Growth.</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                MyLadder isn't just another goal-tracking app. It's a comprehensive framework that bridges the gap between where you are today and where you want to be. We focus on the fundamental pillars of professional success: strategic planning, skill acquisition, and consistent measurement.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[oklch(42.4%_0.199_265.638)]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-200">
                                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Program Architecture</h2>
                                    <ul className="space-y-6">
                                        {highlights.map((item, index) => (
                                            <li key={index} className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[oklch(42.4%_0.199_265.638)]/10 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-[oklch(42.4%_0.199_265.638)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OurJourney />

            {/* Feature Cards Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1: Aviation Software */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10">
                            {/* Gradient Blob Background */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-cyan-300 to-[oklch(42.4%_0.199_265.638)] rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="absolute top-4 right-4 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg>
                            </div>

                            <div className="relative z-30 pt-4 md:pt-8 pr-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Goal Setting</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[260px]">Tailored objectives that align with your unique aspirations and current capabilities.</p>
                            </div>
                        </div>

                        {/* Card 2: Global Payroll */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-tr from-green-400 to-teal-100 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute bottom-6 left-6 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.5m-6.15 0H5.378c-1.13 0-2.073.96-2.176 2.083A48.3 48.3 0 0 0 3 8.358v10.392c0 1.242 1.008 2.25 2.25 2.25h9z" />
                                </svg>
                            </div>

                            <div className="relative z-30 pl-16 md:pl-20 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Structured Progression</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">A logical sequence of milestones that ensures you never feel overwhelmed or lost.</p>
                            </div>
                        </div>

                        {/* Card 3: ERP Software */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute top-4 left-4 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                            </div>

                            <div className="relative z-30 pt-2 lg:pt-4 pl-[4.5rem] flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Skill Development Focus</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">Curated resources and learning paths to bridge critical gaps in your professional profile.</p>
                            </div>
                        </div>

                        {/* Card 4: Logistics Software */}
                        <div className="relative rounded-2xl p-8 overflow-hidden bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group z-10 flex flex-col justify-between">
                            {/* Gradient Blob Background */}
                            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-tl from-indigo-500 via-[oklch(42.4%_0.199_265.638)] to-purple-300 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="absolute bottom-6 right-6 text-white z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-1">
                                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>

                            <div className="relative z-30 flex-1 pr-16 md:pr-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Standards</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">Leveraging industry-leading growth principles for worldwide career impact.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Empowering Your Growth Journey
                    </h2>

                    {/* 2-Column Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 max-w-5xl mx-auto text-left">
                        {/* First Column */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Wellbeing through Personal Growth</h3>
                            <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                We believe true success starts from within. MyLadder places a strong emphasis on self-awareness and mental balance, ensuring that as you climb, you remain grounded and fulfilled.
                            </p>
                        </div>

                        {/* Second Column */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Upskilling for a Balanced Life</h3>
                            <p className="text-blue-50 text-sm md:text-base leading-relaxed">
                                Our comprehensive skill development programs don't just teach you technical skills; they empower you to manage your time and energy efficiently for a truly high-impact, balanced career.
                            </p>
                        </div>
                    </div>

                    <p className="text-base text-[oklch(42.4%_0.199_265.638)]/70 mb-6 max-w-2xl mx-auto">
                        Ready to climb your ladder?
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-3 md:py-4 bg-white text-[oklch(42.4%_0.199_265.638)] font-extrabold text-lg rounded-full hover:bg-gray-100 transition-all shadow-xl"
                    >
                        Join the MyLadder Program
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default MyLadder;
