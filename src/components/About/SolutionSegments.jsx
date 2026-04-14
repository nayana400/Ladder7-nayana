import React from 'react';
import { motion } from 'framer-motion';

const SolutionSegments = () => {
    const segments = [
        {
            title: "For Global Enterprises",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
            shadowColor: "shadow-blue-200/50",
            features: [
                "Rigid compliance (SOC2 Type II, GDPR)",
                "Risk mitigation & redundancy strategies",
                "Seamless legacy system integration"
            ]
        },
        {
            title: "For High-Growth SMBs",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 8.31m5.84 6.06a14.98 14.98 0 01-6.16 12.12 14.98 14.98 0 01-6.16-12.12M9.59 8.31a6 6 0 015.84-7.38v4.8" />
                </svg>
            ),
            iconBg: "bg-purple-50",
            iconColor: "text-purple-600",
            shadowColor: "shadow-purple-200/50",
            features: [
                "Direct access to Fortune 100 blueprints",
                "Elite talent with localized agility",
                "Rapid scaling architectural foundations"
            ]
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {segments.map((segment, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:shadow-gray-200/40 transition-all duration-500 group"
                    >
                        {/* Icon Container */}
                        <div className={`w-12 h-12 ${segment.iconBg} ${segment.iconColor} rounded-xl flex items-center justify-center mb-6 shadow-lg ${segment.shadowColor} group-hover:scale-110 transition-transform duration-500`}>
                            {segment.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                            {segment.title}
                        </h3>

                        {/* Features List */}
                        <ul className="space-y-4">
                            {segment.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l3 3 5-5" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 font-medium text-base leading-snug">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SolutionSegments;
