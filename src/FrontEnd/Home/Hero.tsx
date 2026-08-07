"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const words = ["REAL STORIES.", "REAL PEOPLE.", "REAL IMPACT."];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const maskImage = useMotionTemplate`radial-gradient(280px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      className="relative w-full h-screen text-white overflow-hidden flex flex-col group" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image 1 */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: 'url("/Home Images/Hero/Julian Image 1.webp")' }}
      ></div>

      {/* Background Image 2 - Cursor Reveal */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 hidden md:block"
        style={{ 
          backgroundImage: 'url("/Home Images/Hero/Julian Image 2.webp")',
          maskImage,
          WebkitMaskImage: maskImage,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      ></motion.div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none z-0"></div>

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-10 md:px-14 pb-12">
        
        {/* Giant Hero Text */}
        <div className="h-[9vw] relative w-full overflow-visible" style={{ perspective: '1000px' }}>
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={index}
              initial={{ opacity: 0, rotateX: -90, y: "50%" }}
              animate={{ opacity: 1, rotateX: 0, y: "0%" }}
              exit={{ opacity: 0, rotateX: 90, y: "-50%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'center center -50px' }}
              className="absolute top-0 text-[8vw] leading-[0.85] font-light tracking-tight text-white -ml-2 select-none whitespace-nowrap"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="mt-8 max-w-xl">
          <h2 className="text-xl md:text-2xl font-light tracking-wide leading-snug mb-10 text-white/90">
            Every conversation changes someone's future.<br />You decide where we help next.
          </h2>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-brand hover:bg-brand-hover transition-colors text-brand-dark text-[15px] font-medium py-2.5 pl-2.5 pr-6 rounded-full flex items-center gap-3 w-fit">
              <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" className="fill-brand stroke-brand" strokeWidth="1" strokeLinejoin="round">
                  <polygon points="7 5 19 12 7 19 7 5"></polygon>
                </svg>
              </div>
              Watch Stories
            </button>
            
            <button className="bg-white/5 backdrop-blur-sm border border-white/30 hover:bg-white/10 transition-colors text-white text-[15px] font-medium py-3 px-7 rounded-full flex items-center gap-2 w-fit">
              Join the Mission
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side Categories */}
        <div className="absolute top-[18%] right-10 md:right-14 text-right">
          <ul className="flex flex-col gap-3 text-[9px] tracking-[0.25em] uppercase font-medium text-white/90">
            <li>YOU DECIDE</li>
            <li>WHERE</li>
            <li>WE HELP NEXT.</li>
          </ul>
        </div>


      </div>
    </div>
  );
}
