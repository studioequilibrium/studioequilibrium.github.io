/**
 * STUDIO EQUILIBRIUM — THE SPATIAL DNA DISCOVERY MODAL
 * 12-Chapter Animated Architectural Vector Wireframe Engine
 * Standalone Implementation (js/dna-modal.js)
 */

(function () {
    'use strict';

    // 12 Refined Chapters in Natural Indian English with Animated Architectural SVG Wireframes
    const DNA_CHAPTERS_MODAL = [
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
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="20" y1="140" x2="300" y2="140" stroke="#888888" stroke-width="0.5" stroke-dasharray="3 3"/>
    <line x1="50" y1="25" x2="50" y2="135" stroke="#D66A48" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
    <line x1="270" y1="25" x2="270" y2="135" stroke="#D66A48" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
    <rect x="75" y="75" width="170" height="60" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(255,255,255,0.7)"/>
    <rect x="60" y="38" width="135" height="42" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(255,255,255,0.85)"/>
    <rect x="60" y="38" width="8" height="42" fill="#D66A48"/>
    <line x1="195" y1="65" x2="255" y2="65" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="205" y1="65" x2="205" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="220" y1="65" x2="220" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="235" y1="65" x2="235" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <line x1="250" y1="65" x2="250" y2="75" stroke="#1C1D1F" stroke-width="1.2"/>
    <rect x="80" y="48" width="55" height="24" stroke="#1C1D1F" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="108" y1="48" x2="108" y2="72" stroke="#1C1D1F" stroke-width="1"/>
    <rect x="208" y="90" width="22" height="45" stroke="#D66A48" stroke-width="1.5"/>
    <circle cx="224" cy="114" r="1.5" fill="#D66A48"/>
    <rect x="90" y="90" width="70" height="35" stroke="#1C1D1F" stroke-width="1"/>
    <line x1="125" y1="90" x2="125" y2="125" stroke="#1C1D1F" stroke-width="1"/>
    <path d="M42 135 L42 105 M35 110 L42 100 L49 110 M38 102 L42 94 L46 102" stroke="#7A8B71" stroke-width="1.5"/>
    <circle cx="42" cy="85" r="14" stroke="#7A8B71" stroke-width="1.2" stroke-dasharray="3 2" fill="rgba(122, 139, 113, 0.08)"/>
    <line x1="60" y1="148" x2="245" y2="148" stroke="#888888" stroke-width="1"/>
    <path d="M60 145 L60 151 M245 145 L245 151" stroke="#888888" stroke-width="1"/>
    <text x="152" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PRIVATE RESIDENCE // 24.0M</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Commercial & Public",
                title: "Offices, Retail, F&B Cafes & Clinics",
                desc: "A dynamic commercial workspace, retail boutique, or public hospitality venue engineered for high customer footfall and brand impact.",
                perks: ["Brand Experience", "Customer Flow", "Functional Impact"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="60" y1="30" x2="60" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <line x1="125" y1="30" x2="125" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <line x1="195" y1="30" x2="195" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <line x1="260" y1="30" x2="260" y2="135" stroke="#1C1D1F" stroke-width="1.8"/>
    <rect x="56" y="30" width="208" height="6" fill="#1C1D1F"/>
    <rect x="56" y="75" width="208" height="5" fill="#1C1D1F"/>
    <circle cx="60" cy="20" r="6" stroke="#D66A48" stroke-width="1"/>
    <text x="60" y="23" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">A</text>
    <circle cx="125" cy="20" r="6" stroke="#D66A48" stroke-width="1"/>
    <text x="125" y="23" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">B</text>
    <circle cx="195" cy="20" r="6" stroke="#D66A48" stroke-width="1"/>
    <text x="195" y="23" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">C</text>
    <circle cx="260" cy="20" r="6" stroke="#D66A48" stroke-width="1"/>
    <text x="260" y="23" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48" text-anchor="middle">D</text>
    <line x1="82" y1="36" x2="82" y2="75" stroke="#888888" stroke-width="0.8" stroke-dasharray="2 2"/>
    <line x1="104" y1="36" x2="104" y2="75" stroke="#888888" stroke-width="0.8" stroke-dasharray="2 2"/>
    <line x1="148" y1="36" x2="148" y2="75" stroke="#888888" stroke-width="0.8" stroke-dasharray="2 2"/>
    <line x1="172" y1="36" x2="172" y2="75" stroke="#888888" stroke-width="0.8" stroke-dasharray="2 2"/>
    <line x1="216" y1="36" x2="216" y2="75" stroke="#888888" stroke-width="0.8" stroke-dasharray="2 2"/>
    <line x1="238" y1="36" x2="238" y2="75" stroke="#888888" stroke-width="0.8" stroke-dasharray="2 2"/>
    <path d="M30 120 Q120 120 160 100 T220 110" stroke="#D66A48" stroke-width="1.5" class="dna-flow-arrow" fill="none"/>
    <polygon points="222,110 214,107 217,114" fill="#D66A48"/>
    <line x1="110" y1="80" x2="210" y2="80" stroke="#DDAF4C" stroke-width="2"/>
    <rect x="135" y="90" width="50" height="45" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(255,255,255,0.8)"/>
    <line x1="160" y1="90" x2="160" y2="135" stroke="#1C1D1F" stroke-width="1"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">COMMERCIAL FOOTFALL &amp; BRAND ATRIUM</text>
</svg>`
            }
        },
        {
            id: 2,
            category: "Architectural Language // Indian Context",
            question: "Which architectural style resonates most with your taste?",
            tip: "Earthy modernism matures gracefully with an organic natural patina over decades, whereas crisp minimalism offers sharp geometric clarity with expansive glazing.",
            optionA: {
                key: "A",
                tag: "Style Choice A",
                title: "Earthy & Tropical Modernism",
                desc: "Exposed wire-cut clay brickwork, local Sadarahalli stone, pitched roof profiles, warm timber rafters, and lush indoor courtyards.",
                perks: ["Exposed Brickwork", "Natural Stone", "Lush Courtyards"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <polygon points="45,75 140,30 235,75" stroke="#1C1D1F" stroke-width="1.8" fill="none"/>
    <line x1="60" y1="70" x2="70" y2="85" stroke="#D66A48" stroke-width="1.2"/>
    <line x1="80" y1="60" x2="90" y2="75" stroke="#D66A48" stroke-width="1.2"/>
    <line x1="100" y1="50" x2="110" y2="65" stroke="#D66A48" stroke-width="1.2"/>
    <line x1="120" y1="40" x2="130" y2="55" stroke="#D66A48" stroke-width="1.2"/>
    <g stroke="#D66A48" stroke-width="0.9" opacity="0.85">
        <rect x="55" y="75" width="70" height="60" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(214,106,72,0.06)"/>
        <line x1="55" y1="87" x2="125" y2="87"/><line x1="55" y1="99" x2="125" y2="99"/><line x1="55" y1="111" x2="125" y2="111"/><line x1="55" y1="123" x2="125" y2="123"/>
        <line x1="72" y1="75" x2="72" y2="87"/><line x1="108" y1="75" x2="108" y2="87"/>
        <line x1="90" y1="87" x2="90" y2="99"/>
        <line x1="72" y1="99" x2="72" y2="111"/><line x1="108" y1="99" x2="108" y2="111"/>
        <line x1="90" y1="111" x2="90" y2="123"/>
    </g>
    <line x1="175" y1="75" x2="175" y2="135" stroke="#1C1D1F" stroke-width="2"/>
    <line x1="225" y1="75" x2="225" y2="135" stroke="#1C1D1F" stroke-width="2"/>
    <rect x="50" y="130" width="220" height="5" stroke="#1C1D1F" stroke-width="1" fill="#ECEAE4"/>
    <path d="M198 135 Q195 105 190 95 M190 95 Q175 88 165 95 M190 95 Q195 80 205 85 M190 95 Q210 92 215 102" stroke="#7A8B71" stroke-width="1.5" fill="none"/>
    <circle cx="198" cy="133" r="3" fill="#7A8B71"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">EXPOSED BRICK // PITCHED ROOFLINE // STONE PLINTH</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Style Choice B",
                title: "Contemporary Minimalist",
                desc: "Crisp clean monolithic volumes, expansive floor-to-ceiling glass, subtle exposed concrete accents, and seamless modern elegance.",
                perks: ["Clean Geometric Lines", "Expansive Glass", "Contemporary Polish"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="70" y1="132" x2="250" y2="132" stroke="#D66A48" stroke-width="1" stroke-dasharray="4 2"/>
    <polygon points="60,35 240,35 260,75 60,75" stroke="#1C1D1F" stroke-width="1.8" fill="rgba(255,255,255,0.9)"/>
    <line x1="240" y1="75" x2="240" y2="135" stroke="#D66A48" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
    <rect x="80" y="75" width="130" height="57" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(255,255,255,0.6)"/>
    <line x1="125" y1="75" x2="125" y2="132" stroke="#888888" stroke-width="1"/>
    <line x1="170" y1="75" x2="170" y2="132" stroke="#888888" stroke-width="1"/>
    <line x1="90" y1="110" x2="115" y2="110" stroke="#D66A48" stroke-width="1.2"/>
    <rect x="220" y="115" width="45" height="17" stroke="#7A8B71" stroke-width="1" fill="rgba(122,139,113,0.08)"/>
    <text x="242" y="127" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71" text-anchor="middle">WATER POOL</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PURE GEOMETRIC CANTILEVER // SEAMLESS GLAZING</text>
</svg>`
            }
        },
        {
            id: 3,
            category: "Climate Defense // Summer Heat",
            question: "How should your building handle harsh summer afternoon heat?",
            tip: "Passive exterior shade structures like terracotta jalis block up to 75% of solar heat before it ever touches the building, drastically cutting electricity bills.",
            optionA: {
                key: "A",
                tag: "Strategy A",
                title: "Deep Balcony Overhangs & Jali Screens",
                desc: "Generous 2-meter shaded overhangs and breathable terracotta brick jalis that shade rooms naturally and capture refreshing breezes.",
                perks: ["Natural Solar Shading", "Low AC Power Bills", "Soft Ambient Glow"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <g class="dna-sun-path">
        <circle cx="45" cy="30" r="12" stroke="#DDAF4C" stroke-width="1.5" fill="rgba(221, 175, 76, 0.12)"/>
        <line x1="45" y1="12" x2="45" y2="6" stroke="#DDAF4C" stroke-width="1.5"/>
        <line x1="63" y1="30" x2="69" y2="30" stroke="#DDAF4C" stroke-width="1.5"/>
        <line x1="58" y1="43" x2="63" y2="48" stroke="#DDAF4C" stroke-width="1.5"/>
        <line x1="58" y1="17" x2="63" y2="12" stroke="#DDAF4C" stroke-width="1.5"/>
    </g>
    <path d="M58 38 L140 85" stroke="#DDAF4C" stroke-width="1.5" stroke-dasharray="4 3" class="dna-sun-beam"/>
    <polygon points="120,45 270,45 270,55 140,55" fill="#1C1D1F" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="230" y="55" width="40" height="80" stroke="#1C1D1F" stroke-width="1.5"/>
    <g stroke="#D66A48" stroke-width="1" opacity="0.9">
        <rect x="145" y="55" width="28" height="80" stroke="#D66A48" stroke-width="1.5" fill="rgba(214,106,72,0.06)"/>
        <circle cx="152" cy="65" r="2.5"/><circle cx="166" cy="65" r="2.5"/>
        <circle cx="152" cy="77" r="2.5"/><circle cx="166" cy="77" r="2.5"/>
        <circle cx="152" cy="89" r="2.5"/><circle cx="166" cy="89" r="2.5"/>
        <circle cx="152" cy="101" r="2.5"/><circle cx="166" cy="101" r="2.5"/>
        <circle cx="152" cy="113" r="2.5"/><circle cx="166" cy="113" r="2.5"/>
        <circle cx="152" cy="125" r="2.5"/><circle cx="166" cy="125" r="2.5"/>
    </g>
    <path d="M110 95 Q140 92 180 95 T220 95" stroke="#7A8B71" stroke-width="1.5" stroke-dasharray="4 3" class="dna-wind-path"/>
    <rect x="175" y="55" width="55" height="80" fill="rgba(0,0,0,0.03)" stroke="#1C1D1F" stroke-width="1"/>
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
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="120" y="25" width="150" height="15" fill="#1C1D1F"/>
    <rect x="120" y="120" width="150" height="15" fill="#1C1D1F"/>
    <line x1="180" y1="40" x2="180" y2="120" stroke="#1C1D1F" stroke-width="2"/>
    <line x1="186" y1="40" x2="186" y2="120" stroke="#1C1D1F" stroke-width="2"/>
    <line x1="183" y1="45" x2="183" y2="115" stroke="#D66A48" stroke-width="0.8" stroke-dasharray="2 2"/>
    <g stroke="#1C1D1F" stroke-width="1.5">
        <line x1="140" y1="48" x2="165" y2="40"/>
        <line x1="140" y1="62" x2="165" y2="54"/>
        <line x1="140" y1="76" x2="165" y2="68"/>
        <line x1="140" y1="90" x2="165" y2="82"/>
        <line x1="140" y1="104" x2="165" y2="96"/>
        <line x1="140" y1="118" x2="165" y2="110"/>
    </g>
    <line x1="152" y1="35" x2="152" y2="125" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="3 2"/>
    <path d="M70 60 L145 78 L95 105" stroke="#DDAF4C" stroke-width="1.5" class="dna-sun-beam"/>
    <polygon points="95,105 104,103 100,97" fill="#DDAF4C"/>
    <text x="220" y="82" font-family="'Lintel', sans-serif" font-size="8" fill="#1C1D1F" text-anchor="middle">24°C</text>
    <text x="220" y="93" font-family="'Lintel', sans-serif" font-size="6" fill="#888888" text-anchor="middle">CLIMATE SEALED</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">INSULATED DOUBLE GLAZING // MOTORIZED SUN LOUVERS</text>
</svg>`
            }
        },
        {
            id: 4,
            category: "Natural Light // Mood & Ambience",
            question: "How do you want natural sunlight to fill your space?",
            tip: "Direct tropical sun causes glare and heats up rooms quickly; soft indirect light from north-facing skylights offers gallery-quality calmness all day.",
            optionA: {
                key: "A",
                tag: "Light Approach A",
                title: "Soft, Indirect Light & Skylights",
                desc: "Gentle, uniform daylight brought down through central lightwells and north-facing glass slots that keeps rooms cool and calm.",
                perks: ["Zero Harsh Glare", "Gallery-Grade Serenity", "Cooler Rooms"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <polygon points="60,135 60,65 140,25 140,65 240,25 240,135" stroke="#1C1D1F" stroke-width="1.8" fill="none"/>
    <line x1="140" y1="25" x2="140" y2="65" stroke="#D66A48" stroke-width="2"/>
    <line x1="240" y1="25" x2="240" y2="65" stroke="#D66A48" stroke-width="2"/>
    <g stroke="#DDAF4C" stroke-width="1.2" stroke-dasharray="4 3" class="dna-light-ray">
        <line x1="142" y1="35" x2="190" y2="125"/>
        <line x1="142" y1="48" x2="170" y2="125"/>
        <line x1="142" y1="60" x2="150" y2="125"/>
        <line x1="242" y1="35" x2="280" y2="125"/>
        <line x1="242" y1="52" x2="260" y2="125"/>
    </g>
    <line x1="125" y1="65" x2="155" y2="65" stroke="#1C1D1F" stroke-width="2"/>
    <rect x="75" y="80" width="22" height="30" stroke="#1C1D1F" stroke-width="1" fill="rgba(214,106,72,0.1)"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">NORTH CLERESTORY LIGHTWELL // 100% GLARE-FREE CALM</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Light Approach B",
                title: "Direct Dramatic Sun & Shadow Play",
                desc: "Intentional sunbeams piercing deep into high-ceiling living areas, creating ever-changing geometric shadow art on bare stone walls.",
                perks: ["Dynamic Day Experience", "Architectural Shadow Art", "Warm Morning Radiance"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="70" y="30" width="180" height="105" stroke="#1C1D1F" stroke-width="1.8" fill="none"/>
    <line x1="100" y1="30" x2="130" y2="30" stroke="#FAF9F6" stroke-width="3"/>
    <line x1="100" y1="30" x2="100" y2="38" stroke="#D66A48" stroke-width="1.5"/>
    <line x1="130" y1="30" x2="130" y2="38" stroke="#D66A48" stroke-width="1.5"/>
    <polygon points="100,30 130,30 225,135 175,135" fill="rgba(221, 175, 76, 0.2)" stroke="#DDAF4C" stroke-width="1.2" class="dna-sun-beam"/>
    <g stroke="#1C1D1F" stroke-width="0.8" opacity="0.35">
        <line x1="185" y1="35" x2="250" y2="100"/>
        <line x1="200" y1="35" x2="250" y2="85"/>
        <line x1="215" y1="35" x2="250" y2="70"/>
        <line x1="230" y1="35" x2="250" y2="55"/>
    </g>
    <line x1="140" y1="118" x2="140" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <circle cx="140" cy="115" r="2.5" fill="#1C1D1F"/>
    <line x1="140" y1="135" x2="170" y2="135" stroke="#1C1D1F" stroke-width="1.5" opacity="0.4"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">HIGH-CONTRAST CHIAROSCURO // GEOMETRIC SUN SLOTS</text>
</svg>`
            }
        },
        {
            id: 5,
            category: "Thermal Envelope // Cooling Strategy",
            question: "How do you prefer to keep your indoor spaces cool?",
            tip: "Central open-to-sky courtyards naturally vent hot air upward like a chimney, creating continuous fresh breezes across living spaces without electricity.",
            optionA: {
                key: "A",
                tag: "Cooling Choice A",
                title: "Central Open Courtyard & Cross-Ventilation",
                desc: "A traditional open-to-sky central courtyard that naturally pulls cooler air through living areas, reducing the need for heavy air conditioning.",
                perks: ["Fresh Outdoor Air", "Natural Chimney Cooling", "Substantial Energy Savings"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="50" y="50" width="70" height="85" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(255,255,255,0.8)"/>
    <rect x="200" y="50" width="70" height="85" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(255,255,255,0.8)"/>
    <rect x="120" y="85" width="80" height="50" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="3 3" fill="rgba(214,106,72,0.04)" class="dna-pulse-focal"/>
    <path d="M160 135 L160 110" stroke="#7A8B71" stroke-width="1.5"/>
    <circle cx="160" cy="102" r="11" stroke="#7A8B71" stroke-width="1.2" fill="rgba(122,139,113,0.15)"/>
    <path d="M25 125 Q80 120 120 125 T195 125" stroke="#7A8B71" stroke-width="1.5" stroke-dasharray="5 3" class="dna-wind-path"/>
    <path d="M160 90 L160 30" stroke="#D66A48" stroke-width="1.5" stroke-dasharray="4 3" class="dna-wind-path"/>
    <polygon points="160,25 156,33 164,33" fill="#D66A48"/>
    <text x="160" y="20" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">THERMAL STACK</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PASSIVE COURTYARD INDUCTION // CONTINUOUS CROSS-BREEZE</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Cooling Choice B",
                title: "Airtight Envelope & High-Efficiency AC",
                desc: "Precision climate-sealed walls with advanced inverter VRV air-conditioning, keeping dust, road noise, and monsoon humidity out.",
                perks: ["Zero Dust & City Noise", "Guaranteed 24°C Comfort", "Acoustic Silence"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="60" y="35" width="200" height="100" stroke="#1C1D1F" stroke-width="2" fill="rgba(255,255,255,0.85)"/>
    <rect x="64" y="39" width="192" height="92" stroke="#D66A48" stroke-width="1" stroke-dasharray="3 2" opacity="0.6"/>
    <rect x="80" y="45" width="160" height="12" fill="#ECEAE4" stroke="#1C1D1F" stroke-width="1"/>
    <line x1="95" y1="57" x2="135" y2="57" stroke="#1C1D1F" stroke-width="2"/>
    <line x1="185" y1="57" x2="225" y2="57" stroke="#1C1D1F" stroke-width="2"/>
    <path d="M115 62 Q115 100 160 100 T205 62" stroke="#7A8B71" stroke-width="1.2" stroke-dasharray="4 3" class="dna-flow-arrow"/>
    <rect x="145" y="75" width="30" height="18" rx="2" stroke="#1C1D1F" stroke-width="1" fill="#FFFFFF"/>
    <text x="160" y="87" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#D66A48" text-anchor="middle">23.5°</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">HIGH-EFFICIENCY VRV // CONTINUOUS THERMAL ENVELOPE</text>
</svg>`
            }
        },
        {
            id: 6,
            category: "Vertical Scale // Ceiling Experience",
            question: "How should ceiling height shape your main living area?",
            tip: "A double-height living room feels grand and architecturally luxurious, but reduces the total carpet area available for bedrooms on the upper floor.",
            optionA: {
                key: "A",
                tag: "Ceiling A",
                title: "Double-Height Living Void",
                desc: "A dramatic 20-foot tall ceiling over the living room with an upper-floor mezzanine bridge that overlooks the family below.",
                perks: ["Spectacular Visual Drama", "Inter-Floor Connection", "Grand Architectural Luxury"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="60" y="25" width="200" height="110" stroke="#1C1D1F" stroke-width="1.8" fill="none"/>
    <rect x="175" y="75" width="85" height="6" fill="#1C1D1F"/>
    <line x1="175" y1="65" x2="260" y2="65" stroke="#888888" stroke-width="1"/>
    <rect x="175" y="60" width="4" height="15" fill="#D66A48"/>
    <line x1="75" y1="28" x2="75" y2="132" stroke="#D66A48" stroke-width="1"/>
    <path d="M72 32 L75 27 L78 32 M72 128 L75 133 L78 128" stroke="#D66A48" stroke-width="1"/>
    <text x="82" y="82" font-family="'Lintel', sans-serif" font-size="7" fill="#D66A48">H: 6.8M VOID</text>
    <line x1="125" y1="25" x2="125" y2="80" stroke="#1C1D1F" stroke-width="0.8"/>
    <circle cx="125" cy="84" r="5" stroke="#DDAF4C" stroke-width="1.5" fill="rgba(221,175,76,0.3)" class="dna-pulse-focal"/>
    <line x1="60" y1="45" x2="60" y2="135" stroke="#7A8B71" stroke-width="3"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">SOARING VERTICAL VOID // MEZZANINE VISUAL OVERLOOK</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Ceiling B",
                title: "Single-Height Maximized Floor Area",
                desc: "Standard 10.5-foot ceilings throughout, allowing an extra bedroom suite, gym, or home office on the floor above.",
                perks: ["Maximum Usable Square Footage", "Extra Bedroom on Upper Floor", "Cozy, Intimate Scale"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="60" y="25" width="200" height="110" stroke="#1C1D1F" stroke-width="1.8" fill="none"/>
    <rect x="60" y="78" width="200" height="8" fill="#1C1D1F"/>
    <text x="110" y="55" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">SUITE 01</text>
    <text x="210" y="55" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">SUITE 02</text>
    <line x1="160" y1="25" x2="160" y2="78" stroke="#1C1D1F" stroke-width="1.2"/>
    <text x="110" y="110" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">LIVING ROOM</text>
    <text x="210" y="110" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">DINING + KITCHEN</text>
    <line x1="160" y1="86" x2="160" y2="135" stroke="#1C1D1F" stroke-width="1.2"/>
    <rect x="20" y="45" width="35" height="18" stroke="#D66A48" stroke-width="1" fill="#FFFFFF"/>
    <text x="37" y="57" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">+100%</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">MAXIMIZED FLOOR AREA // DUAL COMPLETE USABLE LEVELS</text>
</svg>`
            }
        },
        {
            id: 7,
            category: "Entrance Transition // Arrival Experience",
            question: "What should guests experience the moment they enter your home?",
            tip: "In traditional Indian homes, an entry foyer protects family privacy from delivery couriers and casual visitors before they see the main living hall.",
            optionA: {
                key: "A",
                tag: "Entry A",
                title: "Private Step-Back Foyer & Screened Verandah",
                desc: "A distinct entrance lobby with a decorative partition screen that shields family activities from the main door and street.",
                perks: ["Complete Family Privacy", "Formal Welcoming Zone", "Shoe & Coat Storage"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="50" y1="60" x2="50" y2="110" stroke="#1C1D1F" stroke-width="2"/>
    <path d="M50 110 A40 40 0 0 0 90 70" stroke="#D66A48" stroke-width="1" stroke-dasharray="3 2"/>
    <rect x="135" y="45" width="6" height="60" fill="#D66A48" stroke="#1C1D1F" stroke-width="1"/>
    <line x1="145" y1="50" x2="145" y2="100" stroke="#888888" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="150" y1="50" x2="150" y2="100" stroke="#888888" stroke-width="1" stroke-dasharray="2 2"/>
    <path d="M35 85 L95 85 Q115 85 115 115 T180 115" stroke="#7A8B71" stroke-width="1.5" stroke-dasharray="4 3" class="dna-wind-path"/>
    <text x="95" y="45" font-family="'Lintel', sans-serif" font-size="6" fill="#888888">FOYER</text>
    <text x="210" y="85" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F">PRIVATE LIVING</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">L-SHAPED REVEAL // COMPLETE SIGHTLINE BUFFER</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Entry B",
                title: "Direct Open Arrival into Grand Living",
                desc: "Opening the front door immediately reveals the full expanse of your living, dining, and garden spaces in one breathtaking vista.",
                perks: ["Instant 'Wow' Impact", "Expansive Open Feel", "Maximum Visual Continuity"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="55" y1="85" x2="95" y2="55" stroke="#D66A48" stroke-width="2"/>
    <circle cx="55" cy="85" r="3" fill="#D66A48"/>
    <path d="M55 85 L260 35 M55 85 L260 135" stroke="#DDAF4C" stroke-width="1.2" stroke-dasharray="4 3" class="dna-sun-path"/>
    <rect x="140" y="55" width="40" height="25" stroke="#1C1D1F" stroke-width="1"/>
    <text x="160" y="70" font-family="'Lintel', sans-serif" font-size="6" fill="#666666" text-anchor="middle">LOUNGE</text>
    <rect x="210" y="55" width="45" height="25" stroke="#1C1D1F" stroke-width="1"/>
    <text x="232" y="70" font-family="'Lintel', sans-serif" font-size="6" fill="#666666" text-anchor="middle">GARDEN</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">UNOBSTRUCTED PANORAMA // INSTANT SPATIAL DRAMA</text>
</svg>`
            }
        },
        {
            id: 8,
            category: "Privacy Gradient // Orientation",
            question: "How should your home relate to the neighborhood around it?",
            tip: "In dense Indian cities, inward-looking courtyard layouts keep you completely private from neighboring multi-story buildings and street traffic.",
            optionA: {
                key: "A",
                tag: "Orientation A",
                title: "Inward-Facing Courtyard Life",
                desc: "Solid external walls with minimal street windows; all primary living rooms wrap around a private inner garden sanctuary.",
                perks: ["Total Neighbor Privacy", "Zero Street Noise", "Safe Sanctuary for Kids"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="60" y="35" width="200" height="100" stroke="#1C1D1F" stroke-width="2" fill="#FFFFFF"/>
    <rect x="115" y="60" width="90" height="50" stroke="#7A8B71" stroke-width="1.5" fill="rgba(122,139,113,0.12)"/>
    <circle cx="160" cy="85" r="9" stroke="#7A8B71" stroke-width="1.2" fill="rgba(122,139,113,0.2)"/>
    <path d="M85 50 L125 70 M235 50 L195 70 M85 120 L125 100 M235 120 L195 100" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="3 2"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PROTECTIVE SOLID EXTERIOR // INWARD PRIVATE OASIS</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Orientation B",
                title: "Outward-Facing Panoramic Glazing",
                desc: "Expansive floor-to-ceiling glass walls that frame surrounding trees, landscapes, skylines, and sunset vistas.",
                perks: ["Breathtaking Natural Views", "Fluid Indoor-Outdoor Living", "Abundant Sunlight"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="60" y="35" width="50" height="100" fill="#ECEAE4" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="110" y1="35" x2="260" y2="35" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="110" y1="135" x2="260" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <line x1="260" y1="35" x2="260" y2="135" stroke="#D66A48" stroke-width="2.5"/>
    <g stroke="#7A8B71" stroke-width="1.2" stroke-dasharray="4 3" class="dna-wind-path">
        <line x1="160" y1="85" x2="290" y2="40"/>
        <line x1="160" y1="85" x2="300" y2="85"/>
        <line x1="160" y1="85" x2="290" y2="130"/>
    </g>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">PANORAMIC CURTAIN WALL // HORIZON VIEW CONNECTION</text>
</svg>`
            }
        },
        {
            id: 9,
            category: "Vastu & Energy Flow // Philosophy",
            question: "How important is Vastu Shastra in structuring your floor plans?",
            tip: "We seamlessly merge Vastu principles with modern bioclimatic architecture so your home honors Vedic traditions without compromising on modern aesthetics.",
            optionA: {
                key: "A",
                tag: "Vastu A",
                title: "Traditional Vastu Mandala Alignment",
                desc: "Strict adherence to Vastu Purusha Mandala: Kitchen in Agni (SE), Master in Nairutya (SW), Puja/Water in Ishanya (NE), and open Brahmasthan.",
                perks: ["100% Vastu Compliance", "Harmonious Spiritual Flow", "Complete Peace of Mind"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <g stroke="#1C1D1F" stroke-width="1.2">
        <rect x="105" y="30" width="110" height="95" fill="rgba(255,255,255,0.8)"/>
        <line x1="141.6" y1="30" x2="141.6" y2="125"/>
        <line x1="178.3" y1="30" x2="178.3" y2="125"/>
        <line x1="105" y1="61.6" x2="215" y2="61.6"/>
        <line x1="105" y1="93.3" x2="215" y2="93.3"/>
    </g>
    <rect x="141.6" y="61.6" width="36.7" height="31.7" fill="rgba(214,106,72,0.15)" stroke="#D66A48" stroke-width="1.5" class="dna-pulse-focal"/>
    <circle cx="160" cy="77.5" r="4" fill="#D66A48"/>
    <text x="160" y="24" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#D66A48" text-anchor="middle">NORTH</text>
    <text x="230" y="79" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#1C1D1F" text-anchor="middle">EAST</text>
    <text x="123" y="48" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71" text-anchor="middle">NW</text>
    <text x="197" y="48" font-family="'Lintel', sans-serif" font-size="6" fill="#DDAF4C" text-anchor="middle">NE // WATER</text>
    <text x="123" y="112" font-family="'Lintel', sans-serif" font-size="6" fill="#888888" text-anchor="middle">SW // EARTH</text>
    <text x="197" y="112" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">SE // FIRE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">9-SQUARE VASTU MANDALA // SACRED BRAHMASTHAN VOID</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Vastu B",
                title: "Climate-Calibrated Scientific Vastu",
                desc: "A scientific interpretation where room orientation prioritizes actual sun angles, prevailing Bangalore breeze directions, and optimal site views.",
                perks: ["Science & Climate-Driven", "Optimized Daylight & Views", "Modern Design Freedom"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="110" y="60" width="100" height="65" stroke="#1C1D1F" stroke-width="1.5" fill="rgba(255,255,255,0.7)"/>
    <path d="M60 120 A105 55 0 0 1 260 120" stroke="#DDAF4C" stroke-width="1.5" stroke-dasharray="4 3" class="dna-sun-path"/>
    <circle cx="85" cy="80" r="5" stroke="#DDAF4C" stroke-width="1.5" fill="#FFFFFF"/>
    <text x="85" y="70" font-family="'Lintel', sans-serif" font-size="6" fill="#DDAF4C" text-anchor="middle">MORNING</text>
    <circle cx="160" cy="65" r="6" stroke="#DDAF4C" stroke-width="1.5" fill="rgba(221,175,76,0.3)"/>
    <text x="160" y="55" font-family="'Lintel', sans-serif" font-size="6" fill="#DDAF4C" text-anchor="middle">NOON PEAK</text>
    <path d="M40 130 L95 105" stroke="#7A8B71" stroke-width="1.8" class="dna-wind-path"/>
    <polygon points="95,105 87,105 91,111" fill="#7A8B71"/>
    <text x="55" y="145" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71">SW BREEZE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">SOLAR PATH CALIBRATION // MICROCLIMATE AERODYNAMICS</text>
</svg>`
            }
        },
        {
            id: 10,
            category: "Generational Living // Family Dynamics",
            question: "How should private suites be organized for parents and children?",
            tip: "Having an elder-friendly, step-free master bedroom suite on the ground floor ensures aging parents live comfortably without stair climbing.",
            optionA: {
                key: "A",
                tag: "Family A",
                title: "Dedicated Ground Floor Suite",
                desc: "A spacious ground-floor master suite with step-free curbless bathrooms and a private sit-out for parents, keeping louder activities upstairs.",
                perks: ["Elder Comfort (Zero Stairs)", "Private Garden Sit-Out", "Quiet Generational Separation"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="50" y="40" width="130" height="85" stroke="#1C1D1F" stroke-width="1.8" fill="rgba(255,255,255,0.9)"/>
    <rect x="140" y="40" width="40" height="40" stroke="#1C1D1F" stroke-width="1" fill="#ECEAE4"/>
    <text x="160" y="62" font-family="'Lintel', sans-serif" font-size="6" fill="#666666" text-anchor="middle">ENSUITE</text>
    <rect x="65" y="60" width="40" height="35" stroke="#D66A48" stroke-width="1.2" fill="rgba(214,106,72,0.08)"/>
    <line x1="50" y1="110" x2="20" y2="110" stroke="#7A8B71" stroke-width="2"/>
    <text x="35" y="105" font-family="'Lintel', sans-serif" font-size="6" fill="#7A8B71">STEP-FREE</text>
    <line x1="180" y1="35" x2="180" y2="130" stroke="#1C1D1F" stroke-width="2"/>
    <line x1="183" y1="35" x2="183" y2="130" stroke="#D66A48" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="235" y="85" font-family="'Lintel', sans-serif" font-size="7" fill="#888888" text-anchor="middle">LIVING WING</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">ELDER-FRIENDLY GROUND SUITE // ACOUSTIC SECLUSION</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Family B",
                title: "Connected Inter-Generational Lounges",
                desc: "An open living layout where family lounges on each floor connect visually and acoustically, encouraging everyone to gather and share daily life.",
                perks: ["Connected Family Life", "Continuous Interaction", "Fluid Social Spaces"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <circle cx="160" cy="80" r="35" stroke="#D66A48" stroke-width="1.5" stroke-dasharray="4 3" fill="rgba(214,106,72,0.06)" class="dna-pulse-focal"/>
    <text x="160" y="82" font-family="'Lintel', sans-serif" font-size="7" font-weight="bold" fill="#D66A48" text-anchor="middle">COMMUNAL HUB</text>
    <rect x="40" y="60" width="55" height="40" stroke="#1C1D1F" stroke-width="1.5"/>
    <text x="67" y="82" font-family="'Lintel', sans-serif" font-size="6" fill="#1C1D1F" text-anchor="middle">GRANDPARENTS</text>
    <rect x="225" y="60" width="55" height="40" stroke="#1C1D1F" stroke-width="1.5"/>
    <text x="252" y="82" font-family="'Lintel', sans-serif" font-size="6" fill="#1C1D1F" text-anchor="middle">CHILDREN WING</text>
    <line x1="95" y1="80" x2="125" y2="80" stroke="#7A8B71" stroke-width="1.5" class="dna-wind-path"/>
    <line x1="195" y1="80" x2="225" y2="80" stroke="#7A8B71" stroke-width="1.5" class="dna-wind-path"/>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">FLUID MULTI-GENERATIONAL LOUNGES // ZERO BARRIERS</text>
</svg>`
            }
        },
        {
            id: 11,
            category: "Acoustic Sanctuary // Work & Focus",
            question: "How do you handle work-from-home or study needs?",
            tip: "Working from home in India requires deliberate acoustic isolation to block out household sounds, kitchen pressure cookers, and street hawkers.",
            optionA: {
                key: "A",
                tag: "Study A",
                title: "Soundproof Dedicated Study / Home Office",
                desc: "An acoustically sealed workspace with double-glazed doors and sound-dampening wall panels for distraction-free video calls and quiet study.",
                perks: ["Zero Household Distractions", "Professional Video Call Backdrop", "Deep Work Sanctuary"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="85" y="35" width="150" height="95" stroke="#1C1D1F" stroke-width="2.5" fill="rgba(255,255,255,0.9)"/>
    <rect x="89" y="39" width="142" height="87" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="3 2"/>
    <g stroke="#888888" stroke-width="1">
        <line x1="95" y1="42" x2="95" y2="70"/><line x1="102" y1="42" x2="102" y2="70"/><line x1="109" y1="42" x2="109" y2="70"/><line x1="116" y1="42" x2="116" y2="70"/>
    </g>
    <rect x="140" y="70" width="45" height="24" stroke="#1C1D1F" stroke-width="1.5" fill="#ECEAE4"/>
    <circle cx="162.5" cy="105" r="5" stroke="#D66A48" stroke-width="1.2"/>
    <text x="210" y="55" font-family="'Lintel', sans-serif" font-size="7" fill="#7A8B71">&lt; 30 DB</text>
    <text x="210" y="65" font-family="'Lintel', sans-serif" font-size="5" fill="#888888">STUDIO SILENCE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">DECIBEL ISOLATION // DEEP WORK STUDY SANCTUARY</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Study B",
                title: "Integrated Living Nooks & Alcoves",
                desc: "Built-in study desks integrated into family areas, bedroom bay windows, or kitchen corridors, staying naturally connected to home life.",
                perks: ["Connected to Family Routine", "Flexible Multi-Use Spaces", "Casual & Convenient"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="60" y="35" width="200" height="95" stroke="#1C1D1F" stroke-width="1.5" fill="none"/>
    <polygon points="60,60 35,60 35,105 60,105" stroke="#D66A48" stroke-width="1.8" fill="rgba(214,106,72,0.08)"/>
    <line x1="35" y1="85" x2="58" y2="85" stroke="#1C1D1F" stroke-width="2"/>
    <rect x="130" y="75" width="10" height="40" stroke="#1C1D1F" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="195" y="85" font-family="'Lintel', sans-serif" font-size="7" fill="#1C1D1F" text-anchor="middle">FAMILY ACTIVITY</text>
    <text x="47" y="125" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">STUDY ALCOVE</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">SEAMLESS INTEGRATION // WINDOW BAY WORK NOOK</text>
</svg>`
            }
        },
        {
            id: 12,
            category: "Plot Utilization // Terraces vs. Enclosed Space",
            question: "How would you like to invest your available plot area?",
            tip: "In South Indian plateau climates like Bangalore, deep covered verandahs can be enjoyed 10 months of the year for morning tea and evening entertaining.",
            optionA: {
                key: "A",
                tag: "Terraces A",
                title: "Large Covered Verandahs & Sit-Outs",
                desc: "Sacrificing extra bedroom size to create 10-foot-deep sheltered outdoor terrace gardens usable all year round for morning coffee and hosting friends.",
                perks: ["Usable Outdoor Living All Year", "Natural Thermal Buffer", "Tropical Garden Connection"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="50" y="35" width="90" height="100" stroke="#1C1D1F" stroke-width="1.5" fill="#ECEAE4"/>
    <text x="95" y="85" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">INDOOR BEDROOM</text>
    <rect x="140" y="35" width="120" height="100" stroke="#D66A48" stroke-width="1.8" fill="rgba(255,255,255,0.9)"/>
    <line x1="250" y1="35" x2="250" y2="135" stroke="#1C1D1F" stroke-width="2"/>
    <rect x="165" y="90" width="45" height="25" rx="3" stroke="#7A8B71" stroke-width="1.2" fill="rgba(122,139,113,0.12)"/>
    <circle cx="215" cy="102" r="3" fill="#7A8B71"/>
    <line x1="140" y1="25" x2="260" y2="25" stroke="#D66A48" stroke-width="1"/>
    <text x="200" y="20" font-family="'Lintel', sans-serif" font-size="6" fill="#D66A48" text-anchor="middle">3.0M DEEP VERANDAH</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">ALL-SEASON OUTDOOR LIVING // VERANDAH CONNECTION</text>
</svg>`
            },
            optionB: {
                key: "B",
                tag: "Interior B",
                title: "Bigger Indoor Living & Dressing Areas",
                desc: "Maximized air-conditioned interior rooms with expansive walk-in dressing parlors, luxurious spa bathrooms, and dedicated private sitting lounges.",
                perks: ["Spacious Indoor Luxury", "Generous Walk-In Closets", "Year-Round Climate Comfort"],
                svg: `<svg viewBox="0 0 320 160" class="dna-card-svg" xmlns="http://www.w3.org/2000/svg" fill="none">
    <line x1="20" y1="135" x2="300" y2="135" stroke="#1C1D1F" stroke-width="1.5"/>
    <rect x="50" y="35" width="220" height="100" stroke="#1C1D1F" stroke-width="1.8" fill="rgba(255,255,255,0.9)"/>
    <rect x="65" y="60" width="50" height="45" stroke="#1C1D1F" stroke-width="1.2"/>
    <text x="90" y="85" font-family="'Lintel', sans-serif" font-size="6" fill="#1C1D1F" text-anchor="middle">MASTER SUITE</text>
    <line x1="135" y1="35" x2="135" y2="135" stroke="#1C1D1F" stroke-width="1.2"/>
    <rect x="145" y="45" width="45" height="35" stroke="#D66A48" stroke-width="1.2" stroke-dasharray="2 2" fill="rgba(214,106,72,0.06)"/>
    <text x="167" y="65" font-family="'Lintel', sans-serif" font-size="5" fill="#D66A48" text-anchor="middle">WALK-IN CLOSET</text>
    <line x1="195" y1="35" x2="195" y2="135" stroke="#1C1D1F" stroke-width="1.2"/>
    <ellipse cx="230" cy="85" rx="16" ry="10" stroke="#7A8B71" stroke-width="1.2" fill="rgba(122,139,113,0.1)"/>
    <text x="230" y="87" font-family="'Lintel', sans-serif" font-size="5" fill="#7A8B71" text-anchor="middle">SPA BATH</text>
    <text x="160" y="152" font-family="'Lintel', sans-serif" font-size="7" fill="#666666" text-anchor="middle">EXPANSIVE INTERIOR // WALK-IN WARDROBE &amp; SPA BATH</text>
</svg>`
            }
        }
    ];

    // Engine State
    const modalState = {
        currentIndex: 0,
        userAnswers: new Array(12).fill(null), // Array of 'A' or 'B'
        isAnimating: false
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

    // Initialization
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
            // 1. Current slide exits to left
            slideContainerEl.className = 'dna-slide-container slide-exit-left';

            setTimeout(() => {
                modalState.currentIndex++;
                renderSlide(modalState.currentIndex);

                // 2. Next slide enters from right
                slideContainerEl.className = 'dna-slide-container slide-enter-from-right';

                // Force reflow
                void slideContainerEl.offsetWidth;

                // 3. Snap smoothly to center active
                slideContainerEl.className = 'dna-slide-container slide-active';
                modalState.isAnimating = false;
            }, 300);

        } else if (direction === 'prev') {
            if (modalState.currentIndex === 0) return;

            modalState.isAnimating = true;
            // 1. Current slide exits to right
            slideContainerEl.className = 'dna-slide-container slide-exit-right';

            setTimeout(() => {
                modalState.currentIndex--;
                renderSlide(modalState.currentIndex);

                // 2. Previous slide enters from left
                slideContainerEl.className = 'dna-slide-container slide-enter-from-left';

                // Force reflow
                void slideContainerEl.offsetWidth;

                // 3. Snap smoothly to center active
                slideContainerEl.className = 'dna-slide-container slide-active';
                modalState.isAnimating = false;
            }, 300);
        }
    }

    // Render Slide Content
    function renderSlide(index) {
        const chapter = DNA_CHAPTERS_MODAL[index];
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

    // =========================================================================
    // SIMPLIFIED RESULT DOSSIER SYNTHESIZER & LEAD TRANSMISSION
    // =========================================================================
    function showResultDossier() {
        interactiveBodyEl.style.display = 'none';
        btnPrevEl.style.display = 'none';
        btnNextEl.style.display = 'none';
        resultViewEl.style.display = 'block';

        const ans = modalState.userAnswers;

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
            persona = "The Contemporary Minimalist";
            strapline = "You value grand open volume, geometric clarity, expansive floor-to-ceiling glass, and a sleek modern architectural identity without visual clutter.";
        } else if (ans[8] === 'A' && isCourtyard) {
            persona = "The Vastu Biophilic Visionary";
            strapline = "You seek harmonious grounding—combining classical Vedic Vastu alignment with open-to-sky living courts, fresh cross-breezes, and step-free multigenerational living.";
        } else if (!isResidential) {
            persona = "The Urban Commercial Strategist";
            strapline = "Your focus is on bold architectural brand presence, seamless customer circulation, acoustically soundproof focus spaces, and smart climate engineering.";
        } else {
            persona = "The Balanced Architectural Purist";
            strapline = "A thoughtful fusion of modern comfort, natural ventilation, peaceful private sleeping suites, and generous all-season outdoor terraces.";
        }

        document.getElementById('dna-result-persona').textContent = persona;
        document.getElementById('dna-result-strapline').textContent = strapline;

        // 3 Simple Takeaways
        const take1Title = isResidential ? "1. Residential Identity" : "1. Commercial Purpose";
        const take1Text = isEarthy 
            ? "You gravitate toward authentic materials like exposed brick and natural stone that mature gracefully over time."
            : "You prefer sleek, contemporary finishes with crisp lines, large glass expanses, and understated luxury.";

        const take2Title = "2. Summer Heat & Climate Control";
        const take2Text = ans[2] === 'A'
            ? "Your building will prioritize deep shaded balcony overhangs and jali screens, keeping rooms naturally cool and cutting air conditioning costs."
            : "Your building will use high-performance double-glazed glass and automated louvers for precise climate and temperature control.";

        const take3Title = "3. Lifestyle & Family Privacy";
        const take3Text = ans[9] === 'A'
            ? "You value generational privacy with peaceful, elder-friendly step-free ground suites and sound-isolated quiet zones for work and rest."
            : "You prioritize open, connected family lounges where different generations interact naturally throughout the day.";

        document.getElementById('takeaway-1-title').textContent = take1Title;
        document.getElementById('takeaway-1-text').textContent = take1Text;
        document.getElementById('takeaway-2-title').textContent = take2Title;
        document.getElementById('takeaway-2-text').textContent = take2Text;
        document.getElementById('takeaway-3-title').textContent = take3Title;
        document.getElementById('takeaway-3-text').textContent = take3Text;

        // Configure 12-point summary and inquiry lead data transmission
        const chapterSummaries = DNA_CHAPTERS_MODAL.map((ch, idx) => {
            const chosenKey = ans[idx];
            const chosenOption = chosenKey === 'A' ? ch.optionA : ch.optionB;
            return `${idx + 1}. ${ch.category}: ${chosenOption.title} [${chosenOption.tag}]`;
        });

        const subjectParam = encodeURIComponent(`Spatial DNA Profile: ${persona}`);
        const messageParam = encodeURIComponent(
`Hi Prashanth & Studio Equilibrium Team,

I have completed The Spatial DNA Discovery on your website and synthesized my architectural profile:

────────────────────────────────────────────
ARCHITECTURAL PERSONA: ${persona.toUpperCase()}
────────────────────────────────────────────
${strapline}

KEY PRINCIPLES:
• ${take1Title}: ${take1Text}
• ${take2Title}: ${take2Text}
• ${take3Title}: ${take3Text}

12-CHAPTER ARCHITECTURAL SELECTIONS:
${chapterSummaries.map(s => `• ${s}`).join('\n')}

I would like to discuss translating this Spatial DNA blueprint into a schematic concept for our upcoming project.`
        );

        const inquiryBtn = document.getElementById('dna-inquiry-cta-btn');
        if (inquiryBtn) {
            inquiryBtn.href = `contact.html?subject=${subjectParam}&message=${messageParam}`;
        }
    }

    function resetModalDiscovery() {
        modalState.currentIndex = 0;
        modalState.userAnswers.fill(null);

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
