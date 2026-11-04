import { useState } from "react";
import { useLenis } from "./hooks/useLenis";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedResidence } from "./components/FeaturedResidence";
import { Manifesto } from "./components/Manifesto";
import { About } from "./components/About";
import { ArchitectureGallery } from "./components/ArchitectureGallery";
import { StructureExplorer } from "./components/StructureExplorer";
import { ResidenceCollection } from "./components/ResidenceCollection";
import { RoomShowcase } from "./components/RoomShowcase";
import { ExperienceCTA } from "./components/ExperienceCTA";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { VirtualTour } from "./components/VirtualTour";
export function App() {
	const [isPreloaderDone, setIsPreloaderDone] = useState(false);
	const [isTourOpen, setIsTourOpen] = useState(false);
	const [isContactOpen, setIsContactOpen] = useState(false);
	// Enable Lenis smooth scroll only when in main landing mode (disabled in 3D walkthrough)
	useLenis(isPreloaderDone && !isTourOpen);
	const handleOpenContact = () => setIsContactOpen(true);
	const handleOpenTour = () => setIsTourOpen(true);
	const handleCloseTour = () => setIsTourOpen(false);
	return <div className="relative min-h-screen bg-[#F6F4EE] text-[#1F1E1B] selection:bg-[#1F1E1B] selection:text-[#F6F4EE]">
      {/* Brand Intro Preloader */}
      <Preloader onComplete={() => setIsPreloaderDone(true)} />

      {/* Global Fixed Navigation */}
      {!isTourOpen && <Navbar onOpenContact={handleOpenContact} onOpenTour={handleOpenTour} />}

      {/* Main Website Structure: Sections 01 through 10 */}
      {!isTourOpen ? <main id="top" className="overflow-x-clip">
          {/* SECTION 01 — CINEMATIC HERO */}
          <Hero onOpenTour={handleOpenTour} />

          {/* SECTION 02 — FEATURED RESIDENCE */}
          <FeaturedResidence onExplore={() => {
		const target = document.querySelector("#structure-explorer");
		if (target) target.scrollIntoView({ behavior: "smooth" });
	}} />

          {/* SECTION 03 — ARCHITECTURAL MANIFESTO */}
          <Manifesto />

          {/* SECTION 04 — ABOUT / PHILOSOPHY */}
          <About />

          {/* SECTION 05 — ARCHITECTURAL EXPLORATION */}
          <ArchitectureGallery />

          {/* SECTION 06 — STRUCTURE / FULL VIEW */}
          <StructureExplorer />

          {/* SECTION 07 — RESIDENCE COLLECTION */}
          <ResidenceCollection />

          {/* SECTION 08 — ROOM-BY-ROOM EXPERIENCE */}
          <RoomShowcase />

          {/* SECTION 09 — IMMERSIVE RESIDENCE EXPERIENCE */}
          <ExperienceCTA onEnterTour={handleOpenTour} />

          {/* SECTION 10 — CONTACT / FOOTER */}
          <Footer onOpenContact={handleOpenContact} onOpenTour={handleOpenTour} />
        </main> : 
	/* IMMERSIVE 3D SPATIAL WALKTHROUGH */
	<VirtualTour onBack={handleCloseTour} />}

      {/* INQUIRY & RESERVATION MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>;
}
export default App;
