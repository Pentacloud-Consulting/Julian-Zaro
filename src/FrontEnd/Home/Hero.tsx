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
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none md:hidden"
        style={{ backgroundImage: 'url("/Home Images/Hero/Julian Zaro Mobile Hero.webp")' }}
      ></div>

      {/* Background Image 1 - Desktop */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-[50%_20%] bg-no-repeat pointer-events-none hidden md:block"
        style={{ backgroundImage: 'url("/Home Images/Hero/Julian Image 1.webp")' }}
      ></div>

      {/* Background Image 2 - Cursor Reveal */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-[50%_20%] bg-no-repeat pointer-events-none z-0 hidden md:block"
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
      <div className="relative z-10 flex-1 flex flex-col justify-end md:justify-center px-6 md:px-14 pb-16 md:pb-12 pt-[12vh] md:pt-[15vh]">
        
        {/* Giant Hero Text */}
        <div className="h-[14vw] md:h-[9vw] relative w-full overflow-visible" style={{ perspective: '1000px' }}>
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={index}
              initial={{ opacity: 0, rotateX: -90, y: "50%" }}
              animate={{ opacity: 1, rotateX: 0, y: "0%" }}
              exit={{ opacity: 0, rotateX: 90, y: "-50%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'center center -50px' }}
              className="absolute top-0 text-[13vw] md:text-[8vw] leading-[0.85] font-light tracking-tight text-white -ml-1 md:-ml-2 select-none whitespace-nowrap"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="mt-4 md:mt-8 max-w-xl">
          <h2 className="text-[19px] sm:text-[21px] md:text-2xl font-light tracking-wide leading-snug mb-6 md:mb-10 text-white/90">
            Every conversation changes someone's future.<br />You decide where we help next.
          </h2>
          
          <div className="flex flex-row flex-nowrap items-center gap-2 md:gap-4 overflow-visible w-full md:w-auto">
            <button className="group/btn relative bg-brand hover:bg-brand-hover transition-colors text-brand-dark text-[13px] md:text-[15px] font-medium py-2 pl-2 pr-4 md:py-2.5 md:pl-2.5 md:pr-6 rounded-full flex items-center shrink-0 w-fit overflow-hidden">
              {/* Invisible placeholder for sizing */}
              <div className="opacity-0 flex items-center gap-2 md:gap-3 pointer-events-none select-none">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full shrink-0"></div>
                <span className="whitespace-nowrap">Watch Stories</span>
              </div>
              
              {/* Animated Icon */}
              <div className="absolute left-[8px] md:left-[10px] top-1/2 -translate-y-1/2 group-hover/btn:left-[calc(100%-36px)] md:group-hover/btn:left-[calc(100%-42px)] transition-all duration-500 ease-out w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="fill-brand stroke-brand w-[10px] h-[10px] md:w-[12px] md:h-[12px]" strokeWidth="1" strokeLinejoin="round">
                  <polygon points="7 5 19 12 7 19 7 5"></polygon>
                </svg>
              </div>

              {/* Animated Text */}
              <span className="absolute left-[44px] md:left-[54px] top-1/2 -translate-y-1/2 group-hover/btn:left-[24px] transition-all duration-500 ease-out whitespace-nowrap">
                Watch Stories
              </span>
            </button>
            
            <button className="bg-[#111111]/80 md:bg-white/5 backdrop-blur-md border border-white/20 md:border-white/30 hover:bg-[#1a1a1a] md:hover:bg-white/10 transition-colors text-white text-[13px] md:text-[15px] font-medium py-2 px-4 md:py-3 md:px-7 rounded-full flex items-center justify-center shrink-0 w-fit gap-1.5 md:gap-2 whitespace-nowrap">
              Join the Mission
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side Categories */}
        <div className="absolute top-[40%] md:top-[18%] right-6 md:right-14 text-right">
          <ul className="flex flex-col gap-2 md:gap-3 text-[8px] md:text-[9px] tracking-[0.25em] uppercase font-medium text-white/90">
            <li>YOU DECIDE</li>
            <li>WHERE</li>
            <li>WE HELP NEXT.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
