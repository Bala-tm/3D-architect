# 3D-Architect — Contemporary Architecture & Spatial Walkthrough

A world-class editorial architectural digital monograph and interactive 3D spatial experience celebrating contemporary restraint, natural daylight, honest materials, and considered living.

---

## 🏛 Visual & Architectural Identity

- **Atelier Name**: **KŌRA** (`KŌRA ARCHITECTS`)
- **Featured Monograph**: **The Kamakura Pavilion** (480 m² · Kamakura Ridge)
- **Palette**:
  - **Warm Ivory**: `#F6F4EE` (Primary surface & editorial background)
  - **Raw Cream**: `#ECE7DE` (Subtle plinth and section contrast)
  - **Warm Charcoal**: `#1F1E1B` (Primary architectural typography & dark masses)
  - **Deep Brown**: `#4A433A` (Editorial body prose & specifications)
  - **Muted Taupe**: `#9E8C76` (Technical metadata, focal lengths, & section indicators)
  - **Studio Emerald**: `#3FA85B` (Live WebGL engine status beacon)
- **Typography**:
  - Headlines: *Cormorant Garamond* (Editorial display serif)
  - Technical Data & Body: *Manrope* (Contemporary grotesque sans)

---

## 📐 Complete 10-Section Architecture

1. **SECTION 01 — Cinematic Hero (`Hero.jsx`)**
   - Full-viewport architectural hero featuring subtle zoom motion, location markers, soundscape ambient audio toggle (Web Audio API synthesized 528Hz harmonic drone), and direct "Begin Exploration" triggers.

2. **SECTION 02 — Featured Residence (`FeaturedResidence.jsx`)**
   - Asymmetrical editorial layout introducing *The Kamakura Pavilion*, specs grid (480 m², 2026, 4.1m Cantilever, Honed Limestone, Triple Glazing), and 3D study trigger.

3. **SECTION 03 — Architectural Manifesto (`Manifesto.jsx`)**
   - *Silence Carved Between Walls* — 3-image progression exploring Luminance as Volume, Truth in Grain, and Dissolving Boundaries.

4. **SECTION 04 — Studio Philosophy & Continuous Ticker (`About.jsx`)**
   - Architectural essays on permanence and restraint, paired with a continuous marquee ticker strip.

5. **SECTION 05 — Perspective Gallery (`ArchitectureGallery.jsx`)**
   - 7 distinct architectural viewpoints with lens angles (35mm, 28mm, 50mm, 24mm, 19mm, 21mm), category filter HUD, and filmstrip selector.

6. **SECTION 06 — 3D Tectonic Blueprint Explorer (`StructureExplorer.jsx`)**
   - Interactive Three.js model decomposition into 7 structural layers (Unified Massing, Concrete Shear Cores, Stone Plinth Plates, Floating Zinc Canopy, Slender Steel Columns, Suspended Oak Stair, Motorized Glass Bay).

7. **SECTION 07 — Residence Collection (`ResidenceCollection.jsx`)**
   - Residence 02 Kyoto (*The Kyoto Mews*) — *Not every space demands monumentality*, staggered 3-image composition.

8. **SECTION 08 — Room-by-Room Experience (`RoomShowcase.jsx`)**
   - The Living Forum, The Primary Sanctuary, and The Contemplation Study with interactive amenities and lighting orientation specs.

9. **SECTION 09 — Immersive Experience Portal (`ExperienceCTA.jsx`)**
   - Full-width call-to-action with live WebGL engine status launching the full-screen spatial walkthrough.

10. **SECTION 10 — Atelier Footer & Inquiries (`Footer.jsx`)**
    - Atelier statement, structured monograph links, and back-to-top smooth scroll.

---

## 🎮 Interactive 3D Spatial Walkthrough (`VirtualTour.jsx`)

- **First-Person WASD Movement**: Walk freely inside the pavilion and out onto the water terrace plinth.
- **Dynamic Eye Level**: Camera height lowers automatically when stepping down into the Sunken Basalt Hearth.
- **Sunken Basalt Hearth**: Conversation pit with floating basalt bench, oat linen seating, and glowing flame ribbon with procedural flicker.
- **4.1m Cantilevered Canopy & Cedar Soffit**: Ceiling extends seamlessly through the glass facade out over the outdoor terrace.
- **Frameless Glass Corner**: Zero-threshold 3.2m sliding door pocketed open with column-free corner.
- **Outdoor Reflecting Water Court**: 9.5m mirror water basin with stepping stones and coastal black pine trees.
- **Suspended White Oak Stair**: 12 floating oak treads with vertical tensioned stainless steel rods.
- **3 Signature Vantage Points**: Teleport instantly between *Sunken Hearth*, *Water Terrace*, and *Upper Gallery*.
- **Dynamic Lighting**: Real-time switching between *Daylight*, *Golden Hour*, and *Nocturne*.
- **Material Themes**: Switch in real-time between *Limestone*, *Charred Cedar*, *Cypress*, and *Travertine*.
- **Interactive Hotspots**: Inspect architectural details in 3D.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js
- **Motion & Smooth Scroll**: Framer Motion, GSAP, Lenis
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```
