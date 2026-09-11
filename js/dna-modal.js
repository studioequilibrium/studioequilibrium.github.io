/**
 * STUDIO EQUILIBRIUM — THE SPATIAL DNA DISCOVERY MODAL
 * Context-Aware Architectural Discovery Engine (v8.0)
 * Standalone Implementation (js/dna-modal.js)
 */

(function () {
    'use strict';

    // Engine State
    const modalState = {
        currentIndex: 0,
        userAnswers: new Array(12).fill(null), // Array of 'A' or 'B'
        isAnimating: false,
        isEditing: false
    };

    // DOM Elements Cache
    let overlayEl = null;
    let floatingDockEl = null;
    let closeBtnEl = null;
    let slideContainerEl = null;
    let counterEl = null;
    let progressBarEl = null;
    let categoryEl = null;
    let questionEl = null;
    let cardAEl = null;
    let cardBEl = null;
    let tipEl = null;
    let btnPrevEl = null;
    let btnNextEl = null;
    let interactiveBodyEl = null;
    let resultViewEl = null;

    // -------------------------------------------------------------------------
    // 1. CONTEXT-AWARE DYNAMIC VOCABULARY HELPER
    // -------------------------------------------------------------------------
    function getTypologyTerms() {
        const isCommercial = modalState.userAnswers[0] === 'B';
        if (isCommercial) {
            return {
                isCommercial: true,
                building: "facility",
                space: "workspace",
                primaryRoom: "executive & collaborative zone",
                occupants: "occupants & team",
                users: "clients & visitors",
                sanctuary: "executive focus zone",
                privacy: "confidentiality & access control",
                livingArea: "central collaborative floor",
                bedrooms: "executive suites & private offices",
                bedroom: "private cabin / conference room",
                context: "Commercial & Public Facility"
            };
        } else {
            return {
                isCommercial: false,
                building: "home",
                space: "residence",
                primaryRoom: "family living",
                occupants: "family & residents",
                users: "guests & friends",
                sanctuary: "private sanctuary",
                privacy: "family privacy",
                livingArea: "family living room",
                bedrooms: "bedrooms & private suites",
                bedroom: "bedroom suite",
                context: "Private Residence"
            };
        }
    }

    // -------------------------------------------------------------------------
    // 2. DYNAMIC 12-CHAPTER ARCHITECTURAL DEFINITIONS & RICH ILLUSTRATIONS
    // -------------------------------------------------------------------------
    function getChapterData(index) {
        const terms = getTypologyTerms();

        const chapters = [
            // CHAPTER 1: Project Typology
            {
                id: 1,
                category: "Project Typology // Purpose & Scope",
                question: "What kind of space are we designing together?",
                tip: "Residential projects focus on intimacy, acoustic rest, and family rituals, whereas commercial environments balance brand prestige with high-efficiency customer journeys.",
                optionA: {
                    key: "A",
                    tag: "Residential Space",
                    title: "Villas, Bungalows & Apartments",
                    desc: "A bespoke private residence designed around family comfort, quiet sanctuaries, and multi-generational peace.",
                    perks: ["Private Living", "Family Comfort", "Rest & Solitude"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="gndPoche1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E2E0D8"/><stop offset="100%" stop-color="#FAF9F6"/></linearGradient>
        <linearGradient id="warmSlab1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(221,175,76,0.18)"/><stop offset="100%" stop-color="rgba(221,175,76,0.02)"/></linearGradient>
    </defs>
    <!-- Ground Datum with Poché Hatch -->
    <rect x="15" y="135" width="290" height="20" fill="url(#gndPoche1)"/>
    <line x1="15" y1="135" x2="305" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Setback Axis Lines -->
    <line x1="45" y1="20" x2="45" y2="135" stroke="#D66A48" stroke-width="1" stroke-dasharray="4 3" opacity="0.65"/>
    <line x1="275" y1="20" x2="275" y2="135" stroke="#D66A48" stroke-width="1" stroke-dasharray="4 3" opacity="0.65"/>
    <!-- Ground Floor Volume with Warm Living Zone -->
    <rect x="70" y="75" width="180" height="60" fill="url(#warmSlab1)" stroke="#1C1D1F" stroke-width="1.5"/>
    <!-- Cantilevered First Floor Box with Poché Cut -->
    <polygon points="55,36 195,36 195,75 55,75" fill="rgba(255,255,255,0.92)" stroke="#1C1D1F" stroke-width="1.8"/>
    <rect x="55" y="36" width="10" height="39" fill="#D66A48"/>
    <!-- 45-degree Overhang Shadow under Cantilever -->
    <polygon points="55,75 195,75 220,100 55,100" fill="rgba(0,0,0,0.06)"/>
    <!-- Entrance Pergola Slats -->
    <line x1="195" y1="62" x2="260" y2="62" stroke="#1C1D1F" stroke-width="1.8"/>
    <line x1="208" y1="62" x2="208" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="222" y1="62" x2="222" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="236" y1="62" x2="236" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="250" y1="62" x2="250" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <!-- Upper Balcony Window -->
    <rect x="75" y="46" width="55" height="23" stroke="#1C1D1F" stroke-width="1" stroke-dasharray="3 2" fill="rgba(122,139,113,0.08)"/>
    <!-- Ground Floor Picture Glazing & Entrance Door -->
    <rect x="85" y="90" width="75" height="35" stroke="#1C1D1F" stroke-width="1" fill="rgba(255,255,255,0.85)"/>
    <line x1="122" y1="90" x2="122" y2="125" stroke="#888888" stroke-width="0.8"/>
    <rect x="210" y="88" width="22" height="47" stroke="#D66A48" stroke-width="1.6" fill="rgba(214,106,72,0.1)"/>
    <circle cx="226" cy="112" r="1.5" fill="#D66A48"/>
    <!-- Soft Garden Palm Tree with Green Ambient Tone -->
    <path d="M38 135 L38 98 M30 104 L38 92 L46 104 M32 96 L38 88 L44 96" stroke="#7A8B71" stroke-width="1.6"/>
    <circle cx="38" cy="80" r="13" stroke="#7A8B71" stroke-width="1.2" stroke-dasharray="4 3" fill="rgba(122,139,113,0.14)"/>
    <!-- Dimension Callout -->
    <line x1="55" y1="147" x2="250" y2="147" stroke="#888888" stroke-width="0.8"/>
    <path d="M55 144 L55 150 M250 144 L250 150" stroke="#888888" stroke-width="0.8"/>
    <text x="152" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PRIVATE RESIDENTIAL ENVELOPE // 24.0M</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Commercial & Public",
                    title: "Offices, Retail, F&B Cafes & Clinics",
                    desc: "A dynamic commercial workspace, retail boutique, or public hospitality venue engineered for high customer footfall and brand impact.",
                    perks: ["Brand Experience", "Customer Flow", "Functional Impact"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="comAtrium" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(214,106,72,0.18)"/><stop offset="100%" stop-color="rgba(214,106,72,0.02)"/></linearGradient>
    </defs>
    <rect x="15" y="135" width="290" height="20" fill="rgba(0,0,0,0.04)"/>
    <line x1="15" y1="135" x2="305" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Heavy Structural Columns (Poché) -->
    <line x1="55" y1="28" x2="55" y2="135" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="125" y1="28" x2="125" y2="135" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="195" y1="28" x2="195" y2="135" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="265" y1="28" x2="265" y2="135" stroke="#1C1D1F" stroke-width="2.2"/>
    <!-- Structural Horizontal Slabs -->
    <rect x="50" y="28" width="220" height="7" fill="#1C1D1F"/>
    <rect x="50" y="74" width="220" height="6" fill="#1C1D1F"/>
    <!-- Structural Grid Axis Bubbles -->
    <circle cx="55" cy="18" r="6" stroke="#D66A48" stroke-width="1.2" fill="#FFFFFF"/>
    <text x="55" y="21" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">A</text>
    <circle cx="125" cy="18" r="6" stroke="#D66A48" stroke-width="1.2" fill="#FFFFFF"/>
    <text x="125" y="21" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">B</text>
    <circle cx="195" cy="18" r="6" stroke="#D66A48" stroke-width="1.2" fill="#FFFFFF"/>
    <text x="195" y="21" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">C</text>
    <circle cx="265" cy="18" r="6" stroke="#D66A48" stroke-width="1.2" fill="#FFFFFF"/>
    <text x="265" y="21" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">D</text>
    <!-- Central Brand Atrium Zone -->
    <rect x="125" y="35" width="70" height="100" fill="url(#comAtrium)"/>
    <!-- Customer Flow Vectors with Arrow -->
    <path d="M25 118 Q120 118 160 98 T225 108" stroke="#D66A48" stroke-width="1.8" class="dna-flow-arrow" fill="none"/>
    <polygon points="228,108 219,104 222,112" fill="#D66A48"/>
    <!-- Storefront Entrance Canopy with Shadow -->
    <line x1="105" y1="80" x2="215" y2="80" stroke="#DDAF4C" stroke-width="2.5"/>
    <polygon points="105,80 215,80 230,95 105,95" fill="rgba(0,0,0,0.06)"/>
    <rect x="135" y="88" width="50" height="47" stroke="#1C1D1F" stroke-width="1.5" fill="#FFFFFF"/>
    <line x1="160" y1="88" x2="160" y2="135" stroke="#1C1D1F" stroke-width="1"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">COMMERCIAL BRAND ATRIUM &amp; FOOTFALL LOGIC</text>
</svg>`
                }
            },

            // CHAPTER 2: Architectural Language
            {
                id: 2,
                category: "Architectural Language // Indian Context",
                question: `Which architectural style resonates most with your ${terms.space}?`,
                tip: "Earthy modernism matures gracefully with an organic natural patina over decades, whereas crisp minimalism offers sharp geometric clarity with expansive glazing.",
                optionA: {
                    key: "A",
                    tag: "Style Choice A",
                    title: "Earthy & Tropical Modernism",
                    desc: terms.isCommercial ? "Exposed wire-cut clay brickwork, local Sadarahalli stone plinths, warm timber pergola rafters, and lush indoor break-out courtyards." : "Exposed wire-cut clay brickwork, local Sadarahalli stone, pitched roof profiles, warm timber rafters, and lush indoor courtyards.",
                    perks: ["Exposed Brickwork", "Natural Stone", "Lush Courtyards"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="earthBrick" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(214,106,72,0.18)"/><stop offset="100%" stop-color="rgba(214,106,72,0.04)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Pitched Roof Overhang with Cast Shadow -->
    <polygon points="40,75 140,28 240,75" stroke="#1C1D1F" stroke-width="2" fill="none"/>
    <polygon points="40,75 240,75 255,90 40,90" fill="rgba(0,0,0,0.06)"/>
    <!-- Exposed Timber Rafters Under Eaves -->
    <line x1="58" y1="68" x2="68" y2="83" stroke="#D66A48" stroke-width="1.4"/>
    <line x1="78" y1="58" x2="88" y2="73" stroke="#D66A48" stroke-width="1.4"/>
    <line x1="98" y1="48" x2="108" y2="63" stroke="#D66A48" stroke-width="1.4"/>
    <line x1="118" y1="38" x2="128" y2="53" stroke="#D66A48" stroke-width="1.4"/>
    <!-- Exposed Brick Masonry Wall with Running Bond -->
    <rect x="52" y="75" width="75" height="60" fill="url(#earthBrick)" stroke="#1C1D1F" stroke-width="1.5"/>
    <g stroke="#D66A48" stroke-width="0.9" opacity="0.85">
        <line x1="52" y1="87" x2="127" y2="87"/><line x1="52" y1="99" x2="127" y2="99"/><line x1="52" y1="111" x2="127" y2="111"/><line x1="52" y1="123" x2="127" y2="123"/>
        <line x1="70" y1="75" x2="70" y2="87"/><line x1="108" y1="75" x2="108" y2="87"/>
        <line x1="89" y1="87" x2="89" y2="99"/>
        <line x1="70" y1="99" x2="70" y2="111"/><line x1="108" y1="99" x2="108" y2="111"/>
        <line x1="89" y1="111" x2="89" y2="123"/>
    </g>
    <!-- Sadarahalli Stone Base Plinth -->
    <rect x="45" y="130" width="230" height="5" stroke="#1C1D1F" stroke-width="1.2" fill="#E6E4DC"/>
    <!-- Open Verandah Columns -->
    <line x1="180" y1="75" x2="180" y2="135" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="230" y1="75" x2="230" y2="135" stroke="#1C1D1F" stroke-width="2.2"/>
    <!-- Lush Tropical Indoor Foliage -->
    <path d="M205 135 Q200 102 195 90 M195 90 Q178 82 168 90 M195 90 Q202 74 212 80 M195 90 Q218 86 224 98" stroke="#7A8B71" stroke-width="1.6" fill="none"/>
    <circle cx="205" cy="133" r="3.5" fill="#7A8B71"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">EXPOSED BRICK // PITCHED TIMBER RAFTERS // STONE PLINTH</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Style Choice B",
                    title: "Contemporary Minimalist",
                    desc: terms.isCommercial ? "Crisp monolithic volumes, expansive structural curtain wall glazing, subtle exposed concrete accents, and high-prestige executive identity." : "Crisp clean monolithic volumes, expansive floor-to-ceiling glass, subtle exposed concrete accents, and seamless modern elegance.",
                    perks: ["Clean Geometric Lines", "Expansive Glass", "Contemporary Polish"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(122,139,113,0.18)"/><stop offset="100%" stop-color="rgba(122,139,113,0.02)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <line x1="70" y1="132" x2="250" y2="132" stroke="#D66A48" stroke-width="1" stroke-dasharray="4 2"/>
    <!-- Floating Cantilever Monolith with 45-degree Angled Shadow -->
    <polygon points="55,34 245,34 265,75 55,75" stroke="#1C1D1F" stroke-width="2" fill="#FFFFFF"/>
    <polygon points="55,75 265,75 290,105 55,105" fill="rgba(0,0,0,0.06)"/>
    <!-- Structural Cantilever Extension Guideline -->
    <line x1="245" y1="75" x2="245" y2="135" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.6"/>
    <!-- Recessed Glazed Curtain Box -->
    <rect x="75" y="75" width="145" height="57" fill="url(#glassGrad)" stroke="#1C1D1F" stroke-width="1.6"/>
    <line x1="125" y1="75" x2="125" y2="132" stroke="#888888" stroke-width="1"/>
    <line x1="175" y1="75" x2="175" y2="132" stroke="#888888" stroke-width="1"/>
    <!-- Reflective Linear Water Pool -->
    <rect x="225" y="116" width="45" height="16" stroke="#7A8B71" stroke-width="1.2" fill="rgba(122,139,113,0.12)"/>
    <text x="247" y="128" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71" text-anchor="middle">WATER POOL</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PURE GEOMETRIC CANTILEVER // STRUCTURAL GLAZING</text>
</svg>`
                }
            },

            // CHAPTER 3: Climate Defense
            {
                id: 3,
                category: "Climate Defense // Summer Heat",
                question: `How should your ${terms.building} handle harsh summer afternoon heat?`,
                tip: `Passive exterior shade structures like terracotta jalis block up to 75% of solar heat before it touches the building, drastically cutting ${terms.isCommercial ? "HVAC operational" : "electricity"} bills.`,
                optionA: {
                    key: "A",
                    tag: "Strategy A",
                    title: "Deep Balcony Overhangs & Jali Screens",
                    desc: `Generous 2-meter shaded overhangs and breathable terracotta brick jalis that shade ${terms.isCommercial ? "workspaces and client suites" : "rooms"} naturally and capture refreshing breezes.`,
                    perks: ["Natural Solar Shading", "Low Power Bills", "Soft Ambient Glow"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="sunFade" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(221,175,76,0.35)"/><stop offset="100%" stop-color="rgba(221,175,76,0.02)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Summer Sun Angle with Radiant Cone -->
    <g class="dna-sun-path">
        <circle cx="45" cy="30" r="12" stroke="#DDAF4C" stroke-width="1.8" fill="rgba(221, 175, 76, 0.18)"/>
        <line x1="45" y1="12" x2="45" y2="5" stroke="#DDAF4C" stroke-width="1.5"/>
        <line x1="63" y1="30" x2="70" y2="30" stroke="#DDAF4C" stroke-width="1.5"/>
        <line x1="58" y1="43" x2="64" y2="49" stroke="#DDAF4C" stroke-width="1.5"/>
    </g>
    <!-- Solar Heat Beam Deflected -->
    <polygon points="45,30 135,85 110,85" fill="url(#sunFade)" class="dna-sun-beam"/>
    <!-- Deep Overhang Roof Slab (Poché) -->
    <polygon points="115,44 275,44 275,54 135,54" fill="#1C1D1F"/>
    <!-- Deep Cast Shadow Polygon under Overhang -->
    <polygon points="135,54 275,54 275,135 170,135" fill="rgba(0,0,0,0.07)"/>
    <!-- Perforated Terracotta Jali Screen -->
    <g stroke="#D66A48" stroke-width="1" opacity="0.95">
        <rect x="140" y="54" width="30" height="81" stroke="#D66A48" stroke-width="1.8" fill="rgba(214,106,72,0.08)"/>
        <circle cx="148" cy="65" r="2.5"/><circle cx="162" cy="65" r="2.5"/>
        <circle cx="148" cy="78" r="2.5"/><circle cx="162" cy="78" r="2.5"/>
        <circle cx="148" cy="91" r="2.5"/><circle cx="162" cy="91" r="2.5"/>
        <circle cx="148" cy="104" r="2.5"/><circle cx="162" cy="104" r="2.5"/>
        <circle cx="148" cy="117" r="2.5"/><circle cx="162" cy="117" r="2.5"/>
        <circle cx="148" cy="128" r="2.5"/><circle cx="162" cy="128" r="2.5"/>
    </g>
    <!-- Filtered Breeze Vector -->
    <path d="M100 95 Q135 92 180 95 T235 95" stroke="#7A8B71" stroke-width="1.8" class="dna-wind-path"/>
    <!-- Shaded Protected Interior Zone -->
    <rect x="170" y="54" width="65" height="81" fill="rgba(221,175,76,0.08)" stroke="#1C1D1F" stroke-width="1"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PASSIVE SHADE OVERHANG // BREATHABLE JALI SCREEN</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Strategy B",
                    title: "High-Performance Glass & Automated Louvers",
                    desc: "Double-glazed Low-E insulated glass panels paired with sleek motorized exterior architectural louvers for precision climate control.",
                    perks: ["Double-Glazed Insulation", "Motorized Sun Louvers", "Unobstructed Views"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="acCoolZone" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(122,139,113,0.22)"/><stop offset="100%" stop-color="rgba(122,139,113,0.04)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Concrete Slabs (Poché) -->
    <rect x="110" y="24" width="160" height="16" fill="#1C1D1F"/>
    <rect x="110" y="120" width="160" height="15" fill="#1C1D1F"/>
    <!-- Double-Glazed Unit (IGU) with Argon Cavity -->
    <line x1="180" y1="40" x2="180" y2="120" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="187" y1="40" x2="187" y2="120" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="183.5" y1="45" x2="183.5" y2="115" stroke="#D66A48" stroke-width="0.8" stroke-dasharray="2 2"/>
    <!-- Motorized Exterior Louvers Array -->
    <g stroke="#1C1D1F" stroke-width="1.8">
        <line x1="135" y1="48" x2="162" y2="40"/>
        <line x1="135" y1="62" x2="162" y2="54"/>
        <line x1="135" y1="76" x2="162" y2="68"/>
        <line x1="135" y1="90" x2="162" y2="82"/>
        <line x1="135" y1="104" x2="162" y2="96"/>
        <line x1="135" y1="118" x2="162" y2="110"/>
    </g>
    <!-- Actuator Control Linkage -->
    <line x1="148" y1="35" x2="148" y2="125" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Reflected Solar Radiation Beam -->
    <path d="M65 60 L142 78 L90 106" stroke="#DDAF4C" stroke-width="1.8" class="dna-sun-beam"/>
    <polygon points="90,106 99,104 96,98" fill="#DDAF4C"/>
    <!-- Climate Controlled Interior Zone -->
    <rect x="187" y="40" width="83" height="80" fill="url(#acCoolZone)"/>
    <text x="228" y="80" font-family="'Lintel', sans-serif" font-size="8" font-weight="bold" fill="#1C1D1F" text-anchor="middle">24.0°C</text>
    <text x="228" y="92" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71" text-anchor="middle">PRECISION SEALED</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">INSULATED DOUBLE GLAZING // MOTORIZED SUN LOUVERS</text>
</svg>`
                }
            },

            // CHAPTER 4: Natural Light Strategy
            {
                id: 4,
                category: "Natural Light // Mood & Ambience",
                question: `How do you want natural sunlight to illuminate your ${terms.space}?`,
                tip: "Direct tropical sun causes glare on computer screens and heats up rooms quickly; soft indirect light from north-facing skylights offers gallery-quality calmness all day.",
                optionA: {
                    key: "A",
                    tag: "Light Approach A",
                    title: "Soft, Indirect Light & Skylights",
                    desc: `Gentle, uniform daylight brought down through central lightwells and north-facing glass slots that keeps ${terms.isCommercial ? "desks and meeting rooms" : "rooms"} cool, glare-free, and calm.`,
                    perks: ["Zero Harsh Glare", "Gallery-Grade Serenity", "Cooler Rooms"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="northDiff" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(221,175,76,0.22)"/><stop offset="100%" stop-color="rgba(221,175,76,0.02)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Sawtooth North Clerestory Roof Section -->
    <polygon points="55,135 55,65 140,24 140,65 245,24 245,135" stroke="#1C1D1F" stroke-width="2" fill="none"/>
    <!-- Glazed North Facing Slots -->
    <line x1="140" y1="24" x2="140" y2="65" stroke="#D66A48" stroke-width="2.2"/>
    <line x1="245" y1="24" x2="245" y2="65" stroke="#D66A48" stroke-width="2.2"/>
    <!-- Ambient Diffused Light Cone -->
    <polygon points="140,24 140,65 210,135 130,135" fill="url(#northDiff)" class="dna-light-ray"/>
    <!-- Diffused Ambient Light Rays -->
    <g stroke="#DDAF4C" stroke-width="1.4" stroke-dasharray="4 3" class="dna-light-ray">
        <line x1="142" y1="35" x2="195" y2="125"/>
        <line x1="142" y1="52" x2="165" y2="125"/>
        <line x1="247" y1="35" x2="285" y2="125"/>
    </g>
    <!-- Light-shelf Reflector Baffle -->
    <line x1="125" y1="65" x2="155" y2="65" stroke="#1C1D1F" stroke-width="2"/>
    <rect x="70" y="80" width="22" height="30" stroke="#1C1D1F" stroke-width="1" fill="rgba(214,106,72,0.12)"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">NORTH CLERESTORY LIGHTWELL // 100% GLARE-FREE CALM</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Light Approach B",
                    title: "Direct Dramatic Sun & Shadow Play",
                    desc: `Intentional sunbeams piercing deep into high-ceiling ${terms.isCommercial ? "atrium reception zones" : "living areas"}, creating ever-changing geometric shadow art on bare stone walls.`,
                    perks: ["Dynamic Day Experience", "Architectural Shadow Art", "Warm Radiance"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="chiaroBeam" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(221,175,76,0.45)"/><stop offset="100%" stop-color="rgba(221,175,76,0.04)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Monolithic Double-Height Concrete Room -->
    <rect x="65" y="28" width="190" height="107" stroke="#1C1D1F" stroke-width="2" fill="none"/>
    <!-- Deep Narrow Slot Aperture -->
    <line x1="95" y1="28" x2="125" y2="28" stroke="#FAF9F6" stroke-width="4"/>
    <line x1="95" y1="28" x2="95" y2="38" stroke="#D66A48" stroke-width="1.8"/>
    <line x1="125" y1="28" x2="125" y2="38" stroke="#D66A48" stroke-width="1.8"/>
    <!-- Piercing Angular Sunbeam Polygon -->
    <polygon points="95,28 125,28 230,135 175,135" fill="url(#chiaroBeam)" class="dna-sun-beam"/>
    <!-- Deep Architectural Shadow Hatching on Back Wall -->
    <g stroke="#1C1D1F" stroke-width="0.9" opacity="0.35">
        <line x1="185" y1="35" x2="255" y2="105"/>
        <line x1="200" y1="35" x2="255" y2="90"/>
        <line x1="215" y1="35" x2="255" y2="75"/>
        <line x1="230" y1="35" x2="255" y2="60"/>
    </g>
    <!-- Scale Figure with Cast Shadow -->
    <line x1="140" y1="117" x2="140" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <circle cx="140" cy="114" r="2.8" fill="#1C1D1F"/>
    <line x1="140" y1="135" x2="175" y2="135" stroke="#1C1D1F" stroke-width="1.8" opacity="0.45"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">HIGH-CONTRAST CHIAROSCURO // GEOMETRIC SUN SLOTS</text>
</svg>`
                }
            },

            // CHAPTER 5: Thermal Envelope
            {
                id: 5,
                category: "Thermal Envelope // Cooling Strategy",
                question: `How do you prefer to keep indoor ${terms.space}s cool and fresh?`,
                tip: "Central open-to-sky courtyards naturally vent hot air upward like a chimney, creating continuous fresh breezes across interior spaces without heavy power consumption.",
                optionA: {
                    key: "A",
                    tag: "Cooling Choice A",
                    title: "Central Open Courtyard & Cross-Ventilation",
                    desc: `A traditional open-to-sky central courtyard that naturally pulls cooler air through ${terms.isCommercial ? "breakout floors and team areas" : "living areas"}, reducing reliance on heavy air conditioning.`,
                    perks: ["Fresh Outdoor Air", "Natural Chimney Cooling", "Energy Savings"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="courtWarm" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(214,106,72,0.18)"/><stop offset="100%" stop-color="rgba(214,106,72,0.02)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Left Wing -->
    <rect x="45" y="48" width="75" height="87" stroke="#1C1D1F" stroke-width="1.6" fill="rgba(255,255,255,0.85)"/>
    <!-- Right Wing -->
    <rect x="200" y="48" width="75" height="87" stroke="#1C1D1F" stroke-width="1.6" fill="rgba(255,255,255,0.85)"/>
    <!-- Open-to-Sky Courtyard Center Core with Temperature Gradient -->
    <rect x="120" y="80" width="80" height="55" fill="url(#courtWarm)" stroke="#D66A48" stroke-width="1.4" stroke-dasharray="4 3" class="dna-pulse-focal"/>
    <!-- Courtyard Biophilic Tree -->
    <path d="M160 135 L160 108" stroke="#7A8B71" stroke-width="1.8"/>
    <circle cx="160" cy="100" r="12" stroke="#7A8B71" stroke-width="1.4" fill="rgba(122,139,113,0.18)"/>
    <!-- Continuous Cool Inflow Breeze (Animated Airflow) -->
    <path d="M20 126 Q80 120 120 126 T200 126" stroke="#7A8B71" stroke-width="2" class="dna-wind-path"/>
    <!-- Thermal Chimney Stack Effect (Rising Warm Air) -->
    <path d="M160 88 L160 25" stroke="#D66A48" stroke-width="1.8" class="dna-wind-path"/>
    <polygon points="160,20 155,29 165,29" fill="#D66A48"/>
    <text x="160" y="16" font-family="'Lintel', sans-serif" font-size="6" font-weight="bold" fill="#D66A48" text-anchor="middle">THERMAL STACK</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PASSIVE COURTYARD INDUCTION // CONTINUOUS CROSS-BREEZE</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Cooling Choice B",
                    title: "Airtight Envelope & High-Efficiency AC",
                    desc: "Precision climate-sealed walls with advanced inverter VRV air-conditioning, keeping dust, road noise, and monsoon humidity out.",
                    perks: ["Zero Dust & Road Noise", "Guaranteed 24°C Comfort", "Acoustic Silence"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="vrvCool" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(122,139,113,0.18)"/><stop offset="100%" stop-color="rgba(122,139,113,0.03)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Continuous Airtight Insulated Boundary -->
    <rect x="55" y="32" width="210" height="103" stroke="#1C1D1F" stroke-width="2.2" fill="url(#vrvCool)"/>
    <rect x="60" y="37" width="200" height="93" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.7"/>
    <!-- False Ceiling Bulkhead with Linear Air Grilles -->
    <rect x="75" y="44" width="170" height="14" fill="#E6E4DC" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="90" y1="58" x2="135" y2="58" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="185" y1="58" x2="230" y2="58" stroke="#1C1D1F" stroke-width="2.2"/>
    <!-- Conditioned Air Closed-Loop Flow -->
    <path d="M112 62 Q112 102 160 102 T208 62" stroke="#7A8B71" stroke-width="1.6" class="dna-flow-arrow"/>
    <!-- Smart Thermostat Sensor -->
    <rect x="145" y="74" width="30" height="19" rx="3" stroke="#1C1D1F" stroke-width="1.2" fill="#FFFFFF"/>
    <text x="160" y="87" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#D66A48" text-anchor="middle">23.5°C</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">HIGH-EFFICIENCY VRV // CONTINUOUS THERMAL ENVELOPE</text>
</svg>`
                }
            },

            // CHAPTER 6: Vertical Scale
            {
                id: 6,
                category: "Vertical Scale // Ceiling Experience",
                question: `How should ceiling height shape your main ${terms.isCommercial ? "facility atrium and customer areas" : "living area"}?`,
                tip: terms.isCommercial ? "A double-height brand atrium creates instant prestige and grandeur for visitors, but reduces the total rentable/desk square footage on the upper mezzanine floor." : "A double-height living room feels grand and architecturally luxurious, but reduces the total carpet area available for bedrooms on the upper floor.",
                optionA: {
                    key: "A",
                    tag: "Ceiling A",
                    title: terms.isCommercial ? "Double-Height Brand Atrium" : "Double-Height Living Void",
                    desc: terms.isCommercial ? "A dramatic 20-foot tall ceiling over the central entrance atrium with an upper-floor mezzanine bridge overlooking operations." : "A dramatic 20-foot tall ceiling over the living room with an upper-floor mezzanine bridge that overlooks the family below.",
                    perks: ["Spectacular Visual Drama", "Inter-Floor Connection", "Grand Architectural Luxury"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
        <linearGradient id="voidGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(221,175,76,0.18)"/><stop offset="100%" stop-color="rgba(221,175,76,0.02)"/></linearGradient>
    </defs>
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Soaring 6.8m Section Frame -->
    <rect x="55" y="24" width="210" height="111" stroke="#1C1D1F" stroke-width="2" fill="url(#voidGrad)"/>
    <!-- Mezzanine Floor Bridge (Right) -->
    <rect x="175" y="74" width="90" height="7" fill="#1C1D1F"/>
    <line x1="175" y1="64" x2="265" y2="64" stroke="#888888" stroke-width="1.2"/>
    <rect x="175" y="58" width="4" height="16" fill="#D66A48"/>
    <!-- Vertical Dimension Bar -->
    <line x1="72" y1="28" x2="72" y2="131" stroke="#D66A48" stroke-width="1.2"/>
    <path d="M69 32 L72 26 L75 32 M69 127 L72 133 L75 127" stroke="#D66A48" stroke-width="1.2"/>
    <text x="80" y="82" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#D66A48">H: 6.8M VOID</text>
    <!-- Long Sculptural Chandelier Pendant with Pulse -->
    <line x1="125" y1="24" x2="125" y2="78" stroke="#1C1D1F" stroke-width="0.9"/>
    <circle cx="125" cy="82" r="5.5" stroke="#DDAF4C" stroke-width="1.6" fill="rgba(221,175,76,0.3)" class="dna-pulse-focal"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">SOARING VERTICAL VOID // MEZZANINE VISUAL OVERLOOK</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Ceiling B",
                    title: "Single-Height Maximized Floor Area",
                    desc: terms.isCommercial ? "Standard 10.5-foot ceilings throughout, allowing additional conference suites, executive cabins, or maximum desk capacity on the floor above." : "Standard 10.5-foot ceilings throughout, allowing an extra bedroom suite, gym, or home office on the floor above.",
                    perks: ["Maximum Usable Square Footage", terms.isCommercial ? "Extra Meeting Suites" : "Extra Bedroom Suite", "Cozy, Efficient Scale"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- 2 Complete Floor Levels -->
    <rect x="55" y="24" width="210" height="111" stroke="#1C1D1F" stroke-width="2" fill="none"/>
    <rect x="55" y="78" width="210" height="9" fill="#1C1D1F"/>
    <!-- Level 02 -->
    <text x="110" y="55" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">LEVEL 02 // SUITES</text>
    <text x="210" y="55" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">WORK / STUDY</text>
    <line x1="160" y1="24" x2="160" y2="78" stroke="#1C1D1F" stroke-width="1.4"/>
    <!-- Level 01 -->
    <text x="110" y="110" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">LEVEL 01 // MAIN</text>
    <text x="210" y="110" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">DINING / SUPPORT</text>
    <line x1="160" y1="87" x2="160" y2="135" stroke="#1C1D1F" stroke-width="1.4"/>
    <rect x="18" y="44" width="35" height="18" stroke="#D66A48" stroke-width="1.2" fill="#FFFFFF"/>
    <text x="35" y="56" font-family="'Lintel', sans-serif" font-size="6" font-weight="bold" fill="#D66A48" text-anchor="middle">+100%</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">MAXIMIZED FLOOR AREA // DUAL COMPLETE USABLE LEVELS</text>
</svg>`
                }
            },

            // CHAPTER 7: Entrance Transition
            {
                id: 7,
                category: terms.isCommercial ? "Arrival Protocol // Security & Reception" : "Entrance Transition // Arrival Experience",
                question: `What should ${terms.users} experience the moment they enter your ${terms.building}?`,
                tip: terms.isCommercial ? "In corporate and clinical environments, a dedicated reception lobby secures confidential team workflows and provides controlled visitor check-in." : "In traditional Indian homes, an entry foyer protects family privacy from delivery couriers and casual visitors before they see the main living hall.",
                optionA: {
                    key: "A",
                    tag: "Entry A",
                    title: terms.isCommercial ? "Screened Reception Lobby & Waiting Lounge" : "Private Step-Back Foyer & Screened Verandah",
                    desc: terms.isCommercial ? "A distinct reception lobby with an architectural baffle screen that shields internal team desks, boardroom doors, and operations from the main entrance." : "A distinct entrance lobby with a decorative partition screen that shields family activities from the main door and street.",
                    perks: [terms.isCommercial ? "Client Confidentiality" : "Complete Family Privacy", "Formal Welcoming Zone", "Organized Check-In"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Entrance Door Swing -->
    <line x1="45" y1="58" x2="45" y2="112" stroke="#1C1D1F" stroke-width="2.2"/>
    <path d="M45 112 A42 42 0 0 0 87 70" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Privacy/Security Baffle Screen -->
    <rect x="135" y="42" width="7" height="64" fill="#D66A48" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="146" y1="48" x2="146" y2="100" stroke="#888888" stroke-width="1.2" stroke-dasharray="2 2"/>
    <line x1="152" y1="48" x2="152" y2="100" stroke="#888888" stroke-width="1.2" stroke-dasharray="2 2"/>
    <!-- L-Shaped Foot-Traffic Journey (Indirect Line of Sight) -->
    <path d="M30 85 L95 85 Q115 85 115 115 T185 115" stroke="#7A8B71" stroke-width="1.8" class="dna-wind-path"/>
    <text x="90" y="42" font-family="'Lintel', sans-serif" font-size="6" font-weight="bold" fill="#888888">ARRIVAL FOYER</text>
    <text x="215" y="85" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#1C1D1F">PROTECTED CORE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">L-SHAPED REVEAL // COMPLETE SIGHTLINE BUFFER</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Entry B",
                    title: terms.isCommercial ? "Direct Open Arrival into Grand Atrium" : "Direct Open Arrival into Grand Living",
                    desc: terms.isCommercial ? "Entering the facility immediately reveals an expansive double-height brand showcase, open collaborative desks, and landscape vistas in one vista." : "Opening the front door immediately reveals the full expanse of your living, dining, and garden spaces in one breathtaking vista.",
                    perks: ["Instant 'Wow' Impact", "Expansive Open Feel", "Maximum Visual Continuity"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Massive Pivot Door at Threshold -->
    <line x1="50" y1="85" x2="92" y2="52" stroke="#D66A48" stroke-width="2.5"/>
    <circle cx="50" cy="85" r="3.5" fill="#D66A48"/>
    <!-- Expanding Radial Sightline Cones (120-degree Panorama) -->
    <path d="M50 85 L265 30 M50 85 L265 135" stroke="#DDAF4C" stroke-width="1.4" class="dna-sun-path"/>
    <rect x="135" y="52" width="45" height="27" stroke="#1C1D1F" stroke-width="1.2" fill="rgba(255,255,255,0.85)"/>
    <text x="157" y="68" font-family="'Lintel', sans-serif" font-size="6" fill="#666666" text-anchor="middle">CENTRAL CORE</text>
    <rect x="210" y="52" width="50" height="27" stroke="#1C1D1F" stroke-width="1.2" fill="rgba(122,139,113,0.12)"/>
    <text x="235" y="68" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71" text-anchor="middle">PANORAMA</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">UNOBSTRUCTED PANORAMA // INSTANT SPATIAL DRAMA</text>
</svg>`
                }
            },

            // CHAPTER 8: Privacy Gradient
            {
                id: 8,
                category: "Privacy Gradient // Orientation",
                question: `How should your ${terms.building} relate to the surrounding ${terms.isCommercial ? "urban fabric & road frontage" : "neighborhood"}?`,
                tip: terms.isCommercial ? "In dense Indian cities, inward-looking courtyard campuses protect focus and acoustic silence from heavy traffic noise and surrounding commercial bustle." : "In dense Indian cities, inward-looking courtyard layouts keep you completely private from neighboring multi-story buildings and street traffic.",
                optionA: {
                    key: "A",
                    tag: "Orientation A",
                    title: terms.isCommercial ? "Inward-Facing Courtyard Campus" : "Inward-Facing Courtyard Life",
                    desc: terms.isCommercial ? "Solid external perimeter with controlled glazing; all executive offices and collaborative teams wrap around a peaceful inner garden atrium." : "Solid external walls with minimal street windows; all primary living rooms wrap around a private inner garden sanctuary.",
                    perks: ["Total Acoustic Silence", "Zero Road Distractions", "Shielded Work Sanctuary"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Solid Protective Exterior Perimeter -->
    <rect x="55" y="32" width="210" height="103" stroke="#1C1D1F" stroke-width="2.2" fill="#FFFFFF"/>
    <!-- Inward Green Courtyard Core -->
    <rect x="110" y="58" width="100" height="52" stroke="#7A8B71" stroke-width="1.6" fill="rgba(122,139,113,0.14)"/>
    <circle cx="160" cy="84" r="10" stroke="#7A8B71" stroke-width="1.4" fill="rgba(122,139,113,0.22)"/>
    <!-- Inward Sightline Vectors -->
    <path d="M80 48 L120 68 M240 48 L200 68 M80 120 L120 100 M240 120 L200 100" stroke="#D66A48" stroke-width="1.4" stroke-dasharray="3 2"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PROTECTIVE SOLID EXTERIOR // INWARD PRIVATE OASIS</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Orientation B",
                    title: "Outward-Facing Panoramic Glazing",
                    desc: terms.isCommercial ? "Expansive structural curtain glass walls that showcase your brand presence to the street and frame panoramic city skylines." : "Expansive floor-to-ceiling glass walls that frame surrounding trees, landscapes, skylines, and sunset vistas.",
                    perks: ["High Brand Visibility", "Fluid Daylight Integration", "Panoramic Views"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <rect x="55" y="32" width="55" height="103" fill="#E6E4DC" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Continuous Glass Curtain Facade -->
    <line x1="110" y1="32" x2="265" y2="32" stroke="#1C1D1F" stroke-width="1.8"/>
    <line x1="110" y1="135" x2="265" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <line x1="265" y1="32" x2="265" y2="135" stroke="#D66A48" stroke-width="2.8"/>
    <!-- Outward View Sightlines -->
    <g stroke="#7A8B71" stroke-width="1.4" class="dna-wind-path">
        <line x1="160" y1="84" x2="295" y2="38"/>
        <line x1="160" y1="84" x2="305" y2="84"/>
        <line x1="160" y1="84" x2="295" y2="130"/>
    </g>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PANORAMIC CURTAIN WALL // HORIZON VIEW CONNECTION</text>
</svg>`
                }
            },

            // CHAPTER 9: Vastu & Energy Flow
            {
                id: 9,
                category: "Vastu & Energy Flow // Philosophy",
                question: `How should Vastu principles guide the spatial layout of your ${terms.space}?`,
                tip: "We seamlessly merge Vastu principles with modern bioclimatic architecture so your space honors Vedic alignment without sacrificing contemporary functionality.",
                optionA: {
                    key: "A",
                    tag: "Vastu A",
                    title: "Traditional Vastu Mandala Alignment",
                    desc: terms.isCommercial ? "Strict adherence to commercial Vastu: Managing Director Cabin in Nairutya (SW), Accounts in Agni (SE), Reception in Ishanya (NE), and clear Brahmasthan center." : "Strict adherence to Vastu Purusha Mandala: Kitchen in Agni (SE), Master in Nairutya (SW), Puja/Water in Ishanya (NE), and open Brahmasthan.",
                    perks: ["100% Vastu Compliance", "Harmonious Energy Flow", "Complete Peace of Mind"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- 3x3 Vastu Mandala Grid -->
    <g stroke="#1C1D1F" stroke-width="1.4">
        <rect x="105" y="28" width="110" height="96" fill="rgba(255,255,255,0.85)"/>
        <line x1="141.6" y1="28" x2="141.6" y2="124"/>
        <line x1="178.3" y1="28" x2="178.3" y2="124"/>
        <line x1="105" y1="60" x2="215" y2="60"/>
        <line x1="105" y1="92" x2="215" y2="92"/>
    </g>
    <!-- Sacred Brahmasthan Void -->
    <rect x="141.6" y="60" width="36.7" height="32" fill="rgba(214,106,72,0.18)" stroke="#D66A48" stroke-width="1.6" class="dna-pulse-focal"/>
    <circle cx="160" cy="76" r="4" fill="#D66A48"/>
    <text x="160" y="22" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#D66A48" text-anchor="middle">NORTH</text>
    <text x="232" y="78" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#1C1D1F" text-anchor="middle">EAST</text>
    <text x="123" y="47" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71" text-anchor="middle">NW</text>
    <text x="197" y="47" font-family="'Lintel', sans-serif" font-size="6" fill="#DDAF4C" text-anchor="middle">NE // WATER</text>
    <text x="123" y="110" font-family="'Lintel', sans-serif" font-size="6" fill="#888888" text-anchor="middle">SW // EARTH</text>
    <text x="197" y="110" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">SE // FIRE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">9-SQUARE VASTU MANDALA // SACRED BRAHMASTHAN VOID</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Vastu B",
                    title: "Climate-Calibrated Scientific Vastu",
                    desc: "A scientific interpretation where room orientation prioritizes actual sun angles, prevailing Bangalore breeze directions, and employee circadian comfort.",
                    perks: ["Science & Climate-Driven", "Optimized Daylight & Views", "Modern Design Freedom"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <rect x="105" y="58" width="110" height="67" stroke="#1C1D1F" stroke-width="1.6" fill="rgba(255,255,255,0.75)"/>
    <!-- Solar Elliptical Arc -->
    <path d="M55 120 A110 56 0 0 1 265 120" stroke="#DDAF4C" stroke-width="1.8" class="dna-sun-path"/>
    <circle cx="82" cy="78" r="5" stroke="#DDAF4C" stroke-width="1.6" fill="#FFFFFF"/>
    <text x="82" y="68" font-family="'Lintel', sans-serif" font-size="6" fill="#DDAF4C" text-anchor="middle">MORNING</text>
    <circle cx="160" cy="64" r="6" stroke="#DDAF4C" stroke-width="1.8" fill="rgba(221,175,76,0.35)"/>
    <text x="160" y="54" font-family="'Lintel', sans-serif" font-size="6" fill="#DDAF4C" text-anchor="middle">PEAK NOON</text>
    <!-- Prevailing SW Wind Vector -->
    <path d="M35 130 L95 104" stroke="#7A8B71" stroke-width="2" class="dna-wind-path"/>
    <polygon points="95,104 86,104 90,110" fill="#7A8B71"/>
    <text x="52" y="145" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71">SW BREEZE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">SOLAR PATH CALIBRATION // MICROCLIMATE AERODYNAMICS</text>
</svg>`
                }
            },

            // CHAPTER 10: Generational Living / Zoning
            {
                id: 10,
                category: terms.isCommercial ? "Zoning Dynamics // Executive vs. Collaborative" : "Generational Living // Family Dynamics",
                question: terms.isCommercial ? "How should executive leadership suites and collaborative team zones be organized?" : "How should private suites be organized for parents and children?",
                tip: terms.isCommercial ? "A dedicated ground-floor executive boardroom allows seamless VIP and client access without disrupting confidential upper-level team workflows." : "Having an elder-friendly, step-free master bedroom suite on the ground floor ensures aging parents live comfortably without stair climbing.",
                optionA: {
                    key: "A",
                    tag: "Zoning A",
                    title: terms.isCommercial ? "Dedicated Ground-Floor Executive Suite" : "Dedicated Ground Floor Suite",
                    desc: terms.isCommercial ? "A prime ground-level executive suite, client boardroom, and restroom with step-free access, keeping high-frequency visitor meetings separated from internal team floors." : "A spacious ground-floor master suite with step-free curbless bathrooms and a private sit-out for parents, keeping louder activities upstairs.",
                    perks: [terms.isCommercial ? "Seamless Client Access" : "Elder Comfort (Zero Stairs)", "Private Garden Sit-Out", terms.isCommercial ? "Confidential Separation" : "Quiet Generational Separation"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Ground Suite Plan -->
    <rect x="45" y="38" width="135" height="87" stroke="#1C1D1F" stroke-width="2" fill="rgba(255,255,255,0.92)"/>
    <rect x="135" y="38" width="45" height="42" stroke="#1C1D1F" stroke-width="1.2" fill="#E6E4DC"/>
    <text x="157" y="62" font-family="'Lintel', sans-serif" font-size="6" fill="#666666" text-anchor="middle">ENSUITE</text>
    <rect x="62" y="60" width="42" height="36" stroke="#D66A48" stroke-width="1.4" fill="rgba(214,106,72,0.1)"/>
    <!-- Step-Free Threshold Indicator -->
    <line x1="45" y1="110" x2="15" y2="110" stroke="#7A8B71" stroke-width="2.2"/>
    <text x="30" y="105" font-family="'Lintel', sans-serif" font-size="6" font-weight="bold" fill="#7A8B71">STEP-FREE</text>
    <!-- Acoustic Buffer Wall -->
    <line x1="180" y1="34" x2="180" y2="132" stroke="#1C1D1F" stroke-width="2.2"/>
    <line x1="184" y1="34" x2="184" y2="132" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="2 2"/>
    <text x="238" y="85" font-family="'Lintel', sans-serif" font-size="7" fill="#888888" text-anchor="middle">SEPARATE WING</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">STEP-FREE GROUND SUITE // ACOUSTIC BUFFER ENVELOPE</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Zoning B",
                    title: terms.isCommercial ? "Fluid Interconnected Team Lounges" : "Connected Inter-Generational Lounges",
                    desc: terms.isCommercial ? "An open layout where team lounges and collaboration breakout zones across floors connect visually, encouraging agile cross-functional interaction." : "An open living layout where family lounges on each floor connect visually and acoustically, encouraging everyone to gather and share daily life.",
                    perks: ["Continuous Interaction", "Fluid Social Spaces", "Cross-Team Synergy"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Central Hub -->
    <circle cx="160" cy="80" r="36" stroke="#D66A48" stroke-width="1.6" stroke-dasharray="4 3" fill="rgba(214,106,72,0.08)" class="dna-pulse-focal"/>
    <text x="160" y="82" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#D66A48" text-anchor="middle">COMMUNAL HUB</text>
    <!-- Satellite Pods -->
    <rect x="35" y="58" width="58" height="42" stroke="#1C1D1F" stroke-width="1.6"/>
    <text x="64" y="82" font-family="'Lintel', sans-serif" font-size="6" fill="#1C1D1F" text-anchor="middle">ZONE 01</text>
    <rect x="227" y="58" width="58" height="42" stroke="#1C1D1F" stroke-width="1.6"/>
    <text x="256" y="82" font-family="'Lintel', sans-serif" font-size="6" fill="#1C1D1F" text-anchor="middle">ZONE 02</text>
    <line x1="93" y1="80" x2="124" y2="80" stroke="#7A8B71" stroke-width="1.8" class="dna-wind-path"/>
    <line x1="196" y1="80" x2="227" y2="80" stroke="#7A8B71" stroke-width="1.8" class="dna-wind-path"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">FLUID MULTI-TIER LOUNGES // ZERO BARRIERS</text>
</svg>`
                }
            },

            // CHAPTER 11: Focus & Acoustics
            {
                id: 11,
                category: terms.isCommercial ? "Acoustic Engineering // Focus & Confidentiality" : "Acoustic Sanctuary // Work & Focus",
                question: terms.isCommercial ? "How should acoustic privacy and confidential discussions be handled?" : "How do you handle work-from-home or study needs?",
                tip: terms.isCommercial ? "Open-plan commercial spaces require specialized high-STC soundproof pods to prevent open bullpen chatter from bleeding into executive conference calls." : "Working from home in India requires deliberate acoustic isolation to block out household sounds, kitchen pressure cookers, and street hawkers.",
                optionA: {
                    key: "A",
                    tag: "Acoustic A",
                    title: terms.isCommercial ? "Acoustically Isolated Focus Pods & Cabins" : "Soundproof Dedicated Study / Home Office",
                    desc: terms.isCommercial ? "Acoustically sealed executive cabins and phone booths with drop-seal doors and sound-dampening wall panels, guaranteeing confidentiality for sensitive negotiations." : "An acoustically sealed workspace with double-glazed doors and sound-dampening wall panels for distraction-free video calls and quiet study.",
                    perks: ["Zero Distractions", "High-STC Soundproofing", "Confidentiality Guaranteed"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Heavy Acoustic Perimeter Envelope (Poché) -->
    <rect x="80" y="32" width="160" height="98" stroke="#1C1D1F" stroke-width="2.8" fill="rgba(255,255,255,0.92)"/>
    <rect x="85" y="37" width="150" height="88" stroke="#D66A48" stroke-width="1.4" stroke-dasharray="4 2"/>
    <!-- Acoustic Slat Paneling -->
    <g stroke="#888888" stroke-width="1.2">
        <line x1="92" y1="42" x2="92" y2="72"/><line x1="100" y1="42" x2="100" y2="72"/><line x1="108" y1="42" x2="108" y2="72"/><line x1="116" y1="42" x2="116" y2="72"/>
    </g>
    <!-- Focus Workstation -->
    <rect x="135" y="68" width="48" height="26" stroke="#1C1D1F" stroke-width="1.6" fill="#E6E4DC"/>
    <circle cx="159" cy="106" r="5" stroke="#D66A48" stroke-width="1.4"/>
    <text x="210" y="55" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#7A8B71">&lt; 30 DB</text>
    <text x="210" y="66" font-family="'Lintel', sans-serif" font-size="5" fill="#888888">STUDIO SILENCE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">DECIBEL ISOLATION // HIGH-STC ACOUSTIC PODS</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Acoustic B",
                    title: terms.isCommercial ? "Integrated Breakout Alcoves & Open Pods" : "Integrated Living Nooks & Alcoves",
                    desc: terms.isCommercial ? "Semi-private acoustic breakout banquettes and study counters woven into open team areas, keeping collaborative momentum flowing naturally." : "Built-in study desks integrated into family areas, bedroom bay windows, or kitchen corridors, staying naturally connected to home life.",
                    perks: ["Connected to Routine", "Flexible Multi-Use Spaces", "Casual & Accessible"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <rect x="55" y="32" width="210" height="98" stroke="#1C1D1F" stroke-width="1.8" fill="none"/>
    <!-- Deep Window Alcove Desk with Shadow -->
    <polygon points="55,58 30,58 30,108 55,108" stroke="#D66A48" stroke-width="2" fill="rgba(214,106,72,0.12)"/>
    <line x1="30" y1="86" x2="55" y2="86" stroke="#1C1D1F" stroke-width="2"/>
    <rect x="135" y="72" width="10" height="42" stroke="#1C1D1F" stroke-width="1.2" stroke-dasharray="2 2"/>
    <text x="195" y="85" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F" text-anchor="middle">MAIN ACTIVITY</text>
    <text x="42" y="126" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">ALCOVE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">SEAMLESS INTEGRATION // BUILT-IN WORK ALCOVES</text>
</svg>`
                }
            },

            // CHAPTER 12: Plot Utilization
            {
                id: 12,
                category: terms.isCommercial ? "Plot Utilization // Terraces vs. Enclosed Work Area" : "Plot Utilization // Terraces vs. Enclosed Space",
                question: "How would you like to invest your available plot area?",
                tip: `In South Indian plateau climates like Bangalore, deep covered outdoor terraces can be enjoyed 10 months of the year for ${terms.isCommercial ? "client entertaining and team lunches" : "morning tea and evening hosting"}...`,
                optionA: {
                    key: "A",
                    tag: "Terraces A",
                    title: terms.isCommercial ? "Covered Breakout Terraces & Outdoor Verandahs" : "Large Covered Verandahs & Sit-Outs",
                    desc: terms.isCommercial ? "Sacrificing extra internal desk capacity to create 10-foot-deep sheltered landscaped terraces usable year-round for team standups, client mixers, and outdoor work." : "Sacrificing extra bedroom size to create 10-foot-deep sheltered outdoor terrace gardens usable all year round for morning coffee and hosting friends.",
                    perks: ["Usable Outdoor Space All Year", "Thermal Shade Buffer", "Garden Connection"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Indoor Enclosed Wing -->
    <rect x="45" y="32" width="95" height="103" stroke="#1C1D1F" stroke-width="1.6" fill="#E6E4DC"/>
    <text x="92" y="85" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">INDOOR SUITE</text>
    <!-- Deep Sheltered Verandah / Terrace (10ft deep) with Angled Shadow -->
    <rect x="140" y="32" width="125" height="103" stroke="#D66A48" stroke-width="2" fill="rgba(255,255,255,0.92)"/>
    <polygon points="140,32 265,32 280,50 140,50" fill="rgba(0,0,0,0.07)"/>
    <line x1="255" y1="32" x2="255" y2="135" stroke="#1C1D1F" stroke-width="2.2"/>
    <!-- Outdoor Lounge Daybed -->
    <rect x="165" y="90" width="48" height="26" rx="3" stroke="#7A8B71" stroke-width="1.4" fill="rgba(122,139,113,0.14)"/>
    <circle cx="218" cy="103" r="3.5" fill="#7A8B71"/>
    <line x1="140" y1="22" x2="265" y2="22" stroke="#D66A48" stroke-width="1"/>
    <text x="202" y="17" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">3.0M DEEP VERANDAH</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">ALL-SEASON OUTDOOR LIVING // VERANDAH CONNECTION</text>
</svg>`
                },
                optionB: {
                    key: "B",
                    tag: "Interior B",
                    title: terms.isCommercial ? "Maximized Indoor Floor Plates & Boardrooms" : "Bigger Indoor Living & Dressing Areas",
                    desc: terms.isCommercial ? "Maximized climate-controlled interior floor plates with expansive executive boardrooms, dedicated server room facilities, and maximum desk density." : "Maximized air-conditioned interior rooms with expansive walk-in dressing parlors, luxurious spa bathrooms, and dedicated private sitting lounges.",
                    perks: ["Spacious Indoor Luxury", terms.isCommercial ? "Max Desk & Meeting Capacity" : "Generous Walk-In Closets", "Year-Round Climate Comfort"],
                    svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <!-- Maximized Full Interior Box -->
    <rect x="45" y="32" width="230" height="103" stroke="#1C1D1F" stroke-width="2" fill="rgba(255,255,255,0.92)"/>
    <!-- Master / Executive Suite Chamber -->
    <rect x="60" y="58" width="52" height="48" stroke="#1C1D1F" stroke-width="1.4"/>
    <text x="86" y="84" font-family="'Lintel', sans-serif" font-size="6" fill="#1C1D1F" text-anchor="middle">PRIMARY SUITE</text>
    <line x1="135" y1="32" x2="135" y2="135" stroke="#1C1D1F" stroke-width="1.4"/>
    <!-- Walk-in Wardrobe / Dedicated Boardroom -->
    <rect x="145" y="45" width="48" height="38" stroke="#D66A48" stroke-width="1.4" stroke-dasharray="3 2" fill="rgba(214,106,72,0.08)"/>
    <text x="169" y="66" font-family="'Lintel', sans-serif" font-size="5" fill="#D66A48" text-anchor="middle">DRESSING / VAULT</text>
    <!-- Spa Bath / Conference Restrooms -->
    <line x1="202" y1="32" x2="202" y2="135" stroke="#1C1D1F" stroke-width="1.4"/>
    <ellipse cx="238" cy="85" rx="17" ry="11" stroke="#7A8B71" stroke-width="1.4" fill="rgba(122,139,113,0.12)"/>
    <text x="238" y="87" font-family="'Lintel', sans-serif" font-size="5" fill="#7A8B71" text-anchor="middle">SPA / AMENITY</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">EXPANSIVE INTERIOR // DEDICATED SUITES &amp; SPA AMENITIES</text>
</svg>`
                }
            }
        ];

        return chapters[index];
    }

    // -------------------------------------------------------------------------
    // 3. INITIALIZATION & DOM ATTACHMENT
    // -------------------------------------------------------------------------
    function init() {
        cacheDOMElements();
        attachEventListeners();
        checkUrlTrigger();
    }

    function cacheDOMElements() {
        overlayEl = document.getElementById('dna-modal-overlay');
        floatingDockEl = document.getElementById('dna-floating-dock');
        closeBtnEl = document.getElementById('dna-modal-close-btn');
        slideContainerEl = document.getElementById('dna-slide-container');
        counterEl = document.getElementById('dna-modal-counter');
        progressBarEl = document.getElementById('dna-modal-progress-bar');
        categoryEl = document.getElementById('dna-chapter-category');
        questionEl = document.getElementById('dna-slide-question');
        cardAEl = document.getElementById('dna-card-a');
        cardBEl = document.getElementById('dna-card-b');
        tipEl = document.getElementById('dna-modal-tip');
        btnPrevEl = document.getElementById('dna-modal-btn-prev');
        btnNextEl = document.getElementById('dna-modal-btn-next');
        interactiveBodyEl = document.getElementById('dna-modal-interactive-body');
        resultViewEl = document.getElementById('dna-modal-result-view');
    }

    function attachEventListeners() {
        if (floatingDockEl) {
            floatingDockEl.addEventListener('click', openModal);
        }

        if (closeBtnEl) {
            closeBtnEl.addEventListener('click', closeModal);
        }

        if (overlayEl) {
            overlayEl.addEventListener('click', (e) => {
                if (e.target === overlayEl) {
                    closeModal();
                }
            });
        }

        if (cardAEl) cardAEl.addEventListener('click', () => selectChoice('A'));
        if (cardBEl) cardBEl.addEventListener('click', () => selectChoice('B'));

        if (btnPrevEl) btnPrevEl.addEventListener('click', () => navigateSlide('prev'));
        if (btnNextEl) btnNextEl.addEventListener('click', () => navigateSlide('next'));

        const resetBtn = document.getElementById('dna-result-reset-btn');
        if (resetBtn) resetBtn.addEventListener('click', resetModalDiscovery);

        const closeResultBtn = document.getElementById('dna-result-close-btn');
        if (closeResultBtn) closeResultBtn.addEventListener('click', closeModal);

        const modifyBtn = document.getElementById('dna-result-modify-btn');
        if (modifyBtn) modifyBtn.addEventListener('click', () => jumpToEditChapter(0));

        const downloadPdfBtn = document.getElementById('dna-download-pdf-btn');
        if (downloadPdfBtn) downloadPdfBtn.addEventListener('click', () => window.print());

        // Escape Key to Close
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlayEl && overlayEl.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Check URL trigger e.g. ?preview_dna=true
    function checkUrlTrigger() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('preview_dna') === 'true') {
            if (floatingDockEl) {
                floatingDockEl.classList.add('preview-active');
            }
            openModal();
        }
    }

    // Modal Visibility Handlers
    function openModal() {
        if (!overlayEl) return;
        overlayEl.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        renderSlide(modalState.currentIndex);
    }

    function closeModal() {
        if (!overlayEl) return;
        overlayEl.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Select Option A or B
    function selectChoice(key) {
        modalState.userAnswers[modalState.currentIndex] = key;

        cardAEl.classList.toggle('selected', key === 'A');
        cardBEl.classList.toggle('selected', key === 'B');

        btnNextEl.disabled = false;

        // Visual feedback bounce
        btnNextEl.style.transform = 'scale(1.04)';
        setTimeout(() => {
            btnNextEl.style.transform = '';
        }, 180);
    }

    // Book Slide Transition Logic
    function navigateSlide(direction) {
        if (modalState.isAnimating) return;

        if (direction === 'next') {
            if (modalState.userAnswers[modalState.currentIndex] === null) return;

            if (modalState.currentIndex === 11) {
                // Reached completion! Transition to Results Dossier
                showResultDossier();
                return;
            }

            modalState.isAnimating = true;
            slideContainerEl.className = 'dna-slide-container slide-exit-left';

            setTimeout(() => {
                modalState.currentIndex++;
                renderSlide(modalState.currentIndex);

                slideContainerEl.className = 'dna-slide-container slide-enter-from-right';
                void slideContainerEl.offsetWidth; // Force reflow
                slideContainerEl.className = 'dna-slide-container slide-active';
                modalState.isAnimating = false;
            }, 300);

        } else if (direction === 'prev') {
            if (modalState.currentIndex === 0) return;

            modalState.isAnimating = true;
            slideContainerEl.className = 'dna-slide-container slide-exit-right';

            setTimeout(() => {
                modalState.currentIndex--;
                renderSlide(modalState.currentIndex);

                slideContainerEl.className = 'dna-slide-container slide-enter-from-left';
                void slideContainerEl.offsetWidth; // Force reflow
                slideContainerEl.className = 'dna-slide-container slide-active';
                modalState.isAnimating = false;
            }, 300);
        }
    }

    // Render Slide Content with Context-Aware Terms
    function renderSlide(index) {
        const chapter = getChapterData(index);
        if (!chapter) return;

        // Progress indicators
        counterEl.innerHTML = `${String(chapter.id).padStart(2, '0')} <span class="counter-total">/ 12</span>`;
        const progressPct = ((index + 1) / 12) * 100;
        progressBarEl.style.width = `${progressPct}%`;

        // Question Lockup
        categoryEl.textContent = chapter.category;
        questionEl.textContent = chapter.question;

        // Choice A Card
        renderCard(cardAEl, chapter.optionA, modalState.userAnswers[index] === 'A');

        // Choice B Card
        renderCard(cardBEl, chapter.optionB, modalState.userAnswers[index] === 'B');

        // Tip
        tipEl.innerHTML = `<strong>Architectural Reality // What This Means in Practice:</strong> ${chapter.tip}`;

        // Controls
        btnPrevEl.disabled = index === 0;
        const hasSelection = modalState.userAnswers[index] !== null;
        btnNextEl.disabled = !hasSelection;
        btnNextEl.innerHTML = (index === 11) ? 'GENERATE ARCHITECTURAL DNA &rarr;' : 'NEXT CHAPTER &rarr;';
    }

    function renderCard(cardElement, option, isSelected) {
        cardElement.classList.toggle('selected', isSelected);

        const visualEl = cardElement.querySelector('.dna-card-visual') || cardElement.querySelector('.dna-card-image');
        if (visualEl) {
            visualEl.innerHTML = option.svg;
        }

        const tagEl = cardElement.querySelector('.dna-card-tag');
        if (tagEl) tagEl.textContent = option.tag;

        const titleEl = cardElement.querySelector('.dna-card-title');
        if (titleEl) titleEl.textContent = option.title;

        const descEl = cardElement.querySelector('.dna-card-desc');
        if (descEl) descEl.textContent = option.desc;

        const perksEl = cardElement.querySelector('.dna-card-perks');
        if (perksEl) {
            perksEl.innerHTML = option.perks.map(p => `<span class="dna-perk-badge">${p}</span>`).join('');
        }
    }

    // -------------------------------------------------------------------------
    // 4. STEP-BACK EDITING FROM RESULT DOSSIER
    // -------------------------------------------------------------------------
    function jumpToEditChapter(targetIndex) {
        resultViewEl.style.display = 'none';
        interactiveBodyEl.style.display = 'block';
        btnPrevEl.style.display = 'inline-block';
        btnNextEl.style.display = 'inline-block';

        modalState.currentIndex = targetIndex;
        modalState.isEditing = true;

        // Insert or update the editing notification banner
        let bannerEl = document.getElementById('dna-edit-mode-banner');
        if (!bannerEl) {
            bannerEl = document.createElement('div');
            bannerEl.id = 'dna-edit-mode-banner';
            bannerEl.className = 'dna-edit-mode-banner';
            interactiveBodyEl.insertBefore(bannerEl, slideContainerEl);
        }
        bannerEl.style.display = 'flex';
        bannerEl.innerHTML = `
            <span class="dna-edit-mode-text">&#9998; CALIBRATING CHAPTER ${String(targetIndex + 1).padStart(2, '0')}: Make adjustments below, or return directly to your results.</span>
            <button id="dna-return-dossier-btn" class="dna-return-dossier-btn">RETURN TO DOSSIER &rarr;</button>
        `;

        const returnBtn = document.getElementById('dna-return-dossier-btn');
        if (returnBtn) {
            returnBtn.addEventListener('click', () => {
                bannerEl.style.display = 'none';
                modalState.isEditing = false;
                showResultDossier();
            });
        }

        renderSlide(targetIndex);
        slideContainerEl.className = 'dna-slide-container slide-active';
    }

    // -------------------------------------------------------------------------
    // 5. SIMPLIFIED RESULT DOSSIER & LEDGER GENERATOR
    // -------------------------------------------------------------------------
    function showResultDossier() {
        // Hide edit banner if visible
        const bannerEl = document.getElementById('dna-edit-mode-banner');
        if (bannerEl) bannerEl.style.display = 'none';
        modalState.isEditing = false;

        interactiveBodyEl.style.display = 'none';
        btnPrevEl.style.display = 'none';
        btnNextEl.style.display = 'none';
        resultViewEl.style.display = 'block';

        const ans = modalState.userAnswers;
        const terms = getTypologyTerms();

        // Persona Algorithm
        let persona = "The Tropical Courtyard Modernist";
        let strapline = "Your architectural DNA calls for an earthy, climate-calibrated sanctuary built around private central courtyards, natural passive cooling, and lush indoor-outdoor verandas.";

        const isResidential = ans[0] === 'A';
        const isEarthy = ans[1] === 'A';
        const isCourtyard = ans[4] === 'A';
        const isDoubleHeight = ans[5] === 'A';
        const isVerandah = ans[11] === 'A';

        if (isResidential && isEarthy && isCourtyard) {
            persona = "The Tropical Courtyard Modernist";
            strapline = "Your ideal home breathes with nature—featuring exposed brickwork, shaded garden courtyards, deep eaves against summer sun, and generous sit-out verandahs.";
        } else if (!isEarthy && isDoubleHeight) {
            persona = isResidential ? "The Contemporary Minimalist" : "The Modernist Corporate Visionary";
            strapline = isResidential 
                ? "You value grand open volume, geometric clarity, expansive floor-to-ceiling glass, and a sleek modern architectural identity without visual clutter."
                : "You value striking monolithic scale, double-height brand atriums, precision curtain-wall engineering, and prestigious corporate clarity.";
        } else if (ans[8] === 'A' && isCourtyard) {
            persona = isResidential ? "The Vastu Biophilic Visionary" : "The Vedic Biophilic Strategist";
            strapline = isResidential
                ? "You seek harmonious grounding—combining classical Vedic Vastu alignment with open-to-sky living courts, fresh cross-breezes, and step-free multigenerational living."
                : "You align organizational energy—merging classical commercial Vastu mandala positioning with lush central lightwells and biophilic cross-ventilation.";
        } else if (!isResidential) {
            persona = "The Urban Commercial Strategist";
            strapline = "Your focus is on bold architectural brand presence, seamless customer circulation, acoustically soundproof focus cabins, and smart climate engineering.";
        } else {
            persona = "The Balanced Architectural Purist";
            strapline = "A thoughtful fusion of modern comfort, natural ventilation, peaceful private sleeping suites, and generous all-season outdoor terraces.";
        }

        document.getElementById('dna-result-persona').textContent = persona;
        document.getElementById('dna-result-strapline').textContent = strapline;

        // 3 Simple Takeaways (Adapted with Dynamic Vocabulary)
        const take1Title = isResidential ? "1. Residential Identity" : "1. Facility & Brand Identity";
        const take1Text = isEarthy 
            ? (isResidential 
                ? "You gravitate toward authentic materials like exposed brick and natural stone that mature gracefully over time."
                : "Your facility embraces earthy authenticity with exposed brickwork, stone plinths, and warm acoustic timber accents.")
            : (isResidential
                ? "You prefer sleek, contemporary finishes with crisp lines, large glass expanses, and understated luxury."
                : "Your facility projects high-prestige modern clarity with monolithic volumes, clean structural glass, and polished executive suites.");

        const take2Title = "2. Summer Heat & Climate Engineering";
        const take2Text = ans[2] === 'A'
            ? `Your ${terms.building} will prioritize deep shaded balcony overhangs and jali screens, keeping interior ${terms.space}s naturally cool and cutting power consumption.`
            : `Your ${terms.building} will utilize high-performance double-glazed glass and automated louvers for precision temperature control and zero dust infiltration.`;

        const take3Title = isResidential ? "3. Lifestyle & Family Privacy" : "3. Workplace Dynamics & Acoustic Confidentiality";
        const take3Text = ans[9] === 'A'
            ? (isResidential
                ? "You value generational privacy with peaceful, elder-friendly step-free ground suites and sound-isolated quiet zones for work and rest."
                : "You prioritize clear zoning between high-confidentiality executive suites/boardrooms on the ground floor and collaborative team areas.")
            : (isResidential
                ? "You prioritize open, connected family lounges where different generations interact naturally throughout the day."
                : "You foster agile collaboration with fluid, interconnected team breakout lounges across floors.");

        document.getElementById('takeaway-1-title').textContent = take1Title;
        document.getElementById('takeaway-1-text').textContent = take1Text;
        document.getElementById('takeaway-2-title').textContent = take2Title;
        document.getElementById('takeaway-2-text').textContent = take2Text;
        document.getElementById('takeaway-3-title').textContent = take3Title;
        document.getElementById('takeaway-3-text').textContent = take3Text;

        // ---------------------------------------------------------------------
        // Populate 12-Chapter Selections Ledger with "EDIT ✎" Buttons
        // ---------------------------------------------------------------------
        const ledgerContainer = document.getElementById('dna-selections-ledger');
        if (ledgerContainer) {
            ledgerContainer.innerHTML = '';

            for (let i = 0; i < 12; i++) {
                const ch = getChapterData(i);
                const chosenKey = ans[i] || 'A';
                const chosenOpt = chosenKey === 'A' ? ch.optionA : ch.optionB;

                const itemEl = document.createElement('div');
                itemEl.className = 'dna-ledger-item';
                itemEl.innerHTML = `
                    <div class="dna-ledger-info">
                        <span class="dna-ledger-meta">CH ${String(i + 1).padStart(2, '0')} // ${ch.category.split('//')[0].trim()}</span>
                        <span class="dna-ledger-choice">Option ${chosenKey}: ${chosenOpt.title}</span>
                    </div>
                    <button class="dna-ledger-edit-btn" data-chapter="${i}" title="Modify Chapter ${i + 1}">EDIT &#9998;</button>
                `;

                const editBtn = itemEl.querySelector('.dna-ledger-edit-btn');
                editBtn.addEventListener('click', () => {
                    jumpToEditChapter(i);
                });

                ledgerContainer.appendChild(itemEl);
            }
        }

        // ---------------------------------------------------------------------
        // Configure 12-Point Summary and Inquiry Lead Data Transmission
        // ---------------------------------------------------------------------
        const chapterSummaries = [];
        for (let i = 0; i < 12; i++) {
            const ch = getChapterData(i);
            const chosenKey = ans[i] || 'A';
            const chosenOpt = chosenKey === 'A' ? ch.optionA : ch.optionB;
            chapterSummaries.push(`${i + 1}. ${ch.category.split('//')[0].trim()}: Option ${chosenKey} - ${chosenOpt.title} [${chosenOpt.tag}]`);
        }

        const subjectParam = encodeURIComponent(`Spatial DNA Profile: ${persona}`);
        const messageParam = encodeURIComponent(
`Hi Prashanth & Studio Equilibrium Team,

I have completed The Spatial DNA Discovery on your website and synthesized my architectural profile:

────────────────────────────────────────────
ARCHITECTURAL PERSONA: ${persona.toUpperCase()}
TYPOLOGY: ${terms.context.toUpperCase()}
────────────────────────────────────────────
${strapline}

KEY ARCHITECTURAL PRINCIPLES:
• ${take1Title}: ${take1Text}
• ${take2Title}: ${take2Text}
• ${take3Title}: ${take3Text}

12-CHAPTER ARCHITECTURAL SELECTIONS:
${chapterSummaries.map(s => `• ${s}`).join('\n')}

I would like to discuss translating this Spatial DNA architectural blueprint into a schematic concept for our upcoming project.`
        );

        const inquiryBtn = document.getElementById('dna-inquiry-cta-btn');
        if (inquiryBtn) {
            inquiryBtn.href = `contact.html?subject=${subjectParam}&message=${messageParam}`;
        }
    }

    function resetModalDiscovery() {
        modalState.currentIndex = 0;
        modalState.userAnswers.fill(null);
        modalState.isEditing = false;

        const bannerEl = document.getElementById('dna-edit-mode-banner');
        if (bannerEl) bannerEl.style.display = 'none';

        resultViewEl.style.display = 'none';
        interactiveBodyEl.style.display = 'block';
        btnPrevEl.style.display = 'inline-block';
        btnNextEl.style.display = 'inline-block';

        renderSlide(0);
        slideContainerEl.className = 'dna-slide-container slide-active';
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
