import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const testimonials = [
    { 
      name: 'Rajani Jalan', 
      role: 'Director - CSR/PR, mPokket', 
      quote: 'CEP really helped me build my people pillar, understand that engaging with them is more important than instruction led leadership. CEP also helped me in enhancing my leadership skills, which will now enable me to upscale my company.',
      img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/zSUT2308YU.png'
    },
    { 
      name: 'Tejas Jhaveri', 
      role: 'Founder and CEO, Myntmore', 
      quote: 'I would recommend this highly to anyone, it\'s a game changer for anyone struggling with their business or their personal life. It just doesn\'t cover your business but all aspects of your life, whether it\'s your work, your health, your personal relationships and all of it end to end.',
      img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/PkhvDRjkqM.png'
    }
  ];

  const cohortImages = ['mbWqiATx4a', 'ok0RPeWAPr', 'DWumVWPDjj'];

  const galleryImages = [
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/KEa1R2q9Oe.png',
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/Nm1MLGKF3A.png',
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/aX2JGytTv3.png',
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/eTMHXoGtkJ.png',
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/5dGtP4QHLh.png',
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/QKq988ujHM.png',
  ];

  return (
    <div className="overflow-hidden">
      {/* Intro */}
      <section className="bg-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center border-b border-gray-100 pb-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            Impact & <br /><span className="text-[#f26045]">Outcomes</span>
          </motion.h1>
          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
            A collective of leaders who have made the shift from operational dependence to intentional direction.
          </p>
        </div>
      </section>

      {/* From Our Cohorts - RE-STYLED TO MATCH FIGMA */}
      <Section className="bg-white !py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">From Our Cohorts</h2>
          <p className="text-2xl text-gray-400 mb-16 max-w-3xl font-medium leading-relaxed">
            Every cohort is a journey of shared experience, deep connection, and collective growth between founders who face the same pressure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cohortImages.map((img, i) => (
              <div key={i} className="rounded-[3rem] overflow-hidden aspect-[1.2/1] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} alt="Cohort activity" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Alumni Voice - RE-STYLED TO 2-COLUMN GRID */}
      <Section className="bg-white !py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">Alumni Voice</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-10 items-start p-10 bg-gray-50 rounded-[4rem] group hover:bg-white hover:shadow-2xl transition-all duration-500">
               <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden shrink-0 shadow-lg">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
               </div>
               <div className="relative">
                  <Quote className="absolute -top-10 -left-6 text-[#f26045] opacity-20" size={60} />
                  <p className="text-2xl font-medium leading-relaxed text-[#01162c] mb-8 italic">"{t.quote}"</p>
                  <div>
                    <h4 className="font-bold text-2xl mb-1">{t.name}</h4>
                    <p className="text-[#f26045] font-bold uppercase tracking-widest text-xs">{t.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Event Gallery - FIGMA CORAL THEME RESTORED */}
      <Section className="bg-[#db644d] !py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Event Gallery</h2>
            <div className="flex gap-4 mt-8 lg:mt-0">
               <button className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#db644d] transition-all">
                  <ArrowLeft size={32} />
               </button>
               <button className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#db644d] transition-all">
                  <ArrowRight size={32} />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-[3rem] overflow-hidden aspect-[1.1/1] shadow-2xl border-4 border-white/5"
              >
                <img src={img} alt={`Gallery moment ${i}`} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white !py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 tracking-tight text-[#01162c]">Be part of the next cohort</h2>
          <Link to="/contact" className="inline-block bg-[#f26045] text-white px-12 py-6 rounded-full font-bold text-2xl hover:bg-[#282828] transition-all shadow-xl">
             Apply for Admissions
          </Link>
        </div>
      </Section>
    </div>
  );
}
