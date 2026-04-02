import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/Images/about.webp';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-visible">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-100/40 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-start z-10 w-full"
        >
          <motion.div variants={itemVariants} className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-700 font-bold text-sm mb-8 border border-blue-100/50 shadow-sm transition-all hover:shadow-md hover:scale-105">
            ✨ Welcome to Ladder7
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8">
            Transforming <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Ideas</span> into <br className="hidden sm:block" /> Digital Reality
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
            We build intelligent, high-performance web and mobile applications that drive business growth and elevate user experiences to a premium level.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-xl shadow-gray-900/20 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300 w-full sm:w-auto text-center">
              Explore Services
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-md border border-gray-100 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
              Contact Us
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div className="relative w-full max-w-lg xl:max-w-xl aspect-[4/3] sm:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-[2.5rem] rotate-6 scale-105 shadow-inner opacity-70 transition-transform duration-700 hover:rotate-12"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-100 to-blue-50 rounded-[2.5rem] -rotate-3 scale-100 border-2 border-white shadow-2xl overflow-hidden group">
              <img
                src={heroImg}
                alt="Hero Application"
                className="w-full h-full object-cover rounded-[2.5rem] scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
