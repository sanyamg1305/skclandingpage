import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-[#282828] text-white' : 'bg-white text-[#01162c]'} ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
