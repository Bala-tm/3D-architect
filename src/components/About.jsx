import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../data/siteData";
export const About = () => {
	return <section id="about" className="relative z-20 bg-[#F6F4EE] text-[#1F1E1B] py-24 sm:py-32 lg:py-40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#1F1E1B]/10">
          <span className="w-6 h-px bg-[#1F1E1B]/40" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E8C76] font-medium">
            {ABOUT_CONTENT.sectionLabel}
          </span>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Philosophical Content (5 Cols) */}
          <motion.div initial={{
		opacity: 0,
		x: -30
	}} whileInView={{
		opacity: 1,
		x: 0
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
	}} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#9E8C76] block mb-3 font-medium">
                Tectonic Restraint
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1E1B] leading-[0.98] tracking-tight">
                {ABOUT_CONTENT.heading}
              </h2>

              <p className="mt-8 text-base sm:text-lg text-[#1F1E1B] leading-relaxed font-light">
                {ABOUT_CONTENT.description}
              </p>

              <p className="mt-6 text-sm text-[#4A433A] leading-relaxed font-light">
                {ABOUT_CONTENT.extendedText}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#1F1E1B]/10 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#9E8C76]">
              <span>Sensory Spaces</span>
              <span>Light &middot; Stone &middot; Timber</span>
            </div>
          </motion.div>

          {/* Right Column: Large Architectural Photograph (7 Cols) */}
          <motion.div initial={{
		opacity: 0,
		scale: .97
	}} whileInView={{
		opacity: 1,
		scale: 1
	}} viewport={{
		once: true,
		margin: "-80px"
	}} transition={{
		duration: 1,
		delay: .2,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="lg:col-span-7">
            <div className="relative overflow-hidden bg-[#1F1E1B] aspect-[16/11] shadow-xl group">
              <img src={ABOUT_CONTENT.image} alt="Cantilevered roofline framing natural garden light" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-[11px] uppercase tracking-widest">
                <span>Cantilevered Tectonics</span>
                <span className="opacity-70">Study No. 04</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Horizontal Moving Brand Ticker */}
      <div className="mt-24 sm:mt-32 py-5 border-y border-[#1F1E1B]/10 bg-[#ECE7DE]/50 overflow-hidden whitespace-nowrap">
        <div className="animate-ticker flex items-center gap-12 font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-[#1F1E1B]/75 font-medium">
          <span>{ABOUT_CONTENT.tickerText}</span>
          <span>&middot;</span>
          <span>{ABOUT_CONTENT.tickerText}</span>
          <span>&middot;</span>
          <span>{ABOUT_CONTENT.tickerText}</span>
          <span>&middot;</span>
          <span>{ABOUT_CONTENT.tickerText}</span>
          <span>&middot;</span>
          <span>{ABOUT_CONTENT.tickerText}</span>
          <span>&middot;</span>
          <span>{ABOUT_CONTENT.tickerText}</span>
        </div>
      </div>
    </section>;
};
