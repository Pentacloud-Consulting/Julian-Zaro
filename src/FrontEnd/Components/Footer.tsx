"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full text-white pt-24 pb-10 relative overflow-hidden font-sans border-t border-white/10">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: 'url("/Home Images/Hero/Julian Image 1.webp")' }}
      ></div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/85 pointer-events-none z-0"></div>

      <div className="max-w-[95rem] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          
          <div className="flex flex-col max-w-[400px]">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-6"
            >
              Ready to make <br/><span className="text-brand">real impact?</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed mb-8"
            >
              Every story shared and every contribution made helps us bring positive change to communities across the globe. Join the movement today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <button className="bg-brand hover:bg-[#4ea837] transition-colors text-white text-xs font-semibold tracking-widest uppercase py-4 px-8 relative"
                      style={{ clipPath: 'polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)' }}>
                Donate Now &gt;
              </button>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Navigation</h4>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">Projects</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">Stories</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">How it Works</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">Support</Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Socials</h4>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">Instagram</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">Twitter</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">YouTube</Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-brand transition-colors">LinkedIn</Link>
            </motion.div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 7.77333V16.2267L12 22L2 16.2267V7.77333L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="9" y="10" width="6" height="6" stroke="white" strokeWidth="1.5" />
            </svg>
            <span className="text-lg font-medium tracking-[0.15em] mb-1 uppercase">JULIAN ZARO</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xs text-gray-500 tracking-wide"
          >
            © {new Date().getFullYear()} Julian Zaro. All rights reserved.
          </motion.p>
        </div>

      </div>
    </footer>
  );
}
