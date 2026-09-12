/**
 * STUDIO EQUILIBRIUM — THE DESIGN COMPASS MODAL
 * Context-Aware Architectural Discovery Engine (v8.9)
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
    let choicesDrawerEl = null;
    let previewChoicesBtn = null;
    let drawerCloseBtn = null;
    let drawerBackdropEl = null;
    let drawerDoneBtn = null;

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
    // 2. DYNAMIC 12-CHAPTER ARCHITECTURAL DEFINITIONS & COLLAGE ILLUSTRATIONS
    // -------------------------------------------------------------------------
    function getChapterData(index) {
        const terms = getTypologyTerms();

        const chapters = [
            // CHAPTER 1: Project Typology
            {
                id: 1,
                category: "Project Typology // Purpose & Scope",
                question: "What kind of space are we designing together?",
                tip: "Residential projects focus on privacy, acoustic comfort, and daily shared routines, whereas commercial environments balance brand prestige with high-efficiency customer journeys.",
                optionA: {
                    key: "A",
                    tag: "Residential Space",
                    title: "Villas, Bungalows & Apartments",
                    desc: "A bespoke private residence designed around family comfort, quiet sanctuaries, and multi-generational peace.",
                    perks: ["Private Living", "Family Comfort", "Rest & Solitude"],
                    image: "assets/images/designcompass/1a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Commercial Space",
                    title: "Commercial, Retail & Public Spaces",
                    desc: "Dynamic workspaces, experiential cafes, retail showrooms, or institutional spaces engineered for brand presence and customer flow.",
                    perks: ["Brand Prestige", "High Circulation", "Customer Experience"],
                    image: "assets/images/designcompass/1b.png"
                }
            },

            // CHAPTER 2: Architectural Language
            {
                id: 2,
                category: "Architectural Language // Materiality & Form",
                question: `Which architectural style resonates most with your ${terms.space}?`,
                tip: "Earthy modernism ages gracefully in tropical climates as natural materials develop a rich patina, whereas contemporary minimalism demands sharp maintenance to keep pristine monolithic surfaces.",
                optionA: {
                    key: "A",
                    tag: "Earthy & Biophilic",
                    title: "Earthy, Tropical Modernism",
                    desc: terms.isCommercial ? "Exposed wire-cut clay brickwork, local Sadarahalli stone plinths, warm timber pergola rafters, and lush indoor break-out courtyards." : "Exposed wire-cut clay brickwork, local Sadarahalli stone, pitched roof profiles, warm timber rafters, and lush indoor courtyards.",
                    perks: ["Natural Clay Brick", "Warm Timber Accents", "Biophilic Comfort"],
                    image: "assets/images/designcompass/2a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Contemporary",
                    title: "Contemporary, Crisp Minimalism",
                    desc: terms.isCommercial ? "Crisp monolithic volumes, expansive structural curtain wall glazing, subtle exposed concrete accents, and high-prestige executive identity." : "Crisp clean monolithic volumes, expansive floor-to-ceiling glass, subtle exposed concrete accents, and seamless modern elegance.",
                    perks: ["Expansive Glass Walls", "Monolithic Forms", "Clean Architectural Lines"],
                    image: "assets/images/designcompass/2b.png"
                }
            },

            // CHAPTER 3: Climate Defense
            {
                id: 3,
                category: "Climate Defense // Sun & Rain Protection",
                question: `How should your ${terms.building} handle harsh summer afternoon heat?`,
                tip: `Passive exterior shade structures like terracotta jalis block up to 75% of solar heat before it touches the building, drastically cutting ${terms.isCommercial ? "HVAC operational" : "electricity"} bills.`,
                optionA: {
                    key: "A",
                    tag: "Passive Shading",
                    title: "Deep Overhangs & Terracotta Jalis",
                    desc: `Generous 2-meter shaded overhangs and breathable terracotta brick jalis that shade ${terms.isCommercial ? "workspaces and client suites" : "rooms"} naturally and capture refreshing breezes.`,
                    perks: ["Up to 4°C Cooler Indoors", "Zero-Electricity Cooling", "Play of Light & Shadow"],
                    image: "assets/images/designcompass/3a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Engineered Envelopes",
                    title: "High-Performance Glass & Louvers",
                    desc: "Double-glazed Low-E acoustic glass facades paired with sleek adjustable aluminum architectural louvers for precision climate control.",
                    perks: ["Maximum Glass Transparency", "Engineered UV Protection", "Acoustic Silence"],
                    image: "assets/images/designcompass/3b.png"
                }
            },

            // STEP 04: Materiality & Aging Philosophy
            {
                id: 4,
                category: "Materiality & Craft // Aging Philosophy",
                question: terms.isCommercial 
                    ? "How do you prefer your surfaces and finishes to wear and mature over time?" 
                    : "How do you prefer your home's surfaces and materials to age over time?",
                tip: "Raw natural materials like exposed brick and stone age gracefully with zero repainting needs over decades, whereas sleek polished finishes provide an ultra-clean modern look that benefits from regular maintenance.",
                optionA: {
                    key: "A",
                    tag: "Natural & Honest Patina",
                    title: "Exposed Natural Materials & Organic Patina",
                    desc: terms.isCommercial
                        ? "Honest board-marked concrete, natural rough-hewn stone plinths, exposed clay brick, and untreated wood that gain character with age without peeling paint or synthetic laminates."
                        : "Warm wire-cut clay bricks, local dressed granite, board-formed concrete, and natural timber that mature beautifully over 30+ years with practically zero repaint maintenance.",
                    perks: ["Zero Repaint Maintenance", "Ages Gracefully with Time", "Authentic Earthy Character"],
                    image: "assets/images/designcompass/4a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Pristine & Polished",
                    title: "Sleek, Refined & Polished Modern Surfaces",
                    desc: terms.isCommercial
                        ? "Flawless micro-concrete finishes, seamless engineered quartz, flush matte architectural panels, and pristine monolithic surfaces that project a high-prestige executive identity."
                        : "Crisp white monolithic surfaces, smooth micro-cement, engineered quartz countertops, and seamless flush panels for a clean, spotless, ultra-modern luxury aesthetic.",
                    perks: ["Ultra-Clean Modern Aesthetic", "Smooth Seamless Finishes", "High-End Contemporary Luxury"],
                    image: "assets/images/designcompass/4b.png"
                }
            },

            // CHAPTER 5: Thermal Envelope
            {
                id: 5,
                category: "Thermal Envelope // Ventilation & Airflow",
                question: `How do you prefer to keep indoor ${terms.space}s cool and fresh?`,
                tip: "The stack effect in a central courtyard continuously vents rising hot air out the roof, creating natural suction that pulls fresh outdoor air through the lower living areas 24 hours a day.",
                optionA: {
                    key: "A",
                    tag: "Passive Stack Effect",
                    title: "Central Open Courtyard Stack",
                    desc: `A traditional open-to-sky central courtyard that naturally pulls cooler air through ${terms.isCommercial ? "breakout floors and team areas" : "living areas"}, reducing reliance on heavy air conditioning.`,
                    perks: ["Continuous Fresh Airflow", "Natural Rain Experience", "Lower Carbon Footprint"],
                    image: "assets/images/designcompass/5a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Precision Climate",
                    title: "Sealed & Conditioned Spaces",
                    desc: "An airtight, fully insulated building envelope optimized for high-efficiency inverter VRV/VRF air conditioning and heat recovery ventilation.",
                    perks: ["Zero Outdoor Dust", "Whisper-Quiet Acoustics", "Precise Temperature Control"],
                    image: "assets/images/designcompass/5b.png"
                }
            },

            // CHAPTER 6: Vertical Scale
            {
                id: 6,
                category: "Vertical Scale // Ceilings & Floor Space",
                question: `How should ceiling height shape your main ${terms.isCommercial ? "facility atrium and customer areas" : "living area"}?`,
                tip: terms.isCommercial ? "A double-height brand atrium creates instant prestige and grandeur for visitors, but reduces the total rentable/desk square footage on the upper mezzanine floor." : "A double-height living room feels grand and architecturally luxurious, but reduces the total carpet area available for bedrooms on the upper floor.",
                optionA: {
                    key: "A",
                    tag: "Dramatic Volume",
                    title: terms.isCommercial ? "Double-Height Brand Atrium" : "Double-Height Living Void",
                    desc: terms.isCommercial ? "A dramatic 20-foot tall ceiling over the central entrance atrium with an upper-floor mezzanine bridge overlooking operations." : "A dramatic 20-foot tall ceiling over the living room with an upper-floor mezzanine bridge that overlooks the family below.",
                    perks: ["Unmatched Visual Grandeur", "Enhanced Natural Airflow", "Striking Lightwells"],
                    image: "assets/images/designcompass/6a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Maximized Square Footage",
                    title: "Optimized Flat Double-Floor Slab",
                    desc: terms.isCommercial ? "Standard 10.5-foot ceilings throughout, allowing additional conference suites, executive cabins, or maximum desk capacity on the floor above." : "Standard 10.5-foot ceilings throughout, allowing an extra bedroom suite, gym, or home office on the floor above.",
                    perks: ["Maximum Usable Square Footage", terms.isCommercial ? "Extra Meeting Suites" : "Extra Bedroom Suite", "Cozy, Efficient Scale"],
                    image: "assets/images/designcompass/6b.png"
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
                    tag: "Protected & Layered",
                    title: terms.isCommercial ? "Screened Reception Lobby & Waiting Lounge" : "Private Step-Back Foyer & Screened Verandah",
                    desc: terms.isCommercial ? "A distinct reception lobby with an architectural baffle screen that shields internal team desks, boardroom doors, and operations from the main entrance." : "A distinct entrance lobby with a decorative partition screen that shields family activities from the main door and street.",
                    perks: [terms.isCommercial ? "Client Confidentiality" : "Complete Family Privacy", "Formal Welcoming Zone", "Organized Check-In"],
                    image: "assets/images/designcompass/7a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Instant Spatial Impact",
                    title: terms.isCommercial ? "Direct Open Arrival into Grand Atrium" : "Direct Open Arrival into Grand Living",
                    desc: terms.isCommercial ? "Entering the facility immediately reveals an expansive double-height brand showcase, open collaborative desks, and landscape vistas in one vista." : "Opening the front door immediately reveals the full expanse of your living, dining, and garden spaces in one breathtaking vista.",
                    perks: ["Immediate 'Wow' Factor", "Expansive Feeling", "Seamless Hospitality Flow"],
                    image: "assets/images/designcompass/7b.png"
                }
            },

            // CHAPTER 8: Privacy Gradient
            {
                id: 8,
                category: "Privacy Gradient // Outward vs Inward Living",
                question: `How should your ${terms.building} relate to the surrounding ${terms.isCommercial ? "urban fabric & road frontage" : "neighborhood"}?`,
                tip: terms.isCommercial ? "In dense Indian cities, inward-looking courtyard campuses protect focus and acoustic silence from heavy traffic noise and surrounding commercial bustle." : "In dense Indian cities, inward-looking courtyard layouts keep you completely private from neighboring multi-story buildings and street traffic.",
                optionA: {
                    key: "A",
                    tag: "Inward Sanctuary",
                    title: terms.isCommercial ? "Inward-Facing Courtyard Campus" : "Inward-Facing Courtyard Life",
                    desc: terms.isCommercial ? "Solid external perimeter with controlled glazing; all executive offices and collaborative teams wrap around a peaceful inner garden atrium." : "Solid external walls with minimal street windows; all primary living rooms wrap around a private inner garden sanctuary.",
                    perks: ["Zero Neighbor Overlook", "Peaceful Acoustic Bubble", "Private Family Courtyard"],
                    image: "assets/images/designcompass/8a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Outward Panoramas",
                    title: "Outward-Facing Panoramic Glazing",
                    desc: terms.isCommercial ? "Expansive structural curtain glass walls that showcase your brand presence to the street and frame panoramic city skylines." : "Expansive floor-to-ceiling glass walls that frame surrounding trees, landscapes, skylines, and sunset vistas.",
                    perks: ["Wide Open Horizon Views", "Abundant Peripheral Daylight", "Expressive Street Identity"],
                    image: "assets/images/designcompass/8b.png"
                }
            },

            // CHAPTER 9: Vastu & Energy Flow
            {
                id: 9,
                category: "Energy Alignment // Vastu Principles",
                question: `How should Vastu principles guide the spatial layout of your ${terms.space}?`,
                tip: "True classical Vastu aligns with solar science: placing early-morning activity zones in the North-East catches gentle morning sun, while placing heavy master suites in the South-West blocks intense afternoon heat.",
                optionA: {
                    key: "A",
                    tag: "Vastu Compliant",
                    title: "Strict Vastu Purusha Mandala Layout",
                    desc: terms.isCommercial ? "Strict adherence to commercial Vastu: Managing Director Cabin in Nairutya (SW), Accounts in Agni (SE), Reception in Ishanya (NE), and clear Brahmasthan center." : "Strict adherence to Vastu Purusha Mandala: Kitchen in Agni (SE), Master in Nairutya (SW), Puja/Water in Ishanya (NE), and open Brahmasthan.",
                    perks: ["Traditional Peace of Mind", "Positive Energy Balance", "Harmonious Family Living"],
                    image: "assets/images/designcompass/9a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Site-Responsive",
                    title: "Bioclimatic & Functional Modernist Flow",
                    desc: "Room positions dictated primarily by wind directions, tree canopy views, natural topography, and functional lifestyle convenience over traditional directional rules.",
                    perks: ["Maximized Scenic Views", "Optimal Functional Convenience", "Design Freedom"],
                    image: "assets/images/designcompass/9b.png"
                }
            },

            // STEP 10: Spatial Programming // Interaction vs. Seclusion
            {
                id: 10,
                category: "Spatial Programming // Interaction vs. Seclusion",
                question: "How strictly should active, high-traffic zones be separated from quiet, private zones?",
                tip: "Strict zoning uses acoustic walls and corridor buffers to eliminate noise bleed between public hosting areas and private focus spaces, whereas fluid open continuity maximizes interaction and spatial volume.",
                optionA: {
                    key: "A",
                    tag: "Zoned & Buffered",
                    title: "Strict Zoning & Acoustic Buffer Walls",
                    desc: terms.isCommercial
                        ? "Clearly separating client reception and high-traffic team zones from confidential executive suites and quiet boardrooms using acoustic corridors and solid buffer walls."
                        : "Strictly separating active guest-hosting areas from quiet private bedrooms using acoustic corridor buffers, solid doors, and transitional thresholds.",
                    perks: ["Zero Noise Bleed", "Absolute Privacy & Security", "Clear Operational Boundaries"],
                    image: "assets/images/designcompass/10a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Fluid Continuity",
                    title: "Fluid Open-Plan Continuity",
                    desc: terms.isCommercial
                        ? "An open layout where team lounges, collaborative desks, and breakout zones bleed into one another seamlessly, encouraging maximum cross-functional interaction."
                        : "An open living layout where family rooms, dining spaces, and garden decks flow seamlessly into one another, creating an expansive, community-focused feel.",
                    perks: ["Maximum Visual Continuity", "Agile & Dynamic Flow", "Spacious Communal Vibe"],
                    image: "assets/images/designcompass/10b.png"
                }
            },

            // STEP 11: Lighting Ambience // Atmospheric Mood
            {
                id: 11,
                category: "Lighting Ambience // Atmospheric Mood",
                question: terms.isCommercial 
                    ? "What kind of emotional atmosphere and lighting warmth should define your core facility after sunset?" 
                    : "What kind of emotional atmosphere and lighting warmth should define your home after sunset?",
                tip: "Warm, layered amber lighting creates an intimate, calming retreat to unwind and relax, whereas bright, balanced luminous daylight illumination maximizes alertness, visual clarity, and active productivity.",
                optionA: {
                    key: "A",
                    tag: "Warm & Intimate",
                    title: "Warm, Intimate & Moody Ambience",
                    desc: terms.isCommercial
                        ? "Soft, layered amber wall-grazing, low-glare hidden cove lighting, and tactile moody shadow play designed to unwind clients and create an exclusive lounge feel."
                        : "Soft, layered amber wall-grazing, low-glare hidden cove lighting, and tactile moody shadow play designed to unwind the mind and create a serene evening retreat.",
                    perks: ["Calming Evening Atmosphere", "Low-Glare Eye Comfort", "Intimate & Grounding Vibe"],
                    image: "assets/images/designcompass/11a.png"
                },
                optionB: {
                    key: "B",
                    tag: "Crisp & Luminous",
                    title: "Crisp, Luminous & Energizing Daylight",
                    desc: terms.isCommercial
                        ? "Even, bright, daylight-balanced architectural illumination that maximizes alertness, visual clarity, and active daytime productivity across all work zones."
                        : "Even, bright, daylight-balanced architectural illumination that maximizes alertness, visual clarity, and active daytime energy throughout the living areas.",
                    perks: ["Maximized Visual Clarity", "Energizing Daytime Focus", "Crisp Modern Brightness"],
                    image: "assets/images/designcompass/11b.png"
                }
            },

            // STEP 12: Plot Utilization // Terraces vs. Enclosed Space
            {
                id: 12,
                category: terms.isCommercial ? "Plot Utilization // Terraces vs. Enclosed Floorplate" : "Plot Utilization // Verandahs vs. Enclosed Rooms",
                question: terms.isCommercial 
                    ? "How should your built footprint balance open-air breakout terraces with fully enclosed indoor workspace?" 
                    : "How should your built footprint balance covered outdoor verandahs with enclosed indoor living area?",
                tip: "In South Indian plateau climates like Bangalore, deep covered outdoor verandas and sky decks can be enjoyed most of the year for hosting and natural cooling, whereas fully enclosed floorplates maximize indoor air-conditioned capacity.",
                optionA: {
                    key: "A",
                    tag: terms.isCommercial ? "Open-Air Terraces" : "Covered Verandahs",
                    title: terms.isCommercial ? "Landscaped Sky Decks & Breakout Balconies" : "Large Covered Verandahs & Garden Sit-Outs",
                    desc: terms.isCommercial
                        ? "Sacrificing extra internal desk capacity to create 10-foot-deep sheltered landscaped terraces usable year-round for team standups, client mixers, and open-air work."
                        : "Sacrificing extra bedroom size to create 10-foot-deep sheltered outdoor terrace gardens usable all year round for morning coffee and hosting friends.",
                    perks: ["Alfresco Living & Working", "Natural Thermal Shading", "Direct Outdoor Connection"],
                    image: "assets/images/designcompass/12a.png"
                },
                optionB: {
                    key: "B",
                    tag: terms.isCommercial ? "Enclosed Floorplate" : "Enclosed Indoor Space",
                    title: terms.isCommercial ? "Maximized Enclosed Floorplate & Boardrooms" : "Maximized Indoor Air-Conditioned Rooms",
                    desc: terms.isCommercial
                        ? "Full floorplate utilized for enclosed executive boardrooms, client lounges, and dedicated server/work areas, prioritizing internal capacity over open terraces."
                        : "Full site footprint utilized for expansive indoor living salons, extra walk-in closets, and spacious suites, prioritizing enclosed square footage over open terraces.",
                    perks: ["Maximized Usable Area", "All-Season Climate Control", "Complete Weather Protection"],
                    image: "assets/images/designcompass/12b.png"
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
        choicesDrawerEl = document.getElementById('dna-choices-drawer');
        previewChoicesBtn = document.getElementById('dna-preview-choices-btn');
        drawerCloseBtn = document.getElementById('dna-drawer-close-btn');
        drawerBackdropEl = document.getElementById('dna-drawer-backdrop');
        drawerDoneBtn = document.getElementById('dna-drawer-done-btn');
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

        if (btnPrevEl) {
            btnPrevEl.addEventListener('click', () => {
                if (resultViewEl && resultViewEl.style.display === 'block') {
                    stepBackToPreviousChapter();
                } else {
                    navigateSlide('prev');
                }
            });
        }

        if (btnNextEl) {
            btnNextEl.addEventListener('click', () => {
                if (resultViewEl && resultViewEl.style.display === 'block') {
                    resetModalDiscovery();
                } else {
                    navigateSlide('next');
                }
            });
        }

        if (previewChoicesBtn) previewChoicesBtn.addEventListener('click', openChoicesDrawer);
        if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeChoicesDrawer);
        if (drawerBackdropEl) drawerBackdropEl.addEventListener('click', closeChoicesDrawer);
        if (drawerDoneBtn) drawerDoneBtn.addEventListener('click', closeChoicesDrawer);

        const downloadPdfBtn = document.getElementById('dna-download-pdf-btn');
        if (downloadPdfBtn) downloadPdfBtn.addEventListener('click', () => window.print());

        // Escape Key to Close
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (choicesDrawerEl && choicesDrawerEl.classList.contains('active')) {
                    closeChoicesDrawer();
                } else if (overlayEl && overlayEl.classList.contains('active')) {
                    closeModal();
                }
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
        btnPrevEl.innerHTML = '&larr; BACK';
        const hasSelection = modalState.userAnswers[index] !== null;
        btnNextEl.disabled = !hasSelection;
        btnNextEl.innerHTML = (index === 11) ? 'MAP MY SPATIAL VISION &rarr;' : 'NEXT &rarr;';
    }

    function renderCard(cardElement, option, isSelected) {
        cardElement.classList.toggle('selected', isSelected);

        const visualEl = cardElement.querySelector('.dna-card-visual') || cardElement.querySelector('.dna-card-image');
        if (visualEl) {
            visualEl.innerHTML = `<img src="${option.image}?v=9.1" alt="${option.title}" class="dna-card-illustration" loading="eager">`;
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
    // 4. STEP-BACK NAVIGATION & EDITING
    // -------------------------------------------------------------------------
    function openChoicesDrawer() {
        if (!choicesDrawerEl) return;
        choicesDrawerEl.classList.add('active');
        choicesDrawerEl.setAttribute('aria-hidden', 'false');
    }

    function closeChoicesDrawer() {
        if (!choicesDrawerEl) return;
        choicesDrawerEl.classList.remove('active');
        choicesDrawerEl.setAttribute('aria-hidden', 'true');
    }

    function stepBackToPreviousChapter() {
        closeChoicesDrawer();
        const bannerEl = document.getElementById('dna-edit-mode-banner');
        if (bannerEl) bannerEl.style.display = 'none';
        modalState.isEditing = false;

        resultViewEl.style.display = 'none';
        interactiveBodyEl.style.display = 'block';
        btnPrevEl.style.display = 'inline-block';
        btnNextEl.style.display = 'inline-block';

        modalState.currentIndex = 11; // Chapter 12
        renderSlide(11);
        slideContainerEl.className = 'dna-slide-container slide-active';
    }

    function jumpToEditChapter(targetIndex) {
        closeChoicesDrawer();
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
            <span class="dna-edit-mode-text">&#9998; MODIFYING ${String(targetIndex + 1).padStart(2, '0')}: Make adjustments below, or return directly to your results.</span>
            <button id="dna-return-dossier-btn" class="dna-return-dossier-btn">RETURN TO REPORT &rarr;</button>
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
    // 5. SIMPLIFIED RESULT DOSSIER & DRAWER / PRINT GRID GENERATOR
    // -------------------------------------------------------------------------
    function showResultDossier() {
        closeChoicesDrawer();

        // Hide edit banner if visible
        const bannerEl = document.getElementById('dna-edit-mode-banner');
        if (bannerEl) bannerEl.style.display = 'none';
        modalState.isEditing = false;

        interactiveBodyEl.style.display = 'none';
        resultViewEl.style.display = 'block';

        // Reorganize footer controls on Final Summary Screen:
        // Left: ← BACK (take user back to step 12) | Right: RE-EXPLORE (restart from step 01)
        btnPrevEl.style.display = 'inline-block';
        btnPrevEl.disabled = false;
        btnPrevEl.innerHTML = '&larr; BACK';

        btnNextEl.style.display = 'inline-block';
        btnNextEl.disabled = false;
        btnNextEl.innerHTML = 'RE-EXPLORE';

        const ans = modalState.userAnswers;
        const terms = getTypologyTerms();

        // Persona Algorithm
        let persona = "The Tropical Courtyard Modernist";
        let strapline = "Your spatial vision calls for an earthy, climate-calibrated sanctuary built around private central courtyards, natural passive cooling, and lush indoor-outdoor verandas.";

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

        // Set date in print running headers
        const printDates = document.querySelectorAll('.dna-print-doc-date');
        if (printDates.length) {
            const now = new Date();
            const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            const dateStr = `CONFIDENTIAL &bull; CONCEPT SCHEMATIC &bull; ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
            printDates.forEach(el => {
                el.innerHTML = dateStr;
            });
        }

        // 4 Key Principles (Adapted with Dynamic Vocabulary, Materiality, Zoning & Lighting)
        const isNaturalPatina = ans[3] !== 'B';
        const surfacePhilosophy = isNaturalPatina
            ? "Surface Philosophy: Prefers honest, naturally aging materials (exposed brick, stone, and raw concrete) with timeless patina and low long-term maintenance."
            : "Surface Philosophy: Prefers pristine, polished modern surfaces (seamless micro-concrete, flush panels, and engineered quartz) with an ultra-clean aesthetic.";

        const take1Title = isResidential ? "1. Materiality & Aging Philosophy" : "1. Materiality & Finish Philosophy";
        const take1Text = surfacePhilosophy;

        const take2Title = "2. Summer Heat & Climate Engineering";
        const take2Text = ans[2] === 'A'
            ? `Your ${terms.building} will prioritize deep shaded balcony overhangs and jali screens, keeping interior ${terms.space}s naturally cool and cutting power consumption.`
            : `Your ${terms.building} will utilize high-performance double-glazed glass and automated louvers for precision temperature control and zero dust infiltration.`;

        const isStrictZoning = ans[9] !== 'B';
        const zoningStrategy = isStrictZoning
            ? "Zoning Strategy: Prefers strict spatial zoning with acoustic buffers to isolate active areas from private retreats."
            : "Zoning Strategy: Prefers fluid open-plan continuity to encourage maximum interaction and spatial freedom.";

        const take3Title = isResidential ? "3. Spatial Programming & Privacy" : "3. Spatial Programming & Workplace Flow";
        const take3Text = zoningStrategy;

        const isWarmLighting = ans[10] !== 'B';
        const lightingAmbience = isWarmLighting
            ? "Lighting Ambience: Prefers warm, intimate, and moody evening lighting for a calming, grounding retreat experience."
            : "Lighting Ambience: Prefers crisp, luminous, and energizing illumination for maximum visual clarity and daytime focus.";

        const take4Title = isResidential ? "4. Lighting & Atmospheric Mood" : "4. Lighting & Visual Clarity";
        const take4Text = lightingAmbience;

        const isVerandahOption = ans[11] !== 'B';
        const plotUtilization = isVerandahOption
            ? "Plot Utilization: Prefers allocating square footage to open-air breakout terraces and covered verandahs for alfresco living."
            : "Plot Utilization: Prefers maximizing fully enclosed indoor floorplates for all-season climate-controlled capacity.";

        const take5Title = isResidential ? "5. Plot Utilization & Verandahs" : "5. Plot Utilization & Floorplate";
        const take5Text = plotUtilization;

        const take1TitleEl = document.getElementById('takeaway-1-title');
        const take1TextEl = document.getElementById('takeaway-1-text');
        if (take1TitleEl) take1TitleEl.textContent = take1Title;
        if (take1TextEl) take1TextEl.textContent = take1Text;

        const take2TitleEl = document.getElementById('takeaway-2-title');
        const take2TextEl = document.getElementById('takeaway-2-text');
        if (take2TitleEl) take2TitleEl.textContent = take2Title;
        if (take2TextEl) take2TextEl.textContent = take2Text;

        const take3TitleEl = document.getElementById('takeaway-3-title');
        const take3TextEl = document.getElementById('takeaway-3-text');
        if (take3TitleEl) take3TitleEl.textContent = take3Title;
        if (take3TextEl) take3TextEl.textContent = take3Text;

        const take4TitleEl = document.getElementById('takeaway-4-title');
        const take4TextEl = document.getElementById('takeaway-4-text');
        if (take4TitleEl) take4TitleEl.textContent = take4Title;
        if (take4TextEl) take4TextEl.textContent = take4Text;

        const take5TitleEl = document.getElementById('takeaway-5-title');
        const take5TextEl = document.getElementById('takeaway-5-text');
        if (take5TitleEl) take5TitleEl.textContent = take5Title;
        if (take5TextEl) take5TextEl.textContent = take5Text;

        // ---------------------------------------------------------------------
        // Populate Interactive Pop-up Drawer Ledger with "EDIT ✎" Buttons
        // ---------------------------------------------------------------------
        const drawerLedgerContainer = document.getElementById('dna-drawer-ledger');
        if (drawerLedgerContainer) {
            drawerLedgerContainer.innerHTML = '';

            for (let i = 0; i < 12; i++) {
                const ch = getChapterData(i);
                const chosenKey = ans[i] || 'A';
                const chosenOpt = chosenKey === 'A' ? ch.optionA : ch.optionB;

                const itemEl = document.createElement('div');
                itemEl.className = 'dna-ledger-item';
                itemEl.innerHTML = `
                    <div class="dna-ledger-info">
                        <span class="dna-ledger-meta">${String(i + 1).padStart(2, '0')} // ${ch.category.split('//')[0].trim()}</span>
                        <span class="dna-ledger-choice">Option ${chosenKey}: ${chosenOpt.title}</span>
                    </div>
                    <button class="dna-ledger-edit-btn" data-chapter="${i}" title="Modify ${String(i + 1).padStart(2, '0')}">EDIT &#9998;</button>
                `;

                const editBtn = itemEl.querySelector('.dna-ledger-edit-btn');
                editBtn.addEventListener('click', () => {
                    closeChoicesDrawer();
                    jumpToEditChapter(i);
                });

                drawerLedgerContainer.appendChild(itemEl);
            }
        }

        // ---------------------------------------------------------------------
        // Populate Print-Only Selections Grid (Page 2 of Spatial Vision Report)
        // ---------------------------------------------------------------------
        const printGridContainer = document.getElementById('dna-print-selections-grid');
        if (printGridContainer) {
            printGridContainer.innerHTML = '';

            for (let i = 0; i < 12; i++) {
                const ch = getChapterData(i);
                const chosenKey = ans[i] || 'A';
                const chosenOpt = chosenKey === 'A' ? ch.optionA : ch.optionB;
                const chapNum = String(i + 1).padStart(2, '0');
                const categoryName = ch.category.split('//')[0].trim();

                const cardEl = document.createElement('div');
                cardEl.className = 'dna-print-card-item';
                cardEl.innerHTML = `
                    <img src="${chosenOpt.image}?v=9.1" alt="${chosenOpt.title}" class="dna-print-card-thumb">
                    <div class="dna-print-card-content">
                        <span class="dna-print-card-chapter">${chapNum} // ${categoryName}</span>
                        <div class="dna-print-card-title">${chosenOpt.title}</div>
                    </div>
                `;
                printGridContainer.appendChild(cardEl);
            }
        }

        // ---------------------------------------------------------------------
        // Lead Handoff Overhaul: Save to sessionStorage & Route Cleanly
        // ---------------------------------------------------------------------
        const chapterSelections = [];
        for (let i = 0; i < 12; i++) {
            const ch = getChapterData(i);
            const chosenKey = ans[i] || 'A';
            const chosenOpt = chosenKey === 'A' ? ch.optionA : ch.optionB;
            chapterSelections.push({
                chapter: i + 1,
                category: ch.category.split('//')[0].trim(),
                option: chosenKey,
                title: chosenOpt.title,
                tag: chosenOpt.tag,
                image: chosenOpt.image
            });
        }

        const reportData = {
            tool: "THE DESIGN COMPASS",
            persona: persona,
            strapline: strapline,
            typology: terms.context,
            keyPrinciples: [
                { title: take1Title, text: take1Text },
                { title: take2Title, text: take2Text },
                { title: take3Title, text: take3Text },
                { title: take4Title, text: take4Text },
                { title: take5Title, text: take5Text }
            ],
            selections: chapterSelections
        };

        try {
            sessionStorage.setItem("se_design_compass_report", JSON.stringify(reportData));
        } catch (e) {
            console.warn("Could not write report to sessionStorage:", e);
        }

        const inquiryBtn = document.getElementById('dna-inquiry-cta-btn');
        if (inquiryBtn) {
            inquiryBtn.href = `contact.html?compass_attached=true&persona=${encodeURIComponent(persona)}`;
            inquiryBtn.onclick = function () {
                try {
                    sessionStorage.setItem("se_design_compass_report", JSON.stringify(reportData));
                } catch (e) {}
            };
        }
    }

    function resetModalDiscovery() {
        closeChoicesDrawer();
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
