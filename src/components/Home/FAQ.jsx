import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "What industries does Ladder7 specialize in?",
            a: "We specialize in Finance, E-commerce, Healthcare, and Education, providing custom software, cloud strategies, and GenAI integrations tailored to high-growth businesses."
        },
        {
            q: "How long does a typical custom application project take?",
            a: "Project timelines vary by complexity. A standard MVP (Minimum Viable Product) usually takes 8–12 weeks from Discovery to Launch, while large enterprise solutions can take 6+ months."
        },
        {
            q: "Do you provide ongoing maintenance after launch?",
            a: "Yes, we offer flexible post-launch support and maintenance contracts to ensure your application remains secure, up-to-date, and performs optimally as your user base scales."
        },
        {
            q: "Can you help migrate our legacy systems to the cloud?",
            a: "Absolutely. Our Cloud Strategy team specializes in zero-downtime migrations to AWS and Azure, focusing on modernization and cost-optimizing your infrastructure."
        },
        {
            q: "Is your Academy program separate from your IT services?",
            a: "While they share the Ladder7 ethos, the Academy is a dedicated educational arm focused on bridging the talent gap. We often recruit top graduates from the Academy for our IT projects."
        }
    ];

    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-left mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-[#333] mb-6 tracking-tight"
                    >
                        Common <span className="text-[#3fc0ed]">Questions</span>
                    </motion.h2>
                    <div className="w-16 h-1 bg-[#3fc0ed] rounded-full mb-4"></div>
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
                                className="w-full text-left p-6 md:p-8 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                            >
                                <span className="text-[#333] font-bold text-base md:text-lg pr-8">{faq.q}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#3fc0ed] transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
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
                                        <div className="px-8 pb-8 text-[#666] leading-relaxed border-t border-gray-50 pt-4">
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
