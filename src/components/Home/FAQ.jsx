import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "What service does Ladder7 Nextstep Solutions provide?",
            a: "Ladder7 delivers intelligent web engineering, AI chatbots and automation, Adobe Experience Manager (AEM) implementation, headless CMS platforms, CRM and analytics integration, and technology strategy consulting. Everything we build is connected to one goal — turning your digital presence into a measurable revenue engine."
        },
        {
            q: "Does Ladder7 work with startups,SMBs, or larger organisations?",
            a: "We work with businesses of all sizes — from funded startups and fast-growing SMBs to established brands expanding across new markets. We actively serve clients across India, the UAE, Saudi Arabia, Singapore, the UK, and the USA, with delivery tailored to the specific needs, budgets, and growth stages of each organisation."
        },
        {
            q: "How does Ladder7 approach AI and inteligent website implementation?",
            a: "We take a practical, outcome-driven approach to AI. This includes building secure AI chatbots on LLM and RAG architectures, deploying intelligent website personalisation based on real-time visitor behaviour, and developing autonomous multi-agent systems for operational automation — all grounded in privacy-first data security and regional compliance standards."
        },

    ];

    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold text-black mb-6 tracking-tight"
                    >
                        FAQ
                    </motion.h2>
                    <div className="w-16 h-1 bg-[oklch(42.4%_.199_265.638)] rounded-full mb-4 mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full text-left p-4 md:p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors group"
                            >
                                <span className="text-[#333] font-bold text-sm md:text-base pr-8 group-hover:text-[oklch(42.4%_.199_265.638)] transition-colors duration-200">{faq.q}</span>
                                <div className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} style={{ color: 'oklch(42.4% .199 265.638)' }}>
                                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 text-[#666] text-sm leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
