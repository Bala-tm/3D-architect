import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Compass, Sun, Sunset, Moon, Info, X } from "lucide-react";
import { TOUR_HOTSPOTS } from "../data/siteData";
export const VirtualTour = ({ onBack }) => {
	const containerRef = useRef(null);
	const rendererRef = useRef(null);
	const sceneRef = useRef(null);
	const cameraRef = useRef(null);
	const roomGroupRef = useRef(null);
	const hearthLightRef = useRef(null);
	// Tour States
	const [activeVantage, setActiveVantage] = useState("hearth");
	const [lighting, setLighting] = useState("golden");
	const [materialTheme, setMaterialTheme] = useState("signature");
	const [activeHotspot, setActiveHotspot] = useState(null);
	const [showHint, setShowHint] = useState(true);
	// Key tracking & mouse look
	const keysPressed = useRef({});
	const isDragging = useRef(false);
	const prevMouse = useRef({
		x: 0,
		y: 0
	});
	const cameraRot = useRef({
		x: 0,
		y: 0
	});
	useEffect(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;
		const width = container.clientWidth;
		const height = container.clientHeight;
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(15454907);
		sceneRef.current = scene;
		const camera = new THREE.PerspectiveCamera(65, width / height, .1, 150);
		// Initial position: Inside the Sunken Basalt Hearth looking towards the corner glass
		camera.position.set(0, 1.35, -1.8);
		cameraRef.current = camera;
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			powerPreference: "high-performance"
		});
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		container.appendChild(renderer.domElement);
		rendererRef.current = renderer;
		// Architectural Pavilion Group
		const pavilion = new THREE.Group();
		roomGroupRef.current = pavilion;
		scene.add(pavilion);
		// ========================================================
		// 1. LIMESTONE PLINTH & GROUND SLAB
		// ========================================================
		const plinthMat = new THREE.MeshStandardMaterial({
			color: 13419444,
			roughness: .58,
			name: "plinthMat"
		});
		const mainPlinth = new THREE.Mesh(new THREE.PlaneGeometry(32, 32), plinthMat);
		mainPlinth.rotation.x = -Math.PI / 2;
		mainPlinth.receiveShadow = true;
		mainPlinth.name = "floor";
		pavilion.add(mainPlinth);
		// ========================================================
		// 2. SUNKEN BASALT HEARTH
		// ========================================================
		const basaltMat = new THREE.MeshStandardMaterial({
			color: 2236703,
			roughness: .95,
			name: "basaltMat"
		});
		const linenMat = new THREE.MeshStandardMaterial({
			color: 14604492,
			roughness: .92,
			name: "linenMat"
		});
		// Sunken Pit Basin Floor
		const pitFloor = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 4), basaltMat);
		pitFloor.rotation.x = -Math.PI / 2;
		pitFloor.position.set(0, -.44, -1.8);
		pitFloor.receiveShadow = true;
		pavilion.add(pitFloor);
		// Sunken Pit Surrounding Walls
		const pitWallMat = basaltMat;
		const pitBackWall = new THREE.Mesh(new THREE.BoxGeometry(4.8, .45, .15), pitWallMat);
		pitBackWall.position.set(0, -.22, -3.8);
		pavilion.add(pitBackWall);
		const pitFrontWall = new THREE.Mesh(new THREE.BoxGeometry(4.8, .45, .15), pitWallMat);
		pitFrontWall.position.set(0, -.22, .2);
		pavilion.add(pitFrontWall);
		const pitLeftWall = new THREE.Mesh(new THREE.BoxGeometry(.15, .45, 4), pitWallMat);
		pitLeftWall.position.set(-2.4, -.22, -1.8);
		pavilion.add(pitLeftWall);
		const pitRightWall = new THREE.Mesh(new THREE.BoxGeometry(.15, .45, 4), pitWallMat);
		pitRightWall.position.set(2.4, -.22, -1.8);
		pavilion.add(pitRightWall);
		// Built-in L-Shaped Hearth Bench & Linen Seating
		const benchBase = new THREE.Mesh(new THREE.BoxGeometry(3.6, .35, 1.1), basaltMat);
		benchBase.position.set(0, -.26, -3.2);
		benchBase.castShadow = true;
		benchBase.receiveShadow = true;
		pavilion.add(benchBase);
		const benchCushion = new THREE.Mesh(new THREE.BoxGeometry(3.5, .12, 1), linenMat);
		benchCushion.position.set(0, -.02, -3.2);
		benchCushion.castShadow = true;
		pavilion.add(benchCushion);
		// Central Basalt Fire Table & Ember Core
		const fireTable = new THREE.Mesh(new THREE.BoxGeometry(1.8, .28, .8), basaltMat);
		fireTable.position.set(0, -.28, -1.8);
		fireTable.castShadow = true;
		fireTable.name = "fireTable";
		pavilion.add(fireTable);
		const emberMat = new THREE.MeshBasicMaterial({ color: 16737826 });
		const emberCore = new THREE.Mesh(new THREE.BoxGeometry(1.2, .05, .25), emberMat);
		emberCore.position.set(0, -.12, -1.8);
		pavilion.add(emberCore);
		// Dynamic Warm Fireplace Light
		const hearthLight = new THREE.PointLight(16742178, 2.8, 7.5);
		hearthLight.position.set(0, .2, -1.8);
		hearthLight.castShadow = true;
		hearthLight.name = "hearthLight";
		hearthLightRef.current = hearthLight;
		scene.add(hearthLight);
		// Steps into the Sunken Hearth
		const step1 = new THREE.Mesh(new THREE.BoxGeometry(1.4, .22, .4), basaltMat);
		step1.position.set(0, -.33, 0);
		pavilion.add(step1);
		// ========================================================
		// 3. BOARD-MARKED CONCRETE SHEAR WALLS & CHIMNEY
		// ========================================================
		const concreteMat = new THREE.MeshStandardMaterial({
			color: 9407106,
			roughness: .88,
			name: "concreteMat"
		});
		// North Monolithic Shear Wall (Rear Spine)
		const rearShearWall = new THREE.Mesh(new THREE.BoxGeometry(22, 4.8, .5), concreteMat);
		rearShearWall.position.set(0, 2.4, -7.5);
		rearShearWall.receiveShadow = true;
		rearShearWall.name = "concreteWall";
		pavilion.add(rearShearWall);
		// Central Hearth Fireplace Chimney Core (Protrudes Through Roof)
		const chimneyCore = new THREE.Mesh(new THREE.BoxGeometry(2.8, 6.2, 1.4), concreteMat);
		chimneyCore.position.set(0, 3.1, -7);
		chimneyCore.castShadow = true;
		chimneyCore.receiveShadow = true;
		pavilion.add(chimneyCore);
		// ========================================================
		// 4. HINOKI CYPRESS MILLWORK WALL & CREDENZA
		// ========================================================
		const hinokiMat = new THREE.MeshStandardMaterial({
			color: 11044192,
			roughness: .65,
			name: "hinokiMat"
		});
		const millworkWall = new THREE.Mesh(new THREE.BoxGeometry(.35, 4.4, 12), hinokiMat);
		millworkWall.position.set(-8.2, 2.2, -1.5);
		millworkWall.name = "millwork";
		millworkWall.castShadow = true;
		pavilion.add(millworkWall);
		// Floating Ash Credenza / Display Shelf
		const credenza = new THREE.Mesh(new THREE.BoxGeometry(.5, .35, 5.2), hinokiMat);
		credenza.position.set(-7.9, .85, -2.5);
		credenza.castShadow = true;
		pavilion.add(credenza);
		// Curated Minimalist Ceramic Vessel on Credenza
		const vesselMat = new THREE.MeshStandardMaterial({
			color: 15657955,
			roughness: .3
		});
		const vessel = new THREE.Mesh(new THREE.CylinderGeometry(.18, .12, .45, 16), vesselMat);
		vessel.position.set(-7.8, 1.25, -2.5);
		vessel.castShadow = true;
		pavilion.add(vessel);
		// ========================================================
		// 5. SUSPENDED WHITE OAK STAIR & MEZZANINE GALLERY
		// ========================================================
		const oakMat = new THREE.MeshStandardMaterial({
			color: 11900266,
			roughness: .62,
			name: "oakMat"
		});
		const steelRodMat = new THREE.MeshStandardMaterial({
			color: 13948116,
			metalness: .95,
			roughness: .15
		});
		const stairGroup = new THREE.Group();
		stairGroup.name = "stairGroup";
		for (let i = 0; i < 12; i++) {
			// Floating Oak Step
			const step = new THREE.Mesh(new THREE.BoxGeometry(1.6, .12, .42), oakMat);
			step.position.set(5.8 + i * .08, .3 + i * .28, .8 - i * .42);
			step.castShadow = true;
			step.receiveShadow = true;
			stairGroup.add(step);
			// Floor-to-Ceiling Vertical Tension Rod
			const rod = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, 4.5, 8), steelRodMat);
			rod.position.set(6.5 + i * .08, 2.25, .8 - i * .42);
			stairGroup.add(rod);
		}
		// Upper Mezzanine Walkway / Landing
		const mezzanine = new THREE.Mesh(new THREE.BoxGeometry(5.2, .22, 2.4), oakMat);
		mezzanine.position.set(6.2, 3.65, -3.8);
		mezzanine.castShadow = true;
		stairGroup.add(mezzanine);
		pavilion.add(stairGroup);
		// ========================================================
		// 6. SLENDER INBOARD STEEL COLUMNS & DEMATERIALIZED CORNER
		// ========================================================
		const colMat = new THREE.MeshStandardMaterial({
			color: 1710360,
			metalness: .9,
			roughness: .25
		});
		// Inboard columns set back 1.6m from glass lines leaving the corner open
		const columns = [
			[
				-6,
				2.2,
				2.4
			],
			[
				0,
				2.2,
				2.4
			],
			[
				6,
				2.2,
				2.4
			],
			[
				6,
				2.2,
				-2.4
			]
		];
		columns.forEach(([cx, cy, cz]) => {
			const col = new THREE.Mesh(new THREE.BoxGeometry(.14, 4.4, .14), colMat);
			col.position.set(cx, cy, cz);
			col.castShadow = true;
			pavilion.add(col);
		});
		// ========================================================
		// 7. MOTORIZED GLASS BAY (PANORAMIC & FRAMLESS CORNER)
		// ========================================================
		const glassMat = new THREE.MeshPhysicalMaterial({
			color: 15004919,
			transparent: true,
			opacity: .38,
			roughness: .05,
			metalness: .05,
			transmission: .9
		});
		// South Panoramic Glass (Fixed Bays)
		const glassFixedRight = new THREE.Mesh(new THREE.BoxGeometry(6.4, 4.2, .06), glassMat);
		glassFixedRight.position.set(4.4, 2.1, 4);
		pavilion.add(glassFixedRight);
		// East Glass Wall (Meets South Glass at 90° Frameless Corner)
		const glassEast = new THREE.Mesh(new THREE.BoxGeometry(.06, 4.2, 11.5), glassMat);
		glassEast.position.set(7.6, 2.1, -1.75);
		pavilion.add(glassEast);
		// Motorized Zero-Threshold Sliding Glass Panel (Pocketed Open by 3.2m!)
		const pocketDoor = new THREE.Mesh(new THREE.BoxGeometry(3.4, 4.15, .06), glassMat);
		pocketDoor.position.set(-4.8, 2.08, 3.88);
		pavilion.add(pocketDoor);
		// Flush Floor Sub-Drain Track at Threshold
		const trackMat = new THREE.MeshStandardMaterial({
			color: 3355443,
			metalness: .8
		});
		const floorTrack = new THREE.Mesh(new THREE.BoxGeometry(15.5, .02, .16), trackMat);
		floorTrack.position.set(0, .01, 4);
		pavilion.add(floorTrack);
		// ========================================================
		// 8. 4.1M CANTILEVERED ZINC CANOPY & CEDAR SOFFIT CEILING
		// ========================================================
		const cedarSoffitMat = new THREE.MeshStandardMaterial({
			color: 10188626,
			roughness: .72,
			name: "cedarSoffitMat"
		});
		// Ceiling extends 4.1m past the glass line (from z = -7.5 to z = 8.2!)
		const cedarSoffit = new THREE.Mesh(new THREE.BoxGeometry(18.5, .12, 16.5), cedarSoffitMat);
		cedarSoffit.position.set(0, 4.35, .4);
		cedarSoffit.receiveShadow = true;
		cedarSoffit.name = "ceiling";
		pavilion.add(cedarSoffit);
		// Pre-patinated standing seam zinc top fascia
		const zincRoofMat = new THREE.MeshStandardMaterial({
			color: 2566702,
			metalness: .7,
			roughness: .4
		});
		const roofCap = new THREE.Mesh(new THREE.BoxGeometry(18.8, .25, 16.8), zincRoofMat);
		roofCap.position.set(0, 4.54, .4);
		pavilion.add(roofCap);
		// ========================================================
		// 9. OUTDOOR REFLECTING WATER COURT & COASTAL PINES
		// ========================================================
		const waterMat = new THREE.MeshStandardMaterial({
			color: 1784906,
			roughness: .08,
			metalness: .85,
			transparent: true,
			opacity: .9
		});
		// Water Pool Basin
		const waterPool = new THREE.Mesh(new THREE.BoxGeometry(9.5, .15, 6.5), waterMat);
		waterPool.position.set(-2.5, .06, 7.8);
		waterPool.name = "waterPool";
		pavilion.add(waterPool);
		// Stepping Stones across the Water Court
		for (let s = 0; s < 4; s++) {
			const stone = new THREE.Mesh(new THREE.BoxGeometry(.9, .18, .9), plinthMat);
			stone.position.set(3.2, .08, 5.5 + s * 1.4);
			stone.castShadow = true;
			pavilion.add(stone);
		}
		// Stylized Coastal Japanese Black Pines in Courtyard
		const pineTrunkMat = new THREE.MeshStandardMaterial({
			color: 2826777,
			roughness: .9
		});
		const pineFoliageMat = new THREE.MeshStandardMaterial({
			color: 2505259,
			roughness: .8
		});
		const createPine = (x, z, scale = 1) => {
			const tree = new THREE.Group();
			// Trunk with slight natural slant
			const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.12 * scale, .18 * scale, 3.8 * scale, 8), pineTrunkMat);
			trunk.position.set(0, 3.8 * scale / 2, 0);
			trunk.rotation.z = -.08;
			trunk.castShadow = true;
			tree.add(trunk);
			// Tiered Cloud Foliage Clusters
			const tier1 = new THREE.Mesh(new THREE.CylinderGeometry(.4 * scale, 1.2 * scale, .6 * scale, 7), pineFoliageMat);
			tier1.position.set(.1, 2.4 * scale, 0);
			tree.add(tier1);
			const tier2 = new THREE.Mesh(new THREE.CylinderGeometry(.3 * scale, 1 * scale, .5 * scale, 7), pineFoliageMat);
			tier2.position.set(-.2, 3.2 * scale, .1);
			tree.add(tier2);
			const tier3 = new THREE.Mesh(new THREE.CylinderGeometry(.1 * scale, .7 * scale, .5 * scale, 7), pineFoliageMat);
			tier3.position.set(0, 3.8 * scale, -.1);
			tree.add(tier3);
			tree.position.set(x, 0, z);
			pavilion.add(tree);
		};
		createPine(-6.5, 9.5, 1.2);
		createPine(4.8, 11.2, 1);
		createPine(-8.2, 6.2, .85);
		// Low Garden Retaining Wall Framing Coastal Horizon
		const gardenWall = new THREE.Mesh(new THREE.BoxGeometry(26, 1.1, .4), concreteMat);
		gardenWall.position.set(0, .55, 12.5);
		gardenWall.receiveShadow = true;
		pavilion.add(gardenWall);
		// ========================================================
		// 10. LIGHTING ENVIRONMENT
		// ========================================================
		const ambLight = new THREE.AmbientLight(16768964, 1.3);
		ambLight.name = "ambLight";
		scene.add(ambLight);
		const sunLight = new THREE.DirectionalLight(16755294, 2.8);
		sunLight.position.set(8, 6, 6);
		sunLight.castShadow = true;
		sunLight.shadow.mapSize.width = 2048;
		sunLight.shadow.mapSize.height = 2048;
		sunLight.name = "sunLight";
		scene.add(sunLight);
		// Cove Shadowline Linear Ambient Glow under Roof
		const coveLight = new THREE.PointLight(16750916, 2, 14);
		coveLight.position.set(0, 4.1, 0);
		coveLight.name = "coveLight";
		scene.add(coveLight);
		// Animation Loop with WASD Walking & Fireplace Flame Flicker
		let animId;
		let clock = 0;
		const animate = () => {
			animId = requestAnimationFrame(animate);
			clock += .03;
			// Subtle atmospheric flicker on the sunken hearth flame
			if (hearthLightRef.current) {
				hearthLightRef.current.intensity = 2.6 + Math.sin(clock * 6) * .25 + Math.cos(clock * 11) * .15;
			}
			// WASD First-Person Walking Movement
			const moveSpeed = .058;
			const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraRot.current.y);
			const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraRot.current.y);
			if (keysPressed.current["w"] || keysPressed.current["arrowup"]) {
				camera.position.addScaledVector(forward, moveSpeed);
			}
			if (keysPressed.current["s"] || keysPressed.current["arrowdown"]) {
				camera.position.addScaledVector(forward, -moveSpeed);
			}
			if (keysPressed.current["a"] || keysPressed.current["arrowleft"]) {
				camera.position.addScaledVector(right, -moveSpeed);
			}
			if (keysPressed.current["d"] || keysPressed.current["arrowright"]) {
				camera.position.addScaledVector(right, moveSpeed);
			}
			// Constrain inside Kamakura Pavilion bounds (indoors + water terrace)
			camera.position.x = Math.max(-7.2, Math.min(6.8, camera.position.x));
			camera.position.z = Math.max(-6.5, Math.min(9.5, camera.position.z));
			// Natural eye level adjustment: Lower eye level when standing inside the Sunken Hearth
			const inPit = camera.position.x > -2.2 && camera.position.x < 2.2 && camera.position.z > -3.6 && camera.position.z < 0;
			const targetY = inPit ? 1.35 : camera.position.y > 2.8 ? 3.4 : 1.6;
			camera.position.y += (targetY - camera.position.y) * .08;
			renderer.render(scene, camera);
		};
		animate();
		// Mouse drag orbit / look around
		const onMouseDown = (e) => {
			isDragging.current = true;
			prevMouse.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		const onMouseMove = (e) => {
			if (!isDragging.current || !camera) return;
			const deltaX = e.clientX - prevMouse.current.x;
			const deltaY = e.clientY - prevMouse.current.y;
			cameraRot.current.y -= deltaX * .0035;
			cameraRot.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, cameraRot.current.x - deltaY * .0035));
			camera.rotation.order = "YXZ";
			camera.rotation.y = cameraRot.current.y;
			camera.rotation.x = cameraRot.current.x;
			prevMouse.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		const onMouseUp = () => {
			isDragging.current = false;
		};
		const onKeyDown = (e) => {
			const key = e.key.toLowerCase();
			keysPressed.current[key] = true;
			if (key === "e") {
				setActiveHotspot(TOUR_HOTSPOTS[0]);
			}
			if (key === "q") {
				setMaterialTheme((prev) => prev === "signature" ? "yakisugi" : prev === "yakisugi" ? "hinoki" : prev === "hinoki" ? "travertine" : "signature");
			}
		};
		const onKeyUp = (e) => {
			keysPressed.current[e.key.toLowerCase()] = false;
		};
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		container.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		// Touch Support for Mobile
		const onTouchStart = (e) => {
			if (e.touches.length === 1) {
				isDragging.current = true;
				prevMouse.current = {
					x: e.touches[0].clientX,
					y: e.touches[0].clientY
				};
			}
		};
		const onTouchMove = (e) => {
			if (!isDragging.current || !camera || e.touches.length !== 1) return;
			const deltaX = e.touches[0].clientX - prevMouse.current.x;
			const deltaY = e.touches[0].clientY - prevMouse.current.y;
			cameraRot.current.y -= deltaX * .004;
			cameraRot.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, cameraRot.current.x - deltaY * .004));
			camera.rotation.order = "YXZ";
			camera.rotation.y = cameraRot.current.y;
			camera.rotation.x = cameraRot.current.x;
			prevMouse.current = {
				x: e.touches[0].clientX,
				y: e.touches[0].clientY
			};
		};
		container.addEventListener("touchstart", onTouchStart, { passive: true });
		window.addEventListener("touchmove", onTouchMove);
		window.addEventListener("touchend", onMouseUp);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
			container.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			container.removeEventListener("touchstart", onTouchStart);
			window.removeEventListener("touchmove", onTouchMove);
			window.removeEventListener("touchend", onMouseUp);
			cancelAnimationFrame(animId);
			renderer.dispose();
			if (container.contains(renderer.domElement)) {
				container.removeChild(renderer.domElement);
			}
		};
	}, []);
	// Update Dynamic Lighting
	useEffect(() => {
		if (!sceneRef.current) return;
		const scene = sceneRef.current;
		const amb = scene.getObjectByName("ambLight");
		const sun = scene.getObjectByName("sunLight");
		const cove = scene.getObjectByName("coveLight");
		if (!amb || !sun || !cove) return;
		if (lighting === "daylight") {
			scene.background = new THREE.Color(14477294);
			amb.color.setHex(16514043);
			amb.intensity = 1.7;
			sun.color.setHex(16777215);
			sun.intensity = 3.4;
			sun.position.set(6, 10, 6);
			cove.intensity = .4;
		} else if (lighting === "golden") {
			scene.background = new THREE.Color(15454907);
			amb.color.setHex(16768964);
			amb.intensity = 1.3;
			sun.color.setHex(16755294);
			sun.intensity = 2.8;
			sun.position.set(8, 5, 4);
			cove.color.setHex(16750916);
			cove.intensity = 1.9;
		} else {
			// Nocturne
			scene.background = new THREE.Color(790036);
			amb.color.setHex(1580587);
			amb.intensity = .45;
			sun.intensity = .1;
			cove.color.setHex(16756326);
			cove.intensity = 2.6;
		}
	}, [lighting]);
	// Update Material Themes dynamically (Kamakura Pavilion specification)
	useEffect(() => {
		if (!roomGroupRef.current) return;
		const room = roomGroupRef.current;
		const floor = room.getObjectByName("floor");
		const millwork = room.getObjectByName("millwork");
		const ceiling = room.getObjectByName("ceiling");
		const concrete = room.getObjectByName("concreteWall");
		if (floor && floor.material instanceof THREE.MeshStandardMaterial) {
			if (materialTheme === "signature") floor.material.color.setHex(13419444);
			if (materialTheme === "yakisugi") floor.material.color.setHex(3486254);
			if (materialTheme === "hinoki") floor.material.color.setHex(14208700);
			if (materialTheme === "travertine") floor.material.color.setHex(11445656);
		}
		if (millwork && millwork.material instanceof THREE.MeshStandardMaterial) {
			if (materialTheme === "signature") millwork.material.color.setHex(11044192);
			if (materialTheme === "yakisugi") millwork.material.color.setHex(2630946);
			if (materialTheme === "hinoki") millwork.material.color.setHex(12557423);
			if (materialTheme === "travertine") millwork.material.color.setHex(5654328);
		}
		if (ceiling && ceiling.material instanceof THREE.MeshStandardMaterial) {
			if (materialTheme === "signature") ceiling.material.color.setHex(10188626);
			if (materialTheme === "yakisugi") ceiling.material.color.setHex(2894118);
			if (materialTheme === "hinoki") ceiling.material.color.setHex(11439464);
			if (materialTheme === "travertine") ceiling.material.color.setHex(4734259);
		}
		if (concrete && concrete.material instanceof THREE.MeshStandardMaterial) {
			if (materialTheme === "signature") concrete.material.color.setHex(9407106);
			if (materialTheme === "yakisugi") concrete.material.color.setHex(5394251);
			if (materialTheme === "hinoki") concrete.material.color.setHex(9867399);
			if (materialTheme === "travertine") concrete.material.color.setHex(7762025);
		}
	}, [materialTheme]);
	// Teleport to signature vantage points of The Kamakura Pavilion
	const handleTeleport = (vantage) => {
		setActiveVantage(vantage);
		if (!cameraRef.current) return;
		const camera = cameraRef.current;
		if (vantage === "hearth") {
			// Inside the Sunken Basalt Hearth looking across the fire pit at the open glass corner
			camera.position.set(0, 1.35, -1.8);
			cameraRot.current = {
				x: .05,
				y: 0
			};
		} else if (vantage === "terrace") {
			// Outside on the limestone terrace plinth right beside the reflecting water court under the 4.1m canopy
			camera.position.set(-2.8, 1.6, 5.2);
			cameraRot.current = {
				x: .08,
				y: Math.PI - .25
			};
		} else {
			// High on the suspended oak mezzanine gallery overlooking the Great Room and outdoor pines
			camera.position.set(4.8, 3.4, -2.6);
			cameraRot.current = {
				x: -.22,
				y: -Math.PI / 4
			};
		}
		camera.rotation.order = "YXZ";
		camera.rotation.y = cameraRot.current.y;
		camera.rotation.x = cameraRot.current.x;
	};
	return <div className="fixed inset-0 z-[250] bg-[#1F1E1B] text-[#F6F4EE] overflow-hidden select-none">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" title="Click and drag to look around. WASD keys to walk." />

      {/* Reticle Cursor */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full mix-blend-difference opacity-80" />
      </div>

      {/* Top Controls Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-center justify-between pointer-events-none z-30">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="pointer-events-auto group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md hover:bg-[#F6F4EE] hover:text-[#1F1E1B] text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Exit Tour</span>
          </button>

          {/* Residence Badge */}
          <div className="hidden lg:flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#3FA85B] inline-block" />
            <span>The Kamakura Pavilion &middot; 480 m²</span>
          </div>
        </div>

        {/* Vantage Point Switcher (The Kamakura Pavilion) */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/20">
          <button onClick={() => handleTeleport("hearth")} className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer ${activeVantage === "hearth" ? "bg-[#F6F4EE] text-[#1F1E1B] font-semibold" : "text-white/70 hover:text-white"}`}>
            Sunken Hearth
          </button>
          <button onClick={() => handleTeleport("terrace")} className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer ${activeVantage === "terrace" ? "bg-[#F6F4EE] text-[#1F1E1B] font-semibold" : "text-white/70 hover:text-white"}`}>
            Water Terrace
          </button>
          <button onClick={() => handleTeleport("gallery")} className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer ${activeVantage === "gallery" ? "bg-[#F6F4EE] text-[#1F1E1B] font-semibold" : "text-white/70 hover:text-white"}`}>
            Upper Gallery
          </button>
        </div>

        {/* Lighting Selector */}
        <div className="pointer-events-auto hidden sm:flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
          <button onClick={() => setLighting("daylight")} title="Natural Daylight" className={`p-2 rounded-full transition-colors cursor-pointer ${lighting === "daylight" ? "bg-[#F6F4EE] text-[#1F1E1B]" : "text-white/70 hover:text-white"}`}>
            <Sun className="w-4 h-4" />
          </button>
          <button onClick={() => setLighting("golden")} title="Golden Hour Sunset" className={`p-2 rounded-full transition-colors cursor-pointer ${lighting === "golden" ? "bg-[#F6F4EE] text-[#1F1E1B]" : "text-white/70 hover:text-white"}`}>
            <Sunset className="w-4 h-4" />
          </button>
          <button onClick={() => setLighting("nocturne")} title="Nocturne Night Ambiance" className={`p-2 rounded-full transition-colors cursor-pointer ${lighting === "nocturne" ? "bg-[#F6F4EE] text-[#1F1E1B]" : "text-white/70 hover:text-white"}`}>
            <Moon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Material Palette Controls (Right Side) */}
      <div className="absolute right-6 top-24 z-30 pointer-events-auto flex flex-col gap-2 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/20">
        <span className="text-[9px] uppercase tracking-wider text-center text-white/50 py-1">
          Material
        </span>
        {[
          { id: 'signature', label: 'Limestone' },
          { id: 'yakisugi', label: 'Charred Cedar' },
          { id: 'hinoki', label: 'Cypress' },
          { id: 'travertine', label: 'Travertine' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setMaterialTheme(item.id)}
            className={`px-3 py-1.5 rounded-xl text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
              materialTheme === item.id
                ? "bg-[#F6F4EE] text-[#1F1E1B] font-semibold shadow-md"
                : "text-white/70 hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Bottom Walking Controls Legend */}
      <AnimatePresence>
        {showHint && <motion.div initial={{
		opacity: 0,
		y: 20
	}} animate={{
		opacity: 1,
		y: 0
	}} exit={{
		opacity: 0,
		y: 20
	}} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-black/75 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-5 text-[11px] uppercase tracking-widest text-white/90 shadow-2xl">
            <div className="flex items-center gap-1.5 font-mono">
              <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 text-[10px]">W</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 text-[10px]">A</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 text-[10px]">S</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 text-[10px]">D</kbd>
              <span className="font-sans ml-1 text-white/70">Walk</span>
            </div>
            <span className="opacity-30">&bull;</span>
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-200" />
              <span>Drag to Look</span>
            </div>
            <span className="opacity-30">&bull;</span>
            <button onClick={() => setActiveHotspot(TOUR_HOTSPOTS[0])} className="hover:underline flex items-center gap-1 cursor-pointer">
              <Info className="w-3.5 h-3.5 text-[#3FA85B]" />
              <span>Inspect Details</span>
            </button>
            <button onClick={() => setShowHint(false)} className="text-white/40 hover:text-white ml-2 text-xs" title="Dismiss">
              &times;
            </button>
          </motion.div>}
      </AnimatePresence>

      {/* Hotspot Inspection Modal */}
      <AnimatePresence>
        {activeHotspot && <motion.div initial={{
		opacity: 0,
		scale: .95
	}} animate={{
		opacity: 1,
		scale: 1
	}} exit={{
		opacity: 0,
		scale: .95
	}} className="absolute bottom-20 left-8 z-40 max-w-sm bg-[#F6F4EE] text-[#1F1E1B] rounded-2xl p-5 shadow-2xl border border-[#1F1E1B]/15">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E8C76] font-semibold">
                {activeHotspot.category} &middot; The Kamakura Pavilion
              </span>
              <button onClick={() => setActiveHotspot(null)} className="text-[#1F1E1B]/60 hover:text-[#1F1E1B] p-1 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <h4 className="font-serif text-2xl font-medium mb-1 text-[#1F1E1B]">{activeHotspot.title}</h4>
            <p className="text-xs text-[#4A433A] leading-relaxed mb-4">
              {activeHotspot.description}
            </p>
            <div className="flex items-center justify-between text-[11px] pt-3 border-t border-[#1F1E1B]/10 text-[#9E8C76]">
              <span>Verified Atelier Detail</span>
              <button onClick={() => {
		const nextIdx = (TOUR_HOTSPOTS.findIndex((h) => h.id === activeHotspot.id) + 1) % TOUR_HOTSPOTS.length;
		setActiveHotspot(TOUR_HOTSPOTS[nextIdx]);
	}} className="font-medium underline hover:text-[#1F1E1B] cursor-pointer text-[#1F1E1B]">
                Next Spot &rarr;
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
