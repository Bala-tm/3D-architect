# STILL / FORM — Premium Contemporary Architecture & Residence Website

An award-winning caliber editorial digital experience inspired by [STILL / FORM](https://stillform.homes/), celebrating Japanese-inspired restraint, contemporary minimalism, honest materials, and considered light through immersive 3D spatial storytelling.

---

## 🏛 Visual & Architectural Identity

- **Design Philosophy**: Japanese-inspired minimalism, architectural editorial design, warm natural materials, sophisticated serif typography, generous negative space, and asymmetrical compositions.
- **Palette**:
  - **Warm Ivory**: `#F4F1EA` (Primary background)
  - **Soft Cream**: `#EAE5DB` (Secondary surface)
  - **Charcoal**: `#24231F` (Primary editorial typography)
  - **Deep Brown**: `#51483F` (Supporting body text)
  - **Muted Taupe**: `#A69B8B` (Metadata and labels)
  - **Warm Grey**: `#D5D0C7` (Borders and dividers)
  - **Emerald Beacon**: `#3FA85B` (Live status indicator)
- **Typography**:
  - Large Headlines: `Instrument Serif` & `Cormorant Garamond`
  - Body & Metadata: `Familjen Grotesk` & `Manrope`

---

## 📐 Complete 10-Section Architecture

1. **SECTION 01 — Cinematic Hero (`Hero.tsx`)**
   - Full-viewport architectural photograph with natural sunlight.
   - Minimal text overlay with slow cinematic image reveal and entrance animations.
   - Headline: *"Space, Considered."*
   - Subtitle: *"Spaces shaped by architecture, natural light, and the art of living."*
   - Direct interactive triggers: `Explore Residence` and `Experience the Space`.
   - Architectural metadata bar: Typology, Year, Timeline, Location.

2. **SECTION 02 — Featured Residence (`FeaturedResidence.tsx`)**
   - Asymmetrical editorial layout introducing Residence 01 (The Monolithic Pavilion).
   - High-resolution photographic storytelling with in-image location tags.
   - Full technical specifications (Typology, Structure, Glazing, Energy).
   - Direct link to the structural breakdown.

3. **SECTION 03 — Architectural Manifesto (`Manifesto.tsx`)**
   - Large editorial serif headline: *"A residence is more than its form. It is how light moves through it."*
   - Asymmetrical 3-image composition demonstrating Light Filtration, Material Honesty, and Thresholds.
   - Generous negative space and scroll-triggered text reveals.

4. **SECTION 04 — About / Philosophy (`About.tsx`)**
   - Split layout: Editorial philosophy on one side, large architectural photograph on the other.
   - Headline: *"A quieter way to live."*
   - Smooth horizontal running brand ticker: `STILL / FORM — SPACE / LIGHT — FORM / MATERIAL`.

5. **SECTION 05 — Architectural Exploration (`ArchitectureGallery.tsx`)**
   - Immersive architectural gallery with categorized perspectives (Exterior, Interior, Lighting, Structural, Context).
   - Real-time camera focal length HUD (`35mm`, `24mm`, `50mm`), perspective numbering (`01 of 07`), and interactive thumbnail filmstrip.

6. **SECTION 06 — Structure / Full View (`StructureExplorer.tsx`)**
   - Interactive architectural showcase with real-time Three.js 3D model decomposition.
   - 7 toggleable structural layers: Full View, Walls & Cores, Floor Plates, Floating Roof, Steel Pillars, Suspended Stair, and Glazing & Apertures.
   - Orbit drag rotation, technical dimensions, material breakdowns, and toggleable architectural render mode.

7. **SECTION 07 — Residence Collection (`ResidenceCollection.tsx`)**
   - Introduces Residence 02 (The Urban Sanctuary).
   - Headline: *"Not every space needs to be grand."*
   - Staggered asymmetrical image layout featuring the Living Sanctuary, Primary Suite, and Garden Room with detailed architectural captions.

8. **SECTION 08 — Room-by-Room Experience (`RoomShowcase.tsx`)**
   - Three curated editorial subsections:
     - `01 — THE LIVING AREA`: *"Everything within reach."*
     - `02 — THE BEDROOM`: *"Slow mornings, softly lit."*
     - `03 — THE SECOND ROOM`: *"Room for one more."*
   - Large photography, subtle text transitions, tactile specifications, and circadian daylight notes.

9. **SECTION 09 — Immersive Residence Experience (`ExperienceCTA.tsx`)**
   - Full-width architectural golden-hour imagery.
   - Headline: *"Step inside."*
   - Description: *"Move beyond the photograph and experience the residence from within. Explore its rooms, discover the details, and find your own way through the space."*
   - CTA: `Enter Residence →` with keyboard controls legend (`[W][A][S][D] Move`, `[E] Interact`, `[Q] Customize`).

10. **SECTION 10 — Contact / Footer (`Footer.tsx`)**
    - Minimal editorial footer with brand philosophy.
    - Structured residence and studio navigation columns.
    - Direct viewing inquiry trigger.
    - Live pulsing "Open to work" status beacon and smooth back-to-top interaction.

---

## 🎮 Interactive 3D Spatial Walkthrough (`VirtualTour.tsx`)

A dedicated full-screen interactive 3D spatial tour built with Three.js:
- **First-Person Walking**: `W`, `A`, `S`, `D` or Arrow keys.
- **Mouse / Touch Look**: Drag to orbit and look around the room with reticle center focus.
- **Room Teleportation**: Jump between the Living Lounge, Primary Bedroom Suite, and Study Alcove.
- **Lighting Engine**: Switch dynamically between Natural Daylight, Golden Hour Sunset, and Nocturne Ambiance.
- **Material Finishes (`Q`)**: Switch in real-time between European White Oak, Smoked Dark Walnut, Honed Moleanos Limestone, and Textured Travertine.
- **Architectural Hotspots (`E`)**: Inspect architectural annotations on recessed hearths, panoramic glazing bays, fluted oak millwork, and indirect cove shadowlines.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Smooth Scroll**: Lenis + GSAP ScrollTrigger
- **Animations**: Framer Motion + GSAP
- **3D Spatial Graphics**: Three.js (`three` + `@types/three`)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

---

## 🚀 Development & Build

```bash
# Navigate to project directory
cd stillform-inspired-website

# Run local development server
npm run dev
# -> http://localhost:5173/

# Create optimized production build
npm run build
# -> Type-checks with tsc and builds with Vite into /dist (0 errors)
```
