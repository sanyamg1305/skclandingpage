import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Once Every Year', icon: '🗓️' },
  { title: 'Cohort-Based Model', icon: '👥' },
  { title: 'Lifetime Alumni Access', icon: '♾️' },
  { title: 'Fully Offline Mode', icon: '📍' },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {features.map((feature, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#505050]/20 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center group hover:bg-[#f26045]/10 transition-colors"
        >
          <span className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform">
            {feature.icon}
          </span>
          <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
            {feature.title}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}
