import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/ui/Section';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, Award, Users, BookOpen, Clock, 
  CheckCircle2, Quote, Plus, Minus, Zap, Shield
} from 'lucide-react';

const CountUp = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

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
  const [coachIndex, setCoachIndex] = useState(0);
  const [pillarIndex, setPillarIndex] = useState(0);

  useEffect(() => {
    const coachTimer = setInterval(() => {
      setCoachIndex((prev) => (prev + 1) % 5);
    }, 5000);
    const pillarTimer = setInterval(() => {
      setPillarIndex((prev) => (prev + 1) % 4);
    }, 6000);
    return () => {
      clearInterval(coachTimer);
      clearInterval(pillarTimer);
    };
  }, []);

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
    { name: 'Mrinal Sinha', role: 'Strategic Coach', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' },
  ];

  const testimonials = [
    { n: 'Rajani Jalan', r: 'Director - CSR/PR, mPokket', q: 'CEP really helped me build my people pillar, understand that engaging with them is more important than instruction led leadership.', i: 'zSUT2308YU' },
    { n: 'Tejas Jhaveri', r: 'Founder and CEO, Myntmore', q: 'I would recommend this highly to anyone, it\'s a game changer for anyone struggling with their business or their personal life.', i: 'PkhvDRjkqM' }
  ];

  const videoTestimonials = [
    { name: 'Abhinav Churiwal', role: 'Group Managing Director, Manglam Groups', url: 'https://www.youtube.com/embed/NMwtv7bVA48' },
    { name: 'Manikk Guptha', role: 'Partner - Havi Design, LLP', url: 'https://www.youtube.com/embed/1q1KE56Pkzw' },
    { name: 'Linda Lee', role: 'Director - Brand Strategy and Creative Leadership', url: 'https://www.youtube.com/embed/1q1KE56Pkzw' },
    { name: 'Shweta Kapur', role: 'Founder and Creative Director, 431-88', url: 'https://www.instagram.com/reel/C-B8ct2SmxW/embed' }
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
      <section className="relative min-h-[85vh] md:h-[90vh] flex items-center bg-[#282828] py-20 md:py-0">
        <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/xSDn9BZLCA.png)] bg-cover bg-center opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-white mb-10"
          >
            <span className="block text-[3rem] md:text-[5.5rem] font-bold leading-[0.9] mb-4">Conscious</span>
            <span className="block text-[#f26045] text-[1.25rem] md:text-[2rem] font-bold uppercase tracking-[0.2em] mb-2">Entrepreneurship</span>
            <span className="block text-[#f26045] text-[1.1rem] md:text-[1.75rem] font-bold uppercase tracking-[0.1em] mb-10">Program™</span>
            <span className="block text-white/90 text-base md:text-xl font-medium max-w-2xl leading-relaxed normal-case tracking-normal">
              Built for leaders shaping businesses at scale. A cohort-based program for founders and CXOs ready to transform how they lead.
            </span>
          </motion.h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#contact" className="bg-[#f26045] text-white px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-white hover:text-black transition-all text-center">Apply Now</a>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM LOOKS LIKE */}
      <Section dark id="about" className="mesh-gradient !py-24 md:!py-40">
        <h1 className="mb-12 md:mb-16">What the Program Looks Like</h1>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 md:gap-4 mb-16 md:mb-20"
        >
          {programTraits.map((t, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 bg-white/5 text-white/80 font-bold text-base md:text-lg"
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
          className="space-y-10 md:space-y-12 mb-16 md:mb-20"
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
              className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-start border-t border-white/10 pt-10 md:pt-12 first:border-0 first:pt-0"
            >
               <div className="md:col-span-5"><h2 className="text-[#f26045]">{item.t}</h2></div>
               <div className="md:col-span-7"><p className="text-gray-400">{item.d}</p></div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 3. STATS */}
      <Section className="bg-white !py-24 md:!py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="font-h2 text-[#db644d] mb-4">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[#01162c] uppercase tracking-[0.2em]">{stat.label}</div>
              <div className="mt-6 h-px w-full bg-gray-100"></div>
            </div>
          ))}
        </div>
      </Section>

    {/* 4. SPECIALLY DESIGNED FOR */}
      <Section className="bg-gray-50 !py-24 md:!py-32">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20">
          <div className="lg:w-1/2">
             <h1 className="mb-8 md:mb-10 tracking-tight leading-tight uppercase">Specially <br />Designed For</h1>
             <div className="space-y-10 md:space-y-12 mt-12 md:mt-16">
                {['Founders at Scale', 'CXOs in Transition', 'Second-Generation Leaders'].map((t, i) => (
                   <div key={i} className="border-l-4 border-[#f26045] pl-6 md:pl-8">
                      <h2 className="mb-3 md:mb-4">{t}</h2>
                      <p className="text-gray-400">Leaders navigating rapid growth and expanded authority.</p>
                   </div>
                ))}
             </div>
          </div>
          <div className="lg:w-1/2 flex items-center">
             <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/uTh39RbH18.png" alt="Leadership" className="rounded-[2.5rem] md:rounded-[4rem] w-full h-auto grayscale shadow-2xl" />
          </div>
        </div>
      </Section>
      {/* 5. INSIDE THE PROGRAM - MOCKUP STYLE REFINED */}
      <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden mesh-gradient border-none">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a2a2a_0%,_#1a1a1a_100%)] opacity-40"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex justify-end mb-16 md:mb-24">
             <motion.h1 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-white text-right uppercase"
             >
                Inside The <br />Program
             </motion.h1>
          </div>

          <div className="relative">
             {/* Navigation - Hidden on mobile, shown on desktop */}
             <button 
               onClick={() => setPillarIndex((prev) => (prev - 1 + 4) % 4)}
               className="hidden lg:flex absolute -left-20 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 items-center justify-center text-white hover:bg-[#DD654D] hover:border-[#DD654D] transition-all"
             >
                <ArrowLeft size={32} />
             </button>
             <button 
               onClick={() => setPillarIndex((prev) => (prev + 1) % 4)}
               className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 items-center justify-center text-white hover:bg-[#DD654D] hover:border-[#DD654D] transition-all"
             >
                <ArrowRight size={32} />
             </button>

             <div className="overflow-hidden px-4">
                <motion.div 
                   animate={{ x: `-${pillarIndex * (100 / (window.innerWidth < 768 ? 1 : 2))}%` }}
                   transition={{ type: "spring", stiffness: 100, damping: 20 }}
                   className="flex gap-6 md:gap-10"
                >
                   {[
                     { t: 'Mentoring', d: 'Grounded guidance drawn from lived experience. Mentoring helps founders see clearly, question assumptions, and strengthen their judgment through practical wisdom.' },
                     { t: 'Coaching', d: 'Turning clarity into action. Coaching aligns intent with measurable results through structured guidance and consistent support.' },
                     { t: 'Enterprise Examination', d: 'A structured space to examine the foundations behind decisions. Focused on surfacing patterns, clarifying judgment, and strengthening the anchors that shape authority and direction.' },
                     { t: 'Conscious Presence', d: 'Strengthening awareness in leadership. Moving from confusion to clarity, from reaction to choice, and from pressure to steady presence.' }
                   ].map((item, i) => (
                      <div 
                        key={i} 
                        className="min-w-full md:min-w-[calc(50%-1.25rem)] bg-[#DD654D] p-8 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-full flex flex-col justify-center"
                      >
                         <div className="relative z-10">
                            <h2 className="text-white mb-6 md:mb-8 !text-[2rem] md:!text-[3rem] font-bold">{item.t}</h2>
                            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                               {item.d}
                            </p>
                         </div>
                         <div className="absolute bottom-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-white/10 rounded-tl-full translate-x-12 md:translate-x-20 translate-y-12 md:translate-y-20 group-hover:translate-x-8 md:group-hover:translate-x-12 group-hover:translate-y-8 md:group-hover:translate-y-12 transition-transform duration-500"></div>
                      </div>
                   ))}
                </motion.div>
             </div>

             <div className="flex justify-center gap-3 mt-12">
                {[0, 1, 2, 3].map((i) => (
                  <button 
                    key={i} 
                    onClick={() => setPillarIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all ${pillarIndex === i ? 'bg-white w-8' : 'bg-white/20'}`}
                  />
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5.5 WHAT SHIFTS - MOCKUP STYLE REFINED */}
      <section className="bg-[#111111] py-24 md:py-32 lg:py-48 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-12 gap-16 md:gap-20 items-center">
              <div className="lg:col-span-7">
                  <motion.h1 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="text-white mb-12 md:mb-20"
                 >
                    What Shifts When <br className="hidden md:block" />You Go Through CEP
                 </motion.h1>

                 <motion.div 
                   variants={staggerContainer}
                   initial="hidden"
                   whileInView="show"
                   viewport={{ once: true }}
                   className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
                 >
                    {[
                      { t: 'Deep Immersive Learning', d: 'Four 3-day sessions focused on real breakthroughs, not just theory.', i: <BookOpen className="text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500" size={36} /> },
                      { t: 'Inner Clarity & Steadiness', d: 'Two practices designed to strengthen mental clarity and decision confidence.', i: <Zap className="text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500" size={36} /> },
                      { t: 'One-on-One Support', d: 'Three coaching sessions tailored to your specific business challenges.', i: <Users className="text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500" size={36} /> },
                      { t: 'Lifelong Peer Community', d: 'Stay connected with leaders who understand your journey.', i: <Shield className="text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500" size={36} /> }
                    ].map((card, i) => (
                      <motion.div key={i} variants={fadeInUp} className="bg-[#DD654D] p-8 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] h-full flex flex-col justify-between hover:translate-y-[-12px] hover:shadow-[0_20px_50px_rgba(221,101,77,0.3)] transition-all duration-500 group cursor-default">
                         <div className="mb-6 md:mb-8">{card.i}</div>
                         <div>
                            <h2 className="text-white mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500">{card.t}</h2>
                            <p className="text-white/80">{card.d}</p>
                         </div>
                      </motion.div>
                    ))}
                 </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-5 relative mt-6 md:mt-12 lg:mt-0"
              >
                 <div className="absolute inset-0 bg-[#DD654D] rounded-[2rem] md:rounded-[3rem] translate-x-2 translate-y-2 md:translate-x-6 md:translate-y-6 lg:translate-x-12 lg:translate-y-12"></div>
                 <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/SMDzAwOLT1.png" 
                      alt="CEP Session" 
                      className="w-full h-full object-cover object-top" 
                    />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>


                







                


      {/* 6. CEP IS RIGHT FOR YOU - MOCKUP STYLE */}
      <Section dark className="mesh-gradient !py-24 md:!py-32">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white mb-6 md:mb-8 uppercase"
            >
              Is CEP Right <br />For You?
            </motion.h1>
            <p className="text-gray-400 max-w-xl">
              This program is for founders who have already moved past the early survival phase and are now focused on building sustainable, scalable organisations.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4 md:space-y-6">
            {[
              "You lead an organisation with 20+ members",
              "You are facing the pressures of scaling leadership",
              "You want to shift from instruction to empowerment",
              "You are ready to commit to deep personal growth"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 md:gap-6 p-6 md:p-8 bg-white/5 rounded-[1.5rem] md:rounded-3xl border border-white/10 hover:bg-[#DD654D]/10 transition-all cursor-default group"
              >
                <CheckCircle2 className="text-[#DD654D] group-hover:scale-110 transition-transform shrink-0" size={28} />
                <span className="font-bold flex-1">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>


      {/* 7. WHAT YOU GRADUATE WITH AS A LEADER */}
      <Section className="bg-white !py-24 md:!py-32">
        <div className="max-w-[1290px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/nXpKzJgFSs.png" 
              alt="Program Graduates" 
              className="w-full h-auto rounded-[2rem] md:rounded-[3rem] shadow-2xl"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/3">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#01162c]"
              >
                What You Graduate With <br />as a Leader
              </motion.h1>
            </div>
            <div className="lg:w-2/3">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
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
                    className="p-8 md:p-10 bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_5px_30px_0_rgba(39,35,74,0.1)] hover:shadow-2xl transition-all border border-gray-50 flex flex-col gap-5 md:gap-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0">
                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <h2 className="text-black">{item.title}</h2>
                    </div>
                    <p className="text-[#01162c]/70">
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
      <div id="shifts" className="relative overflow-hidden bg-white border-y border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[600px] w-full">
          <div className="lg:w-1/2 bg-[#DD654D] py-20 md:py-32 px-6 sm:px-12 lg:px-24 flex flex-col justify-center gap-10 md:gap-14 text-white">
            <div className="space-y-4">
                <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white"
              >
                Organisational Shifts
              </motion.h1>
              <p className="opacity-90 max-w-lg">A transformational change in your leadership abilities, moving your organization toward sustainable growth and distributed ownership.</p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 md:gap-8"
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
                  className="flex items-center gap-5 md:gap-6"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0">
                    <img src={point.icon} alt={point.text} className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                  <h2 className="flex-1 font-medium">
                    {point.text}
                  </h2>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a href="#contact" className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-black hover:text-white transition-all inline-block shadow-2xl">
                Apply Now
              </a>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-full bg-gray-100">
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/dd8bUjO8Fj.png" 
              alt="Leader" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>

      {/* 7. MEET THE COACHES */}
      <Section className="bg-white !py-24 md:!py-32">
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <h1 className="mb-6 md:mb-8">Meet The Coaches</h1>
          <p className="text-gray-600">
            You'll be guided by experienced coaches who have walked this path themselves. They bring decades of real world leadership experience, hard won wisdom, and genuine commitment to your transformation.
          </p>
        </div>
        
        <div className="relative overflow-hidden px-4">
          <motion.div 
            animate={{ x: `-${coachIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6 md:gap-8"
          >
            {coaches.map((c, i) => (
              <div 
                key={i} 
                className="min-w-full md:min-w-[calc(33.333%-1.5rem)] group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                 <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="p-6 md:p-8">
                    <h2 className="mb-2 text-gray-900">{c.name}</h2>
                    <p className="text-[#f26045] uppercase tracking-widest">{c.role}</p>
                 </div>
              </div>
            ))}
          </motion.div>
          
          <div className="flex justify-center gap-2 mt-12">
            {coaches.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCoachIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${coachIndex === i ? 'bg-[#f26045] w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* 8. FROM OUR COHORTS - RESTORED */}
      <Section className="bg-gray-50 !py-24 md:!py-32 border-y border-gray-100">
        <div className="max-w-4xl mb-12 md:mb-16 px-4">
          <h1 className="mb-6 md:mb-8">From Our Cohorts</h1>
          <p className="text-gray-600">
            My journey with SKC has been game-changing and life-changing. 
            It allows you to fix things going wrong in your life and stop negative spirals; I recommend it to all my loved ones.
          </p>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {['mbWqiATx4a', 'ok0RPeWAPr', 'DWumVWPDjj'].map((img, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl bg-gray-200 aspect-[4/3]"
            >
              <motion.img 
                src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} 
                alt="Cohort" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000" 
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 9. ALUMNI VOICE - RESTORED 2-COLUMN GRID */}
      <Section id="testimonials" className="bg-white !py-24 md:!py-32">
        <h2 className="text-[2.25rem] md:text-[3.25rem] font-bold mb-16 md:mb-20 tracking-tight">Alumni Voice</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-12 bg-gray-50 rounded-3xl md:rounded-[4rem] items-start hover:shadow-2xl transition-all duration-500 overflow-hidden">
               <img src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${t.i}.png`} className="w-24 h-24 md:w-32 md:h-32 rounded-xl md:rounded-[2rem] object-cover object-top shadow-lg md:shadow-xl shrink-0" alt={t.n} />
               <div>
                  <Quote className="text-[#f26045] mb-4 md:mb-6 opacity-30" size={40} />
                  <p className="italic mb-6 md:mb-8 text-[#01162c]">"{t.q}"</p>
                  <h2 className="mb-1">{t.n}</h2>
                  <p className="text-[#f26045] uppercase tracking-widest">{t.r}</p>
               </div>
            </div>
          ))}
        </div>
      </Section>
      {/* 10. FAQs - DARK SPLIT STYLE */}
      <Section dark id="faqs" className="mesh-gradient !py-24 md:!py-32 overflow-hidden">
        <div className="lg:grid lg:grid-cols-12 gap-12 md:gap-20">
           <div className="lg:col-span-4 self-start mb-12 md:mb-0">
              <h1 className="opacity-10 text-white uppercase !text-[4rem] md:!text-[8rem]">FAQs</h1>
              <p className="text-gray-400 mt-6 md:mt-10 pr-0 md:pr-4">
                Everything you need to know about our personal admissions, how the program works, who it's for, and what to expect.
              </p>
           </div>
           <div className="lg:col-span-8 divide-y divide-white/10">
              {faqs.map((f, i) => (
                <div key={i} className="py-6 md:py-8 group cursor-pointer flex flex-col justify-center transition-all">
                  <div 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center py-3 md:py-4 text-white/90 hover:text-[#f26045] transition-colors"
                  >
                    <h2 className="max-w-[85%] !text-[1.25rem] md:!text-[1.75rem]">{f.q}</h2>
                    {openFaq === i ? <Minus size={24} md:size={32} className="shrink-0" /> : <Plus size={24} md:size={32} className="shrink-0" />}
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
                         <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed pb-6 md:pb-8 pr-4 md:pr-12">
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

      {/* 11. EVENT GALLERY - MOCKUP STYLE REFINED */}
      <Section className="bg-white !py-24 md:!py-40 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-8 uppercase text-[#DD654D]"
              >
                Event Gallery & Testimonials
              </motion.h1>
             <p className="text-gray-600 max-w-3xl mx-auto font-semibold">
                Snapshots of transformation and voices from our cohorts.
             </p>
          </div>

          <div className="mb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {videoTestimonials.map((v, i) => (
                   <motion.div 
                     key={i}
                     variants={fadeInUp}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
                   >
                      <div className="aspect-video w-full bg-black leading-none">
                         <iframe 
                           src={v.url} 
                           className="w-full h-full border-none" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                           allowFullScreen
                         ></iframe>
                      </div>
                      <div className="p-8 md:p-10 flex-1">
                         <h2 className="mb-2 text-[#01162c]">{v.name}</h2>
                         <p className="text-[#f26045] text-base md:text-lg uppercase tracking-wider font-bold">{v.role}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
          
          <div className="relative max-w-6xl mx-auto group">
             {/* Navigation - Hidden on mobile */}
             <button className="hidden lg:flex absolute -left-12 lg:-left-24 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white shadow-2xl items-center justify-center text-[#DD654D] hover:scale-110 transition-all">
                <ArrowLeft size={32} />
             </button>
             <button className="hidden lg:flex absolute -right-12 lg:-right-24 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white shadow-2xl items-center justify-center text-[#DD654D] hover:scale-110 transition-all">
                <ArrowRight size={32} />
             </button>
 
             <motion.div 
               variants={staggerContainer}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-hidden"
             >
                {['KEa1R2q9Oe', 'Nm1MLGKF3A', 'aX2JGytTv3', 'eTMHXoGtkJ', '5dGtP4QHLh', 'QKq988ujHM'].map((img, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-md md:shadow-lg"
                  >
                    <motion.img 
                      src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} 
                      alt="Gallery" 
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" 
                    />
                  </motion.div>
                ))}
             </motion.div>
          </div>
  
          <div className="flex justify-center mt-16 md:mt-24">
             <button className="px-10 py-4 md:px-16 md:py-5 bg-white text-[#DD654D] hover:bg-black hover:text-white rounded-full font-black text-xl md:text-2xl transition-all shadow-2xl">
                See More
             </button>
          </div>
        </div>
      </Section>

      {/* 12. FINAL APPLICATION FORM - MOCKUP STYLE */}
      <Section className="bg-white !py-24 md:!py-40" id="contact">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
           <div>
              <h1 className="mb-8 md:mb-10 text-[#01162c] uppercase">Apply Now</h1>
              <p className="text-gray-500 max-w-lg">
                This is a curated program designed for a small group of founders. Apply below and we'll get back to you if there's a strong alignment.
              </p>
           </div>
           
           <div className="space-y-8 md:space-y-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                 <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">Name</label>
                    <input type="text" className="w-full p-5 md:p-6 rounded-xl bg-gray-100 border-none focus:ring-2 focus:ring-[#f26045] outline-none text-lg md:text-xl font-medium" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">Email</label>
                    <input type="email" className="w-full p-5 md:p-6 rounded-xl bg-gray-100 border-none focus:ring-2 focus:ring-[#f26045] outline-none text-lg md:text-xl font-medium" />
                 </div>
              </div>
              <div>
                 <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">Phone No.</label>
                 <input type="text" className="w-full p-5 md:p-6 rounded-xl bg-gray-100 border-none focus:ring-2 focus:ring-[#f26045] outline-none text-lg md:text-xl font-medium" />
              </div>
              <div>
                 <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">Your Message</label>
                 <textarea rows={4} className="w-full p-5 md:p-6 rounded-xl bg-gray-100 border-none focus:ring-2 focus:ring-[#f26045] outline-none text-lg md:text-xl font-medium resize-none"></textarea>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6">
                 <button className="bg-black text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-[#db644d] transition-all shadow-xl">
                    Apply Now
                 </button>
                 <button className="bg-white text-black border-2 border-black px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-black hover:text-white transition-all shadow-xl">
                    Contact Us
                 </button>
              </div>
           </div>
        </div>
      </Section>


    </div>
  );
}
