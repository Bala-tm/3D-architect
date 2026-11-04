import { motion } from "framer-motion";
import { MANIFESTO_CONTENT } from "../data/siteData";
export const Manifesto = () => {
	return <section id="manifesto" className="relative z-20 bg-[#ECE7DE] text-[#1F1E1B] py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#1F1E1B]/40" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E8C76] font-medium">
            {MANIFESTO_CONTENT.sectionLabel}
          </span>
        </div>

        {/* Large Editorial Serif Manifesto Headline */}
        <div className="max-w-5xl mb-16 sm:mb-24">
          <motion.h2 initial={{
		opacity: 0,
		y: 30
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-100px"
	}} transition={{
		duration: 1.1,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="font-serif text-[clamp(2.75rem,7vw,5.75rem)] leading-[94%] tracking-[-0.035em] text-[#1F1E1B]">
            Architecture is not the object itself.<br />
            <span className="italic font-light">It is the silence carved between walls.</span>
          </motion.h2>

          <motion.p initial={{
		opacity: 0,
		y: 20
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-100px"
	}} transition={{
		duration: .9,
		delay: .2,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-[#4A433A] leading-relaxed font-light">
            {MANIFESTO_CONTENT.description}
          </motion.p>
        </div>

        {/* Asymmetrical 3-Image Photographic Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Photograph 1: Tall Vertical Accent (4 Cols) */}
          <motion.div initial={{
		opacity: 0,
		y: 40
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-60px"
	}} transition={{
		duration: .9,
		delay: .1,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="md:col-span-4">
            <div className="relative overflow-hidden bg-[#1F1E1B] aspect-[3/4] shadow-md group">
              <img src={MANIFESTO_CONTENT.items[0].image} alt={MANIFESTO_CONTENT.items[0].title} className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-1000 ease-out" />
            </div>
            <div className="mt-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E8C76] block mb-1">
                01 &middot; {MANIFESTO_CONTENT.items[0].title}
              </span>
              <p className="text-xs text-[#4A433A] leading-relaxed font-light">
                {MANIFESTO_CONTENT.items[0].caption}
              </p>
            </div>
          </motion.div>

          {/* Photograph 2: Wide Centerpiece (5 Cols, Offset) */}
          <motion.div initial={{
		opacity: 0,
		y: 60
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-60px"
	}} transition={{
		duration: 1,
		delay: .25,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="md:col-span-5 md:mt-16">
            <div className="relative overflow-hidden bg-[#1F1E1B] aspect-[16/11] shadow-lg group">
              <img src={MANIFESTO_CONTENT.items[1].image} alt={MANIFESTO_CONTENT.items[1].title} className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-1000 ease-out" />
            </div>
            <div className="mt-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E8C76] block mb-1">
                02 &middot; {MANIFESTO_CONTENT.items[1].title}
              </span>
              <p className="text-xs text-[#4A433A] leading-relaxed font-light">
                {MANIFESTO_CONTENT.items[1].caption}
              </p>
            </div>
          </motion.div>

          {/* Photograph 3: High Corner Detail (3 Cols) */}
          <motion.div initial={{
		opacity: 0,
		y: 30
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-60px"
	}} transition={{
		duration: .9,
		delay: .4,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="md:col-span-3 md:-mt-8">
            <div className="relative overflow-hidden bg-[#1F1E1B] aspect-[4/5] shadow-md group">
              <img src={MANIFESTO_CONTENT.items[2].image} alt={MANIFESTO_CONTENT.items[2].title} className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-1000 ease-out" />
            </div>
            <div className="mt-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E8C76] block mb-1">
                03 &middot; {MANIFESTO_CONTENT.items[2].title}
              </span>
              <p className="text-xs text-[#4A433A] leading-relaxed font-light">
                {MANIFESTO_CONTENT.items[2].caption}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
