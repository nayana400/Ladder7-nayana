import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Revenue = () => {
    const navigate = useNavigate();

    return (
        <section className="py-8 px-6 font-sans bg-white">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative flex flex-col md:flex-row rounded-[1.5rem] overflow-hidden shadow-xl border border-gray-100 min-h-[280px]"
                >
                    {/* Background Panel (rendered first, sits behind) */}
                    <div className="hidden md:block absolute inset-0 bg-gray-50 rounded-[1.5rem]" />

                    {/* Left Panel — diagonal right edge via clip-path on desktop */}
                    <div
                        className="relative md:absolute top-0 left-0 h-full w-full md:w-[45%] flex flex-col justify-center p-8 md:p-14 z-20 md:[clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]"
                        style={{
                            background: 'oklch(42.4% .199 265.638)'
                        }}
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4 pr-0 md:pr-8">
                            Your Website Should Be Generating Revenue Right Now.
                        </h2>
                        <div className="w-10 h-1 bg-white/50 rounded-full" />
                    </div>

                    {/* Right Panel Content */}
                    <div className="relative md:ml-[46%] flex flex-col justify-center gap-6 md:gap-8 p-8 md:py-12 md:pr-14 z-10 bg-gray-50 md:bg-transparent">
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-normal">
                            Partner with Ladder7 to build an intelligent, connected, and scalable digital revenue system — engineered for your markets, your goals, and your growth.
                        </p>
                        <div>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => navigate('/contact')}
                                className="inline-flex items-center gap-2 font-bold text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                                style={{ background: 'oklch(42.4% .199 265.638)' }}
                            >
                                Start Your Revenue Engine Today
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Revenue;
