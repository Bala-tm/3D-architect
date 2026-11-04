import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { EXPERIENCE_CTA_CONTENT } from "../data/siteData";
export const ExperienceCTA = ({ onEnterTour }) => {
	return <section id="experience-cta" className="relative z-20 w-full bg-[#1F1E1B] text-[#F6F4EE] py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{
		duration: 1.8,
		ease: [
			.16,
			1,
			.3,
			1
		]
	}} src={EXPERIENCE_CTA_CONTENT.image} alt="Residence 02 Kyoto architectural experience at golden hour" className="w-full h-full object-cover object-center filter brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1B] via-[#1F1E1B]/50 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between min-h-[500px] lg:min-h-[580px]">
        {/* Top Controls Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#F6F4EE]/60" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#F6F4EE]/80 font-medium">
              {EXPERIENCE_CTA_CONTENT.sectionLabel}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white/80">
            <span>{EXPERIENCE_CTA_CONTENT.controlsNotice}</span>
          </div>
        </div>

        {/* Center / Bottom Headline and Launch Trigger */}
        <div className="my-auto max-w-3xl pt-16">
          <motion.h2 initial={{
		opacity: 0,
		y: 30
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-80px"
	}} transition={{
		duration: 1,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] leading-[88%] tracking-[-0.04em] text-white">
            {EXPERIENCE_CTA_CONTENT.headline}
          </motion.h2>

          <motion.p initial={{
		opacity: 0,
		y: 20
	}} whileInView={{
		opacity: 1,
		y: 0
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
	}} className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light">
            {EXPERIENCE_CTA_CONTENT.description}
          </motion.p>

          <motion.div initial={{
		opacity: 0,
		y: 20
	}} whileInView={{
		opacity: 1,
		y: 0
	}} viewport={{
		once: true,
		margin: "-80px"
	}} transition={{
		duration: .9,
		delay: .4,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="mt-10 flex items-center gap-6">
            <button type="button" onClick={onEnterTour} className="group flex items-center gap-4 px-8 py-4 rounded-full bg-[#F6F4EE] text-[#1F1E1B] hover:bg-white text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-2xl cursor-pointer">
              <Compass className="w-4 h-4 text-[#1F1E1B]" />
              <span>{EXPERIENCE_CTA_CONTENT.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Glowing Status Indicator */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FA85B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3FA85B]" />
              </span>
              <span className="hidden sm:inline">WebGL Engine Live</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 border-t border-white/20 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/60">
          <span>Three-Dimensional Spatial Tour</span>
          <span>The Kamakura Pavilion &middot; Coastal Ridge</span>
        </div>
      </div>
    </section>;
};
