import React from "react";
import bg from "../image/hero.png";
import logo from "../logo/logo_Edited.png";

export default function Home() {
  return (
    <div className="font-sans text-stone-800 bg-[#FCFBF7]">

      {/* Video Showcase - Pulled up for better visibility */}
      <section className="py-16 bg-stone-950 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-100 italic">A Living Ecosystem</h2>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border border-stone-800 p-1 bg-stone-900">
            <video 
              className="w-full h-full object-cover rounded-xl"
              controls
              poster={bg} 
              playsInline
            >
              <source src="/videos/farm-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      
      {/* Navbar - Reduced Padding for a Slimmer Profile */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 px-6 md:px-16 py-3 md:py-4 border-b border-stone-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Menu */}
          <div className="hidden md:flex flex-1 gap-12 justify-start font-semibold text-[12px] uppercase tracking-[0.2em] text-stone-700">
            <a href="#home" className="hover:text-emerald-800 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-800 transition-all group-hover:w-full"></span>
            </a>
            <a href="#experiences" className="hover:text-emerald-800 transition-colors relative group">
              Experiences
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-800 transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Center Logo - Slightly Slimmer Height */}
          <div className="flex-shrink-0 px-8">
            <img 
              src={logo} 
              alt="Jacob's Durian Farm" 
              className="h-14 md:h-18 w-auto object-contain transition-transform hover:scale-105" 
            />
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex flex-1 gap-12 justify-end font-semibold text-[12px] uppercase tracking-[0.2em] text-stone-700">
            <a href="#about" className="hover:text-emerald-800 transition-colors relative group">
              The Farm
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-800 transition-all group-hover:w-full"></span>
            </a>
            <a href="#booking" className="hover:text-emerald-800 transition-colors relative group">
              Visit
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-800 transition-all group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Optimized Spacer - Reduced to match slimmed Navbar */}
      {/* <div className="h-20 md:h-24"></div> */}

      {/* Hero - Adjusted to min-h-[70vh] to bring video higher up */}
      {/* <section id="home" className="relative min-h-[70vh] flex items-center px-6 md:px-20 overflow-hidden bg-stone-100">
        <div className="absolute inset-0 z-0">
          <img src={bg} alt="Farm" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-2xl py-12">
          <span className="text-emerald-800 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Kanjirapally, Kerala</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-emerald-950">
              The King of <br /> 
              <span className="text-emerald-800 italic font-serif">Fruits, Refined.</span>
            </h1>
            <p className="text-base md:text-lg text-stone-700 mb-8 leading-relaxed max-w-lg">
              Experience India's premier durian destination. A sanctuary of 42 rare varieties 
              cultivated with passion and precision.
            </p>
          <button className="bg-emerald-900 text-stone-50 px-10 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-emerald-950 transition-all">
            Explore the Sanctuary
          </button>
        </div>
      </section> */}

      

      {/* Stats - Refined & Simple */}
      <section className="py-12 bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-around items-center gap-y-8">
            {[
              { label: "Specimen Trees", val: "190+" },
              { label: "Global Varieties", val: "42" },
              { label: "Acres of Canopy", val: "8.5" },
              { label: "Natural Growth", val: "100%" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-serif text-emerald-900 italic">
                  {stat.val}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-6 bg-stone-50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-serif text-stone-900 text-center mb-10 italic">Request a Private Visit</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-emerald-800 transition-colors placeholder:text-stone-400 text-sm" />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-emerald-800 transition-colors placeholder:text-stone-400 text-sm" />
            <textarea placeholder="Message" rows="2" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-emerald-800 transition-colors placeholder:text-stone-400 text-sm resize-none" />
            <button className="w-full bg-stone-900 text-stone-50 py-4 rounded-full text-[10px] tracking-[0.2em] uppercase hover:bg-emerald-950 transition-all">
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-white border-t border-stone-100">
        <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
          © 2026 Jacob's Durian Farm • Kerala
        </p>
      </footer>
    </div>
  );
}