import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="relative z-10 w-full flex justify-between items-center px-10 py-10 md:px-14">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 7.77333V16.2267L12 22L2 16.2267V7.77333L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="9" y="10" width="6" height="6" stroke="white" strokeWidth="1.5" />
        </svg>
        <span className="text-xl font-medium tracking-[0.15em] mb-1 uppercase">JULIAN ZARO</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] font-bold uppercase ml-8">
        <Link href="#" className="hover:text-gray-300 transition-colors">Project</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">Stories</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">How it Works</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">Support</Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-1.5 text-[13px] font-medium hover:text-gray-300 transition-colors">
          EN
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button className="bg-brand hover:bg-brand-hover text-brand-dark px-6 py-2.5 rounded-full font-medium text-sm transition-colors">
          Donate Now
        </button>
      </div>
    </nav>
  );
}
