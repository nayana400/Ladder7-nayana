import React from 'react';
import { motion } from 'framer-motion';

const Strategy = () => {
  const expertises = [
    {
      title: "Digital Experience & Composable Platforms",
      desc: "Architecting seamless front-ends and headless back-ends for modern agility.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tags: ["LANDING PAGES", "INTELLIGENT WEB SITES", "CUSTOM WEB APPLICATION", "SAAS TOOLS"],
      borderColor: "border-purple-500",
      accentColor: "bg-purple-500"
    },
    {
      title: "Applied AI Hyperautomation",
      desc: "Deploying autonomous agents and RAG-based systems for operational dominance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      tags: ["AI ASSISTANTS", "CHATBOTS", "AGENTIC AI", "HYPEAUTOMATION"],
      borderColor: "border-orange-500",
      accentColor: "bg-orange-500"
    },
    {
      title: "Technology Strategy & Consulting",
      desc: "Strategic blueprinting and recovery roadmaps for complex platform initiatives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 01-2 2z" />
        </svg>
      ),
      tags: ["PRODUCT IDEATION", "PRODUCT ARCHITECTURE", "RESEARCH AND DEVELOPMENT", "SOLUTIONING"],
      borderColor: "border-blue-500",
      accentColor: "bg-blue-500"
    },
    {
      title: "Custom Developments",
      desc: "Build tailored solutions designed around your unique business needs and workflows.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      ),
      tags: ["CUSTOM APPLICATIONS", "BILLING SOFTWARE", "PRODUCT DEVELOPMENT", "SOFTWARE DEVELOPMENT"],
      borderColor: "border-emerald-500",
      accentColor: "bg-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-24 bg-[#f8fafc] overflow-hidden relative font-sans">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#333] mb-6 tracking-tight"
          >
            Strategic Capabilities
          </motion.h2>
          <div className="w-20 h-1 bg-[#3fc0ed] rounded-full"></div>
        </div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)" }}
              className={`bg-white rounded-[2rem] p-6 flex flex-col items-center text-center shadow-sm border-b-8 ${item.borderColor} transition-all duration-300 relative h-full`}
            >
              {/* Icon Box */}
              <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center text-blue-600 mb-4 border border-gray-100 shadow-sm">
                <div className="scale-75">{item.icon}</div>
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight flex items-center justify-center">
                {item.title}
              </h3>
              <p className="text-[#64748b] text-xs md:text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Tags Section */}
              <div className="mt-auto pt-2 flex flex-wrap justify-center gap-1.5">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#f0f9ff] text-[9px] font-bold text-blue-900 rounded border border-blue-50/50 uppercase tracking-widest transition-colors hover:bg-blue-100"
                  >
                    {tag}
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

export default Strategy;
