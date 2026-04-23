import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import pgm1 from '../../../assets/Images/pgm1.webp';
import pgm2 from '../../../assets/Images/pgm2.jpg';
import pgm3 from '../../../assets/Images/pgm3.avif';

const SLIDES = [
  {
    id: 1,
    titleTop: "Discover Your",
    titleHighlight: "Well-Being-Focused",
    titleBot: "Career!",
    description: "Design your well-being-focused career ladder with AI-enabled solutions aligned with UNICEF's global framework of transferable skills.",
    ctaText: "Learn More",
    ctaLink: "/my-ladder",
    image: pgm1
  },
  {
    id: 2,
    titleTop: "Empower Your",
    titleHighlight: "Future With Advanced",
    titleBot: "Learning Programs",
    description: "Empower your career with skill-building programs designed for today's dynamic world. Learn in-demand skills, stay ahead of the curve, and shape a brighter future.",
    ctaText: "Explore Now",
    ctaLink: "/internship",
    image: pgm2
  },
  {
    id: 3,
    titleTop: "Transform Your",
    titleHighlight: "Business With Advanced",
    titleBot: "Technology Strategies",
    description: "Drive your business forward with our customized IT services that streamline processes and ensure sustainable growth in today’s fast-paced digital environment.",
    ctaText: "Get Started",
    ctaLink: "#",
    image: pgm3
  }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const slide = SLIDES[currentIndex];

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-visible bg-[oklch(0.97_0_0)]">
            {/* Background Blurs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-100/40 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[500px]">
                {/* LEFT: Text Content */}
                <div className="flex flex-col items-start z-10 w-full relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-start w-full"
                        >
                            <motion.h1
                                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2] mb-6"
                            >
                                {slide.titleTop} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">{slide.titleHighlight}</span> <br className="hidden sm:block" /> {slide.titleBot}
                            </motion.h1>

                            <motion.p
                                className="text-base lg:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg font-medium"
                            >
                                {slide.description}
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                            >
                                <Link to={slide.ctaLink} className="px-8 py-4 bg-[#6226a9] text-white font-bold rounded-xl shadow-xl shadow-[#6226a9]/20 hover:bg-[#4d1d85] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#6226a9]/30 transition-all duration-300 w-full sm:w-auto text-center inline-block">
                                    {slide.ctaText}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT: Rotating Image Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
                >
                    <div className="relative w-full max-w-[420px] xl:max-w-[460px] aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-[2.5rem] rotate-6 scale-105 shadow-inner opacity-70 transition-transform duration-700 hover:rotate-12"></div>
                        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-100 to-blue-50 rounded-[2.5rem] -rotate-3 scale-100 border-2 border-white shadow-2xl overflow-hidden group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={slide.image}
                                    alt="Education Slide"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1.05 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                            </AnimatePresence>
                            {/* Dots Overlay */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {SLIDES.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`block h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === currentIndex ? 'w-6 bg-white shadow-sm' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
