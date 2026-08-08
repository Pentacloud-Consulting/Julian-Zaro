"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Instragram = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-neutral-900 flex items-center overflow-hidden py-16 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient Overlay for text readability (only darkens the left side) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-[45%] flex flex-col justify-center space-y-10">
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small Label */}
            <p className="text-gray-400 text-sm font-semibold tracking-[0.2em] uppercase">
              From The Community
            </p>
            
            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white uppercase">
              Discover <br />
              <span className="text-[#00FF66]">Real Stories</span>
            </h2>
          </motion.div>

          {/* Watch Video Button / Main CTA */}
          <motion.a 
            href="https://www.instagram.com/julianzaro?igsh=MThkdHBrdGh1djU3MQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 cursor-pointer group w-fit mt-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-full border-2 border-[#00FF66] flex items-center justify-center group-hover:bg-[#00FF66] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#00FF66] group-hover:text-black transition-colors duration-300"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <span className="text-white group-hover:text-[#00FF66] transition-colors duration-300 text-sm md:text-base font-semibold tracking-widest uppercase flex items-center gap-2">
              Explore All Stories <span className="text-lg">→</span>
            </span>
          </motion.a>

          {/* Description text */}
          <motion.div 
            className="max-w-md"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-gray-300 text-base leading-relaxed">
              Every person has a story worth hearing. <br />
              From a quick conversation on the street <br />
              to moments that stay with us long after — <br />
              we listen, we share, and we let the world hear.
            </p>
          </motion.div>
          
        </div>

        {/* Right Content - Grid of Video Thumbnails */}
        <motion.div 
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 relative">
            {/* Row 1 */}
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1 mt-12 md:mt-0">
              <VideoThumbnail 
                src="/thumbnails/thumb_1.jpg" 
                title="Two strangers, one conversation."
                category="ON CAMPUS"
                onClick={() => setActiveVideo("https://www.instagram.com/p/DbAzSpnTUhc/embed")}
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1">
              <VideoThumbnail 
                src="/thumbnails/thumb_2.jpg" 
                title="One question can open a whole life story."
                category="EVERYDAY STORIES"
                onClick={() => setActiveVideo("https://www.instagram.com/p/DbaDVVGDN0J/embed")}
              />
            </div>
            <div className="col-span-1">
              <VideoThumbnail 
                src="/thumbnails/thumb_3.jpg" 
                title="Finding joy in the unexpected."
                category="JOY"
                onClick={() => setActiveVideo("https://www.instagram.com/p/DbB4eWRTmj8/embed")}
              />
            </div>

            {/* Row 3 */}
            <div className="col-span-1">
              <VideoThumbnail 
                src="/thumbnails/thumb_4.jpg" 
                title="Big days. Small dreams."
                category="MOMENTS"
                onClick={() => setActiveVideo("https://www.instagram.com/p/DbPwA6th_n8/embed")}
              />
            </div>
            <div className="col-span-1">
              <VideoThumbnail 
                src="/thumbnails/thumb_5.jpg" 
                title="What moves people, they often carry with them."
                category="HUMAN STORIES"
                onClick={() => setActiveVideo("https://www.instagram.com/p/DbGfH9izrK8/embed")}
              />
            </div>
            <div className="col-span-1">
              <VideoThumbnail 
                src="/thumbnails/thumb_6.jpg" 
                title="A journey of a thousand miles."
                category="DISCOVERIES"
                onClick={() => setActiveVideo("https://www.instagram.com/p/Da0MeCTyKQx/embed")}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Clean Modal for Instagram Embed */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[90%] max-w-[400px] bg-white rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
               {/* Close button */}
               <button 
                  className="absolute top-3 right-3 text-gray-500 hover:text-black z-20 p-2 bg-white rounded-full shadow-md transition-transform hover:scale-110"
                  onClick={() => setActiveVideo(null)}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
               </button>
               
               {/* Instagram Embed iframe */}
               <iframe 
                  src={activeVideo}
                  width="400" 
                  height="480" 
                  style={{ border: 0 }} 
                  scrolling="no" 
                  allowTransparency={true}
                  className="w-full min-h-[480px] bg-white"
               ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Thumbnail Component
const VideoThumbnail = ({ src, title, category, onClick }: { src: string, title: string, category: string, onClick: () => void }) => {
  return (
    <motion.div 
      className="relative aspect-[4/3] rounded-md md:rounded-lg overflow-hidden group cursor-pointer shadow-xl border border-white/10"
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
      
      {/* Central Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-[1.5px] border-white/80 bg-black/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#00FF66] group-hover:border-[#00FF66] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black transition-colors duration-500"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Instragram;
