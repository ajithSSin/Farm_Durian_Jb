import React, { useState } from "react";
import bg from "../image/hero.png";
import logo from "../logo/logo.png";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-stone-900 bg-white min-h-screen relative overflow-x-hidden">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <div className={`fixed inset-0 z-[70] transition-all duration-700 ${isMenuOpen ? "visible" : "invisible"}`}>
        <div 
          className={`absolute inset-0 bg-stone-950/20 backdrop-blur-xl transition-opacity duration-700 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={`absolute left-0 top-0 h-full w-full md:w-[450px] bg-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-12 flex flex-col h-full">
            <button onClick={() => setIsMenuOpen(false)} className="self-end p-2 hover:rotate-90 transition-transform duration-300">
              <X size={32} strokeWidth={1} />
            </button>
            
            <nav className="flex flex-col gap-10 mt-20 text-2xl font-light tracking-tight text-stone-800">
              <a href="#home" onClick={() => setIsMenuOpen(false)} 
              className="hover:italic transition-all">The Estate</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} 
              className="hover:italic transition-all">Our Varieties</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)} 
              className="hover:italic transition-all">Experience</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)}
              className="hover:italic transition-all">Book a Visit</a>
            </nav>

            <div className="mt-auto border-t border-stone-100 pt-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4 font-bold">
                Contact</p>
              <p className="text-sm font-medium">hello@jacobsdurian.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. UPDATED NAV (Logo moved down) */}
      <nav className="absolute top-0 w-full z-50 px-8 md:px-20 py-20 flex items-start justify-between">
        {/* Hamburger - Aligned with the top of the lowered logo */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-white flex items-center gap-4 group mt-4"
        >
          <Menu size={35} strokeWidth={1} />
          <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.5em] opacity-60 group-hover:opacity-100 transition-opacity">Menu</span>
        </button>

        {/* LOGO: MOVED DOWN using py-20 and absolute centering */}
        <div className="absolute left-1/2 -translate-x-1/2 top-16 md:top-8 text-center">
          <img 
            src={logo} 
            alt="Jacob's Durian" 
            className="h-28 md:h-48 w-auto object-contain transition-transform duration-700 hover:scale-105" 
          />
        </div>

        <div className="w-10"></div>
      </nav>

      {/* 3. HERO VIDEO SECTION */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-stone-950">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster={bg}
          className="absolute inset-0 w-full h-full object-cover" 
        >
          <source src="/videos/farm-tour.mp4" type="video/mp4" />
        </video>

        {/* Text moved further down to clear the larger logo */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-32 items-center text-center px-6 bg-black/5">
          <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight mb-4">
            The King of Fruits, <span className="italic">Refined.</span>
          </h1>
          <p className="text-white/50 text-[9px] uppercase tracking-[0.6em] font-bold">Kanjirapally • Kerala</p>
        </div>
      </section>

     {/* 4. STATS SECTION (Glass Tiles Edition) */}
      <section className="relative py-24 bg-stone-200"> 
        {/* Subtle background decoration to make the glass effect pop */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-stone-200/50 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          {/* Changed from one big box to a grid with a gap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { label: "Specimen Trees", val: "190" },
              { label: "Global Varieties", val: "42" },
              { label: "Acres of Canopy", val: "8.5" },
              { label: "Natural Growth", val: "100%" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm flex flex-col items-center justify-center px-4 py-14 group transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Individual Glassy Value */}
                <div className="text-3xl md:text-5xl font-light text-stone-900 tracking-tight mb-3 group-hover:italic transition-all duration-500">
                  {stat.val}
                </div>
                
                {/* Refined Label */}
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold text-center leading-relaxed opacity-70">
                  {stat.label}
                </div>
                
                {/* Subtle highlight inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOKING SECTION (Glassmorphism Edition) */}
      {/* Restored py-24 or py-32 to create space above and below the card */}
      <section id="booking" className="relative py-16 bg-stone-200 md:py-18 bg-[#FCFBF7] overflow-hidden">
        
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-stone-200/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-2xl p-12 md:p-20 text-center">
            
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight text-stone-900">
              Request an <span className="italic">Estate Visit</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-16">
              Limited Seasonal Availability
            </p>

            <form className="space-y-10">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white/20 border-b border-stone-200 py-4 px-2 focus:outline-none focus:border-stone-900 transition-all text-sm font-light placeholder:text-stone-400" 
                />
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/20 border-b border-stone-200 py-4 px-2 focus:outline-none focus:border-stone-900 transition-all text-sm font-light placeholder:text-stone-400" 
                />
              </div>

              <div className="pt-6">
                <button className="group relative text-[10px] uppercase tracking-[0.6em] font-black py-4 transition-all hover:italic">
                  <span className="relative z-10">Submit Request —</span>
                  <div className="absolute bottom-2 left-0 w-0 h-px bg-stone-900 transition-all group-hover:w-full"></div>
                </button>
              </div>
            </form>

            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 6. SLIM FOOTER */}
      
      <footer className="bg-stone-600 pb-16 pt-8 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-stone-100">
        <img src={logo} alt="Logo" className="h-10 brightness-100  " />
        <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-medium">
          © 2026 Jacob's Durian Farm
        </p>
      </footer>

    </div>
  );
}