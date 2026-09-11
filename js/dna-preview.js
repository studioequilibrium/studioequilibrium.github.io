/**
 * STUDIO EQUILIBRIUM — THE SPATIAL DNA DISCOVERY
 * 14-Chapter Interactive Architectural Engine & Dossier Generator
 * Standalone & Isolated Sandbox Engine (js/dna-preview.js)
 */

(function () {
    'use strict';

    // 14 Architectural Awareness Chapters Matrix
    const DNA_CHAPTERS = [
        // PHASE I: CONTEXT & CLIMATE
        {
            id: 1,
            phaseNumber: "I",
            phaseName: "Context & Climate",
            title: "Typology & Scale",
            question: "How do you envision the physical footprint and site relationship of your sanctuary?",
            tip: "Sprawling footprints increase roof heat-gain and site coverage, whereas vertical stacking concentrates services, frees precious landscape, and enables dramatic cross-level volumetric sightlines.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Grounded Horizontal Pavilion",
                desc: "Low-slung, expansive single-to-two-level massing with direct earth-connection, permeable garden verandas, and sheltered courtyards.",
                perks: ["Earth Connection", "Perimeter Permeability", "Single-Level Flow"],
                metricDeltas: { thermal: 10, volume: -5, light: 10 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="55" width="170" height="30" rx="3" stroke-dasharray="4 2"/><rect x="30" y="45" width="55" height="40" rx="2" fill="currentColor" fill-opacity="0.08"/><rect x="115" y="45" width="55" height="40" rx="2" fill="currentColor" fill-opacity="0.08"/><line x1="85" y1="65" x2="115" y2="65" stroke-dasharray="2 2"/><circle cx="100" cy="55" r="8" stroke="currentColor" stroke-dasharray="1 1"/><line x1="10" y1="85" x2="190" y2="85" stroke-width="2.5"/><text x="100" y="78" font-size="8" text-anchor="middle" fill="currentColor" font-family="sans-serif">COURTYARD</text></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Compact Vertical Villa",
                desc: "Multi-tiered sculptural vertical envelope that minimizes ground footprint, maximizes garden setbacks, and cascades into private sky terraces.",
                perks: ["Preserved Green Area", "Cascading Sky Terraces", "Acoustic Vertical Zoning"],
                metricDeltas: { thermal: -5, volume: 15, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="65" y="15" width="70" height="70" rx="3" fill="currentColor" fill-opacity="0.08"/><line x1="65" y1="40" x2="135" y2="40"/><line x1="65" y1="62" x2="135" y2="62"/><rect x="100" y="20" width="30" height="15" rx="1" fill="currentColor" fill-opacity="0.2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/><path d="M145 75 Q160 55 170 85" stroke-dasharray="2 2"/><path d="M30 80 Q40 60 55 85" stroke-dasharray="2 2"/></svg>`
            }
        },
        {
            id: 2,
            phaseNumber: "I",
            phaseName: "Context & Climate",
            title: "Thermal Envelope & Microclimate",
            question: "What is your philosophy on insulating against solar radiation and heat transfer?",
            tip: "In tropical and composite climates, deep passive eaves eliminate up to 75% of solar radiation before it strikes the glass, drastically slashing mechanical cooling loads.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Heavy Thermal Mass & Deep Eaves",
                desc: "Thick insulated masonry, cavity aerated blockwork, and 2-meter cantilevered architectural overhangs that shield interiors from harsh midday insolation.",
                perks: ["Passive Thermal Comfort", "Glare Protection", "Low HVAC Dependence"],
                metricDeltas: { thermal: 20, volume: 0, light: -5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="50" y="30" width="100" height="55" fill="currentColor" fill-opacity="0.05"/><line x1="30" y1="26" x2="170" y2="26" stroke-width="4"/><path d="M30 26 L170 26 L150 40 L50 40 Z" fill="currentColor" fill-opacity="0.2"/><circle cx="25" cy="15" r="10" stroke="currentColor"/><line x1="25" y1="30" x2="35" y2="45" stroke-dasharray="3 2"/><line x1="38" y1="20" x2="52" y2="35" stroke-dasharray="3 2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "High-Performance Glazed Enclosure",
                desc: "Low-E double-glazed kinetic glass skin equipped with motorized dynamic exterior solar fins and automated architectural louvers.",
                perks: ["Panoramic Transparency", "Precision Automated Shading", "Crisp Modern Expression"],
                metricDeltas: { thermal: -5, volume: 10, light: 25 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="25" width="120" height="60" rx="2" fill="currentColor" fill-opacity="0.04"/><line x1="60" y1="25" x2="60" y2="85" stroke-width="1"/><line x1="85" y1="25" x2="85" y2="85" stroke-width="1"/><line x1="110" y1="25" x2="110" y2="85" stroke-width="1"/><line x1="135" y1="25" x2="135" y2="85" stroke-width="1"/><path d="M55 35 L65 45 M80 35 L90 45 M105 35 L115 45 M130 35 L140 45" stroke-width="2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 3,
            phaseNumber: "I",
            phaseName: "Context & Climate",
            title: "Light Strategy",
            question: "How should daylight sculpt your interior atmosphere throughout the daily cycle?",
            tip: "Direct tropical sunlight carries high infrared heat and harsh glare; sculpting indirect northern light creates museum-grade luminosity without interior bleaching.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Diffused Northern Light & Lightwells",
                desc: "Soft, uniform ambient illumination funnelled through sheltered lightwells, clerestories, and north-facing geometric skylights.",
                perks: ["Zero Glare", "Gallery-Grade Serenity", "Stable Thermal Balance"],
                metricDeltas: { thermal: 10, volume: 5, light: 15 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="70,15 110,15 90,40" fill="currentColor" fill-opacity="0.15"/><rect x="40" y="40" width="120" height="45" fill="currentColor" fill-opacity="0.05"/><line x1="80" y1="40" x2="60" y2="85" stroke-dasharray="3 3"/><line x1="90" y1="40" x2="90" y2="85" stroke-dasharray="3 3"/><line x1="100" y1="40" x2="120" y2="85" stroke-dasharray="3 3"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Sculptural Chiaroscuro & Sun Shafts",
                desc: "Dramatic sun-slots, deep pergola casts, and deliberate chiaroscuro shadow geometry that transforms throughout the solar journey.",
                perks: ["Dynamic Spatial Drama", "Expressive Architectural Soul", "High Visual Contrast"],
                metricDeltas: { thermal: -5, volume: 10, light: 20 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="45" y="25" width="110" height="60" fill="currentColor" fill-opacity="0.05"/><polygon points="45,25 75,25 125,85 95,85" fill="currentColor" fill-opacity="0.25"/><line x1="45" y1="25" x2="95" y2="85" stroke-width="2"/><line x1="75" y1="25" x2="125" y2="85" stroke-width="2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 4,
            phaseNumber: "I",
            phaseName: "Context & Climate",
            title: "Bioclimatic Wind & Ventilation",
            question: "How should ambient air move through your everyday living zones?",
            tip: "Courtyard stack ventilation utilizes natural buoyancy—warm air naturally rises and vents out high louvers, drawing fresh, cooled breezes across shaded ground pools.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Passive Stack Effect & Courtyard Breezeway",
                desc: "Central open chimney court drawing ground air across shaded water features, inducing continuous natural cross-ventilation without fan noise.",
                perks: ["100% Fresh Air Circulation", "Sensory Microclimate", "Acoustic Silence"],
                metricDeltas: { thermal: 15, volume: 10, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="35" width="50" height="50" fill="currentColor" fill-opacity="0.05"/><rect x="120" y="35" width="50" height="50" fill="currentColor" fill-opacity="0.05"/><path d="M15 65 Q50 60 90 75 Q100 50 100 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 2"/><path d="M185 65 Q150 60 110 75 Q100 50 100 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Precision Sealed Envelope with HRV & HEPA",
                desc: "Acoustically hermetic building envelope with filtered mechanical ventilation, dehumidification, and zero dust infiltration.",
                perks: ["Zero Dust & Allergen Ingress", "Acoustic Isolation", "Precise Microclimate Control"],
                metricDeltas: { thermal: 10, volume: 0, light: 0 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="45" y="25" width="110" height="60" rx="4" stroke-width="2.5" fill="currentColor" fill-opacity="0.05"/><circle cx="75" cy="55" r="14" stroke-dasharray="3 2"/><circle cx="125" cy="55" r="14" stroke-dasharray="3 2"/><path d="M68 55 L82 55 M75 48 L75 62" stroke-width="1.5"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },

        // PHASE II: VOLUME & GEOMETRY
        {
            id: 5,
            phaseNumber: "II",
            phaseName: "Volume & Geometry",
            title: "Volumetric Void",
            question: "Do you prefer theatrical vertical spatial voids or maximized floor plate efficiency?",
            tip: "A 20-foot double-height void sacrifices 250–400 sq.ft of floor slab, but elevates daily human psychological grandeur and fosters cross-floor family visual connectivity.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Double-Height Central Void",
                desc: "Dramatic 6-meter vertical volume linking living, dining, and mezzanine study in continuous breathing space and theatrical sightlines.",
                perks: ["Psychological Grandeur", "Cross-Level Connectivity", "Vertical Spatial Drama"],
                metricDeltas: { thermal: -5, volume: 25, light: 15 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="20" width="120" height="65" stroke-width="1.5"/><rect x="40" y="20" width="50" height="30" fill="currentColor" fill-opacity="0.15"/><line x1="40" y1="50" x2="90" y2="50"/><line x1="130" y1="50" x2="160" y2="50"/><rect x="130" y1="20" width="30" height="30" fill="currentColor" fill-opacity="0.15"/><path d="M90 50 L130 50" stroke-dasharray="3 3"/><text x="110" y="45" font-size="9" text-anchor="middle" fill="currentColor" font-family="sans-serif">VOID</text><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Disciplined Single-Volume Floorplates",
                desc: "Maximized usable carpet area, acoustic isolation between levels, and cozy, human-scale ceiling heights designed for efficiency.",
                perks: ["Maximum Carpet Efficiency", "Acoustic Separation", "Intimate Human Scale"],
                metricDeltas: { thermal: 10, volume: -10, light: 0 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="20" width="120" height="65" stroke-width="1.5"/><line x1="40" y1="52" x2="160" y2="52" stroke-width="2"/><line x1="100" y1="20" x2="100" y2="85" stroke-width="1"/><rect x="45" y="25" width="50" height="23" fill="currentColor" fill-opacity="0.08"/><rect x="105" y="25" width="50" height="23" fill="currentColor" fill-opacity="0.08"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 6,
            phaseNumber: "II",
            phaseName: "Volume & Geometry",
            title: "Entry Threshold Sequence",
            question: "What spatial sequence should visitors experience between the outer street and your private sanctuary?",
            tip: "The classical architectural principle of 'Compression & Release'—entering through a sheltered, intimate foyer makes the subsequent arrival into the main living pavilion feel twice as breathtaking.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Compressed Decompression Foyer",
                desc: "An intimate, low-ceiling vestibule with indirect, angled sightlines that conceal the home's grand core until a deliberate turn is completed.",
                perks: ["Privacy & Modesty Shield", "Psychological Transition", "Dramatic Spatial Release"],
                metricDeltas: { thermal: 5, volume: 10, light: -5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M30 65 L70 65 L70 35 L120 35" stroke-width="2" stroke-dasharray="4 2"/><rect x="25" y="55" width="40" height="25" fill="currentColor" fill-opacity="0.2"/><rect x="75" y="20" width="95" height="65" fill="currentColor" fill-opacity="0.05"/><line x1="70" y1="20" x2="70" y2="35"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Grand Axial Vista on Entry",
                desc: "Direct, high-impact linear sightline from the front entrance straight through the main living hall toward a signature reflecting pool or rear garden.",
                perks: ["Immediate Grandeur", "Unobstructed Sightlines", "Luminous Welcome"],
                metricDeltas: { thermal: -5, volume: 15, light: 15 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="25" width="120" height="60" fill="currentColor" fill-opacity="0.05"/><line x1="20" y1="55" x2="180" y2="55" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="5 3"/><polygon points="175,50 185,55 175,60" fill="var(--color-terracotta)"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 7,
            phaseNumber: "II",
            phaseName: "Volume & Geometry",
            title: "Introverted vs. Extroverted",
            question: "How should the residence negotiate privacy with the surrounding neighbourhood?",
            tip: "In dense urban environments, outward glass often requires closed curtains; an introverted courtyard captures 100% private sunlight, breeze, and greenery without compromising family privacy.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Inward-Looking Courtyard Oasis (Introverted)",
                desc: "Solid external architectural walls shielding street noise; all major family rooms pivot inward around an open-to-sky living courtyard.",
                perks: ["Absolute Urban Privacy", "Private Sky & Rain View", "Acoustic Retreat"],
                metricDeltas: { thermal: 15, volume: 10, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="35" y="20" width="130" height="65" rx="3" stroke-width="2.5"/><rect x="75" y="35" width="50" height="35" rx="2" fill="currentColor" fill-opacity="0.15" stroke-dasharray="3 2"/><circle cx="100" cy="52" r="6" stroke="var(--color-terracotta)"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Outward Panoramic Transparency (Extroverted)",
                desc: "Floor-to-ceiling perimeter sliding glass walls, cantilevered viewing decks, and visual engagement with nature and streetscape.",
                perks: ["Expansive Horizons", "Seamless Indoor-Outdoor Flow", "Celebrated Street Presence"],
                metricDeltas: { thermal: -10, volume: 15, light: 25 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="55" y="25" width="90" height="60" rx="3" stroke-width="1.5"/><path d="M55 35 L25 20 M145 35 L175 20 M55 75 L25 80 M145 75 L175 80" stroke="var(--color-terracotta)" stroke-dasharray="3 2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 8,
            phaseNumber: "II",
            phaseName: "Volume & Geometry",
            title: "Vastu as Environmental Science",
            question: "How do you align traditional orientation principles with contemporary site geometries?",
            tip: "Original Vedic Vastu was ancient bioclimatic engineering: locating water in the NE captured morning UV sterilization, while heavy SW walls blocked harsh afternoon solar angles.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Strict Cardinal Alignment (Scientific Vastu)",
                desc: "Strict adherence to NE light/water, SW master suite grounding, and SE culinary fire hearths integrated harmoniously with modern geometry.",
                perks: ["Ancient Environmental Harmony", "Cosmic Grounding", "Cultural Peace of Mind"],
                metricDeltas: { thermal: 10, volume: 0, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="100" cy="50" r="32" stroke-width="1.5"/><line x1="100" y1="12" x2="100" y2="88" stroke-dasharray="2 2"/><line x1="62" y1="50" x2="138" y2="50" stroke-dasharray="2 2"/><text x="100" y="23" font-size="8" text-anchor="middle" font-weight="bold">N</text><text x="135" y="53" font-size="8" text-anchor="middle" font-weight="bold">E</text><rect x="80" y="32" width="40" height="36" fill="currentColor" fill-opacity="0.1"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Site-Specific Solar & Wind Optimization",
                desc: "Organic layout orientation tuned strictly to tree canopy preservation, micro-breezes, and site topographic contour gradients over dogma.",
                perks: ["Maximum Site Responsiveness", "Preserved Mature Trees", "Fluid Architectural Freedom"],
                metricDeltas: { thermal: 15, volume: 10, light: 15 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M40 70 Q70 30 110 40 T160 30" stroke="var(--color-sage)" stroke-width="2"/><circle cx="70" cy="45" r="12" fill="var(--color-sage)" fill-opacity="0.2"/><circle cx="140" cy="35" r="10" fill="var(--color-sage)" fill-opacity="0.2"/><rect x="80" y="50" width="55" height="35" rx="2" fill="currentColor" fill-opacity="0.1"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },

        // PHASE III: PROGRAMMATIC REALITIES
        {
            id: 9,
            phaseNumber: "III",
            phaseName: "Programmatic Realities",
            title: "Show vs. Heavy Wet Kitchen",
            question: "How should culinary culture interface with your primary social entertaining spaces?",
            tip: "In spice-rich culinary cultures, open show kitchens without an acoustic/odor-sealed wet scullery inevitably deposit fine oil mists onto living room art and upholstery over time.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Dual Kitchen Architecture (Show + Heavy Wet)",
                desc: "An open social breakfast island for casual entertaining, complemented by an enclosed heavy wet scullery with commercial-grade exhaust.",
                perks: ["Zero Cooking Odors in Living", "Always-Pristine Social Island", "Heavy Prep Concealment"],
                metricDeltas: { thermal: 5, volume: 5, light: 0 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="35" y="25" width="60" height="60" rx="2" fill="currentColor" fill-opacity="0.1"/><text x="65" y="48" font-size="8" text-anchor="middle" font-weight="bold">WET</text><text x="65" y="60" font-size="7" text-anchor="middle">SCULLERY</text><rect x="110" y="35" width="55" height="40" rx="2" stroke-dasharray="3 2"/><text x="137" y="58" font-size="8" text-anchor="middle" font-weight="bold">SHOW ISLAND</text><line x1="95" y1="25" x2="95" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Single Unified Open Gastronomy Studio",
                desc: "One generous, seamless kitchen space fully integrated with the dining room, informal lounge, and garden terrace for communal cooking.",
                perks: ["Maximum Social Inclusivity", "Seamless Family Bonding", "Spacious Unbroken Footprint"],
                metricDeltas: { thermal: -5, volume: 15, light: 10 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="35" y="25" width="130" height="60" rx="4" fill="currentColor" fill-opacity="0.05"/><rect x="80" y="42" width="40" height="25" rx="2" fill="currentColor" fill-opacity="0.15"/><circle cx="55" cy="55" r="4"/><circle cx="145" cy="55" r="4"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 10,
            phaseNumber: "III",
            phaseName: "Programmatic Realities",
            title: "Multi-Gen Privacy Gradients",
            question: "How should multiple generations coexist harmoniously under one roof?",
            tip: "Acoustically isolating bedroom entries and creating walk-in dressing buffers between suites reduces cross-generational airborne sound transfer by over 30 decibels.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Autonomous Zoned Wings & Suites",
                desc: "Distinct elder ground-level master suite with step-free garden access, isolated from upper youthful suites by double-layered acoustic buffers.",
                perks: ["Generational Autonomy", "Universal Age-in-Place Access", "Absolute Acoustic Peace"],
                metricDeltas: { thermal: 10, volume: 0, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="25" y="45" width="60" height="40" rx="2" fill="currentColor" fill-opacity="0.12"/><rect x="115" y="20" width="60" height="40" rx="2" fill="currentColor" fill-opacity="0.12"/><line x1="85" y1="65" x2="115" y2="40" stroke-dasharray="3 3"/><circle cx="100" cy="52" r="5" stroke="var(--color-terracotta)"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Fluid Interconnected Communal Levels",
                desc: "Open intermediate mezzanines, central shared family library, and wide sculptural staircase landings that prompt spontaneous family interaction.",
                perks: ["Deep Familial Cohesion", "Interactive Visual Connections", "Vibrant Shared Life"],
                metricDeltas: { thermal: 0, volume: 20, light: 15 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="20" width="120" height="65" rx="3" fill="currentColor" fill-opacity="0.04"/><path d="M50 70 L90 50 L120 50 L150 30" stroke="var(--color-terracotta)" stroke-width="2.5"/><circle cx="90" cy="50" r="4" fill="currentColor"/><circle cx="120" cy="50" r="4" fill="currentColor"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 11,
            phaseNumber: "III",
            phaseName: "Programmatic Realities",
            title: "Acoustic Isolation & Focus Pods",
            question: "What priority does quiet creative work, digital broadcasting, and study hold in your home?",
            tip: "Without decoupled wall studs and perimeter drop-seals, standard hollow-core doors bleed up to 80% of video-conferencing frequencies into family corridors.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Dedicated Sound-Isolated Library / Studio",
                desc: "An isolated quiet enclave with double-stud acoustic walls, solid-core drop-seal doors, and acoustic timber ceiling slats for deep focus.",
                perks: ["Broadcast-Grade Acoustic Silence", "Deep Uninterrupted Focus", "Zero Spill to Living Areas"],
                metricDeltas: { thermal: 10, volume: -5, light: 0 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="60" y="25" width="80" height="60" rx="3" stroke-width="3" fill="currentColor" fill-opacity="0.15"/><path d="M70 40 L70 70 M80 35 L80 75 M90 40 L90 70 M100 35 L100 75 M110 40 L110 70 M120 35 L120 75 M130 40 L130 70" stroke-width="1" stroke-dasharray="1 2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Permeable Integrated Work Lounges",
                desc: "Casual study alcoves, breakfast counter workstations, and library reading nooks embedded within the flow of communal living areas.",
                perks: ["Fluid Hybrid Flexibility", "Connected to Daily Rhythm", "Spatial Multitasking"],
                metricDeltas: { thermal: 0, volume: 15, light: 15 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="30" width="120" height="55" fill="currentColor" fill-opacity="0.05"/><rect x="55" y="45" width="35" height="25" rx="2" stroke-dasharray="2 2"/><rect x="110" y="45" width="35" height="25" rx="2" fill="currentColor" fill-opacity="0.1"/><line x1="90" y1="45" x2="110" y2="45" stroke-dasharray="2 2"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 12,
            phaseNumber: "III",
            phaseName: "Programmatic Realities",
            title: "Outdoor Terraces vs. Enclosed Bedrooms",
            question: "Where do you prefer allocating your precious square footage?",
            tip: "In temperate plateau climates, deep verandahs are usable 10 months of the year for evening tea and entertaining, acting as crucial thermal buffer zones that shade the interior rooms behind them.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Generous Deep Verandahs & Garden Decks",
                desc: "Trading interior bedroom size for 10-foot-deep sheltered outdoor living decks with ceiling fans, tropical planter beds, and daybeds.",
                perks: ["Open-Air Living 300 Days/Yr", "Passive Thermal Shading", "Direct Nature Immersiveness"],
                metricDeltas: { thermal: 15, volume: 10, light: 15 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="35" y="30" width="65" height="55" fill="currentColor" fill-opacity="0.1"/><rect x="100" y="30" width="65" height="55" fill="currentColor" fill-opacity="0.03" stroke-dasharray="3 2"/><line x1="100" y1="30" x2="100" y2="85" stroke-width="2.5"/><text x="132" y="60" font-size="8" text-anchor="middle" font-weight="bold">VERANDAH</text><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Maximized Enclosed Master Suite Parlor",
                desc: "Expansive air-conditioned master retreats with dedicated walk-in dressing parlors, spa-grade freestanding soaking tubs, and private sitting lounges.",
                perks: ["Uncompromising Indoor Luxury", "All-Season Climate Control", "Private Spa Sanctuary"],
                metricDeltas: { thermal: 5, volume: 5, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="35" y="25" width="130" height="60" rx="4" fill="currentColor" fill-opacity="0.1"/><rect x="45" y="35" width="40" height="35" rx="2" fill="currentColor" fill-opacity="0.15"/><rect x="95" y="35" width="60" height="35" rx="2" fill="currentColor" fill-opacity="0.08"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },

        // PHASE IV: CRAFT & EXECUTION
        {
            id: 13,
            phaseNumber: "IV",
            phaseName: "Craft & Execution",
            title: "Structural Truth vs. Applied Cladding",
            question: "What is your aesthetic appetite regarding construction materiality and aging?",
            tip: "Applied paneling and false ceilings conceal sloppy workmanship but require continual repaint; honest monolithic exposed concrete and stone demand masterwork formwork precision from day one, but gain beauty over 50 years.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "Structural Honesty & Patina (Wabi-Sabi)",
                desc: "Exposed board-marked concrete, natural dressed stone, handmade terracotta bricks, and unlacquered brass that ages gracefully over decades.",
                perks: ["Zero Paint Maintenance", "Timeless Monolithic Purity", "Honest Material Integrity"],
                metricDeltas: { thermal: 10, volume: 5, light: 0 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="25" width="120" height="60" rx="2" fill="currentColor" fill-opacity="0.12"/><line x1="40" y1="45" x2="160" y2="45" stroke-dasharray="1 2"/><line x1="40" y1="65" x2="160" y2="65" stroke-dasharray="1 2"/><circle cx="55" cy="35" r="2" fill="currentColor"/><circle cx="145" cy="35" r="2" fill="currentColor"/><circle cx="55" cy="55" r="2" fill="currentColor"/><circle cx="145" cy="55" r="2" fill="currentColor"/><circle cx="55" cy="75" r="2" fill="currentColor"/><circle cx="145" cy="75" r="2" fill="currentColor"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Refined Precision & Tailored Paneling",
                desc: "Flawless book-matched marble slabs, fluted architectural walnut wall paneling, acoustic micro-cement, and recessed shadow reveals.",
                perks: ["Bespoke Tailored Luxury", "Precision Acoustic Damping", "Sleek Contemporary Finish"],
                metricDeltas: { thermal: 0, volume: 10, light: 10 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="25" width="120" height="60" rx="2" fill="currentColor" fill-opacity="0.04"/><line x1="70" y1="25" x2="70" y2="85" stroke-width="2"/><line x1="100" y1="25" x2="100" y2="85" stroke-width="2"/><line x1="130" y1="25" x2="130" y2="85" stroke-width="2"/><rect x="45" y="30" width="20" height="50" fill="currentColor" fill-opacity="0.08"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        },
        {
            id: 14,
            phaseNumber: "IV",
            phaseName: "Craft & Execution",
            title: "3D BIM & Clash Detection",
            question: "How do you want your design coordinated from schematic ideas to physical ground reality?",
            tip: "Pre-coordinating structural MEP in 3D BIM prevents 90% of on-site concrete puncturing and pipe reroutes, saving 8–12% of total structural costs and guaranteeing millimeter-exact ceiling heights.",
            optionA: {
                key: "A",
                tag: "Option A",
                title: "LOD 400 Digital Twin & MEP Clash Detection",
                desc: "Full 3D Building Information Modeling resolving structural rebar, conduit runs, plumbing drops, and HVAC prior to site execution.",
                perks: ["Zero Change Orders", "Millimeter Ceiling Precision", "Guaranteed Cost Predictability"],
                metricDeltas: { thermal: 10, volume: 10, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="100,20 150,45 100,70 50,45" stroke="var(--color-terracotta)" stroke-width="2" fill="currentColor" fill-opacity="0.1"/><line x1="100" y1="70" x2="100" y2="90" stroke="var(--color-terracotta)"/><line x1="50" y1="45" x2="50" y2="70" stroke="var(--color-terracotta)"/><line x1="150" y1="45" x2="150" y2="70" stroke="var(--color-terracotta)"/><line x1="50" y1="70" x2="100" y2="90" stroke="var(--color-terracotta)"/><line x1="150" y1="70" x2="100" y2="90" stroke="var(--color-terracotta)"/><circle cx="100" cy="45" r="5" fill="var(--color-mustard)"/></svg>`
            },
            optionB: {
                key: "B",
                tag: "Option B",
                title: "Agile On-Site Artisanal Adaptation",
                desc: "High-level architectural framework allowing hand-crafted artisanal decisions and tactile material adjustments on the physical site.",
                perks: ["Spontaneous Artisanal Craft", "Field Customization", "Tactile Improvisation"],
                metricDeltas: { thermal: 0, volume: 5, light: 5 },
                svg: `<svg class="dna-diagram-svg" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M50 75 Q75 25 100 75 T150 75" stroke-dasharray="3 3"/><circle cx="100" cy="45" r="10" stroke="var(--color-sage)" stroke-width="2"/><line x1="100" y1="55" x2="100" y2="85"/><line x1="85" y1="65" x2="115" y2="65"/><line x1="20" y1="85" x2="180" y2="85" stroke-width="2.5"/></svg>`
            }
        }
    ];

    // Discovery State
    const state = {
        currentIndex: 0,
        userAnswers: new Array(14).fill(null), // Array of 'A' or 'B'
        metrics: {
            thermal: 55,
            volume: 50,
            light: 50
        }
    };

    // DOM Elements
    const elements = {
        phaseBadge: document.getElementById('dna-phase-badge'),
        chapterCounter: document.getElementById('dna-chapter-counter'),
        progressFill: document.getElementById('dna-progress-fill'),
        gaugeThermal: document.getElementById('gauge-thermal'),
        gaugeVolume: document.getElementById('gauge-volume'),
        gaugeLight: document.getElementById('gauge-light'),
        valThermal: document.getElementById('val-thermal'),
        valVolume: document.getElementById('val-volume'),
        valLight: document.getElementById('val-light'),
        chapterStage: document.getElementById('dna-chapter-stage'),
        chapterSub: document.getElementById('dna-chapter-sub'),
        chapterTitle: document.getElementById('dna-chapter-title'),
        cardA: document.getElementById('dna-card-a'),
        cardB: document.getElementById('dna-card-b'),
        tipHeading: document.getElementById('dna-tip-heading'),
        tipText: document.getElementById('dna-tip-text'),
        btnPrev: document.getElementById('dna-btn-prev'),
        btnNext: document.getElementById('dna-btn-next'),
        dossierView: document.getElementById('dna-dossier-view'),
        interactiveStage: document.getElementById('dna-interactive-stage'),
        toast: document.getElementById('dna-toast')
    };

    // Initialize the engine
    function init() {
        attachEventListeners();
        renderCurrentChapter();
    }

    // Attach Event Listeners
    function attachEventListeners() {
        elements.cardA.addEventListener('click', () => selectOption('A'));
        elements.cardB.addEventListener('click', () => selectOption('B'));

        elements.btnPrev.addEventListener('click', handlePrev);
        elements.btnNext.addEventListener('click', handleNext);

        // Header reset button
        const resetBtn = document.getElementById('dna-reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetDiscovery);
        }

        // Dossier reset button
        const dossierResetBtn = document.getElementById('dna-dossier-reset-btn');
        if (dossierResetBtn) {
            dossierResetBtn.addEventListener('click', resetDiscovery);
        }

        // Copy summary button
        const copyBtn = document.getElementById('dna-copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', copyDossierToClipboard);
        }

        // Print dossier button
        const printBtn = document.getElementById('dna-print-btn');
        if (printBtn) {
            printBtn.addEventListener('click', () => window.print());
        }

        // Keyboard navigation (Arrow keys & numbers 1/2)
        window.addEventListener('keydown', (e) => {
            if (elements.dossierView.style.display === 'block') return;
            if (e.key === 'ArrowRight' && !elements.btnNext.disabled) {
                handleNext();
            } else if (e.key === 'ArrowLeft' && !elements.btnPrev.disabled) {
                handlePrev();
            } else if (e.key === '1' || e.key === 'a' || e.key === 'A') {
                selectOption('A');
            } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
                selectOption('B');
            }
        });
    }

    // Render the chapter at current index
    function renderCurrentChapter() {
        const chapter = DNA_CHAPTERS[state.currentIndex];
        if (!chapter) return;

        // Smooth transition animation
        elements.chapterStage.style.opacity = '0';
        elements.chapterStage.style.transform = 'translateY(12px)';

        setTimeout(() => {
            // Header & Counter
            elements.phaseBadge.textContent = `PHASE ${chapter.phaseNumber} // ${chapter.phaseName.toUpperCase()}`;
            elements.chapterCounter.innerHTML = `${String(chapter.id).padStart(2, '0')} <span class="dna-counter-total">/ 14</span>`;
            elements.chapterSub.textContent = `CHAPTER ${String(chapter.id).padStart(2, '0')} // ${chapter.title}`;
            elements.chapterTitle.textContent = chapter.question;

            // Progress Bar
            const progressPercent = ((state.currentIndex + 1) / 14) * 100;
            elements.progressFill.style.width = `${progressPercent}%`;

            // Card A Content
            renderCard(elements.cardA, chapter.optionA, state.userAnswers[state.currentIndex] === 'A');

            // Card B Content
            renderCard(elements.cardB, chapter.optionB, state.userAnswers[state.currentIndex] === 'B');

            // Educational Tip
            elements.tipHeading.textContent = `ARCHITECTURAL REALITY // ${chapter.title.toUpperCase()}`;
            elements.tipText.textContent = chapter.tip;

            // Navigation Buttons
            elements.btnPrev.disabled = state.currentIndex === 0;
            const hasAnswer = state.userAnswers[state.currentIndex] !== null;
            elements.btnNext.disabled = !hasAnswer;
            elements.btnNext.innerHTML = (state.currentIndex === 13)
                ? 'GENERATE ARCHITECTURAL DOSSIER &rarr;'
                : 'NEXT CHAPTER &rarr;';

            // Metrics Update
            updateMetricsHUD();

            // Fade back in
            elements.chapterStage.style.opacity = '1';
            elements.chapterStage.style.transform = 'translateY(0)';
        }, 150);
    }

    // Helper to render card details
    function renderCard(cardEl, option, isSelected) {
        cardEl.classList.toggle('selected', isSelected);

        cardEl.querySelector('.dna-choice-tag').textContent = option.tag;
        cardEl.querySelector('.dna-diagram-box').innerHTML = option.svg;
        cardEl.querySelector('.dna-choice-title').textContent = option.title;
        cardEl.querySelector('.dna-choice-desc').textContent = option.desc;

        const perksContainer = cardEl.querySelector('.dna-choice-perks');
        perksContainer.innerHTML = option.perks.map(p => `<span class="dna-perk-chip">${p}</span>`).join('');
    }

    // Select Option A or B
    function selectOption(choiceKey) {
        state.userAnswers[state.currentIndex] = choiceKey;

        // Visual selection on cards
        elements.cardA.classList.toggle('selected', choiceKey === 'A');
        elements.cardB.classList.toggle('selected', choiceKey === 'B');

        // Enable Next Button
        elements.btnNext.disabled = false;

        // Recalculate and update metrics
        recalculateMetrics();
        updateMetricsHUD();

        // Subtle auto-advance cue on selection
        elements.btnNext.style.transform = 'scale(1.03)';
        setTimeout(() => {
            elements.btnNext.style.transform = '';
        }, 200);
    }

    // Recalculate metrics dynamically from user answers
    function recalculateMetrics() {
        let thermal = 50;
        let volume = 50;
        let light = 50;

        state.userAnswers.forEach((ans, idx) => {
            if (!ans) return;
            const chapter = DNA_CHAPTERS[idx];
            const option = (ans === 'A') ? chapter.optionA : chapter.optionB;
            if (option.metricDeltas) {
                thermal += option.metricDeltas.thermal || 0;
                volume += option.metricDeltas.volume || 0;
                light += option.metricDeltas.light || 0;
            }
        });

        // Clamp between 20 and 95
        state.metrics.thermal = Math.max(20, Math.min(95, thermal));
        state.metrics.volume = Math.max(20, Math.min(95, volume));
        state.metrics.light = Math.max(20, Math.min(95, light));
    }

    // Update the HUD meters
    function updateMetricsHUD() {
        elements.gaugeThermal.style.width = `${state.metrics.thermal}%`;
        elements.gaugeVolume.style.width = `${state.metrics.volume}%`;
        elements.gaugeLight.style.width = `${state.metrics.light}%`;

        elements.valThermal.textContent = `${state.metrics.thermal}%`;
        elements.valVolume.textContent = `${state.metrics.volume}%`;
        elements.valLight.textContent = `${state.metrics.light}%`;
    }

    // Handle Next Click
    function handleNext() {
        if (state.userAnswers[state.currentIndex] === null) return;

        if (state.currentIndex < 13) {
            state.currentIndex++;
            renderCurrentChapter();
            window.scrollTo({ top: 120, behavior: 'smooth' });
        } else {
            // Reached completion: build and reveal Architectural Dossier
            generateArchitecturalDossier();
        }
    }

    // Handle Prev Click
    function handlePrev() {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            renderCurrentChapter();
            window.scrollTo({ top: 120, behavior: 'smooth' });
        }
    }

    // Reset Discovery
    function resetDiscovery() {
        if (confirm("Reset your Spatial DNA Discovery journey from Chapter 1?")) {
            state.currentIndex = 0;
            state.userAnswers.fill(null);
            state.metrics = { thermal: 55, volume: 50, light: 50 };

            elements.dossierView.style.display = 'none';
            elements.interactiveStage.style.display = 'block';

            renderCurrentChapter();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // =========================================================================
    // THE ARCHITECTURAL DNA DOSSIER SYNTHESIS ENGINE
    // =========================================================================
    function generateArchitecturalDossier() {
        // Hide interactive stage, show dossier
        elements.interactiveStage.style.display = 'none';
        elements.dossierView.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const ans = state.userAnswers;

        // Archetype Evaluation Algorithm
        let moniker = "The Introverted Biophilic Modernist";
        let strapline = "A contemplative, climate-calibrated sanctuary sculpted around internal courtyards, natural ventilation stacks, and honest structural wabi-sabi.";

        const isIntroverted = ans[6] === 'A'; // Ch 7
        const isDoubleHeight = ans[4] === 'A'; // Ch 5
        const isBimFocused = ans[13] === 'A'; // Ch 14
        const isStructuralHonest = ans[12] === 'A'; // Ch 13
        const isHorizontal = ans[0] === 'A'; // Ch 1

        if (isIntroverted && isHorizontal && isStructuralHonest) {
            moniker = "The Introverted Biophilic Modernist";
            strapline = "A contemplative, climate-calibrated sanctuary sculpted around internal open-air courtyards, natural thermal stacks, and timeless structural materiality.";
        } else if (isDoubleHeight && isBimFocused) {
            moniker = "The Precision Volume Strategist";
            strapline = "A high-performing contemporary spatial engine balancing bold volumetric voids with surgical digital BIM pre-coordination and refined gastronomy entertainment.";
        } else if (isStructuralHonest && ans[1] === 'A' && ans[10] === 'A') {
            moniker = "The Monolithic Sanctuary Architect";
            strapline = "An uncompromising private fortress prioritizing thermal mass, acoustic silence, deep decompression thresholds, and raw monolithic masonry.";
        } else if (isHorizontal && ans[7] === 'A') {
            moniker = "The Harmonic Tropical Essentialist";
            strapline = "A low-slung, grounded pavilion merging science-based Vedic environmental orientation with deep tropical overhangs and multi-generational autonomy.";
        } else if (!isIntroverted && isDoubleHeight) {
            moniker = "The Panoramic Horizon Purist";
            strapline = "An outward-facing architectural statement celebrating expansive perimeter glazing, dramatic sun-sculpted chiaroscuro, and seamless landscape fluidity.";
        } else {
            moniker = "The Adaptive Multi-Gen Visionary";
            strapline = "A human-centric, future-proof residence crafted around distinct acoustic life-wings, versatile work lounges, and bioclimatic breathability.";
        }

        // Inject Moniker
        document.getElementById('dna-dossier-moniker').textContent = moniker;
        document.getElementById('dna-dossier-strapline').textContent = strapline;

        // Build 3-Point Spatial Philosophy
        const philosophyContainer = document.getElementById('dna-dossier-philosophy');
        philosophyContainer.innerHTML = `
            <div class="dna-philosophy-item">
                <div class="dna-philosophy-title">01 // Climate & Thermal Envelope Strategy</div>
                <div class="dna-philosophy-desc">
                    Your preferences prioritize ${ans[1] === 'A' ? 'deep cantilevered architectural overhangs with heavy thermal mass' : 'high-performance low-E kinetic glazing'} paired with ${ans[2] === 'A' ? 'museum-grade diffused northern daylight' : 'expressive chiaroscuro solar drama'} and ${ans[3] === 'A' ? 'passive stack-effect courtyard ventilation' : 'a sealed, filtered microclimatic envelope'}.
                </div>
            </div>
            <div class="dna-philosophy-item">
                <div class="dna-philosophy-title">02 // Volumetric Flow & Threshold Experience</div>
                <div class="dna-philosophy-desc">
                    Arrival begins through a ${ans[5] === 'A' ? 'compressed decompression foyer with indirect, modest sightlines' : 'grand axial vista opening directly toward nature'}, unfolding into ${ans[4] === 'A' ? 'a dramatic 6-meter double-height central void' : 'disciplined, acoustically contained single-volume floorplates'}. Spatial privacy is maintained through an ${ans[6] === 'A' ? 'inward-looking central courtyard sanctuary' : 'outward panoramic glass envelope'}.
                </div>
            </div>
            <div class="dna-philosophy-item">
                <div class="dna-philosophy-title">03 // Programmatic Discipline & Craft Truth</div>
                <div class="dna-philosophy-desc">
                    Gastronomy is structured around ${ans[8] === 'A' ? 'a pristine social island paired with a heavy enclosed wet scullery' : 'a unified open gastronomy studio'}. Work and rest are shielded via ${ans[10] === 'A' ? 'dedicated sound-isolated acoustic study pods' : 'permeable integrated work alcoves'}, rendered in ${ans[12] === 'A' ? 'honest exposed concrete and natural stone patina' : 'refined architectural marble and tailored fluted paneling'}, pre-coordinated via ${ans[13] === 'A' ? 'full LOD 400 3D BIM clash detection' : 'artisan-led on-site execution'}.
                </div>
            </div>
        `;

        // Update Dossier Summary Metrics
        const craftScore = (ans[12] === 'A' ? 25 : 15) + (ans[13] === 'A' ? 25 : 15) + 40;
        document.getElementById('dossier-gauge-thermal').style.width = `${state.metrics.thermal}%`;
        document.getElementById('dossier-val-thermal').textContent = `${state.metrics.thermal}%`;

        document.getElementById('dossier-gauge-volume').style.width = `${state.metrics.volume}%`;
        document.getElementById('dossier-val-volume').textContent = `${state.metrics.volume}%`;

        document.getElementById('dossier-gauge-light').style.width = `${state.metrics.light}%`;
        document.getElementById('dossier-val-light').textContent = `${state.metrics.light}%`;

        document.getElementById('dossier-gauge-craft').style.width = `${craftScore}%`;
        document.getElementById('dossier-val-craft').textContent = `${craftScore}%`;

        // Render 14-Decisions Ledger Table
        const tableBody = document.getElementById('dna-ledger-tbody');
        tableBody.innerHTML = DNA_CHAPTERS.map((ch, idx) => {
            const chosenKey = ans[idx];
            const chosenOption = (chosenKey === 'A') ? ch.optionA : ch.optionB;
            return `
                <tr>
                    <td class="dna-td-phase">Phase ${ch.phaseNumber}</td>
                    <td><strong>Ch. ${String(ch.id).padStart(2, '0')}</strong> // ${ch.title}</td>
                    <td class="dna-td-choice">${chosenOption.title}</td>
                    <td style="color: #666; font-size: 0.85rem;">${chosenOption.perks.join(' &bull; ')}</td>
                </tr>
            `;
        }).join('');

        // Configure "Transmit to Studio Equilibrium" Contact Link
        const subjectParam = encodeURIComponent(`Spatial DNA Dossier: ${moniker}`);
        const bodyParam = encodeURIComponent(
            `Hello Studio Equilibrium,\n\nI have completed the Spatial DNA Discovery sandbox with the following profile:\n\nMoniker: ${moniker}\nThermal Rating: ${state.metrics.thermal}%\nSpatial Volume: ${state.metrics.volume}%\nNatural Light: ${state.metrics.light}%\nCraft Precision: ${craftScore}%\n\nI would like to discuss translating these architectural parameters into our upcoming design brief.`
        );
        const transmitBtn = document.getElementById('dna-transmit-btn');
        if (transmitBtn) {
            transmitBtn.href = `contact.html?subject=${subjectParam}&message=${bodyParam}`;
        }
    }

    // Copy Summary to Clipboard
    function copyDossierToClipboard() {
        const moniker = document.getElementById('dna-dossier-moniker').textContent;
        const strapline = document.getElementById('dna-dossier-strapline').textContent;

        const summaryText = `STUDIO EQUILIBRIUM — SPATIAL DNA DISCOVERY\n\nProfile: ${moniker}\nStrapline: ${strapline}\n\nMetrics:\n- Thermal Comfort & Passive Mass: ${state.metrics.thermal}%\n- Spatial Fluidity & Volume: ${state.metrics.volume}%\n- Natural Light & Glare Strategy: ${state.metrics.light}%\n\nDiscovery Link: https://studioequilibrium.in/dna-preview.html`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(summaryText).then(() => {
                showToast("Dossier Summary copied to clipboard!");
            }).catch(() => {
                showToast("Dossier Summary ready to share.");
            });
        } else {
            showToast("Dossier Summary ready to share.");
        }
    }

    // Show temporary toast notification
    function showToast(message) {
        if (!elements.toast) return;
        elements.toast.textContent = message;
        elements.toast.classList.add('active');
        setTimeout(() => {
            elements.toast.classList.remove('active');
        }, 2800);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
