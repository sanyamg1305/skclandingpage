import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, FileText, Download, Fingerprint, Book, Share2 } from 'lucide-react';

export default function Resources() {
  const faqs = [
    { 
      q: 'What actually happens during the CEP sessions?', 
      a: 'Sessions involve guided discussions, reflection exercises, and practical tools that participants apply to their own organisations. The focus is on examining leadership decisions and strengthening organisational thinking.' 
    },
    { 
      q: 'How much time will I realistically need to commit during the program?', 
      a: 'The program involves four 3-day immersive workshops and supplemental coaching. We recommend leaders clear their calendar during workshop days to fully engage in the transformation process.' 
    },
    { 
      q: 'What kind of founders or leaders usually join CEP?', 
      a: 'CEP is built for leaders with real authority—founders at scale, CXOs in transition, and second-generation leaders ready to shape their own path.' 
    },
    { 
      q: 'How big is a typical CEP cohort?', 
      a: 'We keep cohorts small (typically under 20 people) to ensure deep peer connection and high-quality interaction with coaches.' 
    },
    { 
      q: 'Will I be able to work on challenges from my own organisation?', 
      a: 'Yes, the program is designed around your specific business challenges. You apply the tools and frameworks to your real-world scenarios immediately.' 
    }
  ];

  const downloads = [
    { title: 'Program Brochure 2026', type: 'PDF • 4.2 MB', icon: <FileText size={40} /> },
    { title: 'Leadership Frameworks', type: 'ZIP • 12.8 MB', icon: <Book size={40} /> },
    { title: 'Cohort Schedule', type: 'PDF • 1.1 MB', icon: <Share2 size={40} /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Intro */}
      <section className="bg-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            Center of <br /><span className="text-[#f26045]">Knowledge</span>
          </motion.h1>
          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
            Access the intellectual property, program details, and frameworks that drive the Conscious Entrepreneurship journey.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <Section className="bg-gray-50 !py-32">
        <div className="grid md:grid-cols-3 gap-8">
          {downloads.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3.5rem] border border-gray-100 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.02)] group"
            >
              <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center text-[#f26045] mb-8 group-hover:bg-[#f26045] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">{item.type}</p>
              <button className="flex items-center gap-2 text-[#f26045] font-bold text-lg hover:underline underline-offset-8">
                Download Now <Download size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section - FIGMA SPLIT LAYOUT RESTORED */}
      <Section dark className="bg-[#282828] !py-40 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-20">
           {/* Huge Side Text */}
           <div className="lg:col-span-4 flex items-start">
             <h2 className="text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tightest opacity-10 text-white sticky top-40 select-none">
               FAQs
             </h2>
           </div>
           
           {/* Accordion List */}
           <div className="lg:col-span-8 space-y-2">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
           </div>
        </div>
      </Section>

      {/* Final Callout */}
      <Section className="bg-white !py-40 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Fingerprint size={80} className="text-[#f26045] mb-10 opacity-20" />
          <h2 className="text-5xl font-bold mb-10 tracking-tighter text-[#01162c]">Still have questions?</h2>
          <p className="text-2xl text-gray-500 mb-12 font-medium">Our admissions team is available for 1-on-1 discovery calls.</p>
          <button className="bg-[#282828] text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-[#f26045] transition-all shadow-2xl">
            Schedule a Call
          </button>
        </div>
      </Section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 group last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-12 text-left transition-all"
      >
        <span className="text-2xl md:text-3xl font-bold text-white/90 pr-12 group-hover:text-[#f26045] transition-colors">
          {question}
        </span>
        <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center shrink-0 group-hover:border-[#f26045] group-hover:bg-[#f26045] transition-all">
          {isOpen ? <Minus size={20} className="text-white" /> : <Plus size={20} className="text-white" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-12 text-xl md:text-2xl text-gray-400 leading-relaxed font-medium pr-12 max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
