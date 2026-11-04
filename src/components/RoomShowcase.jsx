import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { ROOM_EXPERIENCES } from "../data/siteData";
export const RoomShowcase = () => {
	const [activeRoomIdx, setActiveRoomIdx] = useState(0);
	const currentRoom = ROOM_EXPERIENCES[activeRoomIdx];
	return <section id="room-showcase" className="relative z-20 bg-[#ECE7DE] text-[#1F1E1B] py-28 sm:py-36 lg:py-48 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1F1E1B]/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#1F1E1B]/40" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E8C76] font-medium">
                08 / Room-by-Room Monograph
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1E1B] tracking-tight">
              Interior Sanctuaries
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#F6F4EE] p-1.5 rounded-full border border-[#1F1E1B]/10">
            {ROOM_EXPERIENCES.map((room, idx) => <button key={room.id} onClick={() => setActiveRoomIdx(idx)} className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer ${activeRoomIdx === idx ? "bg-[#1F1E1B] text-[#F6F4EE] font-medium shadow-sm" : "text-[#4A433A] hover:text-[#1F1E1B]"}`}>
                {room.number} &middot; {room.tag.replace("THE ", "")}
              </button>)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-[#1F1E1B] aspect-[16/11] shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.img key={currentRoom.id} src={currentRoom.image} alt={currentRoom.tag} initial={{
		opacity: 0,
		scale: 1.05
	}} animate={{
		opacity: 1,
		scale: 1
	}} exit={{
		opacity: 0,
		scale: .98
	}} transition={{
		duration: .6,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="w-full h-full object-cover" />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-[11px] uppercase tracking-widest">
                <span>{currentRoom.tag}</span>
                <span className="opacity-70">{currentRoom.aspectNote}</span>
              </div>
            </div>
          </div>

          <motion.div key={currentRoom.id} initial={{
		opacity: 0,
		x: 25
	}} animate={{
		opacity: 1,
		x: 0
	}} transition={{
		duration: .5,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E8C76] block mb-2 font-mono">
                {currentRoom.number} &mdash; {currentRoom.tag}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1E1B] tracking-tight leading-[1.0] mb-6">
                {currentRoom.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#4A433A] leading-relaxed font-light mb-8">
                {currentRoom.description}
              </p>

              <div className="pt-6 border-t border-[#1F1E1B]/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E8C76] block mb-4 font-medium">
                  Tectonic Specifications
                </span>
                <ul className="space-y-3">
                  {currentRoom.amenities.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1F1E1B] font-light">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#3FA85B]/20 text-[#3FA85B] mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1F1E1B]/10 flex items-center justify-between text-xs text-[#9E8C76]">
              <span className="uppercase tracking-widest">Tectonic Sabi</span>
              <span className="font-mono">{currentRoom.number} / 03</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
