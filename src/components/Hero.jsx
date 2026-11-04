import { motion } from "framer-motion";
import { ArrowDownRight, Compass } from "lucide-react";
import { HERO_CONTENT } from "../data/siteData";
export const Hero = ({ onOpenTour }) => {
	return <section className="relative z-10 h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#1F1E1B] text-[#F6F4EE] select-none">
      {/* 1. Original Architectural Photography with Slow Reveal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img initial={{
		scale: 1.1,
		opacity: .7
	}} animate={{
		scale: 1,
		opacity: 1
	}} transition={{
		duration: 2.2,
		ease: [
			.16,
			1,
			.3,
			1
		]
	}} src={HERO_CONTENT.backgroundImage} alt="The Kamakura Pavilion facade in natural sunlight" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/85 via-[#1F1E1B]/35 to-black/30" />
      </div>

      {/* 2. Fullscreen Foreground Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-16">
        {/* Top Spacer for Navbar */}
        <div className="h-16" />

        {/* Center / Left Main Headline & Tagline */}
        <div className="max-w-4xl my-auto">
          {/* Small Section Label */}
          <motion.div initial={{
		opacity: 0,
		y: 15
	}} animate={{
		opacity: 1,
		y: 0
	}} transition={{
		duration: .9,
		delay: .2,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#F6F4EE]/60" />
            <span dangerouslySetInnerHTML={{ __html: HERO_CONTENT.smallLabel }} className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#F6F4EE]/80 font-medium" />
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1 initial={{
		opacity: 0,
		y: 35
	}} animate={{
		opacity: 1,
		y: 0
	}} transition={{
		duration: 1.2,
		delay: .4,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="font-serif text-[clamp(3.5rem,11.5vw,7.25rem)] leading-[88%] tracking-[-0.035em] text-[#F6F4EE]">
            {HERO_CONTENT.mainHeadlineLine1}<br />
            <span className="italic font-light">{HERO_CONTENT.mainHeadlineLine2}</span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p initial={{
		opacity: 0,
		y: 20
	}} animate={{
		opacity: 1,
		y: 0
	}} transition={{
		duration: 1,
		delay: .65,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-[#F6F4EE]/90 leading-relaxed font-light">
            {HERO_CONTENT.supportingText}
          </motion.p>

          {/* Action CTAs */}
          <motion.div initial={{
		opacity: 0,
		y: 20
	}} animate={{
		opacity: 1,
		y: 0
	}} transition={{
		duration: 1,
		delay: .85,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a href="#featured-residence" className="group flex items-center gap-3 py-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F6F4EE] hover:text-[#ECE7DE] transition-colors">
              <span className="border-b border-[#F6F4EE] pb-1 group-hover:border-[#F6F4EE]/50 transition-colors">
                {HERO_CONTENT.exploreButton}
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                &rarr;
              </span>
            </a>

            <button type="button" onClick={onOpenTour} className="group flex items-center gap-3 px-6 py-3 rounded-full border border-[#F6F4EE]/40 bg-black/30 backdrop-blur-md text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F6F4EE] hover:bg-[#F6F4EE] hover:text-[#1F1E1B] hover:border-[#F6F4EE] transition-all duration-300 cursor-pointer">
              <Compass className="w-4 h-4 text-amber-200 group-hover:text-[#1F1E1B] transition-colors" />
              <span>{HERO_CONTENT.experienceButton}</span>
            </button>
          </motion.div>
        </div>

        {/* 3. Bottom Architectural Coordinates & Metadata Strip */}
        <div className="pt-8 border-t border-[#F6F4EE]/20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-[11px] uppercase tracking-[0.2em] text-[#F6F4EE]/75">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-10">
            {HERO_CONTENT.metaList.map((item, idx) => <div key={idx}>
                <span className="text-[#F6F4EE]/40 block text-[9px] mb-0.5">{item.label}</span>
                <span className="font-medium text-[#F6F4EE]">{item.value}</span>
              </div>)}
          </div>

          <a href="#featured-residence" className="flex items-center gap-2 text-[#F6F4EE]/60 hover:text-[#F6F4EE] transition-colors self-start sm:self-auto">
            <span>Scroll To Monograph</span>
            <ArrowDownRight className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>;
};
