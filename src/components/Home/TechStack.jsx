import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
    const pillars = [
        {
            category: "Digital Experience",
            subtitle: "Conversion-optimized frontends and mobile ecosystems.",
            techs: ["React", "Next.js", "TailwindCSS", "Framer Motion", "React Native", "Flutter"]
        },
        {
            category: "Applied Intelligence",
            subtitle: "GenAI orchestration and autonomous agentic systems.",
            techs: ["OpenAI", "Anthropic", "LangChain", "VectorDB", "Python", "LlamaIndex"]
        },
        {
            category: "Scalable Infrastructure",
            subtitle: "High-availability cloud and automated pipelines.",
            techs: ["AWS", "Azure Cloud", "Docker", "Kubernetes", "Node.js", "TypeScript"]
        },
        {
            category: "Headless Ecosystems",
            subtitle: "Agile content and composable commerce foundations.",
            techs: ["Contentful", "Sanity", "Shopify Plus", "Algolia", "PostgreSQL", "MongoDB"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden font-sans border-t border-gray-100">
            <div className="max-w-[1300px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-left mb-24">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-[#002855] mb-6 tracking-tight"
                    >
                        <span className="text-[#3fc0ed]">Our Tech Stack</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-[#3fc0ed] rounded-full"></div>
                </div>

                {/* Tech Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#002855] tracking-tight border-l-4 border-[#3fc0ed] pl-4">
                                    {pillar.category}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    {pillar.subtitle}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {pillar.techs.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 bg-[#f8fafc] text-[10px] font-bold text-[#002855]/70 rounded-md border border-gray-100 uppercase tracking-wider hover:bg-[#3fc0ed]/10 hover:text-[#3fc0ed] transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
