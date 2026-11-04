import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const Preloader = ({ onComplete }) => {
	const [progress, setProgress] = useState(0);
	const [isDone, setIsDone] = useState(false);
	useEffect(() => {
		// Smooth progress simulation from 0 to 100
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setTimeout(() => {
						setIsDone(true);
						setTimeout(onComplete, 600);
					}, 300);
					return 100;
				}
				const increment = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 6;
				return Math.min(prev + increment, 100);
			});
		}, 40);
		return () => clearInterval(interval);
	}, [onComplete]);
	return <AnimatePresence>
      {!isDone && <motion.div key="preloader" initial={{
		opacity: 1,
		y: 0
	}} exit={{
		y: "-100%",
		transition: {
			duration: .8,
			ease: [
				.76,
				0,
				.24,
				1
			]
		}
	}} className="fixed inset-0 z-[200] flex flex-col justify-center overflow-hidden bg-[#24231F] text-[#F4F1EA]" aria-hidden="false">
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 select-none">
            <div className="flex items-end justify-between">
              <span className="font-sans text-[clamp(1.5rem,3.2vw,3rem)] font-medium leading-none tracking-[-0.055em]">
                STILL / FORM
              </span>
              <span className="shrink-0 font-sans text-[clamp(1.75rem,3.5vw,3.25rem)] font-medium leading-none tracking-[-0.05em] tabular-nums">
                {progress.toString().padStart(2, "0")}
              </span>
            </div>

            <div className="mt-7 h-[3px] w-full overflow-hidden bg-[#F4F1EA]/10 rounded-full" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
              <div className="h-full origin-left bg-[#F4F1EA] transition-all duration-75 ease-out rounded-full" style={{ width: `${progress}%` }} />
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#F4F1EA]/50">
              <span>Space, Considered</span>
              <span>Architecture &middot; Light &middot; Material</span>
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
};
