import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      <section className="bg-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            Start Your <br /><span className="text-[#f26045]">Admission</span>
          </motion.h1>
          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
            Join a curated group of leaders shaping the future of consciousness and commerce.
          </p>
        </div>
      </section>

      <Section className="bg-gray-50 !py-32">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: Info */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Connect</h2>
              <p className="text-xl text-gray-500 font-medium">Our admissions office is available for direct inquiries regarding the 2026 cohort.</p>
            </div>
            
            <div className="space-y-10">
              {[
                { label: 'Email Us', val: 'admissions@myntmore.com', icon: <Mail size={24} /> },
                { label: 'Call Us', val: '+91 98765 43210', icon: <Phone size={24} /> },
                { label: 'Visit Us', val: 'Corporate Park, Bandra East, Mumbai', icon: <MapPin size={24} /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#f26045] group-hover:bg-[#f26045] group-hover:text-white transition-all duration-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-1">{item.label}</h4>
                    <p className="text-2xl font-bold text-[#01162c]">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f26045]/5 p-8 rounded-[2.5rem] border border-[#f26045]/10 flex items-start gap-4">
               <ShieldCheck className="text-[#f26045] shrink-0" size={32} />
               <p className="text-gray-600 font-medium italic">Your data is secured. All applications are reviewed personally by our coaching core.</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-10 md:p-20 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-green-50 text-green-500 rounded-full mb-10">
                    <CheckCircle size={64} />
                  </div>
                  <h2 className="text-5xl font-bold mb-6 tracking-tighter">Application Received</h2>
                  <p className="text-2xl text-gray-500 max-w-md mx-auto font-medium">
                    We will review your submission and contact you within 3-5 business days.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-12 text-[#f26045] font-bold text-lg hover:underline underline-offset-8"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f26045] focus:bg-white p-6 rounded-[2rem] outline-none transition-all text-xl font-medium"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-2">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f26045] focus:bg-white p-6 rounded-[2rem] outline-none transition-all text-xl font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 XXXX XXX XXX" 
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f26045] focus:bg-white p-6 rounded-[2rem] outline-none transition-all text-xl font-medium"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-2">Leadership Challenge</label>
                    <textarea 
                      required
                      rows={6} 
                      placeholder="Describe the organizational shift you are aiming for..." 
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#f26045] focus:bg-white p-8 rounded-[2.5rem] outline-none transition-all resize-none text-xl font-medium"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#282828] text-white py-8 rounded-full font-bold text-2xl hover:bg-[#f26045] transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 group"
                  >
                    Complete Application <Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                  
                  <p className="text-center text-gray-400 font-medium">
                    Limited seats available for the 2026 cohort.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
