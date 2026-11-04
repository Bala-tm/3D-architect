import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const Navbar = ({ onOpenContact, onOpenTour }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 80);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const navLinks = [
		{
			label: "Pavilion 01",
			href: "#featured-residence",
			action: null
		},
		{
			label: "Tectonics",
			href: "#manifesto",
			action: null
		},
		{
			label: "Philosophy",
			href: "#about",
			action: null
		},
		{
			label: "Monographs",
			href: "#gallery",
			action: null
		},
		{
			label: "Structure 3D",
			href: "#structure-explorer",
			action: null
		},
		{
			label: "Residence 02",
			href: "#residence-collection",
			action: null
		},
		{
			label: "Spatial Walkthrough",
			href: "#",
			action: onOpenTour
		}
	];
	const handleLinkClick = (e, action, href) => {
		if (action) {
			e.preventDefault();
			action();
			setIsOpen(false);
			return;
		}
		if (href.startsWith("#")) {
			e.preventDefault();
			setIsOpen(false);
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
			}
		}
	};
	return <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 sm:px-10 lg:px-14 py-4 md:py-6 select-none ${isScrolled ? "bg-[#F6F4EE]/90 backdrop-blur-md text-[#1F1E1B] border-b border-[#1F1E1B]/10 shadow-sm" : "text-white mix-blend-difference"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on Left */}
          <a href="#top" onClick={(e) => handleLinkClick(e, null, "#top")} className="flex items-baseline gap-2 text-xl font-serif tracking-widest hover:opacity-75 transition-opacity">
            <span className="font-semibold">KŌRA</span>
            <span className="text-[10px] tracking-[0.25em] font-sans text-current/70 hidden sm:inline">ARCHITECTS</span>
          </a>

          {/* Desktop Navigation Links on Right */}
          <div className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium">
            {navLinks.slice(0, 6).map((link) => <a key={link.label} href={link.href} onClick={(e) => handleLinkClick(e, null, link.href)} className="hover:opacity-60 transition-opacity">
                {link.label}
              </a>)}

            <button type="button" onClick={onOpenTour} className="hover:opacity-60 transition-opacity cursor-pointer flex items-center gap-1.5">
              <span>3D Tour</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FA85B]" />
            </button>

            <button type="button" onClick={onOpenContact} className="px-4 py-2 rounded-full border border-current hover:bg-[#1F1E1B] hover:text-[#F6F4EE] hover:border-[#1F1E1B] transition-all cursor-pointer text-[11px]">
              Inquire
            </button>
          </div>

          {/* Mobile Navigation Header on Right */}
          <div className="flex lg:hidden items-center gap-3">
            <button type="button" onClick={onOpenContact} className="px-3 py-1.5 rounded-full border border-current text-[11px] uppercase tracking-wider hover:opacity-80 transition-opacity">
              Inquire
            </button>

            <button type="button" aria-label="Toggle navigation menu" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider py-1 px-2 cursor-pointer focus:outline-none">
              <span>MENU</span>
              <span className="grid grid-cols-2 gap-[2.5px] transition-transform duration-300">
                <i className="block h-[3px] w-[3px] rounded-full bg-current" />
                <i className="block h-[3px] w-[3px] rounded-full bg-current" />
                <i className="block h-[3px] w-[3px] rounded-full bg-current" />
                <i className="block h-[3px] w-[3px] rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
		opacity: 0,
		clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
	}} animate={{
		opacity: 1,
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
	}} exit={{
		opacity: 0,
		clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
	}} transition={{
		duration: .5,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}} className="fixed inset-0 z-[60] bg-[#141311] text-[#F6F4EE] flex flex-col justify-between p-8 sm:p-12 overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-[#F6F4EE]/15">
              <span className="text-sm font-medium tracking-widest uppercase text-[#F6F4EE]/70 font-serif">
                KŌRA ARCHITECTS &middot; INDEX
              </span>
              <button type="button" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-[#F6F4EE]/30 hover:bg-[#F6F4EE] hover:text-[#1F1E1B] transition-colors">
                Close &times;
              </button>
            </div>

            <div className="my-auto py-12">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => <motion.li key={link.label} initial={{
		opacity: 0,
		x: -20
	}} animate={{
		opacity: 1,
		x: 0
	}} transition={{
		delay: .05 * idx,
		duration: .4
	}}>
                    {link.action ? <button type="button" onClick={(e) => handleLinkClick(e, link.action, link.href)} className="font-serif text-3xl sm:text-4xl hover:opacity-60 transition-opacity text-left flex items-center gap-3">
                        <span>{link.label}</span>
                        <span className="text-xs uppercase font-sans tracking-widest text-[#3FA85B]">3D Walkthrough</span>
                      </button> : <a href={link.href} onClick={(e) => handleLinkClick(e, null, link.href)} className="font-serif text-3xl sm:text-4xl hover:opacity-60 transition-opacity block">
                        {link.label}
                      </a>}
                  </motion.li>)}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#F6F4EE]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs uppercase tracking-widest text-[#F6F4EE]/60">
              <span>Permanence in Light</span>
              <button onClick={() => {
		setIsOpen(false);
		onOpenContact();
	}} className="text-[#F6F4EE] hover:underline text-left cursor-pointer">
                Private Architectural Dossier &rarr;
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
