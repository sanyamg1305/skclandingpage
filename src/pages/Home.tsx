import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/ui/Section';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, ChevronRight, Award, Users, BookOpen, Clock, 
  PlayCircle, Download, CheckCircle2, Quote, Plus, Minus, Mail, Phone, MapPin, Send,
  Target, Zap, RefreshCw, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NumberedPillars from '../components/ui/NumberedPillars';

const CountUp = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.floor(v));
        },
      });
      return () => controls.stop();
    }
  }, [inView, numericValue]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    { q: 'What actually happens during the CEP sessions?', a: 'Sessions involve guided discussions, reflection exercises, and practical tools that participants apply to their own organisations. The focus is on examining leadership decisions and strengthening organisational thinking.' },
    { q: 'How much time will I need to commit?', a: 'CEP runs through structured sessions over several months. Participants may also spend time reflecting on their leadership decisions and applying ideas between sessions.' },
    { q: 'What kind of founders or leaders usually join CEP?', a: 'Participants typically include founders, CXOs, and second-generation business leaders responsible for major decisions within their organisations.' },
    { q: 'Will I be able to work on challenges from my own organisation during the program?', a: 'Yes. Many discussions and exercises are connected to real challenges participants face in their organisations.' },
    { q: 'How big is a typical CEP cohort?', a: 'The cohort size varies depending on the group. It is designed to allow meaningful discussion and interaction among participants.' },
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
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-20"
        >
          {programTraits.map((t, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white/80 font-bold text-lg"
            >
              {t}
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12 mb-20"
        >
          {[
            { t: 'Four 3-Day Immersive Workshops', d: 'Deep-dive sessions combining peer learning, expert mentoring, and meaningful conversations.' },
            { t: 'Two Conscious Presence Practices', d: 'Guided reflection sessions building mental clarity and emotional steadiness under pressure.' },
            { t: 'Three One-on-One Coaching Sessions', d: 'Personal guidance applying program learnings to your specific business challenges.' },
            { t: 'Active Alumni Network', d: 'Ongoing peer connection, shared learning, and quarterly meetups.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="flex flex-col md:grid md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12 first:border-0 first:pt-0"
            >
               <div className="md:col-span-5"><h3 className="text-2xl md:text-4xl font-bold text-[#f26045]">{item.t}</h3></div>
               <div className="md:col-span-7"><p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">{item.d}</p></div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 3. STATS */}
      <Section className="bg-white !py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-6xl md:text-7xl font-bold text-[#db644d] mb-4 tracking-tighter">
                <CountUp value={stat.value} />
              </div>
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
      {/* 5. INSIDE THE PROGRAM - REDESIGNED SPLIT-VIEW */}
      <section className="bg-[#282828] py-32 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-20 relative">
          
          {/* Header Container - Positioned Top Right */}
          <div className="flex justify-end mb-24">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter leading-none text-right"
             >
                Inside The <br />Program
             </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch relative">
             {/* Left Image Side */}
             <div className="lg:w-[45%] relative z-10">
                <div className="relative rounded-[4rem] overflow-hidden h-full min-h-[500px] lg:min-h-[700px] shadow-2xl">
                   <img 
                     src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/uaRdMpdyJe.png" 
                     alt="Inside the program" 
                     className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                {/* Horizontal Navigation Control (Over Image) */}
                <div className="absolute top-1/2 left-10 -translate-y-1/2 z-30 w-16 h-16 rounded-full border border-white/30 bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                   <ArrowLeft size={32} />
                </div>
             </div>

             {/* Right Content Cards Side */}
             <div className="lg:w-[65%] flex flex-col md:flex-row gap-10 items-stretch lg:-ml-32 pt-20 lg:pt-0 relative z-20">
                {/* Mentoring Card - Coral */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-[#db644d] p-12 md:p-16 rounded-[4rem] shadow-2xl flex-1 flex flex-col justify-center hover:scale-[1.02] transition-transform duration-500"
                >
                   <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Mentoring</h3>
                   <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                      Grounded guidance drawn from experience. Mentoring helps founders see clearly, question assumptions, and strengthen their judgment through practical wisdom.
                   </p>
                </motion.div>

                {/* Coaching Card - Dark/Transparent with Border */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[#282828] border-2 border-white/10 p-12 md:p-16 rounded-[4rem] shadow-2xl flex-1 flex flex-col justify-center hover:scale-[1.02] transition-transform duration-500"
                >
                   <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Coaching</h3>
                   <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                      Turning clarity into action. Coaching aligns intent with measurable results through structured guidance and consistent support.
                   </p>
                </motion.div>
                
                {/* Right Arrow Control (Attached to right of cards) */}
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 z-30 w-16 h-16 rounded-full border border-white/30 bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer hidden md:flex">
                   <ArrowRight size={32} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. CEP IS RIGHT FOR YOU */}
      <Section dark className="bg-[#282828] !py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tighter leading-[0.9]"
            >
              CEP Is Right for You If This <br />Feels Familiar
            </motion.h2>
            
            <NumberedPillars />

            <div className="flex flex-col sm:flex-row gap-6 mt-20">
              <Link to="/contact" className="bg-white text-[#01162c] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#f26045] hover:text-white transition-all text-center">
                Apply Now
              </Link>
              <Link to="/contact" className="bg-[#f26045] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#01162c] transition-all text-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/SMDzAwOLT1.png" 
                alt="CEP Candidate" 
                className="rounded-[4rem] w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 7. WHAT YOU GRADUATE WITH AS A LEADER */}
      <Section className="bg-white !py-32">
        <div className="max-w-[1290px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/nXpKzJgFSs.png" 
              alt="Program Graduates" 
              className="w-full h-auto rounded-[3rem] shadow-2xl"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-[#01162c] leading-[1.1] tracking-tight"
              >
                What You Graduate With <br />as a Leader
              </motion.h2>
            </div>
            <div className="lg:w-2/3">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {[
                  {
                    title: "Empowered Teams",
                    desc: "Your team makes confident decisions without waiting for your approval, allowing work to move faster.",
                    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/wiO86Vwy4N.png"
                  },
                  {
                    title: "Clear Authority",
                    desc: "Everyone knows their role, decision-making authority, and accountability, reducing confusion and delays.",
                    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/XnUwUFDjfx.png"
                  },
                  {
                    title: "Leadership Presence",
                    desc: "You show up as a grounded, intentional leader who steadies the organisation in moments of pressure and uncertainty.",
                    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/AJDmQZSb1U.png"
                  },
                  {
                    title: "Scalable Systems",
                    desc: "Your organisation moves forward without requiring your constant involvement, freeing you to focus on direction and growth.",
                    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/fk7T05auwG.png"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="p-10 bg-white rounded-[2rem] shadow-[0_5px_30px_0_rgba(39,35,74,0.1)] hover:shadow-2xl transition-all border border-gray-50 flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 shrink-0">
                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                    </div>
                    <p className="text-lg text-[#01162c]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. ORGANISATIONAL SHIFTS */}
      <div className="relative overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-3/5 bg-[#db644d] py-24 px-8 md:px-24 flex flex-col justify-center gap-12 text-white">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold"
              >
                Organisational Shifts
              </motion.h2>
              <p className="text-xl md:text-2xl opacity-90">A transformational change in your leadership abilities.</p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8"
            >
              {[
                { text: "Distributed Leadership Ownership", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/hqhrR4ne1m.png" },
                { text: "Clear Accountability Across Teams", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/4yBnPnYkFk.png" },
                { text: "Authority That Creates Stability", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/62FsdoRYYy.png" },
                { text: "Structure That Enables Sustainable Scale", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/dk9DH603U2.png" }
              ].map((point, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-12 shrink-0">
                    <img src={point.icon} alt={point.text} className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                  <span className="text-2xl md:text-3xl font-medium leading-tight">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link to="/contact" className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-black hover:text-white transition-all inline-block">
                Apply Now
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-2/5 relative min-h-[400px]">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/dd8bUjO8Fj.png" 
              alt="Leader" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>

      {/* 7. MEET THE COACHES */}
      <Section className="bg-white !py-32">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tighter">Meet The Coaches</h2>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {coaches.map((c, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
               <img src={c.img} alt={c.name} className="w-full h-[500px] object-cover rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-1000 mb-8 shadow-2xl" />
               <h3 className="text-3xl font-bold mb-2">{c.name}</h3>
               <p className="text-[#db644d] font-bold uppercase tracking-widest text-xs">{c.role}</p>
            </motion.div>
          ))}
        </motion.div>
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
                <div key={i} className="py-8 group cursor-pointer flex flex-col justify-center transition-all">
                  <div 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center text-3xl font-bold py-4 text-white/90 hover:text-[#f26045] transition-colors"
                  >
                    <span className="max-w-[85%]">{f.q}</span>
                    {openFaq === i ? <Minus size={32} className="shrink-0" /> : <Plus size={32} className="shrink-0" />}
                  </div>
                  
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xl text-gray-400 font-medium leading-relaxed pb-8 pr-12">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* 11. EVENT GALLERY - MOCKUP STYLE */}
      <Section className="bg-[#db644d] !py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 text-white">
             <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Event Gallery</h2>
             <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                A curated collection of moments from our past cohorts, immersive workshops, and transformative learning experiences.
             </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
             {/* Navigation Buttons */}
             <button className="absolute -left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#db644d] hover:bg-white transition-all">
                <ChevronRight size={32} className="rotate-180" />
             </button>
             <button className="absolute -right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#db644d] hover:bg-white transition-all">
                <ChevronRight size={32} />
             </button>
 
             <motion.div 
               variants={staggerContainer}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
             >
                {['KEa1R2q9Oe', 'Nm1MLGKF3A', 'aX2JGytTv3', 'eTMHXoGtkJ', '5dGtP4QHLh', 'QKq988ujHM'].map((img, i) => (
                   <motion.img 
                     key={i} 
                     variants={fadeInUp} 
                     src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} 
                     className="rounded-3xl w-full aspect-[4/3] object-cover shadow-2xl hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
                     alt="Event" 
                   />
                ))}
             </motion.div>
          </div>
 
          <div className="flex justify-center mt-20">
             <button className="px-14 py-4 bg-white text-[#db644d] hover:bg-gray-50 rounded-full font-bold text-xl transition-all shadow-xl">
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
