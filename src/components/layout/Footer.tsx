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
            <p className="text-gray-400 text-sm leading-relaxed">
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
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/tools" className="hover:text-white transition-colors">Frameworks</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Conscious Entrepreneurship</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Leadership Intensive</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">CXO Coaching</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Organizational Shift</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
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

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
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
