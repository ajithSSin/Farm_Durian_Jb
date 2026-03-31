import React, { useState } from "react";
import bg from "../image/hero.png";
import logo from "../logo/logo.png";
import { Menu, X, MapPin, Mail, Calendar } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-stone-900 bg-[#FCFBF7] min-h-screen relative overflow-x-hidden">
      
      {/* 1. SIDEBAR NAVIGATION - MOVED TO RIGHT */}
      <div className={`fixed inset-0 z-[70] transition-all duration-700 ${isMenuOpen ? "visible" : "invisible"}`}>
        <div 
          className={`absolute inset-0 bg-stone-950/20 backdrop-blur-xl transition-opacity duration-700 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Changed left-0 to right-0 and -translate-x-full to translate-x-full */}
        <div className={`absolute right-0 top-0 h-full w-full md:w-[450px] bg-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-12 flex flex-col h-full">
            {/* Close button aligned to the left of the sidebar for easier reach from the right edge */}
            <button onClick={() => setIsMenuOpen(false)} className="self-start p-2 hover:rotate-90 transition-transform duration-300">
              <X size={32} strokeWidth={1} />
            </button>
            
            <nav className="flex flex-col gap-10 mt-20 text-2xl font-light tracking-tight text-stone-800">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">The Estate</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">About Us</a>
              <a href="#experiences" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">Experiences</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">Book a Visit</a>
            </nav>

            <div className="mt-auto border-t border-stone-100 pt-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4 font-bold text-emerald-800">Inquiries</p>
              <p className="text-sm font-medium">myslot@jacobsdurianfarm.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION - HAMBURGER MOVED TO RIGHT */}
      <nav className="absolute top-0 w-full z-50 px-8 md:px-20 py-10 flex items-start justify-between flex-row-reverse">
        {/* Hamburger - Now on the right side */}
        <button onClick={() => setIsMenuOpen(true)} className="text-white flex flex-row-reverse items-center gap-4 group mt-4 pointer-events-auto">
          <Menu size={35} strokeWidth={1} />
          <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.5em] opacity-60 group-hover:opacity-100 transition-opacity">Menu</span>
        </button>

        {/* LOGO: Remained centered via absolute positioning */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 text-center pointer-events-auto">
          <img src={logo} alt="Jacob's Durian" className="h-28 md:h-48 w-auto object-contain transition-transform duration-700 hover:scale-105" />
        </div>
        
        {/* Spacer to maintain layout balance */}
        <div className="w-10"></div>
      </nav>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-stone-950">
        <video autoPlay muted loop playsInline poster={bg} className="absolute inset-0 w-full h-full object-cover opacity-80">
          <source src="/videos/farm-tour.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex flex-col justify-end pb-32 items-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight mb-4 max-w-4xl">
            India’s first durian farm showcasing <span className="italic">42 of the world’s finest varieties.</span>
          </h1>
          <p className="text-white/50 text-[9px] uppercase tracking-[0.6em] font-bold">Kanjirapally • Kerala</p>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <p className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-bold mb-8">About Us</p>
          <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tighter text-stone-900">Let go, <span className="italic">gently.</span></h2>
          <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-light">
            <p>Tucked away in the foothills of Kerala’s Cardamom Hills, Kanjirapally is an ancient agrarian landscape shaped by rain, red loam, and centuries of cultivation. Jacob’s Durian Farm has evolved across generations, envisioned by Mr. Jose Jacob as a space where agriculture meets experience.</p>
            <p>Spread across 8.5 acres, the farm is home to over 190 durian trees alongside a rich ecosystem of mangosteen, rambutan, avocado, and jackfruit.</p>
            <p className="border-l-2 border-emerald-800 pl-8 py-2 italic bg-stone-50">Jacob’s Durian Farm offers a quiet, immersive setting for corporates seeking meaningful retreats—blending nature, learning, and leisure into a seamless experience.</p>
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section className="py-24 bg-stone-100/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Specimen Trees", val: "190" },
            { label: "World Varieties", val: "42" },
            { label: "Acres of Canopy", val: "8.5" },
            { label: "Natural Growth", val: "100%" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-10 bg-white rounded-[2rem] shadow-sm border border-stone-200/50">
              <div className="text-4xl font-light text-stone-900 mb-2">{stat.val}</div>
              <div className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. EXPERIENCES SECTION */}
      <section id="experiences" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-right md:text-left">
            <h2 className="text-4xl font-light tracking-tight text-stone-900">The Estate <span className="italic text-emerald-900">Experiences</span></h2>
            <p className="text-stone-400 text-sm mt-2 tracking-widest uppercase">A curated portfolio for teams and thinkers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Durian Immersion Trail", target: "Corporates/Families", desc: "Step into the heart of the plantation. A guided journey through cultivation, harvesting, and exclusive seasonal tasting." },
              { title: "The Seasonal Harvest Table", target: "Sensorial Tasting", desc: "A sensorial experience featuring fresh durian and seasonal produce rooted in sustainable farming practices." },
              { title: "The Quiet Canopy Retreat", target: "Ideal for Corporates", desc: "Unplug under a canopy of green. Designed for pause and presence, offering serene landscapes and fresh air." },
              { title: "The Green Synergy Sessions", target: "Team Collaboration", desc: "Crafted to build connection. Through shared farm activities, teams rediscover alignment far removed from boardrooms." },
              { title: "The Living Earth Workshops", target: "ESG & Conscious Business", desc: "Interactive sessions on sustainability and regenerative farming for organizations seeking meaningful engagement." },
              { title: "The Curated Farm Day", target: "Tailored Experience", desc: "A fully customized day including guided tours, curated meals, and flexible programming for leadership retreats." }
            ].map((exp, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-2xl hover:border-emerald-100 transition-all duration-500">
                <p className="text-[8px] uppercase tracking-[0.4em] text-emerald-700 font-bold mb-4">{exp.target}</p>
                <h3 className="text-xl font-medium mb-4 group-hover:italic">{exp.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING SECTION */}
      <section id="booking" className="relative py-32 bg-[#FCFBF7] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="rounded-[3rem] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-2xl p-12 md:p-20 flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-light mb-8 tracking-tight">Request <span className="italic">Availability</span></h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-stone-600">
                  <Mail size={18} className="text-emerald-800" />
                  <span className="text-sm font-medium">myslot@jacobsdurianfarm.com</span>
                </div>
                <div className="flex items-center gap-4 text-stone-600">
                  <MapPin size={18} className="text-emerald-800" />
                  <span className="text-sm font-medium underline underline-offset-4">Location Map</span>
                </div>
              </div>
            </div>
            
            <form className="md:w-1/2 space-y-8">
              <input type="text" placeholder="Name" className="w-full bg-white/40 border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all text-sm font-light" />
              <input type="email" placeholder="Email" className="w-full bg-white/40 border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all text-sm font-light" />
              <div className="relative">
                <Calendar className="absolute right-2 top-2 text-stone-300" size={16} />
                <input type="date" className="w-full bg-white/40 border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all text-sm font-light" />
              </div>
              <button className="w-full bg-stone-900 text-white py-4 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-emerald-950 transition-all">Submit Enquiry —</button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-stone-100 pb-16 pt-8 px-8 border-t border-stone-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <img src={logo} alt="Logo" className="h-10 " />
          <nav className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors">Home</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
          </nav>
          <p className="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-medium">
            © 2026 Jacob's Durian Farm
            </p>
        </div>
      </footer>
    </div>
  );
}