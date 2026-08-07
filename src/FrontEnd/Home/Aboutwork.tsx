"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "REAL PEOPLE.\nREAL STORIES.",
    desc: "Every journey begins with a conversation. Julian travels to meet people from different communities, listening to their experiences and sharing authentic stories that inspire empathy, understanding, and positive change.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
    reverse: false
  },
  {
    num: "02",
    title: "BUILDING A\nGLOBAL COMMUNITY",
    desc: "Each story brings thousands of people together. Through social media, the community grows with every interview, encouraging meaningful conversations and allowing supporters to help decide where the next mission begins.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
    reverse: true
  },
  {
    num: "03",
    title: "TURNING STORIES\nINTO IMPACT",
    desc: "Every donation and every shared story helps create real-world change. Together, the community supports people",
    img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1000",
    reverse: false
  }
];

export default function AboutWork() {
  return (
    <section className="w-full bg-white text-black pt-24 pb-8 relative overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        
        {/* Header Row */}
        <div className="w-full relative mb-16 md:mb-20">
          
          {/* Small Text - Positioned top left */}
          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 top-2 text-[10px] md:text-xs font-medium tracking-[0.05em] uppercase text-gray-500 leading-relaxed max-w-[140px] z-10"
          >
            ABOUT<br/>THE MOVEMENT
          </motion.p>
          
          {/* ABOUT PROJECTS - Centered with staggered layout */}
          <div className="flex flex-col items-center z-0 w-full pointer-events-none pt-16 md:pt-20">
            <motion.h2 
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12vw] md:text-[8.5rem] lg:text-[10rem] font-normal leading-[0.85] tracking-tight text-[#171717] -ml-24 md:-ml-48"
            >
              OUR
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-[12vw] md:text-[8.5rem] lg:text-[10rem] font-normal leading-[0.85] tracking-tight text-brand ml-16 md:ml-32"
            >
              MISSION
            </motion.h2>
          </div>

          {/* Top Right Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-0 top-2 flex items-center gap-1.5 text-gray-500 font-bold tracking-widest text-[10px] md:text-xs z-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            </svg>
            JULIAN ZARO
          </motion.div>
          
        </div>

        {/* Services List */}
        <div className="flex flex-col w-full gap-32 md:gap-40 pt-0">
          {services.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full gap-16 md:gap-24 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Text Info Box */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 flex flex-col items-start"
              >
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xl md:text-[22px] font-medium tracking-wide text-[#171717] uppercase whitespace-pre-line">
                    {item.title}
                  </h3>
                  <div className="h-[1px] w-8 bg-gray-300"></div>
                </div>
                <p className="text-gray-500 text-sm leading-[1.8] max-w-[420px]">
                  {item.desc}
                </p>
              </motion.div>
              
              {/* Image Box */}
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 relative"
              >
                {/* Offset border frame */}
                <div className={`absolute border border-gray-300 w-[95%] h-[95%] z-0 ${item.reverse ? '-top-6 -right-6 md:-top-10 md:-right-10' : '-top-6 -left-6 md:-top-10 md:-left-10'}`}></div>
                
                {/* The image */}
                <div className="relative z-10 w-[95%] h-[300px] md:h-[420px] mx-auto overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover bg-gray-100 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* The Number */}
                <div 
                  className={`absolute z-20 text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-normal text-transparent leading-none pointer-events-none select-none ${item.reverse ? '-top-12 md:-top-24 -left-4 md:-left-12 lg:-left-16' : '-top-12 md:-top-24 -right-4 md:-right-12 lg:-right-16'}`} 
                  style={{ WebkitTextStroke: '2px #5dc942' }}
                >
                  {item.num}
                </div>
              </motion.div>
              
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 w-full flex justify-start"
        >
          <button 
            className="bg-brand hover:bg-[#4ea837] transition-colors text-white text-xs font-semibold tracking-widest uppercase py-4 px-8 relative"
            style={{ clipPath: 'polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)' }}
          >
            Discover Our Impact &gt;
          </button>
        </motion.div>

      </div>
    </section>
  );
}
