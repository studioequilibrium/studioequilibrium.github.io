/**
 * STUDIO EQUILIBRIUM — THE SPATIAL DNA DISCOVERY MODAL
 * 12-Chapter Photorealistic Interactive Engine & Book-Slide Transition
 * Standalone Implementation (js/dna-modal.js)
 */

(function () {
    'use strict';

    // 12 Refined Chapters in Natural Indian English with Authentic Project Imagery
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
                image: "assets/images/projects/radhakrishna-residence/main.webp"
            },
            optionB: {
                key: "B",
                tag: "Commercial & Public",
                title: "Offices, Retail, F&B Cafes & Clinics",
                desc: "A dynamic commercial workspace, retail boutique, or public hospitality venue engineered for high customer footfall and brand impact.",
                perks: ["Brand Experience", "Customer Flow", "Functional Impact"],
                image: "assets/images/projects/naveraa-cafe/main.webp"
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
                image: "assets/images/projects/vivek-residence/main.webp"
            },
            optionB: {
                key: "B",
                tag: "Style Choice B",
                title: "Contemporary Minimalist",
                desc: "Crisp clean monolithic volumes, expansive floor-to-ceiling glass, subtle exposed concrete accents, and seamless modern elegance.",
                perks: ["Clean Geometric Lines", "Expansive Glass", "Contemporary Polish"],
                image: "assets/images/projects/radhakrishna-residence/AR25-03-01.webp"
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
                image: "assets/images/projects/rajendra-residence/AR25-01- (1).webp"
            },
            optionB: {
                key: "B",
                tag: "Strategy B",
                title: "High-Performance Glass & Automated Louvers",
                desc: "Double-glazed Low-E insulated glass panels paired with sleek motorized exterior architectural louvers for precision climate control.",
                perks: ["Double-Glazed Insulation", "Motorized Sun Louvers", "Unobstructed Views"],
                image: "assets/images/projects/nandeesh-residence/AR23-01- (2).webp"
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
                image: "assets/images/projects/nandeesh-residence/AR23-01- (3).webp"
            },
            optionB: {
                key: "B",
                tag: "Light Approach B",
                title: "Bold Sunlight & Shadow Play",
                desc: "Dramatic sunlit cutouts, architectural pergolas, and deep shadow patterns that shift dynamically as the sun moves across the sky.",
                perks: ["Dynamic Shadow Casts", "Sculptural Atmosphere", "High-Impact Drama"],
                image: "assets/images/projects/vivek-residence/AR24-10-02.webp"
            }
        },
        {
            id: 5,
            category: "Indoor Air // Fresh Ventilation",
            question: "How would you prefer fresh air to circulate inside?",
            tip: "Courtyards act as natural air engines—warm air rises out through top vents, pulling in cooler air from shaded ground water features without any fan noise.",
            optionA: {
                key: "A",
                tag: "Ventilation A",
                title: "Central Open Courtyard & Cross-Breeze",
                desc: "An open-to-sky central courtyard that constantly pulls cool breeze through living spaces naturally without relying solely on ceiling fans or AC.",
                perks: ["100% Natural Fresh Air", "Indoor Rain & Sky Experience", "Whisper Quiet"],
                image: "assets/images/projects/vivek-residence/AR24-10-01.webp"
            },
            optionB: {
                key: "B",
                tag: "Ventilation B",
                title: "Sealed & Air-Conditioned Comfort",
                desc: "A tightly sealed building envelope with dedicated fresh-air filters and air-conditioning that completely blocks out city traffic noise and dust.",
                perks: ["Zero Dust & Pollution", "Acoustic Silence from Traffic", "Complete Temperature Control"],
                image: "assets/images/projects/radhakrishna-residence/AR25-03-02.webp"
            }
        },
        {
            id: 6,
            category: "Vertical Space // Ceiling Heights",
            question: "Do you prefer high open ceilings or maximum floor area?",
            tip: "A double-height living void gives an unmistakable feeling of luxury and space, while standard single-height ceilings maximize your built-up square footage.",
            optionA: {
                key: "A",
                tag: "Volume A",
                title: "Double-Height Living / Reception Void",
                desc: "A dramatic 20-foot tall open ceiling that visually connects upper and lower floors, making everyday living feel grand and expansive.",
                perks: ["Grand Luxurious Volume", "Visual Connection Between Floors", "Architectural Drama"],
                image: "assets/images/projects/nandeesh-residence/AR23-01- (4).webp"
            },
            optionB: {
                key: "B",
                tag: "Volume B",
                title: "Maximum Usable Floor Space",
                desc: "Practical floor layouts with standard, comfortable ceiling heights that give you more usable carpet area and enclosed rooms.",
                perks: ["More Usable Carpet Area", "Cozy Human Scale", "Easier Temperature Control"],
                image: "assets/images/projects/rajendra-residence/AR25-01- (2).webp"
            }
        },
        {
            id: 7,
            category: "Arrival Experience // Main Entrance",
            question: "What should guests experience the moment they step through your main door?",
            tip: "An entry foyer with an indirect turn creates a mental sense of calm and decompresses the mind from city chaos before welcoming guests inside.",
            optionA: {
                key: "A",
                tag: "Threshold A",
                title: "Sheltered Private Foyer",
                desc: "A quiet, welcoming entrance lobby that shields your private living spaces from delivery persons and casual visitors at the door.",
                perks: ["Complete Privacy at Doorstep", "Calming Transition", "Modest Sense of Mystery"],
                image: "assets/images/projects/radhakrishna-residence/AR25-03-03.webp"
            },
            optionB: {
                key: "B",
                tag: "Threshold B",
                title: "Grand Open View",
                desc: "An immediate, breathtaking view straight into your double-height hall, water garden, and green backyard the second the door opens.",
                perks: ["Instant Wow Factor", "Open & Airy Welcome", "Immediate Garden Connection"],
                image: "assets/images/projects/nandeesh-residence/AR23-01- (5).webp"
            }
        },
        {
            id: 8,
            category: "Neighborhood Relations // Privacy & Glass",
            question: "How should your building interact with the street outside?",
            tip: "In busy Indian residential layouts, inward-looking homes protect family privacy while letting in plenty of light and fresh air through a central court.",
            optionA: {
                key: "A",
                tag: "Orientation A",
                title: "Private Inward-Looking Courtyard",
                desc: "Solid external walls that block nosy neighbors and road noise, while the entire home opens inward into a lush, private internal garden.",
                perks: ["100% Privacy from Neighbors", "Blocks Road Noise", "Safe Internal Garden"],
                image: "assets/images/projects/vivek-residence/AR24-10-03.webp"
            },
            optionB: {
                key: "B",
                tag: "Orientation B",
                title: "Outward Balconies & Glass Walls",
                desc: "Large French windows, corner balconies, and glass sliding walls that keep you visually connected to tree canopies and the neighborhood.",
                perks: ["Wide Open Balconies", "Neighborhood Connection", "Bright & Panoramic"],
                image: "assets/images/projects/rajendra-residence/AR25-01- (3).webp"
            }
        },
        {
            id: 9,
            category: "Ancient Wisdom // Vastu & Modern Living",
            question: "How would you like to balance Vastu and modern design?",
            tip: "Vedic Vastu was originally ancient environmental science—placing the kitchen in the South-East aligned with prevailing winds to naturally blow cooking smoke away from living areas.",
            optionA: {
                key: "A",
                tag: "Vastu A",
                title: "Strict Traditional Vastu Alignment",
                desc: "Complete, uncompromising alignment with cardinal directions for the main door, South-West master bedroom, and South-East kitchen.",
                perks: ["Complete Peace of Mind", "Strict Cardinal Directions", "Traditional Harmony"],
                image: "assets/images/projects/radhakrishna-residence/AR25-03-04.webp"
            },
            optionB: {
                key: "B",
                tag: "Vastu B",
                title: "Climate-First Modern Balance",
                desc: "Adopting the core principles of Vastu while adapting freely to site shapes, mature trees, and summer wind directions for maximum design freedom.",
                perks: ["Honors Key Principles", "Adapted to Site Trees", "Contemporary Spatial Freedom"],
                image: "assets/images/projects/nandeesh-residence/AR23-01- (6).webp"
            }
        },
        {
            id: 10,
            category: "Family Harmony // Multi-Gen Living",
            question: "How should different family members and guests share the space?",
            tip: "Placing a walk-in wardrobe between parents' and kids' rooms acts as an acoustic sound-buffer, cutting noise by over 30 decibels so everyone sleeps peacefully.",
            optionA: {
                key: "A",
                tag: "Layout A",
                title: "Independent Ground & Upper Suites",
                desc: "Elder-friendly, step-free bedroom suites on the ground floor with direct garden access, separated by acoustic buffers from upper suites.",
                perks: ["Elder-Friendly Step-Free", "Generational Autonomy", "Peaceful Acoustic Privacy"],
                image: "assets/images/projects/nandeesh-residence/AR23-01- (7).webp"
            },
            optionB: {
                key: "B",
                tag: "Layout B",
                title: "Connected Family Lounges",
                desc: "Open stairs, shared study zones, and interactive intermediate family lounges that encourage regular everyday conversations.",
                perks: ["Tight Family Bonding", "Shared Living Lounges", "Interactive Everyday Flow"],
                image: "assets/images/projects/vivek-residence/AR24-10-04.webp"
            }
        },
        {
            id: 11,
            category: "Focus & Work // Work From Home",
            question: "How much quiet focus time do you need in your daily routine?",
            tip: "Standard hollow bedroom doors leak up to 80% of video-meeting voices into the corridor; a dedicated acoustic study keeps client calls 100% private.",
            optionA: {
                key: "A",
                tag: "Work A",
                title: "Dedicated Soundproof Study / Studio",
                desc: "A closed, peaceful cabin with solid-core acoustic doors and acoustic ceiling panels for professional video calls and uninterrupted deep work.",
                perks: ["Zero Background Noise", "Confidential Client Calls", "Deep Focus Sanctuary"],
                image: "assets/images/projects/radhakrishna-residence/AR25-03-05.webp"
            },
            optionB: {
                key: "B",
                tag: "Work B",
                title: "Integrated Study Nooks",
                desc: "Open study tables, library reading nooks, and laptop counters tucked neatly into the corners of living rooms and bedrooms.",
                perks: ["Connected to Family Routine", "Flexible Multi-Use Spaces", "Casual & Convenient"],
                image: "assets/images/projects/naveraa-cafe/02.webp"
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
                image: "assets/images/projects/naveraa-cafe/04.webp"
            },
            optionB: {
                key: "B",
                tag: "Interior B",
                title: "Bigger Indoor Living & Dressing Areas",
                desc: "Maximized air-conditioned interior rooms with expansive walk-in dressing parlors, luxurious spa bathrooms, and dedicated private sitting lounges.",
                perks: ["Spacious Indoor Luxury", "Generous Walk-In Closets", "Year-Round Climate Comfort"],
                image: "assets/images/projects/nandeesh-residence/AR23-01- (8).webp"
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

        const imgEl = cardElement.querySelector('.dna-card-image');
        if (imgEl) {
            imgEl.style.backgroundImage = `url('${option.image}')`;
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
    // SIMPLIFIED RESULT DOSSIER SYNTHESIZER
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

        // Configure Inquiry CTA button
        const subject = encodeURIComponent(`Spatial DNA Profile: ${persona}`);
        const message = encodeURIComponent(
            `Hi Prashanth & Studio Equilibrium Team,\n\nI just explored the Spatial DNA Discovery experience on your site and generated my profile:\n\n• Persona: ${persona}\n• Typology: ${isResidential ? 'Residential (Villa / Bungalow)' : 'Commercial / Public'}\n• Style Preference: ${isEarthy ? 'Earthy & Tropical Modernism' : 'Contemporary Minimalist'}\n• Courtyard & Air: ${isCourtyard ? 'Central Open Courtyard' : 'Sealed Conditioned Comfort'}\n• Ceiling Preference: ${isDoubleHeight ? 'Double-Height Living Void' : 'Maximum Usable Floor Space'}\n• Verandahs: ${isVerandah ? 'Large Covered Verandahs' : 'Maximized Indoor Bedrooms'}\n\nI would love to discuss translating these architectural parameters into our upcoming project.`
        );

        const inquiryBtn = document.getElementById('dna-inquiry-cta-btn');
        if (inquiryBtn) {
            inquiryBtn.href = `contact.html?subject=${subject}&message=${message}`;
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
