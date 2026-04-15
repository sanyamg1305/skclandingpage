import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart, Globe, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function About() {
  const coaches = [
    { name: 'Chaitanya Kumar', role: 'Lead Coach', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/nv3Ap78TRT.png' },
    { name: 'Avdhesh Sharma', role: 'Executive Mentor', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/P3HAgwZXJD.png' },
    { name: 'Akshay Chandra', role: 'Leadership Consultant', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/rwXDaNWYad.png' },
    { name: 'Abhishek Goel', role: 'Organizational Strategy', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/ERDY9BHhTO.png' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Intro Section */}
      <section className="bg-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter"
          >
            The Minds Behind <br /><span className="text-[#f26045]">Myntmore</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-[#f26045] mb-12"></div>
          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
            We are a collective of leadership practitioners, executive coaches, and organizational designers committed to a single mission: helping leaders evolve their inner clarity to match their external authority.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <Section className="bg-gray-50 !py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-8 tracking-tight">Our <span className="text-[#f26045]">Story</span></h2>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                Founded on over 25 years of real-world leadership mentoring, Myntmore was built to address the "loneliness at the top"—the gap between a leader's rapid growth and the inner steadying required to manage it.
              </p>
              <p>
                We've guided over 1,000 founders and CXOs through transformative breakthroughs, not through theory, but through applied wisdom and conscious practice.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-[#f26045]"><GraduationCap size={28} /></div>
                <span className="font-bold text-gray-700">1000+ Alumni</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-[#f26045]"><Globe size={28} /></div>
                <span className="font-bold text-gray-700">20+ Countries</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#f26045] rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-20 blur-xl"></div>
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/xTs09iAx4a.png" alt="Story" className="relative rounded-[3rem] w-full h-auto shadow-2xl border border-white" />
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Callout - RESTORED SCALE */}
      <Section dark className="bg-[#282828] !py-40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(242,96,69,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-gradient"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter text-white/90 italic">
            "When a leader finds steadiness within, the organization finds stability in its growth."
          </h2>
          <div className="flex justify-center gap-12">
             <div className="flex flex-col items-center">
                <div className="text-[#f26045] mb-2 font-bold text-4xl">25+</div>
                <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Years of Work</div>
             </div>
             <div className="w-px h-16 bg-white/10"></div>
             <div className="flex flex-col items-center">
                <div className="text-[#f26045] mb-2 font-bold text-4xl">1k+</div>
                <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Leaders Guided</div>
             </div>
          </div>
        </div>
      </Section>

      {/* Full Coaches Section */}
      <Section className="bg-white !py-40">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">The Coaching Core</h2>
          <p className="text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
            Decades of real-world leadership experience, hard-won wisdom, and genuine commitment to your transformation.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {coaches.map((coach, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="bg-gray-50 rounded-[3rem] overflow-hidden border border-transparent hover:border-[#f26045]/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group p-10 flex flex-col items-center text-center"
            >
              <div className="w-48 h-64 rounded-[2rem] border-2 border-white mb-8 overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 hover:rotate-2">
                <img src={coach.img} alt={coach.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:text-[#f26045] transition-colors">{coach.name}</h3>
              <p className="text-[#f26045] font-bold uppercase tracking-widest text-xs mb-6">{coach.role}</p>
              
              <div className="flex gap-4 mt-auto">
                <Linkedin size={20} className="text-gray-300 hover:text-[#f26045] cursor-pointer transition-colors" />
                <Twitter size={20} className="text-gray-300 hover:text-[#f26045] cursor-pointer transition-colors" />
                <Facebook size={20} className="text-gray-300 hover:text-[#f26045] cursor-pointer transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
