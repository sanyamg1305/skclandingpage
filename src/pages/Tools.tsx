import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Users, Layout, Sliders, Briefcase } from 'lucide-react';

export default function Tools() {
  const frameworks = [
    { 
      title: 'Conscious Presence Framework', 
      desc: 'A methodology for building mental clarity and emotional steadiness under pressure.',
      icon: <Compass className="text-[#f26045]" size={32} />
    },
    { 
      title: 'Distributed Ownership Model', 
      desc: 'Tools for transitioning from instruction-led to empowered-led leadership.',
      icon: <Users className="text-[#f26045]" size={32} />
    },
    { 
      title: 'Scalable Authority Structure', 
      desc: 'Frameworks for defining accountability and decision-making clarity across teams.',
      icon: <Sliders className="text-[#f26045]" size={32} />
    },
    { 
      title: 'Intentional Direction System', 
      desc: 'Methods for freeing yourself from daily operations to focus on long-term growth.',
      icon: <Briefcase className="text-[#f26045]" size={32} />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Intro */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Leadership <span className="text-[#f26045]">Frameworks</span></h1>
          <p className="text-xl text-gray-600">
            Proprietary tools and mental models developed over 25 years to help leaders navigate organisational complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {frameworks.map((tool, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-1 bg-gradient-to-br from-[#f26045]/20 to-transparent rounded-[2.5rem] hover:from-[#f26045]/40 transition-all"
            >
              <div className="bg-white p-10 rounded-[2.4rem] h-full">
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Philosophy Callout */}
      <Section dark className="bg-[#282828]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="bg-[#f26045] w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/4mUYQQgV3i.png" 
                  alt="Frameworks" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
                />
             </div>
             <div className="absolute -top-6 -right-6 bg-white text-[#01162c] p-6 rounded-2xl shadow-xl flex items-center gap-3">
                <Lightbulb className="text-[#f26045]" size={24} />
                <span className="font-bold">25+ Years of R&D</span>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 italic">"Tools aren't just templates; they are shifts in perspective."</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Our frameworks are designed to be applied immediately to your specific business challenges, turning theory into measurable organisational results.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Cohort-Based</div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Applied Learning</div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Mentored</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature Grid */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Leadership Pillars</h2>
          <p className="text-gray-600">The foundational elements of the Conscious Entrepreneurship Program.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           {[
             { title: 'Inner Clarity', desc: 'Strengthen decision confidence and emotional steadiness.', icon: <Compass size={24} /> },
             { title: 'Team Empowerment', desc: 'Create systems where work moves faster without you.', icon: <Layout size={24} /> },
             { title: 'Sustainable Scale', desc: 'Build an organisation that creates stability under pressure.', icon: <Award size={24} /> },
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#f26045] text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#f26045]/20">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-500 max-w-xs">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>
    </div>
  );
}

function Award(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}
