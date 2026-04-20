import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#282828] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="w-[140px] h-[50px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/8HJhNqE4Zo.png)] bg-contain bg-no-repeat grayscale invert"></div>
            <p className="text-gray-400 leading-relaxed">
              Empowering leaders to navigate growth with clarity, conscious presence, and organizational wisdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f26045] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#f26045] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#f26045] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-6">Quick Links</h2>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="#shifts" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Connect</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h2 className="mb-6">Sections</h2>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About the Program</a></li>
              <li><a href="#shifts" className="hover:text-white transition-colors">Organisational Shift</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6">Connect With Us</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#f26045] shrink-0" />
                <span>hello@myntmore.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#f26045] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#f26045] shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Myntmore. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
