import React from 'react';
import { motion } from 'framer-motion';
import visionImg from '../../assets/Images/about.webp';
import missionImg from '../../assets/Images/services/service.webp';

const WhoWeAre = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative font-sans">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-black mb-8 leading-tight">
            Every Business. Every Market. One Goal  <span className="text-[#3fc0ed]">— Revenue.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#666] text-center text-base md:text-lg font-normal max-w-[1100px] mx-auto leading-[1.8]">
            We build intelligent digital systems for organisations ready to turn their online presence into their most powerful sales asset. At Ladder7 Nextstep Solutions, we believe every business — regardless of size — deserves a digital presence that actively generates revenue. We act as the strategic delivery partner for growth-focused organisations, translating digital ambition into measurable business outcomes.
          </motion.p>
        </motion.div>

        {/* Vision & Mission Grid - Updated to 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Our Vision Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col xl:flex-row items-center xl:items-start gap-6 lg:gap-8"
          >
            <div className="relative flex-shrink-0 group">
              <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] relative">
                {/* Main Image Circle */}
                <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden absolute left-0 top-0 border-[6px] border-white shadow-xl z-0">
                  <img src={visionImg} alt="Our Vision" className="w-full h-full object-cover" />
                </div>
                {/* Overlapping Blue Circle */}
                <div className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full bg-[#3fc0ed]/90 absolute right-0 bottom-0 flex items-center justify-center p-3 text-center z-10 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <span className="text-white text-sm md:text-lg font-bold leading-tight">Our <br /> Vision</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center xl:text-left pt-2">
              <h3 className="text-xl font-bold text-black mb-4">For Established Brands & Scaling Businesses</h3>
              <p className="text-[#666] text-sm md:text-base leading-[1.7]">
                We deliver robust, high-performance digital platforms with AI-powered personalisation, CRM integration, and analytics — engineered for reliability, security, and global market reach across India, the Middle East, and Southeast Asia.
              </p>
            </div>
          </motion.div>

          {/* Our Mission Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col xl:flex-row items-center xl:items-start gap-6 lg:gap-8"
          >
            <div className="relative flex-shrink-0 group">
              <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] relative">
                {/* Main Image Circle */}
                <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden absolute left-0 top-0 border-[6px] border-white shadow-xl z-0">
                  <img src={missionImg} alt="Our Mission" className="w-full h-full object-cover" />
                </div>
                {/* Overlapping Blue Circle */}
                <div className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full bg-[#3fc0ed]/90 absolute right-0 bottom-0 flex items-center justify-center p-3 text-center z-10 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <span className="text-white text-sm md:text-lg font-bold leading-tight">Our <br /> Mission</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center xl:text-left pt-2">
              <h3 className="text-xl font-bold text-black mb-4">For Fast-Growing Startups & SMBs</h3>
              <p className="text-[#666] text-sm md:text-base leading-[1.7]">
                We give ambitious businesses the same intelligent web systems, AI chatbots, and automated lead pipelines that larger organisations rely on — so you convert more visitors, respond faster, and compete without limits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
