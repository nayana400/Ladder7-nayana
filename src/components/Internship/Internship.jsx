import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import career images
import career1 from '../../assets/Images/careers/career1.webp';
import career2 from '../../assets/Images/careers/career2.webp';
import career3 from '../../assets/Images/careers/career3.webp';

const CAREER_IMAGES = [career1, career2, career3];

const OPEN_POSITIONS = [
    {
        title: "Jr. AI/ML Developer (Intern)",
        location: "Trivandrum",
        duration: "3 months",
        mode: "Hybrid",
        qualification: "B.Tech / MCA / BCA",
        description: "Join our engineering team to bridge the gap between raw data and intelligent insights. Assist in building, testing, and deploying models that solve real-world problems.",
        responsibilities: "Data cleaning, model training (Regression, NLP), Python coding, backend integration.",
        requirements: "Python (NumPy, Pandas), Deep Learning basics, SQL/Git.",
        quote: "Ready to build the future? If you are passionate about data, algorithms, and solving complex problems,",
        category: "Engineering",
        image: career2,
        type: "Stipend"
    },
    {
        title: "Jr. MERN Developer (Intern)",
        location: "Trivandrum",
        duration: "3 months",
        mode: "Hybrid",
        qualification: "B.Tech / MCA / BCA",
        description: "Budding Full-Stack Developer to scale web platforms. Perfect for JS lovers who want to see code in production and impact real users.",
        responsibilities: "React components, Node.js/Express APIs, MongoDB management, UI/UX fixes.",
        requirements: "JS (ES6+), HTML5/CSS3, State Management, GitHub portfolio.",
        quote: "Build. Ship. Repeat. Join a team where your code goes live and impacts real users.",
        category: "Engineering",
        image: career3,
        type: "Stipend"
    },
    {
        title: "Jr. HR (Intern)",
        location: "Trivandrum",
        duration: "3 months",
        mode: "Hybrid",
        qualification: "MBA in HR / Marketing",
        description: "First point of contact for candidates, helping maintain a high-energy company culture and sourcing the best talent.",
        responsibilities: "Sourcing/screening, interview coordination, onboarding assistance, team events.",
        requirements: "English communication, high EQ, organizational skills, HR/Business degree.",
        quote: "Love working with people? Help us build a world-class team and a culture people love.",
        category: "HR",
        image: career1,
        type: "Paid"
    },
    {
        title: "Jr. Digital Marketing Executive (Intern)",
        location: "Trivandrum",
        duration: "3 months",
        mode: "Hybrid",
        qualification: "Degree in Marketing / Business",
        description: "Creative, data-curious intern to support digital marketing across channels and help tell our brand's story.",
        responsibilities: "Social graphics (Canva), copywriting, SEO research, PPC/Email support.",
        requirements: "Creative eye, SEO/SEM basics, storytelling skills, digital tool eagerness.",
        quote: "Grow our brand (and your skills). If you’re a creative storyteller, come help us make an impact.",
        category: "Marketing",
        image: career1,
        type: "Stipend"
    }
];


const Internship = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedJob, setSelectedJob] = useState(OPEN_POSITIONS[0]);
    const detailRef = useRef(null);

    // Auto-rotate images on right side every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAREER_IMAGES.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleJobSelect = (job) => {
        setSelectedJob(job);
        // On mobile, scroll to detail section when a job is clicked
        if (window.innerWidth < 768) {
            setTimeout(() => {
                detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Premium Home-Inspired Hero Section */}
            <section className="relative pt-20 pb-10 lg:pt-32 lg:pb-16 overflow-visible">
                {/* Background Blurs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-100/40 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    {/* LEFT: Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        className="flex flex-col items-start z-10 w-full"
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-700 font-bold text-sm mb-8 border border-blue-100/50 shadow-sm transition-all hover:shadow-md hover:scale-105"
                        >
                            NOW ACCEPTING APPLICATIONS
                        </motion.div>

                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8"
                        >
                            Launch Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Dream Career</span> with Confidence
                        </motion.h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-base lg:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg font-medium"
                        >
                            Transform your career aspirations into reality with Experience the First Job, a revolutionary program.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                        >
                            <a href="#open-positions" className="px-8 py-4 bg-[#6226a9] text-white font-bold rounded-xl shadow-xl shadow-[#6226a9]/20 hover:bg-[#4d1d85] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#6226a9]/30 transition-all duration-300 w-full sm:w-auto text-center">
                                Explore Now
                            </a>

                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Rotating Image Stack (Scaled Up Slightly) */}
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
                                        key={currentImageIndex}
                                        src={CAREER_IMAGES[currentImageIndex]}
                                        alt="Career at Ladder7"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1.05 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                </AnimatePresence>
                                {/* Dots Overlay */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {CAREER_IMAGES.map((_, i) => (
                                        <span
                                            key={i}
                                            className={`block h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-6 bg-white shadow-sm' : 'w-1.5 bg-white/40'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section
                id="open-positions"
                className="py-20 bg-[oklch(0.97_0_0)] relative z-10 scroll-mt-24"
            >
                <div className="container mx-auto px-6 max-w-6xl">
                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Accelerator Programs</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#003399] to-indigo-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Choose your path and gain industry-ready skills through our specialized tracks. Each program is designed with high-impact learning outcomes.
                        </p>
                    </div>

                    {/* Split Panel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                        {/* LEFT: Job List */}
                        <div className="flex flex-col gap-5 h-full justify-between">
                            {OPEN_POSITIONS.map((job, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleJobSelect(job)}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className={`text-left w-full px-6 py-5 min-h-[120px] flex flex-col justify-center rounded-2xl border border-gray-100 border-b-[6px] border-b-[#003399] transition-all duration-300 cursor-pointer ${selectedJob.title === job.title
                                        ? 'bg-blue-50 shadow-[0_20px_40px_rgba(0,51,153,0.1)] scale-[1.02]'
                                        : 'bg-white hover:border-gray-200 hover:shadow-lg hover:scale-[1.01]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between w-full mb-4">
                                        <h3 className={`font-bold text-base md:text-lg transition-colors ${selectedJob.title === job.title ? 'text-[#003399]' : 'text-gray-800'}`}>{job.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">📍 {job.location}</span>
                                        <span className="flex items-center gap-1">⏱ {job.duration}</span>
                                        <span className="flex items-center gap-1">💼 {job.mode}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* RIGHT: Selected Job Detail */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                ref={detailRef}
                                key={selectedJob.title}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white border border-gray-100 border-b-[8px] border-b-[#003399] rounded-3xl overflow-hidden h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col scroll-mt-24"
                            >
                                {/* Image */}
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={selectedJob.image}
                                        alt={selectedJob.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-6 left-8">
                                        <h3 className="text-white text-3xl font-bold tracking-tight">{selectedJob.title}</h3>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-8 flex flex-col flex-1">
                                    {/* Info Grid */}
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-5 mt-[-10px]">
                                        {[
                                            { label: 'Location', value: selectedJob.location },
                                            { label: 'Duration', value: selectedJob.duration },
                                            { label: 'Working Mode', value: selectedJob.mode },
                                            { label: 'Qualification', value: selectedJob.qualification },
                                        ].map(({ label, value }) => (
                                            <div key={label}>
                                                <p className="text-[#003399] text-[10px] md:text-xs font-bold uppercase tracking-wide mb-0.5">{label}</p>
                                                <p className="text-gray-700 text-sm font-medium">{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <div className="border-t border-gray-100 pt-6 mb-6">
                                        <div className="max-h-[220px] overflow-y-auto pr-2 overflow-x-hidden" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}>
                                            <div className="space-y-5">
                                                <div>
                                                    <h4 className="text-gray-900 font-bold mb-2 border-l-4 border-blue-600 pl-3 text-sm uppercase tracking-wide">Description</h4>
                                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{selectedJob.description}</p>
                                                </div>

                                                {selectedJob.responsibilities && (
                                                    <div>
                                                        <h4 className="text-gray-900 font-bold mb-2 border-l-4 border-blue-600 pl-3 text-sm uppercase tracking-wide">Responsibilities</h4>
                                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{selectedJob.responsibilities}</p>
                                                    </div>
                                                )}

                                                {selectedJob.requirements && (
                                                    <div>
                                                        <h4 className="text-gray-900 font-bold mb-2 border-l-4 border-blue-600 pl-3 text-sm uppercase tracking-wide">Requirements</h4>
                                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{selectedJob.requirements}</p>
                                                    </div>
                                                )}

                                                {selectedJob.quote && (
                                                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 relative mt-2 mr-2">
                                                        <span className="text-blue-200 text-4xl absolute top-1 left-2 font-serif opacity-50 select-none">&quot;</span>
                                                        <p className="text-gray-700 italic text-sm md:text-base relative z-10 pl-6 pr-2 py-1">
                                                            {selectedJob.quote}&quot;
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    <button className="mt-auto mx-auto w-fit px-8 py-2.5 text-sm bg-[#003399] hover:bg-[#0044cc] text-white font-semibold rounded-full transition-all transform hover:scale-[1.05] flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_20px_-5px_rgba(0,51,153,0.5)]">
                                        Apply Now
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Internship;
