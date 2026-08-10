import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white min-h-screen py-10 px-6 md:px-14 relative overflow-hidden">
      {/* Optional faint map watermark could go here as a background image, but we'll stick to clean white for a modern look */}
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 relative z-10 pt-4">
        {/* Left Column */}
        <div className="lg:w-[55%] flex flex-col">
          <span className="text-[#4ea837] font-bold tracking-widest uppercase text-sm mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-6xl md:text-[5rem] lg:text-[5.5rem] font-black uppercase leading-[0.85] tracking-tight text-[#1a1a1a] mb-2">
            LET'S CREATE
          </h1>
          <h1 className="text-6xl md:text-[5rem] lg:text-[5.5rem] font-black uppercase leading-[0.85] tracking-tight text-[#4ea837] mb-8">
            REAL IMPACT.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-12">
            Have a question, a story to share, or want to get involved?<br/>
            We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 mb-16">
            {/* Contact Info Items */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#f0f9ed] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ea837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a] text-sm tracking-widest uppercase mb-1">EMAIL US</h3>
                <p className="text-gray-600 text-[15px]">hello@julianzaro.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#f0f9ed] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ea837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a] text-sm tracking-widest uppercase mb-1">CALL US</h3>
                <p className="text-gray-600 text-[15px]">+31 6 12345678</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#f0f9ed] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ea837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a] text-sm tracking-widest uppercase mb-1">OUR LOCATION</h3>
                <p className="text-gray-600 text-[15px]">Netherlands</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#f0f9ed] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ea837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a] text-sm tracking-widest uppercase mb-1">RESPONSE TIME</h3>
                <p className="text-gray-600 text-[15px]">We usually reply within 24 hours</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#1a1a1a] text-sm tracking-widest uppercase mb-5">FOLLOW THE JOURNEY</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="group w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#4ea837] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="group w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#4ea837] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="group w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#4ea837] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="group w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#4ea837] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="group w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#4ea837] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-[45%]">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100">
            <h2 className="text-[#1a1a1a] font-bold tracking-wider uppercase text-[17px] mb-2">SEND US A MESSAGE</h2>
            <p className="text-gray-600 text-[15px] mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-[15px] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#4ea837] focus:ring-1 focus:ring-[#4ea837] transition-all"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-[15px] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#4ea837] focus:ring-1 focus:ring-[#4ea837] transition-all"
                  required
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-[15px] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#4ea837] focus:ring-1 focus:ring-[#4ea837] transition-all"
                required
              />
              <div className="relative">
                <textarea 
                  placeholder="Your Message" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-[15px] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#4ea837] focus:ring-1 focus:ring-[#4ea837] transition-all h-36 resize-none"
                  required
                ></textarea>
                <span className="absolute bottom-4 right-4 text-xs text-gray-400 font-medium bg-white">0/500</span>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#51a83b] hover:bg-[#438a31] text-white font-medium rounded-xl px-6 py-4 mt-2 flex items-center justify-center gap-2 transition-colors group"
              >
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
