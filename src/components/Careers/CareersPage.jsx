import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { motion } from 'framer-motion';

const CareersPage = () => {
    return (
        <div className="bg-[oklch(0.98_0_0)] min-h-screen">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-700 font-bold text-sm mb-8 border border-blue-100/50 shadow-sm transition-all hover:shadow-md hover:scale-105"
                        >
                            Now Accepting Applications
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight"
                        >
                            Launch Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dream Career</span> with Confidence
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Transform your career aspirations into reality with Experience the First Job, a revolutionary program.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-10"
                        >
                            <button className="px-10 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-xl shadow-gray-900/20 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300">
                                Explore Now
                            </button>
                        </motion.div>
                    </div>

                    {/* Placeholder Content */}
                    <div className="bg-white rounded-[32px] border border-gray-100 p-12 lg:p-20 text-center shadow-sm">
                        <div className="max-w-xl mx-auto">
                            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m0 10V4m-4 10h4" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Openings Currently</h2>
                            <p className="text-gray-500 mb-10 leading-relaxed">
                                We are currently updating our job board with new opportunities. Please check back soon or follow us on LinkedIn for updates.
                            </p>
                            <a
                                href="https://www.linkedin.com/company/ladder7-nextstep-solutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
                            >
                                Follow on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CareersPage;
