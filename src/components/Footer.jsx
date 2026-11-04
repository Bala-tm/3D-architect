import { ArrowUp } from "lucide-react";
import { FOOTER_CONTENT } from "../data/siteData";
export const Footer = ({ onOpenContact, onOpenTour }) => {
	const scrollToTop = (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return <footer id="contact" className="relative z-20 bg-[#F6F4EE] text-[#1F1E1B] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#1F1E1B]/15">
          <a href="#top" onClick={scrollToTop} className="text-2xl font-serif tracking-[0.2em] font-light text-[#1F1E1B] hover:opacity-75 transition-opacity">
            {FOOTER_CONTENT.logo}
          </a>

          <p className="text-xs uppercase tracking-[0.2em] text-[#9E8C76]">
            {FOOTER_CONTENT.philosophy}
          </p>
        </div>

        {/* Middle Navigation & Inquiry Columns */}
        <div className="py-16 sm:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Brand Statement (6 Cols) */}
          <div className="md:col-span-6">
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1E1B] leading-[0.92] tracking-tight">
              Space,<br />
              <span className="italic font-light">Considered.</span>
            </h3>
            <p className="mt-6 max-w-md text-sm sm:text-base text-[#4A433A] leading-relaxed font-light">
              Contemporary residential architecture shaped around natural illumination, honest materials, and the quiet ritual of everyday life.
            </p>

            <div className="mt-8">
              <button type="button" onClick={onOpenContact} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1F1E1B] text-[#F6F4EE] hover:bg-[#4A433A] text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-sm">
                <span>Inquire for Viewings &amp; Stays</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Structured Links (6 Cols) */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs uppercase tracking-[0.18em]">
            {/* Residences */}
            <div className="flex flex-col space-y-3">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E8C76] mb-1 font-semibold">
                Residences
              </span>
              <a href="#featured-residence" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                The Kamakura Pavilion
              </a>
              <a href="#residence-collection" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Residence 02 Kyoto
              </a>
              <a href="#structure-explorer" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                3D Blueprint
              </a>
              <button type="button" onClick={onOpenTour} className="text-left text-[#1F1E1B] hover:text-[#9E8C76] transition-colors cursor-pointer">
                Spatial Tour
              </button>
            </div>

            {/* Studio */}
            <div className="flex flex-col space-y-3">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E8C76] mb-1 font-semibold">
                Studio
              </span>
              <a href="#about" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Philosophy
              </a>
              <a href="#manifesto" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Manifesto
              </a>
              <a href="#gallery" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Perspectives
              </a>
              <button type="button" onClick={onOpenContact} className="text-left text-[#1F1E1B] hover:text-[#9E8C76] transition-colors cursor-pointer">
                Inquiries
              </button>
            </div>

            {/* Editorial / Publications */}
            <div className="flex flex-col space-y-3 col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E8C76] mb-1 font-semibold">
                Monographs
              </span>
              <a href="https://unsplash.com" target="_blank" rel="noreferrer" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Photography
              </a>
              <a href="https://architecturaldigest.com" target="_blank" rel="noreferrer" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Arch Digest
              </a>
              <a href="https://monocle.com" target="_blank" rel="noreferrer" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Monocle
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#1F1E1B] hover:text-[#9E8C76] transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-[#1F1E1B]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[#9E8C76]">
          <div>
            <span>&copy; {FOOTER_CONTENT.logo} {FOOTER_CONTENT.year}</span>
            <span className="mx-2">&middot;</span>
            <span className="lowercase text-[11px] text-[#9E8C76]">all rights reserved &middot; architectural atelier</span>
          </div>

          <a href="#top" onClick={scrollToTop} className="flex items-center gap-2 hover:text-[#1F1E1B] transition-colors">
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>;
};
