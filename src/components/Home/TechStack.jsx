import React from 'react';
import { motion } from 'framer-motion';

const row1Data = [
    { name: 'Angular.JS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
    { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'TailwindCSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' }
];

const row2Data = [
    { name: 'Google Cloud', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
    { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'PowerPoint', src: 'https://img.icons8.com/color/480/000000/microsoft-powerpoint-2019.png' },
    { name: 'WordPress', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
    { name: 'AEM', src: 'https://www.vectorlogo.zone/logos/adobe_experience_manager/adobe_experience_manager-icon.svg' }
];

const TechStack = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50/20 via-white to-gray-50/50 relative overflow-hidden font-sans border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6 text-center">

                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-[#111827] mb-16 tracking-tight"
                >
                    Technologies and Platforms We Use
                </motion.h2>

                {/* Icons Grid */}
                <div className="flex flex-col gap-10 md:gap-14 min-h-[300px]">
                    {/* Row 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8"
                    >
                        {row1Data.map((tech, idx) => (
                            <motion.div
                                key={`row1-${idx}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.03 }}
                                className="flex flex-col items-center group cursor-pointer w-20 md:w-24"
                            >
                                <div className="w-[66px] h-[66px] md:w-[84px] md:h-[84px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100/50 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:-translate-y-2">
                                    <img
                                        src={tech.src}
                                        alt={tech.name}
                                        className="w-9 h-9 md:w-[44px] md:h-[44px] object-contain filter transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <span className="text-[12px] md:text-[13px] text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8"
                    >
                        {row2Data.map((tech, idx) => (
                            <motion.div
                                key={`row2-${idx}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.03 + 0.1 }}
                                className="flex flex-col items-center group cursor-pointer w-20 md:w-24"
                            >
                                <div className="w-[66px] h-[66px] md:w-[84px] md:h-[84px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100/50 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:-translate-y-2">
                                    <img
                                        src={tech.src}
                                        alt={tech.name}
                                        className="w-9 h-9 md:w-[44px] md:h-[44px] object-contain filter transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <span className="text-[12px] md:text-[13px] text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default TechStack;
