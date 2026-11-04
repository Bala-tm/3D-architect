import { motion } from "framer-motion";
import { RESIDENCE_COLLECTION } from "../data/siteData";
export const ResidenceCollection = () => {
	return <section id="residence-collection" className="relative z-20 bg-[#F6F4EE] text-[#1F1E1B] py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-px bg-[#1F1E1B]/40" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E8C76] font-medium">
            {RESIDENCE_COLLECTION.sectionLabel}
          </span>
        </div>

        <div className="max-w-4xl mb-16 sm:mb-24">
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
		duration: 1,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="font-serif text-[clamp(2.75rem,8vw,6rem)] leading-[92%] tracking-[-0.035em] text-[#1F1E1B]">
            {RESIDENCE_COLLECTION.headlineLine1}<br />
            <span className="italic font-light">{RESIDENCE_COLLECTION.headlineLine2}</span>
          </motion.h2>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-[#4A433A] leading-relaxed font-light">
            {RESIDENCE_COLLECTION.subtitle}
          </p>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {/* 1. The Garden Lounge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
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
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="lg:col-span-8 overflow-hidden bg-[#1F1E1B] aspect-[16/10] shadow-xl group">
              <img src={RESIDENCE_COLLECTION.images[0].image} alt={RESIDENCE_COLLECTION.images[0].title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out" />
            </motion.div>

            <motion.div initial={{
		opacity: 0,
		x: 20
	}} whileInView={{
		opacity: 1,
		x: 0
	}} viewport={{
		once: true,
		margin: "-60px"
	}} transition={{
		duration: .9,
		delay: .2,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="lg:col-span-4 pb-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E8C76] block mb-2 font-medium">
                01 &middot; Interior Aspect
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1E1B] mb-3">
                {RESIDENCE_COLLECTION.images[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed font-light mb-4">
                {RESIDENCE_COLLECTION.images[0].caption}
              </p>
              <div className="text-[11px] uppercase tracking-wider text-[#9E8C76] pt-3 border-t border-[#1F1E1B]/10">
                {RESIDENCE_COLLECTION.images[0].specs}
              </div>
            </motion.div>
          </div>

          {/* 2 & 3. Bedroom & Study */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
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
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="md:col-span-6">
              <div className="overflow-hidden bg-[#1F1E1B] aspect-[4/3] shadow-md group">
                <img src={RESIDENCE_COLLECTION.images[1].image} alt={RESIDENCE_COLLECTION.images[1].title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out" />
              </div>
              <div className="mt-4">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E8C76] block mb-1 font-medium">
                  02 &middot; Primary Sanctuary
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#1F1E1B] mb-2">
                  {RESIDENCE_COLLECTION.images[1].title}
                </h4>
                <p className="text-xs text-[#4A433A] leading-relaxed font-light mb-3">
                  {RESIDENCE_COLLECTION.images[1].caption}
                </p>
                <div className="text-[10px] uppercase tracking-wider text-[#9E8C76]">
                  {RESIDENCE_COLLECTION.images[1].specs}
                </div>
              </div>
            </motion.div>

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
		duration: .9,
		delay: .25,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="md:col-span-5 md:mt-24 md:col-start-8">
              <div className="overflow-hidden bg-[#1F1E1B] aspect-[4/3] shadow-md group">
                <img src={RESIDENCE_COLLECTION.images[2].image} alt={RESIDENCE_COLLECTION.images[2].title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out" />
              </div>
              <div className="mt-4">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E8C76] block mb-1 font-medium">
                  03 &middot; Contemplation Study
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#1F1E1B] mb-2">
                  {RESIDENCE_COLLECTION.images[2].title}
                </h4>
                <p className="text-xs text-[#4A433A] leading-relaxed font-light mb-3">
                  {RESIDENCE_COLLECTION.images[2].caption}
                </p>
                <div className="text-[10px] uppercase tracking-wider text-[#9E8C76]">
                  {RESIDENCE_COLLECTION.images[2].specs}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
