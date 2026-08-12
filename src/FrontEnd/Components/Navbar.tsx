"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-5 md:px-14 ${scrolled ? 'py-3 md:py-4 bg-[#111111]/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-5 md:py-10 bg-transparent'}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/Logo/Julian Zaro.png" alt="Julian Zaro Logo" className="h-10 md:h-14 object-contain" />
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] font-bold uppercase ml-8 text-white">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">Stories</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">How it Works</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">Support</Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 md:gap-8 text-white">
        <button className="flex items-center gap-1 md:gap-1.5 text-[11px] md:text-[13px] font-medium hover:text-gray-300 transition-colors">
          EN
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-3 md:h-3">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button className="hidden md:block bg-brand hover:bg-[#4ea837] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors whitespace-nowrap">
          Donate Now
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center p-1.5 ml-1 hover:text-gray-300 transition-colors focus:outline-none border-none outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#111111]/98 backdrop-blur-xl z-[-1] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ height: '100dvh' }}
      >
        <Link href="/" className="text-xl font-medium text-white tracking-[0.2em] uppercase hover:text-brand transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="#" className="text-xl font-medium text-white tracking-[0.2em] uppercase hover:text-brand transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Stories</Link>
        <Link href="#" className="text-xl font-medium text-white tracking-[0.2em] uppercase hover:text-brand transition-colors" onClick={() => setIsMobileMenuOpen(false)}>How it Works</Link>
        <Link href="#" className="text-xl font-medium text-white tracking-[0.2em] uppercase hover:text-brand transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
        <Link href="/contact" className="text-xl font-medium text-white tracking-[0.2em] uppercase hover:text-brand transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        
        {/* Mobile Donate Button */}
        <button className="mt-4 bg-brand hover:bg-[#4ea837] text-white px-8 py-3 rounded-full font-medium text-lg transition-colors whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>
          Donate Now
        </button>
      </div>
    </nav>
  );
}
