"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop", // interviewing / talking
    number: "44+",
    title: "REAL STORIES",
    desc: "Every conversation captures a genuine human experience, giving people a voice and inspiring thousands through authentic storytelling."
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", // editing / working
    number: "8.5M+",
    title: "COMMUNITY VIEWS",
    desc: "Millions of people have watched these stories, helping meaningful conversations reach audiences across the world."
  },
  {
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop", // helping people / locals
    number: "23K+",
    title: "COMMUNITY MEMBERS",
    desc: "A growing global community that supports, shares, and helps decide where the next humanitarian mission begins."
  },
  {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop", // charity / raised / money
    number: "€860",
    title: "RAISED FOR IMPACT",
    desc: "Every contribution directly supports real people, with complete transparency throughout every mission."
  }
];

export default function Aboutwork() {
  return (
    <section className="w-full bg-white text-black py-24 relative overflow-hidden">
      
      <div className="max-w-[95rem] mx-auto mt-10 px-6 md:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col w-full mb-24 relative">
          
          {/* Small Text - Positioned top left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:absolute left-0 top-2 text-[10px] font-semibold tracking-[0.1em] uppercase text-gray-500 leading-[1.4] mb-12 md:mb-0"
          >
            ABOUT<br/>THE<br/>MOVEMENT
          </motion.div>
          
          {/* ABOUT THE PROJECT - Centered but shifted slightly right */}
          <div className="w-full flex justify-center pt-4 md:pt-0 pl-8 md:pl-24 lg:pl-32">
            <div className="flex flex-col items-start">
              <motion.h2 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[13vw] md:text-[6.5rem] lg:text-[7.5rem] font-medium leading-[0.85] tracking-tight text-brand-dark -ml-8 md:-ml-12 lg:-ml-16"
              >
                ABOUT
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-[13vw] md:text-[6.5rem] lg:text-[7.5rem] font-medium leading-[0.85] tracking-tight text-brand ml-12 md:ml-24 lg:ml-32"
              >
                THE PROJECT
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Stats Section with Bracket */}
        <div className="relative flex w-full">
          
          {/* Decorative Bracket and DEV.UN */}
          {/* It spans the height of the stats container precisely. */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute top-0 bottom-0 left-6 w-[120px] lg:w-[170px] border-t border-r border-b border-gray-300"
          >
             <div className="absolute top-1/2 -translate-y-1/2 left-0 right-8 flex flex-col items-center gap-1 text-[3.5rem] lg:text-[4.5rem] font-light text-transparent leading-[0.85]" style={{ WebkitTextStroke: '1px #A3A3A3' }}>
               {"JULIAN".split("").map((char, i) => (
                  <span key={`j-${i}`}>{char}</span>
               ))}
               <div className="h-6"></div>
               {"ZARO".split("").map((char, i) => (
                  <span key={`z-${i}`}>{char}</span>
               ))}
             </div>
          </motion.div>

          {/* Items List */}
          <div className="flex-1 flex flex-col gap-12 md:gap-16 w-full pl-0 md:pl-[160px] lg:pl-[220px] py-4 relative z-10">
            {stats.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row w-full items-center md:items-start cursor-pointer"
              >
                
                {/* Image Box */}
                <div className="w-full md:w-[45%] lg:w-[45%] pr-0 md:pr-12 lg:pr-24">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover bg-gray-100 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Text Info Box */}
                <div className="w-full md:w-[55%] lg:w-[55%] pt-6 md:pt-4 flex flex-col transition-transform duration-500 ease-out group-hover:translate-x-2">
                  <h3 className="text-6xl md:text-[5rem] lg:text-[6rem] font-medium tracking-tight text-black mb-3 leading-none transition-colors duration-500 group-hover:text-brand">
                    {item.number}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm md:text-base font-semibold tracking-wide text-black uppercase transition-colors duration-500 group-hover:text-brand-dark">
                      {item.title}
                    </span>
                    <div className="h-[1px] w-8 bg-gray-300 transition-all duration-500 group-hover:w-16 group-hover:bg-brand"></div>
                  </div>
                  <p className="text-gray-500 text-[12px] md:text-[13px] leading-relaxed max-w-[320px]">
                    {item.desc}
                  </p>
                </div>
                
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
