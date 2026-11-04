import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { FEATURED_RESIDENCE } from "../data/siteData";
export const FeaturedResidence = ({ onExplore }) => {
	return <section id="featured-residence" className="relative z-20 bg-[#F6F4EE] text-[#1F1E1B] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1F1E1B]/10">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#1F1E1B]/40" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E8C76] font-medium">
              02 / Featured Monograph
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E8C76]">
            {FEATURED_RESIDENCE.year} Monograph
          </span>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Photographic Storytelling (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div initial={{
		opacity: 0,
		y: 30
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-80px"
	}} transition={{
		duration: .9,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="relative overflow-hidden bg-[#1F1E1B] aspect-[16/11] shadow-xl group">
              <img src={FEATURED_RESIDENCE.image} alt={FEATURED_RESIDENCE.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* In-Photo Metadata */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-[11px] uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-200" />
                  <span>{FEATURED_RESIDENCE.location}</span>
                </span>
                <span>{FEATURED_RESIDENCE.area}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Project Typography & Metadata (5 Cols) */}
          <motion.div initial={{
		opacity: 0,
		x: 25
	}} whileInView={{
		opacity: 1,
		x: 0
	}} viewport={{
		once: true,
		margin: "-80px"
	}} transition={{
		duration: .9,
		delay: .2,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#9E8C76] block mb-2">
                {FEATURED_RESIDENCE.subtitle}
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1E1B] tracking-tight leading-[0.95]">
                {FEATURED_RESIDENCE.name}
              </h2>

              <p className="mt-6 text-sm sm:text-base text-[#4A433A] leading-relaxed font-light">
                {FEATURED_RESIDENCE.architecturalNote}
              </p>

              {/* Specifications List */}
              <div className="mt-8 pt-6 border-t border-[#1F1E1B]/10 space-y-3">
                {FEATURED_RESIDENCE.specs.map((item, idx) => <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <span className="text-[#9E8C76] uppercase tracking-wider">{item.label}</span>
                    <span className="font-medium text-[#1F1E1B] text-right">{item.value}</span>
                  </div>)}
              </div>
            </div>

            {/* Explore Project Link */}
            <div className="mt-10 pt-6 border-t border-[#1F1E1B]/10 flex items-center justify-between">
              <button type="button" onClick={onExplore} className="group flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-medium text-[#1F1E1B] hover:text-[#4A433A] transition-colors cursor-pointer">
                <span className="border-b border-[#1F1E1B] pb-0.5 group-hover:border-[#4A433A]">
                  Tectonic Massing &amp; 3D Study
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-[10px] text-[#9E8C76] uppercase tracking-widest">
                Monograph 01
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
