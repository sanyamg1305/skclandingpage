import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Zap, Layout, Shield, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const workshops = [
    { 
      title: 'Four 3-Day Immersive Workshops', 
      desc: 'Deep-dive sessions combining peer learning, expert mentoring, and meaningful conversations designed for transformational breakthroughs.',
      icon: <Target className="text-[#f26045]" size={32} />
    },
    { 
      title: 'Two Conscious Presence Practices', 
      desc: 'Guided reflection sessions building mental clarity and emotional steadiness under pressure.',
      icon: <RefreshCw className="text-[#f26045]" size={32} />
    },
    { 
      title: 'Three One-on-One Coaching Sessions', 
      desc: 'Personal guidance applying program learnings to your specific business challenges and your business.',
      icon: <Zap className="text-[#f26045]" size={32} />
    },
    { 
      title: 'Active Alumni Network', 
      desc: 'Ongoing peer connection, shared learning, and quarterly meetups that extend the journey beyond the program.',
      icon: <RefreshCw className="text-[#f26045]" size={32} />
    }
  ];

  const outcomes = [
    { title: 'Leadership Presence', desc: 'You show up as a grounded, intentional leader who steadies the organisation in moments of pressure and uncertainty.', icon: <Shield size={24} /> },
    { title: 'Empowered Teams', desc: 'Your team makes confident decisions without waiting for your approval, allowing work to move faster.', icon: <CheckCircle2 size={24} /> },
    { title: 'Clear Authority', desc: 'Everyone knows their role, decision-making authority, and accountability, reducing confusion and delays.', icon: <CheckCircle2 size={24} /> },
    { title: 'Scalable Systems', desc: 'Your organisation moves forward without requiring your constant involvement, freeing you to focus on direction.', icon: <Layout size={24} /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Intro Section */}
      <section className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            A Program for <br /><span className="text-[#f26045]">Scale & Clarity</span>
          </motion.h1>
          <p className="text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A transformational journey designed to shift your leadership from constant involvement to intentional direction.
          </p>
        </div>
      </section>

      {/* Curriculum Details - RESTORED FULL SCALE */}
      <Section className="bg-gray-50 !py-32">
        <div className="grid md:grid-cols-2 gap-10">
          {workshops.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-[3rem] border border-gray-100 hover:border-[#f26045]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all group"
            >
              <div className="mb-8 p-6 bg-gray-50 rounded-3xl w-fit group-hover:bg-[#f26045] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-[#f26045] transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Shifts Section - RESTORED DESIGN */}
      <Section dark className="bg-[#282828] relative overflow-hidden !py-40">
        <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/rPWPLPqEHx.png)] bg-cover opacity-20"></div>
        <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">Organisational <br /><span className="text-[#f26045]">Shifts</span></h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
              A transformational change in your leadership abilities that ripples through the entire company.
            </p>
            <ul className="space-y-8">
              {[
                'Distributed Leadership Ownership',
                'Clear Accountability Across Teams',
                'Authority That Creates Stability',
                'Structure That Enables Sustainable Scale'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-6 text-2xl font-bold">
                  <div className="w-10 h-10 rounded-full bg-[#f26045] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#f26045]/30">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-white/90">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 group">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/dd8bUjO8Fj.png" alt="Shifts" className="w-full h-auto opacity-80 group-hover:scale-110 transition-transform duration-1000" />
             </div>
             {/* Floating Info */}
             <div className="absolute -bottom-10 -right-10 bg-[#f26045] p-10 rounded-[2rem] shadow-2xl hidden xl:block max-w-xs rotate-3">
                <p className="text-white text-xl font-bold italic leading-tight">"From daily involvement to intentional direction."</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Graduate Outcomes Grid */}
      <Section className="bg-white !py-40">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">What You Graduate With</h2>
          <p className="text-2xl text-gray-500 font-medium">The tangible transformation of your leadership.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, index) => (
            <div key={index} className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-default border border-transparent hover:border-[#f26045]/10 group">
              <div className="text-[#f26045] mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final Callout */}
      <Section className="text-center !py-32">
        <div className="max-w-4xl mx-auto bg-[#f26045]/5 p-20 rounded-[4rem] border border-[#f26045]/10">
           <h2 className="text-4xl font-bold mb-8 leading-tight">Ready to start the journey?</h2>
           <p className="text-xl text-gray-600 mb-12">Applications for the 2026 cohort are now open.</p>
           <Link to="/contact" className="inline-block bg-[#f26045] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#282828] transition-all shadow-xl">
             Apply for Admissions
           </Link>
        </div>
      </Section>
    </div>
  );
}
