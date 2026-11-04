import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw, Box, Layers } from "lucide-react";
import { STRUCTURE_LAYERS } from "../data/siteData";
export const StructureExplorer = () => {
	const [activeLayerIdx, setActiveLayerIdx] = useState(0);
	const [viewMode, setViewMode] = useState("3d");
	const containerRef = useRef(null);
	const rendererRef = useRef(null);
	const sceneRef = useRef(null);
	const cameraRef = useRef(null);
	const meshGroupRef = useRef(null);
	const isDraggingRef = useRef(false);
	const prevMouseRef = useRef({
		x: 0,
		y: 0
	});
	const currentLayer = STRUCTURE_LAYERS[activeLayerIdx];
	useEffect(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;
		const width = container.clientWidth;
		const height = container.clientHeight;
		const scene = new THREE.Scene();
		sceneRef.current = scene;
		const camera = new THREE.PerspectiveCamera(40, width / height, .1, 1e3);
		camera.position.set(11, 8, 14);
		camera.lookAt(0, 1.5, 0);
		cameraRef.current = camera;
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.shadowMap.enabled = true;
		container.appendChild(renderer.domElement);
		rendererRef.current = renderer;
		const ambLight = new THREE.AmbientLight(16774890, 1.3);
		scene.add(ambLight);
		const dirLight = new THREE.DirectionalLight(16777215, 2.2);
		dirLight.position.set(12, 18, 10);
		dirLight.castShadow = true;
		scene.add(dirLight);
		const blueRim = new THREE.DirectionalLight(5271696, 1);
		blueRim.position.set(-10, -5, -10);
		scene.add(blueRim);
		const group = new THREE.Group();
		meshGroupRef.current = group;
		scene.add(group);
		// Materials based on The Kamakura Pavilion specification
		const concreteMat = new THREE.MeshStandardMaterial({
			color: 9078142,
			roughness: .88
		});
		const limestoneMat = new THREE.MeshStandardMaterial({
			color: 13419444,
			roughness: .55
		});
		const basaltMat = new THREE.MeshStandardMaterial({
			color: 2499875,
			roughness: .92
		});
		const zincRoofMat = new THREE.MeshStandardMaterial({
			color: 3027510,
			roughness: .45,
			metalness: .65
		});
		const cedarSoffitMat = new THREE.MeshStandardMaterial({
			color: 9859918,
			roughness: .7
		});
		const columnMat = new THREE.MeshStandardMaterial({
			color: 1710360,
			roughness: .3,
			metalness: .85
		});
		const oakMat = new THREE.MeshStandardMaterial({
			color: 10913370,
			roughness: .65
		});
		const rodMat = new THREE.MeshStandardMaterial({
			color: 14079702,
			roughness: .2,
			metalness: .95
		});
		const glassMat = new THREE.MeshPhysicalMaterial({
			color: 14676471,
			transparent: true,
			opacity: .42,
			roughness: .08,
			metalness: .1,
			transmission: .88
		});
		const waterMat = new THREE.MeshStandardMaterial({
			color: 2375244,
			roughness: .12,
			metalness: .75,
			transparent: true,
			opacity: .85
		});
		// ==========================================
		// LAYER 03: STONE PLINTH PLATES & WATER COURT
		// ==========================================
		const plinthGroup = new THREE.Group();
		plinthGroup.name = "layer-03";
		// Main Honed Limestone Foundation Slab
		const mainPlinth = new THREE.Mesh(new THREE.BoxGeometry(14, .4, 9.6), limestoneMat);
		mainPlinth.position.set(0, 0, 0);
		mainPlinth.receiveShadow = true;
		plinthGroup.add(mainPlinth);
		// Sunken Basalt Hearth Pit (Recessed Step-Down)
		const hearthPit = new THREE.Mesh(new THREE.BoxGeometry(3.6, .25, 2.6), basaltMat);
		hearthPit.position.set(-.5, .12, -.6);
		plinthGroup.add(hearthPit);
		// Outdoor Reflecting Water Pool Basin
		const poolBasin = new THREE.Mesh(new THREE.BoxGeometry(6.4, .16, 4.4), waterMat);
		poolBasin.position.set(-2.8, .22, 3.8);
		plinthGroup.add(poolBasin);
		// Architectural Ground Grid
		const grid = new THREE.GridHelper(20, 20, 2039323, 13156789);
		grid.position.y = -.22;
		plinthGroup.add(grid);
		group.add(plinthGroup);
		// ==========================================
		// LAYER 02: BOARD-MARKED CONCRETE SHEAR CORES
		// ==========================================
		const concreteGroup = new THREE.Group();
		concreteGroup.name = "layer-02";
		// North Monolithic Retaining Shear Wall
		const northShear = new THREE.Mesh(new THREE.BoxGeometry(.5, 3.6, 7.8), concreteMat);
		northShear.position.set(-5.6, 1.8, 0);
		northShear.castShadow = true;
		concreteGroup.add(northShear);
		// Central Hearth Fireplace & Chimney Core (Protrudes Through Roof)
		const chimneyCore = new THREE.Mesh(new THREE.BoxGeometry(2.4, 4.8, 1.8), concreteMat);
		chimneyCore.position.set(-.5, 2.4, -3.2);
		chimneyCore.castShadow = true;
		concreteGroup.add(chimneyCore);
		// Lateral Shear Support Wall
		const lateralWall = new THREE.Mesh(new THREE.BoxGeometry(4.8, 3.6, .5), concreteMat);
		lateralWall.position.set(3.6, 1.8, -3.8);
		lateralWall.castShadow = true;
		concreteGroup.add(lateralWall);
		group.add(concreteGroup);
		// ==========================================
		// LAYER 05: SLENDER STEEL COLUMNS (INBOARD)
		// ==========================================
		const columnGroup = new THREE.Group();
		columnGroup.name = "layer-05";
		// Columns placed inboard by 1.4m to leave the corner open & dematerialized
		const columnPositions = [
			[
				-5,
				1.8,
				3.2
			],
			[
				-1.2,
				1.8,
				3.2
			],
			[
				2.8,
				1.8,
				3.2
			],
			[
				5.4,
				1.8,
				1.4
			],
			[
				5.4,
				1.8,
				-2.4
			]
		];
		columnPositions.forEach(([x, y, z]) => {
			const col = new THREE.Mesh(new THREE.BoxGeometry(.14, 3.6, .14), columnMat);
			col.position.set(x, y, z);
			col.castShadow = true;
			columnGroup.add(col);
		});
		group.add(columnGroup);
		// ==========================================
		// LAYER 06: SUSPENDED WHITE OAK STAIR
		// ==========================================
		const stairGroup = new THREE.Group();
		stairGroup.name = "layer-06";
		for (let i = 0; i < 11; i++) {
			// Solid Oak Cantilevered Tread
			const tread = new THREE.Mesh(new THREE.BoxGeometry(1.5, .1, .38), oakMat);
			tread.position.set(3.2 + i * .12, .28 + i * .32, 1.2 - i * .38);
			tread.castShadow = true;
			stairGroup.add(tread);
			// Tensioned Steel Rod
			const rod = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, 3.6, 8), rodMat);
			rod.position.set(3.8 + i * .12, 1.8, 1.2 - i * .38);
			stairGroup.add(rod);
		}
		// Upper Gallery Mezzanine Bridge
		const mezzanine = new THREE.Mesh(new THREE.BoxGeometry(4.8, .2, 1.6), oakMat);
		mezzanine.position.set(4.5, 3.4, -1.8);
		stairGroup.add(mezzanine);
		group.add(stairGroup);
		// ==========================================
		// LAYER 07: MOTORIZED GLASS BAY (CORNER)
		// ==========================================
		const glassGroup = new THREE.Group();
		glassGroup.name = "layer-07";
		// South Panoramic Glass Facade
		const southGlass = new THREE.Mesh(new THREE.BoxGeometry(11.2, 3.4, .08), glassMat);
		southGlass.position.set(.6, 1.7, 3.6);
		glassGroup.add(southGlass);
		// East Glass Wall (Meets South Glass at 90° Frameless Corner)
		const eastGlass = new THREE.Mesh(new THREE.BoxGeometry(.08, 3.4, 7.2), glassMat);
		eastGlass.position.set(6.2, 1.7, 0);
		glassGroup.add(eastGlass);
		// Pocketed Sliding Door (Partially Slid Open to Water Terrace)
		const openPocketDoor = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.3, .06), glassMat);
		openPocketDoor.position.set(-3.2, 1.65, 3.52);
		glassGroup.add(openPocketDoor);
		group.add(glassGroup);
		// ==========================================
		// LAYER 04: FLOATING ZINC CANOPY (4.1M EAVES)
		// ==========================================
		const roofGroup = new THREE.Group();
		roofGroup.name = "layer-04";
		// Main Overhanging Pre-Patinated Zinc Roof
		const mainRoof = new THREE.Mesh(new THREE.BoxGeometry(16.4, .25, 11.8), zincRoofMat);
		mainRoof.position.set(.4, 3.75, .8);
		mainRoof.castShadow = true;
		roofGroup.add(mainRoof);
		// Cedar Timber Soffit (Underside of the 4.1m Cantilever)
		const cedarSoffit = new THREE.Mesh(new THREE.BoxGeometry(16, .06, 11.4), cedarSoffitMat);
		cedarSoffit.position.set(.4, 3.6, .8);
		roofGroup.add(cedarSoffit);
		// Upper Tier Cantilevered Volume Roof
		const upperRoof = new THREE.Mesh(new THREE.BoxGeometry(7.2, .22, 5.4), zincRoofMat);
		upperRoof.position.set(3.2, 4.4, -1.6);
		roofGroup.add(upperRoof);
		group.add(roofGroup);
		let animId;
		const animate = () => {
			animId = requestAnimationFrame(animate);
			if (group && !isDraggingRef.current) {
				group.rotation.y += .0025;
			}
			renderer.render(scene, camera);
		};
		animate();
		const onMouseDown = (e) => {
			isDraggingRef.current = true;
			prevMouseRef.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		const onMouseMove = (e) => {
			if (!isDraggingRef.current || !group) return;
			const deltaX = e.clientX - prevMouseRef.current.x;
			const deltaY = e.clientY - prevMouseRef.current.y;
			group.rotation.y += deltaX * .006;
			group.rotation.x = Math.max(-.4, Math.min(.5, group.rotation.x + deltaY * .004));
			prevMouseRef.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		const onMouseUp = () => {
			isDraggingRef.current = false;
		};
		const handleResize = () => {
			if (!container || !renderer || !camera) return;
			const w = container.clientWidth;
			const h = container.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};
		window.addEventListener("resize", handleResize);
		container.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		return () => {
			window.removeEventListener("resize", handleResize);
			container.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			cancelAnimationFrame(animId);
			renderer.dispose();
			if (container.contains(renderer.domElement)) {
				container.removeChild(renderer.domElement);
			}
		};
	}, []);
	useEffect(() => {
		if (!meshGroupRef.current) return;
		const group = meshGroupRef.current;
		const targetLayerId = STRUCTURE_LAYERS[activeLayerIdx].id;
		group.children.forEach((layerObj) => {
			if (targetLayerId === "layer-01") {
				layerObj.visible = true;
			} else {
				// Show target layer, plus plinth (layer-03) for architectural context
				if (layerObj.name === targetLayerId || layerObj.name === "layer-03") {
					layerObj.visible = true;
				} else {
					layerObj.visible = false;
				}
			}
		});
	}, [activeLayerIdx]);
	const handleNext = () => {
		setActiveLayerIdx((prev) => (prev + 1) % STRUCTURE_LAYERS.length);
	};
	const handlePrev = () => {
		setActiveLayerIdx((prev) => (prev - 1 + STRUCTURE_LAYERS.length) % STRUCTURE_LAYERS.length);
	};
	return <section id="structure-explorer" className="relative z-20 bg-[#ECE7DE] text-[#1F1E1B] py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1F1E1B]/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#1F1E1B]/40" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E8C76] font-medium">
                06 / Tectonic Decomposition
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1E1B] tracking-tight">
              Anatomy of the Pavilion
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setViewMode("3d")} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer ${viewMode === "3d" ? "bg-[#1F1E1B] text-[#F6F4EE]" : "bg-[#F6F4EE] text-[#4A433A] hover:bg-white"}`}>
              <Box className="w-3.5 h-3.5" />
              <span>Interactive 3D</span>
            </button>
            <button onClick={() => setViewMode("photo")} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer ${viewMode === "photo" ? "bg-[#1F1E1B] text-[#F6F4EE]" : "bg-[#F6F4EE] text-[#4A433A] hover:bg-white"}`}>
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Monograph</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#141311] text-white shadow-2xl min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {viewMode === "3d" ? <div ref={containerRef} className="absolute inset-0 cursor-grab active:cursor-grabbing z-10" title="Click and drag to rotate the 3D structure" /> : <AnimatePresence mode="wait">
              <motion.div key={currentLayer.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .6 }} className="absolute inset-0 z-10">
                <img src={currentLayer.image} alt={currentLayer.title} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
              </motion.div>
            </AnimatePresence>}

          <div className="relative z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-white/90">
              <RotateCcw className="w-3 h-3 text-amber-200" />
              <span>{viewMode === "3d" ? "Drag to Orbit 3D Assembly" : "Monograph Detail"}</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <span className="font-bold text-white">{currentLayer.index}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/60">07</span>
            </div>
          </div>

          <div className="relative z-20 pt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-auto">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 block mb-1">
                {currentLayer.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                {currentLayer.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                {currentLayer.description}
              </p>

              <div className="mt-4 pt-4 border-t border-white/15 flex flex-wrap gap-4 text-[11px] text-white/70">
                <div>
                  <strong className="text-white font-medium">Material:</strong> {currentLayer.material}
                </div>
                <div>
                  <strong className="text-white font-medium">Dimension:</strong> {currentLayer.dimensions}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button type="button" onClick={handlePrev} aria-label="Previous structure layer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F4EE] text-[#1F1E1B] hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-lg">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button type="button" onClick={handleNext} aria-label="Next structure layer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F4EE] text-[#1F1E1B] hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-lg">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {STRUCTURE_LAYERS.map((layer, idx) => <button key={layer.id} onClick={() => setActiveLayerIdx(idx)} className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer ${activeLayerIdx === idx ? "bg-[#1F1E1B] text-[#F6F4EE]" : "bg-[#F6F4EE] text-[#4A433A] hover:bg-white"}`}>
              {layer.index} {layer.title}
            </button>)}
        </div>
      </div>
    </section>;
};
