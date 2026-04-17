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
    { name: 'EW Abhishek Goel', role: 'Organizational Strategy', img: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/ERDY9BHhTO.png' },
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
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            Conscious <br />
            <span className="text-[#f26045]">Entrepreneurship <br />Program™</span>
          </motion.h1>
          <p className="text-base md:text-xl text-white/90 mb-10 font-medium max-w-2xl leading-relaxed">
            Built for leaders shaping businesses at scale. A cohort-based program for founders and CXOs ready to transform how they lead.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="bg-[#f26045] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:bg-white hover:text-black transition-all text-center">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM LOOKS LIKE */}
      <Section dark className="bg-[#282828] !py-24 md:!py-32">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-tight">What the Program Looks Like</h2>
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
               <div className="md:col-span-5"><h3 className="text-2xl md:text-4xl font-bold text-[#f26045]">{item.t}</h3></div>
               <div className="md:col-span-7"><p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed">{item.d}</p></div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 3. STATS */}
      <Section className="bg-white !py-24 md:!py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-5xl md:text-7xl font-bold text-[#db644d] mb-4 tracking-tighter">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[#01162c] font-bold text-xs md:text-sm uppercase tracking-[0.2em]">{stat.label}</div>
              <div className="mt-6 h-px w-full bg-gray-100"></div>
            </div>
          ))}
        </div>
      </Section>

    {/* 4. SPECIALLY DESIGNED FOR */}
      <Section className="bg-gray-50 !py-24 md:!py-32">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20">
          <div className="lg:w-1/2">
             <h2 className="text-5xl md:text-8xl font-bold mb-8 md:mb-10 tracking-tighter leading-[0.9]">Specially <br />Designed For</h2>
             <div className="space-y-10 md:space-y-12 mt-12 md:mt-16">
                {['Founders at Scale', 'CXOs in Transition', 'Second-Generation Leaders'].map((t, i) => (
                   <div key={i} className="border-l-4 border-[#f26045] pl-6 md:pl-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t}</h3>
                      <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">Leaders navigating rapid growth and expanded authority.</p>
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
      <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden bg-[#1a1a1a] border-none">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a2a2a_0%,_#1a1a1a_100%)] opacity-40"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex justify-end mb-16 md:mb-24">
             <motion.h2 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-5xl md:text-8xl font-black text-white tracking-tight text-right uppercase"
             >
                Inside The <br />Program
             </motion.h2>
          </div>

          <div className="relative">
             {/* Navigation - Hidden on mobile, shown on desktop */}
             <button className="hidden lg:flex absolute -left-20 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 items-center justify-center text-white hover:bg-[#DD654D] hover:border-[#DD654D] transition-all">
                <ArrowLeft size={32} />
             </button>
             <button className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 items-center justify-center text-white hover:bg-[#DD654D] hover:border-[#DD654D] transition-all">
                <ArrowRight size={32} />
             </button>

             <motion.div 
               variants={staggerContainer}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full"
             >
                <motion.div variants={fadeInUp} className="bg-[#DD654D] p-10 lg:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                   <div className="relative z-10">
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Mentoring</h3>
                      <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-medium">
                         Grounded guidance drawn from lived experience. Mentoring helps founders see clearly, question assumptions, and strengthen their judgment through practical wisdom.
                      </p>
                   </div>
                   <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-tl-full translate-x-8 md:translate-x-12 translate-y-8 md:translate-y-12 group-hover:translate-x-4 md:group-hover:translate-x-8 group-hover:translate-y-4 md:group-hover:translate-y-8 transition-transform duration-500"></div>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-[#DD654D] p-10 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">
                   <div className="relative z-10">
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Coaching</h3>
                      <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-medium">
                         Turning clarity into action. Coaching aligns intent with measurable results through structured guidance and consistent support.
                      </p>
                   </div>
                   <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-tl-full translate-x-8 md:translate-x-12 translate-y-8 md:translate-y-12 group-hover:translate-x-4 md:group-hover:translate-x-8 group-hover:translate-y-4 md:group-hover:translate-y-8 transition-transform duration-500"></div>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5.5 WHAT SHIFTS - MOCKUP STYLE REFINED */}
      <section className="bg-[#111111] py-24 md:py-32 lg:py-48 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-12 gap-16 md:gap-20 items-center">
              <div className="lg:col-span-7">
                 <motion.h2 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="text-4xl md:text-7xl font-bold text-white mb-12 md:mb-20 leading-[1.1] tracking-tight"
                 >
                    What Shifts When <br />You Go Through CEP
                 </motion.h2>

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
                            <h4 className="text-white font-bold text-xl md:text-3xl mb-3 md:mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-500">{card.t}</h4>
                            <p className="text-white/80 text-base md:text-lg leading-relaxed">{card.d}</p>
                         </div>
                      </motion.div>
                    ))}
                 </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-5 relative mt-12 lg:mt-0"
              >
                 <div className="absolute inset-0 bg-[#DD654D] rounded-[2rem] md:rounded-[3rem] translate-x-4 md:translate-x-6 translate-y-4 md:translate-y-6 lg:translate-x-12 lg:translate-y-12"></div>
                 <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/SMDzAwOLT1.png" 
                      alt="CEP Session" 
                      className="w-full h-full object-cover" 
                    />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>


                







                


      {/* 6. CEP IS RIGHT FOR YOU - MOCKUP STYLE */}
      <Section dark className="bg-[#111111] !py-24 md:!py-32">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black text-white tracking-tight mb-6 md:mb-8 uppercase"
            >
              Is CEP Right <br />For You?
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl">
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
                <span className="text-lg md:text-2xl font-bold">{text}</span>
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
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-[#01162c] leading-[1.1] tracking-tight"
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
                      <h3 className="text-xl md:text-2xl font-bold text-black">{item.title}</h3>
                    </div>
                    <p className="text-base md:text-lg text-[#01162c]/70 leading-relaxed">
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
        <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px]">
          <div className="lg:w-3/5 bg-[#DD654D] py-16 px-6 md:px-24 flex flex-col justify-center gap-10 md:gap-12 text-white">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold"
              >
                Organisational Shifts
              </motion.h2>
              <p className="text-lg md:text-2xl opacity-90">A transformational change in your leadership abilities.</p>
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
                  <span className="text-xl md:text-3xl font-medium leading-tight">
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
      <Section className="bg-white !py-24 md:!py-32">
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter">Meet The Coaches</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            You'll be guided by experienced coaches who have walked this path themselves. They bring decades of real world leadership experience, hard won wisdom, and genuine commitment to your transformation.
          </p>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {coaches.map((c, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
               <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{c.name}</h3>
                  <p className="text-[#f26045] font-bold text-xs uppercase tracking-widest">{c.role}</p>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 8. FROM OUR COHORTS - RESTORED */}
      <Section className="bg-gray-50 !py-24 md:!py-32 border-y border-gray-100">
        <div className="max-w-4xl mb-12 md:mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter">From Our Cohorts</h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
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
            <motion.img 
              key={i} 
              variants={fadeInUp}
              src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} 
              alt="Cohort" 
              className="rounded-3xl w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl" 
            />
          ))}
        </motion.div>
      </Section>

      {/* 9. ALUMNI VOICE - RESTORED 2-COLUMN GRID */}
      <Section className="bg-white !py-24 md:!py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 tracking-tighter">Alumni Voice</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {[
            { n: 'Rajani Jalan', r: 'Director - CSR/PR, mPokket', q: 'CEP really helped me build my people pillar, understand that engaging with them is more important than instruction led leadership.', i: 'zSUT2308YU' },
            { n: 'Tejas Jhaveri', r: 'Founder and CEO, Myntmore', q: 'I would recommend this highly to anyone, it\'s a game changer for anyone struggling with their business or their personal life.', i: 'PkhvDRjkqM' }
          ].map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-10 p-8 md:p-12 bg-gray-50 rounded-[2.5rem] md:rounded-[4rem] items-start hover:shadow-2xl transition-all duration-500">
               <img src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${t.i}.png`} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] object-cover shadow-xl" alt={t.n} />
               <div>
                  <Quote className="text-[#f26045] mb-4 md:mb-6 opacity-30" size={40} />
                  <p className="text-xl md:text-2xl font-medium italic mb-6 md:mb-8 leading-relaxed text-[#01162c]">"{t.q}"</p>
                  <h4 className="font-bold text-xl md:text-2xl mb-1">{t.n}</h4>
                  <p className="text-[#f26045] text-[10px] md:text-xs font-bold uppercase tracking-widest">{t.r}</p>
               </div>
            </div>
          ))}
        </div>
      </Section>
      {/* 10. FAQs - DARK SPLIT STYLE */}
      <Section dark className="bg-[#282828] !py-24 md:!py-32 overflow-hidden">
        <div className="lg:grid lg:grid-cols-12 gap-12 md:gap-20">
           <div className="lg:col-span-4 self-start mb-12 md:mb-0">
              <h2 className="text-7xl md:text-[14rem] font-bold opacity-10 text-white leading-none tracking-tighter">FAQs</h2>
              <p className="text-gray-400 font-medium text-lg md:text-xl leading-relaxed mt-6 md:mt-10 pr-0 md:pr-4">
                Everything you need to know about our personal admissions, how the program works, who it's for, and what to expect.
              </p>
           </div>
           <div className="lg:col-span-8 divide-y divide-white/10">
              {faqs.map((f, i) => (
                <div key={i} className="py-6 md:py-8 group cursor-pointer flex flex-col justify-center transition-all">
                  <div 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center text-xl md:text-3xl font-bold py-3 md:py-4 text-white/90 hover:text-[#f26045] transition-colors"
                  >
                    <span className="max-w-[85%]">{f.q}</span>
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
             <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="text-5xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 uppercase text-[#DD654D]"
             >
                Event Gallery
             </motion.h2>
             <p className="text-gray-600 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-semibold">
                Snapshots of transformation from our deep-dive workshops.
             </p>
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
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
             >
                {['KEa1R2q9Oe', 'Nm1MLGKF3A', 'aX2JGytTv3', 'eTMHXoGtkJ', '5dGtP4QHLh', 'QKq988ujHM'].map((img, i) => (
                   <motion.img 
                     key={i} 
                     variants={fadeInUp} 
                     src={`https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/${img}.png`} 
                     className="rounded-[2rem] md:rounded-[2.5rem] w-full aspect-[4/3] object-cover shadow-2xl hover:brightness-110 transition-all duration-500 cursor-zoom-in" 
                     alt="Event" 
                   />
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
              <h2 className="text-5xl md:text-9xl font-black mb-8 md:mb-10 tracking-tighter text-[#01162c] uppercase">Apply Now</h2>
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-lg">
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

      {/* 13. FOOTER - MOCKUP STYLE */}
      <footer className="bg-[#222222] text-white pt-20 md:pt-32 pb-12 md:pb-16">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 md:mb-32">
               <div className="sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                     <span className="text-2xl md:text-3xl font-black tracking-tighter">SKC.World</span>
                  </div>
                  <p className="text-gray-400 font-medium leading-relaxed">
                     Conscious Entrepreneurship
                  </p>
               </div>
               
               <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-8 md:mb-10">About Program</h4>
                  <ul className="space-y-4 md:space-y-6 text-lg md:text-xl font-medium">
                     <li><a href="#" className="hover:text-[#f26045] transition-colors">Program Structure</a></li>
                     <li><a href="#" className="hover:text-[#f26045] transition-colors">Upcoming Batches</a></li>
                     <li><a href="#" className="hover:text-[#f26045] transition-colors">Program Takeaways</a></li>
                     <li><a href="#" className="hover:text-[#f26045] transition-colors">Who Should Do It</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-8 md:mb-10">Registration</h4>
                  <ul className="space-y-4 md:space-y-6 text-lg md:text-xl font-medium">
                     <li><a href="#" className="hover:text-[#f26045] transition-colors">SKC Testimonials</a></li>
                     <li><a href="#" className="hover:text-[#f26045] transition-colors">Blog</a></li>
                     <li><a href="#" className="hover:text-[#f26045] transition-colors">Contact Us</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-8 md:mb-10">Social With Us</h4>
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex gap-4 md:gap-6"
                  >
                     {['facebook', 'linkedin', 'instagram', 'youtube'].map((social) => (
                        <motion.a 
                           key={social} 
                           variants={fadeInUp}
                           href="#" 
                           className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#db644d] hover:border-[#db644d] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                        >
                           <div className="w-5 h-5 md:w-6 md:h-6 bg-white/80 rounded-sm group-hover:bg-white transition-colors"></div>
                        </motion.a>
                     ))}
                  </motion.div>
               </div>
            </div>

            <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-gray-500 font-medium text-sm md:text-base">
               <p>© 2024. All Rights Reserved.</p>
               <div className="flex gap-8 md:gap-12">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
