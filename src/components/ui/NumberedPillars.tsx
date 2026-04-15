import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: '1', text: 'Your decisions now carry more weight than before.' },
  { id: '2', text: 'Growth has changed your role faster than expected.' },
  { id: '3', text: 'You are operating efficiently, but not always by deliberate design.' },
  { id: '4', text: 'The organisation depends more on you than it should.' },
];

export default function NumberedPillars() {
  return (
    <div className="relative pl-12 md:pl-16 py-4">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f26045] via-[#f26045]/50 to-transparent"></div>

      <div className="space-y-12 md:space-y-16">
        {items.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            {/* Circle with Number */}
            <div className="absolute -left-[3.25rem] md:-left-[4.25rem] top-0 w-10 h-10 md:w-12 md:h-12 bg-[#282828] border-2 border-[#f26045] rounded-full flex items-center justify-center text-[#f26045] font-bold text-lg md:text-xl shadow-[0_0_15px_rgba(242,96,69,0.3)] z-10">
              {item.id}
            </div>
            
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
