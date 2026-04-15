import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, ChevronRight, Award, Users, BookOpen, Clock, 
  PlayCircle, Download, CheckCircle2, Quote, Plus, Minus, Mail, Phone, MapPin, Send,
  Target, Zap, RefreshCw, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { label: 'Founders & CXOs Guided', value: '1000+', icon: <Users className="text-[#db644d]" size={32} /> },
    { label: 'Years of Leadership Work', value: '25+', icon: <Award className="text-[#db644d]" size={32} /> },
    { label: 'Cohorts Facilitated', value: '50+', icon: <BookOpen className="text-[#db644d]" size={32} /> },
    { label: 'Hours of Mentoring', value: '20000+', icon: <Clock className="text-[#db644d]" size={32} /> },
  ];

  const programTraits = ['Once Every Year', 'Cohort-Based Model', 'Fully Offline Mode', 'Lifetime Alumni Access'];

  const coaches = [
    { name: 'Chaitanya Kumar', role: 'Lead Coach', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/nv3Ap78TRT.png' },
    { name: 'Avdhesh Sharma', role: 'Executive Mentor', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/P3HAgwZXJD.png' },
    { name: 'Akshay Chandra', role: 'Leadership Consultant', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/rwXDaNWYad.png' },
    { name: 'Abhishek Goel', role: 'Organizational Strategy', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/ERDY9BHhTO.png' },
  ];

  const faqs = [
    { q: 'What actually happens during the CEP sessions?', a: 'Sessions involve guided discussions, reflection exercises, and practical tools that participants apply to their own organisations.' },
    { q: 'How much time will I need to commit?', a: 'The program involves four 3-day immersive workshops and supplemental coaching sessions.' },
    { q: 'What kind of founders or leaders usually join CEP?', a: 'CEP is built for leaders with real authority—founders at scale, CXOs in transition, and more.' },
    { q: 'Will I be able to work on challenges from my own organisation?', a: 'Yes, the program is designed around your specific business challenges.' },
    { q: 'How big is a typical CEP cohort?', a: 'We keep cohorts small (typically under 20 people) to ensure deep peer connection.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO */}
      <section className="relative h-[90vh] flex items-center bg-[#282828]">
        <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/xSDn9BZLCA.png)] bg-cover bg-center opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            Conscious <br />
            <span className="text-[#f26045]">Entrepreneurship <br />Program™</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl leading-relaxed">
            Built for leaders shaping businesses at scale. A cohort-based program for founders and CXOs ready to transform how they lead.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="bg-[#f26045] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM LOOKS LIKE */}
      <Section dark className="bg-[#282828] !py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">What the Program Looks Like</h2>
        <div className="flex flex-wrap gap-4 mb-20">
          {programTraits.map((t, i) => (
            <div key={i} className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white/80 font-bold text-lg">{t}</div>
          ))}
        </div>
        <div className="space-y-12 mb-20">
          {[
            { t: 'Four 3-Day Immersive Workshops', d: 'Deep-dive sessions combining peer learning, expert mentoring, and meaningful conversations.' },
            { t: 'Two Conscious Presence Practices', d: 'Guided reflection sessions building mental clarity and emotional steadiness under pressure.' },
            { t: 'Three One-on-One Coaching Sessions', d: 'Personal guidance applying program learnings to your specific business challenges.' },
            { t: 'Active Alumni Network', d: 'Ongoing peer connection, shared learning, and quarterly meetups.' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:grid md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12 first:border-0 first:pt-0">
               <div className="md:col-span-5"><h3 className="text-2xl md:text-4xl font-bold text-[#f26045]">{item.t}</h3></div>
               <div className="md:col-span-7"><p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">{item.d}</p></div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. STATS */}
      <Section className="bg-white !py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-6xl md:text-7xl font-bold text-[#db644d] mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-[#01162c] font-bold text-sm uppercase tracking-[0.2em]">{stat.label}</div>
              <div className="mt-6 h-px w-full bg-gray-100"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. SPECIALLY DESIGNED FOR */}
      <Section className="bg-gray-50 !py-32">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
             <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter leading-[0.9]">Specially <br />Designed For</h2>
             <div className="space-y-12 mt-16">
                {['Founders at Scale', 'CXOs in Transition', 'Second-Generation Leaders'].map((t, i) => (
                  <div key={i} className="border-l-4 border-[#f26045] pl-8">
                     <h3 className="text-3xl font-bold mb-4">{t}</h3>
                     <p className="text-2xl text-gray-400 font-medium leading-relaxed">Leaders navigating rapid growth and expanded authority.</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="lg:w-1/2 flex items-center">
             <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/uTh39RbH18.png" alt="Leadership" className="rounded-[4rem] w-full h-auto grayscale shadow-2xl" />
          </div>
        </div>
      </Section>

      {/* 5. WHAT SHIFTS - 2x2 Grid + Large Image with Border Offset */}
      <Section dark className="bg-[#282828] !py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
           <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tighter leading-[0.9]">
                What Shifts When You <br />Go Through CEP
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { t: 'Deep Immersive Learning', d: 'Four 3-day sessions focused on real breakthroughs.', i: <BookOpen size={24} /> },
                   { t: 'Inner Clarity & Steadiness', d: 'Practices to strengthen decision confidence.', i: <Zap size={24} /> },
                   { t: 'One-on-One Support', d: 'Coaching tailored to your business challenges.', i: <Users size={24} /> },
                   { t: 'Lifelong Peer Community', d: 'Stay connected with humans who understand.', i: <RefreshCw size={24} /> }
                 ].map((card, i) => (
                   <div key={i} className="bg-[#db644d] p-10 rounded-[3rem] shadow-xl text-white">
                      <div className="mb-6 opacity-80">{card.i}</div>
                      <h4 className="text-2xl font-bold mb-4">{card.t}</h4>
                      <p className="text-lg text-white/80 leading-relaxed font-medium">{card.d}</p>
                   </div>
                 ))}
              </div>
           </div>
           <div className="lg:w-1/2 relative pt-12 pr-12 mt-20 lg:mt-0">
              <div className="absolute top-0 right-0 w-full h-full border-4 border-[#db644d] rounded-[4rem] translate-x-12 translate-y-12"></div>
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/dd8bUjO8Fj.png" alt="Transformation" className="relative rounded-[4rem] w-full h-auto shadow-2xl" />
           </div>
        </div>
      </Section>

      {/* 6. INSIDE THE PROGRAM - STABLE SPLIT-VIEW */}
      <section className="bg-[#282828] overflow-hidden min-h-[900px] flex items-center py-20">
        <div className="max-w-[1920px] mx-auto w-full flex flex-col lg:flex-row gap-0">
           {/* Left Image Side */}
           <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-[800px]">
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/uaRdMpdyJe.png" alt="Inside the program" className="absolute inset-0 w-full h-full object-cover rounded-r-[5rem]" />
              <div className="absolute inset-0 bg-black/30 rounded-r-[5rem]"></div>
              <div className="absolute top-1/2 left-20 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                 <ArrowLeft size={32} />
              </div>
           </div>
           
           {/* Right Content Side */}
           <div className="lg:w-1/2 p-12 md:p-32 flex flex-col justify-center relative bg-[#282828]">
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-tighter leading-none self-end text-right">
                Inside The <br />Program
              </h2>
              <div className="space-y-12 max-w-2xl self-end">
                 <div className="bg-[#db644d] p-12 md:p-16 rounded-[4rem] shadow-2xl relative lg:-translate-x-32 z-10 transition-transform hover:scale-105 duration-500">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Mentoring</h3>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                       Grounded guidance drawn from lived experience. Mentoring helps founders see clearly, question assumptions, and strengthen their judgment.
                    </p>
                 </div>
                 <div className="bg-[#db644d] p-12 md:p-16 rounded-[4rem] shadow-2xl transition-transform hover:scale-105 duration-500">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Coaching</h3>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                       Turning clarity into action. Coaching aligns intent with measurable results through structured guidance and consistent support.
                    </p>
                 </div>
              </div>
              <div className="absolute top-1/2 right-20 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                 <ArrowRight size={32} />
              </div>
           </div>
        </div>
      </section>

      {/* 7. MEET THE COACHES */}
      <Section className="bg-white !py-32">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tighter">Meet The Coaches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {coaches.map((c, i) => (
            <div key={i} className="flex flex-col items-center">
               <img src={c.img} alt={c.name} className="w-full h-[500px] object-cover rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-1000 mb-8 shadow-2xl" />
               <h3 className="text-3xl font-bold mb-2">{c.name}</h3>
               <p className="text-[#db644d] font-bold uppercase tracking-widest text-xs">{c.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. FROM OUR COHORTS - RESTORED */}
      <Section className="bg-gray-50 !py-32 border-y border-gray-100">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">From Our Cohorts</h2>
        <p className="text-2xl text-gray-400 mb-16 max-w-3xl font-medium leading-relaxed">
          Shared experience, deep connection, and collective growth between founders who face the same pressure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['mbWqiATx4a', 'ok0RPeWAPr', 'DWumVWPDjj'].map((img, i) => (
            <img key={i} src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} alt="Cohort" className="rounded-[4rem] w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl" />
          ))}
        </div>
      </Section>

      {/* 9. ALUMNI VOICE - RESTORED 2-COLUMN GRID */}
      <Section className="bg-white !py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 tracking-tighter">Alumni Voice</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {[
            { n: 'Rajani Jalan', r: 'Director - CSR/PR, mPokket', q: 'CEP really helped me build my people pillar, understand that engaging with them is more important than instruction led leadership.', i: 'zSUT2308YU' },
            { n: 'Tejas Jhaveri', r: 'Founder and CEO, Myntmore', q: 'I would recommend this highly to anyone, it\'s a game changer for anyone struggling with their business or their personal life.', i: 'PkhvDRjkqM' }
          ].map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-10 p-12 bg-gray-50 rounded-[4rem] items-start hover:shadow-2xl transition-all duration-500">
               <img src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${t.i}.png`} className="w-32 h-32 rounded-[2rem] object-cover shadow-xl" alt={t.n} />
               <div>
                  <Quote className="text-[#f26045] mb-6 opacity-30" size={50} />
                  <p className="text-2xl font-medium italic mb-8 leading-relaxed text-[#01162c]">"{t.q}"</p>
                  <h4 className="font-bold text-2xl mb-1">{t.n}</h4>
                  <p className="text-[#f26045] text-xs font-bold uppercase tracking-widest">{t.r}</p>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. FAQs - DARK SPLIT STYLE */}
      <Section dark className="bg-[#282828] !py-32 overflow-hidden">
        <div className="lg:grid lg:grid-cols-12 gap-20">
           <div className="lg:col-span-4 self-start">
             <h2 className="text-[10rem] md:text-[14rem] font-bold opacity-10 text-white leading-none tracking-tighter">FAQs</h2>
             <p className="text-gray-400 font-medium text-xl leading-relaxed mt-10 pr-4">
               Everything you need to know about our personal admissions, how the program works, who it's for, and what to expect.
             </p>
           </div>
           <div className="lg:col-span-8 divide-y divide-white/10">
              {faqs.map((f, i) => (
                <div key={i} className="py-12 group cursor-pointer flex justify-between items-center text-3xl font-bold text-white/90 hover:text-[#f26045] transition-colors">
                  <span className="max-w-[85%]">{f.q}</span>
                  <Plus size={32} className="shrink-0" />
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* 11. EVENT GALLERY - CORAL THEME */}
      <Section className="bg-[#db644d] !py-40 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-24 text-white text-7xl md:text-9xl font-bold tracking-tighter">
             <h2>Event Gallery</h2>
          </div>
          
          <div className="relative group">
             <button className="absolute -left-12 lg:-left-24 top-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#db644d] transition-all">
                <ArrowLeft size={40} />
             </button>
             <button className="absolute -right-12 lg:-right-24 top-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#db644d] transition-all">
                <ArrowRight size={40} />
             </button>

             <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {['KEa1R2q9Oe', 'Nm1MLGKF3A', 'aX2JGytTv3', 'eTMHXoGtkJ', '5dGtP4QHLh', 'QKq988ujHM'].map((img, i) => (
                  <img key={i} src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} className="rounded-[4rem] w-full aspect-square object-cover shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-700" alt="Event" />
                ))}
             </div>
          </div>

          <div className="flex justify-center mt-24">
             <button className="px-12 py-6 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white rounded-full font-bold text-2xl transition-all">
                See More
             </button>
          </div>
        </div>
      </Section>

      {/* 12. FINAL APPLICATION FORM */}
      <Section className="bg-white !py-40" id="contact">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-7xl md:text-9xl font-bold mb-20 text-center tracking-tighter text-[#01162c]">Ready to evolve?</h2>
           <form className="space-y-12 bg-gray-50 p-16 md:p-32 rounded-[5rem] shadow-2xl border border-gray-100">
              <input type="text" placeholder="Full Name" className="w-full p-10 rounded-[3rem] bg-white border-2 border-transparent focus:border-[#f26045] outline-none text-3xl font-medium" />
              <input type="email" placeholder="Work Email" className="w-full p-10 rounded-[3rem] bg-white border-2 border-transparent focus:border-[#f26045] outline-none text-3xl font-medium" />
              <textarea placeholder="Your Leadership Challenge" rows={5} className="w-full p-10 rounded-[3rem] bg-white border-2 border-transparent focus:border-[#f26045] outline-none text-3xl font-medium resize-none"></textarea>
              <button className="w-full bg-[#f26045] text-white py-10 rounded-full font-bold text-4xl hover:bg-black transition-all shadow-2xl">
                Submit Application
              </button>
           </form>
        </div>
      </Section>
    </div>
  );
}
