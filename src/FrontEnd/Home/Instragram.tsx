"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, PanInfo } from 'framer-motion';

const stories = [
  {
    id: 1,
    src: "/thumbnails/thumb_1.jpg",
    title: "Two strangers, one conversation.",
    category: "ON CAMPUS",
    link: "https://www.instagram.com/p/DbAzSpnTUhc/embed"
  },
  {
    id: 2,
    src: "/thumbnails/thumb_2.jpg",
    title: "One question can open a whole life story.",
    category: "EVERYDAY STORIES",
    link: "https://www.instagram.com/p/DbaDVVGDN0J/embed"
  },
  {
    id: 3,
    src: "/thumbnails/thumb_3.jpg",
    title: "Finding joy in the unexpected.",
    category: "JOY",
    link: "https://www.instagram.com/p/DbB4eWRTmj8/embed"
  },
  {
    id: 4,
    src: "/thumbnails/thumb_4.jpg",
    title: "Big days. Small dreams.",
    category: "MOMENTS",
    link: "https://www.instagram.com/p/DbPwA6th_n8/embed"
  },
  {
    id: 5,
    src: "/thumbnails/thumb_5.jpg",
    title: "What moves people, they often carry with them.",
    category: "HUMAN STORIES",
    link: "https://www.instagram.com/p/DbGfH9izrK8/embed"
  },
  {
    id: 6,
    src: "/thumbnails/thumb_6.jpg",
    title: "A journey of a thousand miles.",
    category: "DISCOVERIES",
    link: "https://www.instagram.com/p/Da0MeCTyKQx/embed"
  },
  {
    id: 7,
    src: "/thumbnails/thumb_1.jpg", // Placeholder
    title: "The power of a single smile.",
    category: "COMMUNITY",
    link: "https://www.instagram.com/p/DbAzSpnTUhc/embed"
  },
  {
    id: 8,
    src: "/thumbnails/thumb_2.jpg", // Placeholder
    title: "Connections that cross borders.",
    category: "GLOBAL",
    link: "https://www.instagram.com/p/DbaDVVGDN0J/embed"
  }
];

const Instragram = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  // States for interaction
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragAmountRef = useRef(0);

  // Framer motion value to track rotation manually
  const rotation = useMotionValue(0);

  // Auto-rotate logic
  useAnimationFrame((_, delta) => {
    // Only auto-rotate if not hovering on a card and not dragging
    if (!isHovered && !isDragging) {
      rotation.set(rotation.get() + delta * 0.015);
    }
  });

  // Drag handlers
  const handlePan = (_: any, info: PanInfo) => {
    rotation.set(rotation.get() + info.delta.x * 0.4);
    dragAmountRef.current += Math.abs(info.delta.x);
  };

  const handlePanStart = () => {
    setIsDragging(true);
    dragAmountRef.current = 0; // Reset drag amount to differentiate between click and drag
  };

  const handlePanEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-white text-black pt-0 pb-8 md:pt-0 md:pb-16 font-sans overflow-hidden relative">
       
       <style>{`
         .carousel-item {
           transform: rotateY(var(--rotY)) translateZ(130px);
         }
         @media (min-width: 768px) {
           .carousel-item {
             transform: rotateY(var(--rotY)) translateZ(310px);
           }
         }
       `}</style>

       {/* Top Header Section - Matching Image 1 */}
       <div className="max-w-[85rem] mx-auto px-5 md:px-12 mb-6 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-3 md:gap-4"
          >
             <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#5dc942]"></span>
                <p className="text-[#5dc942] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                  Community Voices
                </p>
             </div>
             
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tighter text-black">
               Real stories from <br className="hidden md:block" />
               <span className="font-serif italic text-[#5dc942]">real people.</span>
             </h2>
          </motion.div>

          <motion.a 
            href="https://www.instagram.com/julianzaro"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="group hidden md:flex items-center gap-4 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-black hover:text-[#5dc942] transition-colors"
          >
             Explore Instagram
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#5dc942] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-[#5dc942] transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg>
             </div>
          </motion.a>
       </div>

       {/* 3D Curved Carousel (Matching Image 2) */}
       <div className="w-full carousel-container overflow-visible py-4 md:py-16 relative flex justify-center [perspective:1000px] md:[perspective:1200px]">
          
          {/* White Fades for Edges to hide the back elements smoothly */}
          <div className="hidden md:block absolute top-0 left-0 w-[25%] md:w-[30%] h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <div className="hidden md:block absolute top-0 right-0 w-[25%] md:w-[30%] h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

          <motion.div 
             className="relative w-[100px] h-[150px] md:w-[190px] md:h-[270px] [transform-style:preserve-3d] cursor-grab active:cursor-grabbing [touch-action:pan-y]"
             style={{ rotateY: rotation }}
             onPointerDown={() => { dragAmountRef.current = 0; }}
             onPan={handlePan}
             onPanStart={handlePanStart}
             onPanEnd={handlePanEnd}
          >
             {stories.map((story, index) => {
                const angle = index * 45; // 360 / 8 = 45 degrees per item
                
                return (
                  <div 
                    key={story.id}
                    className="carousel-item absolute top-0 left-0 w-full h-full group shadow-2xl rounded-2xl md:rounded-[32px] overflow-hidden bg-gray-100 select-none"
                    style={{ '--rotY': `${angle}deg` } as React.CSSProperties}
                    onClick={() => {
                       // Only open video if it was a real click, not a drag
                       if (dragAmountRef.current < 10) setActiveVideo(story.link);
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                     {/* Image */}
                     <img 
                       src={story.src} 
                       alt={story.title}
                       draggable={false}
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
                     />
                     
                     {/* Gradient Overlay for Text Readability */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 pointer-events-none"></div>
                     
                     {/* Play Button Overlay */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 pointer-events-none">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 ml-0.5 md:ml-1">
                              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                           </svg>
                        </div>
                     </div>

                     {/* Text Overlay */}
                     <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 flex flex-col gap-0.5 md:gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                        <p className="text-[6px] md:text-[8px] font-bold tracking-[0.2em] text-[#5dc942] uppercase">{story.category}</p>
                        <h3 className="text-white text-[9px] md:text-sm font-medium leading-snug line-clamp-4 drop-shadow-md">{story.title}</h3>
                     </div>
                  </div>
                );
             })}
          </motion.div>
       </div>

       {/* Mobile-only Explore Instagram Button */}
       <div className="flex md:hidden justify-center pt-8 pb-8 z-10 relative">
          <motion.a 
            href="https://www.instagram.com/julianzaro"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group flex items-center gap-4 text-xs font-bold tracking-[0.15em] uppercase text-black hover:text-[#5dc942] transition-colors"
          >
             Explore Instagram
             <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#5dc942] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-[#5dc942] transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg>
             </div>
          </motion.a>
       </div>

       {/* Clean Modal for Instagram Embed */}
       <AnimatePresence>
         {activeVideo && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
             onClick={() => setActiveVideo(null)}
           >
             <motion.div 
               initial={{ scale: 0.9, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.9, opacity: 0, y: 20 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               className="relative w-full max-w-[420px] bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
               onClick={(e) => e.stopPropagation()} 
             >
                {/* Close button */}
                <button 
                   className="absolute top-4 right-4 text-gray-500 hover:text-black z-20 p-2.5 bg-gray-100/90 backdrop-blur-md rounded-full transition-transform hover:scale-110 shadow-sm"
                   onClick={() => setActiveVideo(null)}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                   </svg>
                </button>
                
                {/* Instagram Embed iframe */}
                <iframe 
                   src={activeVideo}
                   width="100%" 
                   height="520" 
                   style={{ border: 0 }} 
                   scrolling="no" 
                   className="w-full min-h-[520px] bg-white"
                ></iframe>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </section>
  );
};

export default Instragram;
