import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "The MERN Stack internship was highly practical and project-driven. I built full-stack applications using MongoDB, Express, React, and Node.js, which helped me understand how modern web applications are developed and deployed",
        author: "Rahul R",
        role: "Intern, Ladder7 Next Step Solutions",
    },
    {
        id: 2,
        quote: "Before joining, I had very limited knowledge of AEM, but this internship made everything clear and structured. The practical assignments and guidance helped me confidently work with templates, components, and content workflows.",
        author: "Sneha S",
        role: "Intern, Ladder7 Next Step Solutions",
    },
    {
        id: 3,
        quote: "The AI/ML internship at Ladder7 provided a solid foundation in machine learning concepts along with real-world use cases. Working on datasets and building models helped me understand how AI is applied in practical scenarios.",
        author: "Vikas PS",
        role: "Intern, Ladder7 Next Step Solutions",
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 5000); // 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-12 overflow-hidden bg-[#f8fafc] font-sans border-t border-gray-100">

            {/* Triangle Blue Background Shape pointing to Top-Right */}
            <div
                className="absolute top-0 right-0 w-[90%] h-full bg-[#3fc0ed] z-0 hidden lg:block"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }}
            ></div>
            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#3fc0ed] lg:hidden z-0"></div>

            <div className="max-w-[1100px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">

                    {/* Left Column: Heading and Description */}
                    <div className="lg:w-[35%] text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-black text-[#002855] leading-[1.1] mb-1 tracking-tight">
                                What Our Amazing <br />
                                Clients
                            </h2>
                            <h2 className="text-3xl lg:text-4xl font-black text-[#3fc0ed] leading-[1.1] mb-4">
                                Say About Us
                            </h2>
                            <p className="text-gray-400 text-sm font-normal leading-relaxed max-w-[280px]">
                                Leading start-ups, SMEs and large-scale organizations have trusted us.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Static Card with Dynamic Content */}
                    <div className="lg:w-[70%] w-full flex flex-col items-center lg:items-end translate-y-4">
                        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-[480px] min-h-[350px] flex flex-col justify-between relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col h-full justify-between"
                                >
                                    <div className="space-y-3">
                                        {/* Small Red Quote Symbol */}
                                        <div className="text-[#ff4d4d] text-[3rem] font-serif leading-none opacity-90 h-8">
                                            “
                                        </div>
                                        <p className="text-gray-600 text-sm font-medium leading-[1.6]">
                                            {testimonials[index].quote}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-gray-50">
                                        <h4 className="text-[#002855] text-base font-bold tracking-tight">
                                            {testimonials[index].author}
                                        </h4>
                                        <p className="text-gray-400 text-[11px] font-normal leading-tight">
                                            {testimonials[index].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Slider Indicators aligned to right */}
                        <div className="flex justify-center lg:justify-end gap-2 mt-8 lg:mr-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setIndex(idx)}
                                    className={`h-1.5 transition-all duration-300 rounded-full ${index === idx ? "w-6 bg-white" : "w-2 bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
