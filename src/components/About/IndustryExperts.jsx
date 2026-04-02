import React from 'react';
import { motion } from 'framer-motion';
import officeImg from '../../assets/Images/about.webp'; // Reusing established office imagery

const IndustryExperts = () => {
    return (
        <section className="py-20 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: Image Section with Signature Rounded Corner */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative w-full aspect-[4/3] rounded-bl-[40px] rounded-tr-[120px] overflow-hidden shadow-2xl border-2 border-white">
                        <img
                            src={officeImg}
                            alt="Ladder7 Office"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
                    </div>
                </motion.div>

                {/* RIGHT: Text Content with Structured Typography */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col space-y-8 order-1 lg:order-2"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-[3px] h-6 bg-blue-600 rounded-full"></div>
                            <span className="text-[#002855] text-sm font-bold uppercase tracking-[0.2em]">Elite Talent</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#002855] leading-[1.2] tracking-tight">
                            Led by Industry Experts. Trusted by the Best.
                        </h2>
                    </div>

                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                            Our team is comprised of veteran enterprise architects, specialized data scientists, and digital transformation strategists who have spent decades scaling mission-critical systems for Fortune 100 global clients.
                        </p>
                    </div>

                    <div className="space-y-6 pt-4">
                        {/* List Item 1: Fortune 500 Expertise (Strictly One Line) */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shrink-0 shadow-sm border border-blue-100/50">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                            </div>
                            <div className="flex flex-wrap items-baseline gap-x-2">
                                <h4 className="text-[#002855] text-base font-bold tracking-tight shrink-0 text-nowrap">Fortune 500 Expertise:</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    Experience leading teams at the world's largest financial and tech institutions.
                                </p>
                            </div>
                        </div>

                        {/* List Item 2: Senior Engagement (Strictly One Line) */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white shrink-0 shadow-sm border border-purple-100/50">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <div className="flex flex-wrap items-baseline gap-x-2">
                                <h4 className="text-[#002855] text-base font-bold tracking-tight shrink-0 text-nowrap">Senior Engagement:</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    Direct access to principal architects on every engagement, no junior hand-offs.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default IndustryExperts;
