import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { GALLERY_PERSPECTIVES } from "../data/siteData";
export const ArchitectureGallery = () => {
	const [activeIdx, setActiveIdx] = useState(0);
	const [selectedFilter, setSelectedFilter] = useState("All");
	const categories = [
		"All",
		"Exterior",
		"Interior",
		"Lighting",
		"Structural",
		"Context"
	];
	const filteredPerspectives = selectedFilter === "All" ? GALLERY_PERSPECTIVES : GALLERY_PERSPECTIVES.filter((item) => item.category === selectedFilter);
	const currentItem = filteredPerspectives[activeIdx] || filteredPerspectives[0];
	const handleNext = () => {
		setActiveIdx((prev) => (prev + 1) % filteredPerspectives.length);
	};
	const handlePrev = () => {
		setActiveIdx((prev) => (prev - 1 + filteredPerspectives.length) % filteredPerspectives.length);
	};
	return <section id="gallery" className="relative z-20 bg-[#F6F4EE] text-[#1F1E1B] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1F1E1B]/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#1F1E1B]/40" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E8C76] font-medium">
                05 / Architectural Perspectives
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1E1B] tracking-tight">
              Monograph Perspectives
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => <button key={cat} onClick={() => {
		setSelectedFilter(cat);
		setActiveIdx(0);
	}} className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${selectedFilter === cat ? "bg-[#1F1E1B] text-[#F6F4EE]" : "bg-[#ECE7DE] text-[#4A433A] hover:bg-[#D9D3C7]"}`}>
                {cat}
              </button>)}
          </div>
        </div>

        {/* Hero Gallery Viewport */}
        <div className="relative overflow-hidden bg-[#1F1E1B] text-white shadow-2xl aspect-[16/10] max-h-[640px]">
          <AnimatePresence mode="wait">
            <motion.div key={currentItem.id} initial={{
		opacity: 0,
		scale: 1.04
	}} animate={{
		opacity: 1,
		scale: 1
	}} exit={{
		opacity: 0,
		scale: .98
	}} transition={{
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="absolute inset-0">
              <img src={currentItem.image} alt={currentItem.title} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* In-Frame HUD Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-12 pointer-events-none">
            {/* Top Bar: Counter & Camera Metadata */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-white/90">
                Perspective {currentItem.index} of {String(filteredPerspectives.length).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-white/90">
                <Camera className="w-3.5 h-3.5 text-amber-200" />
                <span>{currentItem.cameraAngle}</span>
              </div>
            </div>

            {/* Bottom Bar: Title, Description, and Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-auto">
              <div className="max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 block mb-1">
                  {currentItem.category} Study
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  {currentItem.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {currentItem.subtitle}
                </p>
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-3 shrink-0">
                <button type="button" onClick={handlePrev} aria-label="Previous view" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F4EE] text-[#1F1E1B] hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-lg">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button type="button" onClick={handleNext} aria-label="Next view" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F4EE] text-[#1F1E1B] hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-lg">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Filmstrip */}
        <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none">
          {filteredPerspectives.map((item, idx) => <button key={item.id} onClick={() => setActiveIdx(idx)} className={`relative shrink-0 overflow-hidden transition-all duration-300 cursor-pointer ${activeIdx === idx ? "ring-2 ring-[#1F1E1B] opacity-100 scale-100" : "opacity-40 hover:opacity-80 scale-98"}`}>
              <img src={item.image} alt={item.title} className="w-24 sm:w-32 h-16 sm:h-20 object-cover" />
              <span className="absolute bottom-1 right-1.5 font-mono text-[9px] bg-black/60 text-white px-1 rounded">
                {item.index}
              </span>
            </button>)}
        </div>
      </div>
    </section>;
};
