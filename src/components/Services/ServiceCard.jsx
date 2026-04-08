import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index, theme = 'orange' }) => {
  const themeColors = {
    orange: {
      cornerBg: 'from-[oklch(0.61_0.2_295.3)] to-[oklch(0.61_0.2_295.3)]',
      barBg: 'from-[oklch(0.61_0.2_295.3)] to-[oklch(0.61_0.2_295.3)]',
      textColor: 'text-[oklch(0.61_0.2_295.3)]',
      shadowColor: 'shadow-[oklch(0.61_0.2_295.3)]/20'
    },
    green: {
      cornerBg: 'from-[oklch(59.6%_0.145_163.225)] to-[oklch(59.6%_0.145_163.225)]',
      barBg: 'from-[oklch(59.6%_0.145_163.225)] to-[oklch(59.6%_0.145_163.225)]',
      textColor: 'text-[oklch(59.6%_0.145_163.225)]',
      shadowColor: 'shadow-[oklch(59.6%_0.145_163.225)]/20'
    },
    blue: {
      cornerBg: 'from-blue-600 to-blue-700',
      barBg: 'from-blue-600 to-indigo-600',
      textColor: 'text-blue-600',
      shadowColor: 'shadow-blue-100'
    }
  };

  const currentTheme = themeColors[theme] || themeColors.orange;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.08)" }}
      className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-blue-900/[0.03] border border-gray-200/60 flex flex-col items-start relative overflow-hidden group h-full transition-all duration-300"
    >
      {/* Decorative Gradient Shape in Top Right */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${currentTheme.cornerBg} rounded-bl-[3rem] group-hover:scale-110 transition-transform duration-500 flex items-center justify-center pl-3 pb-3`}>
        <div className="text-white transform -translate-x-0.5 translate-y-0.5 scale-90">
          {icon}
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2 max-w-[70%] leading-tight">
          {title}
        </h3>

        {/* Underline Highlight Bar */}
        <div className={`w-12 h-1 bg-gradient-to-r ${currentTheme.barBg} rounded-full mb-6 shadow-sm ${currentTheme.shadowColor}`} />

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-grow pr-1 font-medium">
          {description}
        </p>

        <motion.div
          whileHover={{ x: 5 }}
          className={`${currentTheme.textColor} font-bold text-base flex items-center gap-2 cursor-pointer group/link uppercase tracking-wide`}
        >
          See More
          <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
