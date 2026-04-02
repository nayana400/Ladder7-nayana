import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/Images/about.webp'; // Placeholder 1
import img2 from '../../assets/Images/services/service.webp'; // Placeholder 2

const Innovators = () => {
    return (
        <section className="py-16 bg-[#f0f9ff]/50 relative overflow-hidden font-sans">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Overlapping Images with Magenta Glow */}
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
                        {/* Soft Magenta Glow Accent */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#E91E63]/10 blur-[60px] rounded-full pointer-events-none"></div>

                        <div className="relative w-full max-w-[360px] aspect-[4/5] lg:aspect-auto lg:h-[440px]">
                            {/* Top-Left Image Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30, y: -30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute top-0 left-0 w-[75%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg z-0 border-[5px] border-white"
                            >
                                <img
                                    src={img1}
                                    alt="Innovation Team"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>

                            {/* Bottom-Right Overlapping Image Card - Reduced Overlap */}
                            <motion.div
                                initial={{ opacity: 0, x: 30, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                                className="absolute bottom-[-20px] right-[-20px] w-[65%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg z-10 border-[5px] border-white group"
                            >
                                <img
                                    src={img2}
                                    alt="Strategic Partnership"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Strategic Messaging */}
                    <div className="lg:w-1/2 text-center lg:text-left relative z-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002855] mb-12 leading-[1.2] tracking-tight whitespace-nowrap"
                        >
                            Why Innovators Partner With Ladder7
                        </motion.h2>

                        <div className="space-y-10">
                            {[
                                {
                                    title: "Revenue-First, Always",
                                    desc: "We do not build technology for technology's sake. Every platform, AI system, and integration we deliver is tied to a clear business outcome — more leads, lower acquisition costs, faster market entry, or higher conversion rates.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                                    )
                                },
                                {
                                    title: "Global Delivery, Local Intelligence",
                                    desc: "We are an active delivery partner across India, UAE, Saudi Arabia, Singapore, the UK, and North America. Our work is informed by the specific cultural, linguistic, and compliance requirements of each market — not applied generically.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    )
                                },
                                {
                                    title: "Security and Compliance Built In",
                                    desc: "Every website, AI model, and data integration we build is privacy-first by design — aligned with GDPR, India's DPDP Act, UAE AI Policy, and Singapore's PDPA — so your business is protected in every market you operate.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    )
                                }
                            ].map((card, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#002855] text-white flex items-center justify-center shadow-lg">
                                        {card.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-base font-bold text-[#002855] tracking-tight">{card.title}</h3>
                                        <p className="text-[#002855]/60 text-[13px] leading-relaxed font-medium">
                                            {card.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Innovators;
