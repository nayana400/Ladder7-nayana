import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import ServiceCard from './ServiceCard';
import ServiceConnect from './ServiceConnect';
import TechStack from '../IT/TechStack';
import Footer from '../Common/Footer';
import heroBg from '../../assets/Images/services/service.webp';

const serviceSections = [
    {
        id: "web-app-dev",
        title: "Digital Experience & Web Engineering",
        subtitle: "Crafting seamless interactions and robust foundations for the modern web.",
        accentColor: "oklch(0.61_0.2_295.3)",
        items: [
            {
                title: "Adobe Experience Manager (AEM)",
                description: "Enterprise content management solutions designed for massive scale and seamless delivery across channels.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                )
            },
            {
                title: "Analytics & Experimentation",
                description: "Data-driven optimization utilizing A/B testing and behavioral analytics to drive conversion and engagement.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            },
            {
                title: "Headless CMS",
                description: "Modern decoupled architecture providing content flexibility and lightning-fast performance for omnichannel apps.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                )
            },
            {
                title: "Web Development",
                description: "Scalable web engineering using React, Next.js, and modern stacks to build high-performance applications.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                )
            },
            {
                title: "Localization, UI/UX, Accessibility & QA Testing",
                description: "Ensuring global reach and accessibility through rigorous testing, world-class UI/UX design, and automated QA pipelines.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: "product-dev",
        title: "AI & Intelligent Automation",
        subtitle: "Integrating next-generation intelligence into your business workflow.",
        accentColor: "oklch(0.5_0.15_260.18)",
        items: [
            {
                title: "AI Assistants & Chatbots",
                description: "Custom LLM-powered agents for customer support and internal knowledge management.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )
            },
            {
                title: "Agentic AI & Multi-Agent Systems",
                description: "Complex task orchestration using specialized AI agents that collaborate to solve business problems.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )
            },
            {
                title: "Intelligent Websites with Predictive Experiences",
                description: "Predictive user experiences that adapt content in real-time based on visitor intent.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                )
            },
            {
                title: "AI Product Development & Research POCs",
                description: "Rapid prototyping and Proof of Concepts (POC) for AI-first features and internal products.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
                    </svg>
                )
            },
            {
                title: "Hyper Automation (AI + RPA)",
                description: "End-to-end automation of manual processes combining traditional Robotic Process Automation with cognitive AI capabilities.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: "it-consultancy",
        title: "Strategy & Technology Consulting",
        subtitle: "The roadmap to digital maturity and sustainable innovation.",
        accentColor: "oklch(59.6%_0.145_163.225)",
        theme: "green",
        items: [
            {
                title: "Technology & Platform Consulting",
                description: "Neutral, expert advice on selecting the right technology stack and cloud platforms that align with your 5-year business goals.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                )
            },
            {
                title: "Skilled Resource Augmentation",
                description: "Deploy high-caliber engineering and design talent directly into your internal teams to accelerate delivery cycles.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                )
            },
            {
                title: "Get-to-Green Recovery Strategies",
                description: "Technical rescue for failing projects. We audit, restructure, and get your critical software initiatives back on track.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                )
            },
            {
                title: "Product Ideation & Solution Blueprinting",
                description: "From concept to technical blueprint. We translate vision into actionable architectural designs and development roadmaps.",
                icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                )
            }
        ]
    }
];

const ServicesPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans relative">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[75vh] mt-[5rem] overflow-hidden bg-white rounded-bl-[4rem] lg:rounded-bl-[6rem] shadow-sm mb-12">
                <div
                    className="absolute top-0 right-0 w-[95%] lg:w-[85%] h-full bg-cover bg-center rounded-l-[3rem] lg:rounded-l-[4rem] overflow-hidden"
                    style={{ backgroundImage: `url(${heroBg})` }}
                >
                    <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* Red Box Overlay */}
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-[85%] md:w-[60%] lg:w-[45%] h-auto py-10 md:py-16 px-8 md:px-16 bg-[oklch(0.61_0.2_295.3)] rounded-r-[3rem] shadow-2xl z-10 overflow-hidden flex flex-col justify-center"
                >
                    {/* Wavy Background Graphic inside red box */}
                    <svg className="absolute bottom-0 right-0 w-full h-auto opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 C30,70 70,30 100,50 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" />
                        <path d="M0,60 C30,80 70,40 100,60 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" />
                        <path d="M0,70 C30,90 70,50 100,70 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" />
                    </svg>

                    <h1 className="relative font-bold text-3xl md:text-4xl lg:text-4xl text-white leading-tight md:leading-[1.15] tracking-tight z-10">
                        Empowering Your <br className="hidden md:block" />
                        Business with <br className="hidden md:block" />
                        Cutting-Edge <br className="hidden md:block" />
                        Solutions
                    </h1>
                </motion.div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    <div className="h-1.5 w-8 bg-white rounded-full"></div>
                    <div className="h-1.5 w-8 bg-white/40 rounded-full cursor-pointer hover:bg-white/60"></div>
                    <div className="h-1.5 w-8 bg-white/40 rounded-full cursor-pointer hover:bg-white/60"></div>
                    <div className="h-1.5 w-8 bg-white/40 rounded-full cursor-pointer hover:bg-white/60"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-24 mt-8 md:mt-16">
                <div className="max-w-4xl">
                    <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-8">
                        Driving growth through technology and strategy with our specialized digital engineering and AI-driven expertise. We build the future of enterprise experiences.
                    </p>
                    <Link to="/contact">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-colors duration-300"
                        >
                            Get In Touch
                        </motion.button>
                    </Link>
                </div>
            </div>

            <div className="pb-16 px-6 max-w-7xl mx-auto relative z-10 w-full">
                {serviceSections.map((section, sIndex) => (
                    <div id={section.id} key={section.title} className={`${sIndex !== 0 ? "mt-32" : ""} scroll-mt-32`}>
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="pl-6 border-l-4 mb-12"
                            style={{ borderLeftColor: section.accentColor }}
                        >
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                                {section.title}
                            </h2>
                            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
                                {section.subtitle}
                            </p>
                        </motion.div>

                        {/* Cards Grid */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 ${section.items.length === 4 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-10`}>
                            {section.items.map((item, iIndex) => (
                                <ServiceCard
                                    key={item.title}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                    index={iIndex}
                                    theme={section.theme || 'orange'}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div id="tech-stack" className="scroll-mt-32">
                <TechStack />
            </div>
            <ServiceConnect />

            <Footer />
        </div>
    );
};

export default ServicesPage;
