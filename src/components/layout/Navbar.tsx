import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About the Program', path: '#about' },
    { name: 'Organisational Shift', path: '#shifts' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'FAQs', path: '#faqs' },
    { name: 'Contact Us', path: '#contact' },
  ];

  return (
    <header className="w-full flex flex-col z-50">
      {/* Announcement Bar */}
      <div className="w-full bg-[#f66e49] py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block text-white font-semibold text-sm md:text-base">
          Applications Open | Conscious Entrepreneurship Program™ 2026 &nbsp;&nbsp;&nbsp;&nbsp;
          Applications Open | Conscious Entrepreneurship Program™ 2026 &nbsp;&nbsp;&nbsp;&nbsp;
          Applications Open | Conscious Entrepreneurship Program™ 2026
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex shrink-0">
               <div className="w-[150px] h-[55px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-15/8HJhNqE4Zo.png)] bg-contain bg-no-repeat bg-left"></div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-[#01162c] hover:text-[#f26045] font-medium text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#f26045] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#d9533a] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-[#f26045] p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-[#01162c] hover:bg-gray-50 hover:text-[#f26045] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#f26045] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d9533a] transition-all"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
