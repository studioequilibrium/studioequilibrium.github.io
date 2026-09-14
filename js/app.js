/**
 * Studio Equilibrium - Enhanced Interactivity (Multi-page Safe & Custom Physics Follower)
 */

// ----------------------------------------------------
// 8. INTERACTIVE PARTICLE CANVAS BACKGROUND (Signature Grid Engine)
// ----------------------------------------------------
(function () {
    const canvas = document.getElementById('bg-particle-canvas');
    if (canvas && (window.location.pathname === "/" || window.location.pathname.endsWith("index.html") || window.location.pathname === "")) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const spacing = 30; // perfect architectural grid spacing
        let pointer = { x: null, y: null, radius: 120 }; // threshold radius 120px
        const returnEase = 0.08; // snappy elasticity return coefficient
        const friction = 0.85;

        const activeColors = [
            { r: 219, g: 150, b: 2, a: 0.85 },  // Yellow
            { r: 219, g: 56, b: 4, a: 0.85 },   // Orange
            { r: 51, g: 145, b: 1, a: 0.85 },   // Green
            { r: 66, g: 0, b: 156, a: 0.85 }    // Purple
        ];

        // Resize handler to occupy 100% of viewport width and height dynamically
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor(x, y, activeColor) {
                this.baseX = x;
                this.baseY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
                this.radius = 1.5; // uniform baseline particle radius (1.5px)
                this.activeColor = activeColor;

                // Color interpolation state
                this.r = 100;
                this.g = 100;
                this.b = 100;
                this.a = 0.16; // default quiet concrete grey state

                this.targetR = 100;
                this.targetG = 100;
                this.targetB = 100;
                this.targetA = 0.16;
            }

            draw() {
                // ctx.fillStyle = "rgba(100, 100, 100, 0.16)";
                ctx.fillStyle = `rgba(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)}, ${this.a})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                let ax = 0;
                let ay = 0;

                // Proximity push from pointer coordinates
                if (pointer.x !== null && pointer.y !== null) {
                    const dx = this.x - pointer.x;
                    const dy = this.y - pointer.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < pointer.radius) {
                        const force = (pointer.radius - distance) / pointer.radius;
                        const angle = Math.atan2(dy, dx);
                        ax = Math.cos(angle) * force * 5.0; // snappy slide
                        ay = Math.sin(angle) * force * 5.0;
                    }
                }

                // Spring return force to baseline grid coordinates (elasticity returnEase)
                const dxBase = this.baseX - this.x;
                const dyBase = this.baseY - this.y;
                ax += dxBase * returnEase;
                ay += dyBase * returnEase;

                this.vx += ax;
                this.vy += ay;
                this.vx *= friction;
                this.vy *= friction;
                this.x += this.vx;
                this.y += this.vy;

                // Color morphing loop based on active motion velocity
                let velocity = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (velocity > 0.1) {
                    this.targetR = this.activeColor.r;
                    this.targetG = this.activeColor.g;
                    this.targetB = this.activeColor.b;
                    this.targetA = this.activeColor.a;
                } else {
                    this.targetR = 100;
                    this.targetG = 100;
                    this.targetB = 100;
                    this.targetA = 0.16; // fade smoothly back to quiet concrete grey
                }

                // Smooth color transition
                this.r += (this.targetR - this.r) * 0.1;
                this.g += (this.targetG - this.g) * 0.1;
                this.b += (this.targetB - this.b) * 0.1;
                this.a += (this.targetA - this.a) * 0.1;
            }
        }

        // Initialize particles in a strict 2D coordinate grid
        function initParticles() {
            particles = [];
            const cols = Math.floor(canvas.width / spacing) + 1;
            const rows = Math.floor(canvas.height / spacing) + 1;
            const offsetX = (canvas.width - (cols - 1) * spacing) / 2;
            const offsetY = (canvas.height - (rows - 1) * spacing) / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = offsetX + i * spacing;
                    const y = offsetY + j * spacing;
                    const activeColor = activeColors[(i + j) % activeColors.length]; // alternating structured pattern
                    particles.push(new Particle(x, y, activeColor));
                }
            }
        }

        // Animation Loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        // Trigger initial sizing and loop
        resizeCanvas();
        animate();

        // ── Desktop Mousemove Event mapping ──
        window.addEventListener('mousemove', (e) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            pointer.x = null;
            pointer.y = null;
        });

        // ── Mobile/Tablet Passive Touchmove Event mapping ──
        window.addEventListener('touchmove', function (e) {
            if (e.touches.length > 0) {
                pointer.x = e.touches[0].clientX;
                pointer.y = e.touches[0].clientY;
            }
        }, { passive: true });

        // Clear tracking coordinates on mobile finger lift
        window.addEventListener('touchend', function () {
            pointer.x = null;
            pointer.y = null;
        });

        window.addEventListener('touchcancel', function () {
            pointer.x = null;
            pointer.y = null;
        });
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // 0. MOBILE NAVIGATION HAMBURGER GENERATOR
    // ----------------------------------------------------
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    if (navbar && navLinks) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'nav-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
        toggleBtn.innerHTML = '<span></span><span></span>';
        navbar.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('nav-active');
            navLinks.classList.toggle('nav-active');

            if (navLinks.classList.contains('nav-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when a navigation item is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggleBtn.classList.remove('nav-active');
                navLinks.classList.remove('nav-active');
                document.body.style.overflow = '';
            });
        });
    }



    // ----------------------------------------------------
    // 1. CUSTOM CURSOR & FOLLOWER PHYSICS
    // ----------------------------------------------------
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (cursor && follower) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        // Track raw mouse coordinates
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Loop to animate cursor and follower with smooth lag (lerp)
        const renderCursorPhysics = () => {
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            followerX += (mouseX - followerX) * 0.08;
            followerY += (mouseY - followerY) * 0.08;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';

            requestAnimationFrame(renderCursorPhysics);
        };
        renderCursorPhysics();

        // Hover effect for standard interactive elements
        const setupCursorHovers = () => {
            const hasHover = window.matchMedia('(hover: hover)').matches;
            if (!hasHover) return; // Do not attach hover triggers on touchscreen devices

            const interactiveElements = document.querySelectorAll('a, button, .project-card, .project-vertical-row, .project-vertical-image-container, .close-modal, .view-all-btn, .submit-btn, select, option, input, textarea, .client-app-feature-v');
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', addHoverState);
                el.removeEventListener('mouseleave', removeHoverState);

                el.addEventListener('mouseenter', addHoverState);
                el.addEventListener('mouseleave', removeHoverState);
            });

            // Specific huge spotlight expansion over the massive hero headings
            const massiveHeadings = document.querySelectorAll('.hero-title, h1');
            massiveHeadings.forEach(heading => {
                heading.removeEventListener('mouseenter', addTitleHoverState);
                heading.removeEventListener('mouseleave', removeTitleHoverState);

                heading.addEventListener('mouseenter', addTitleHoverState);
                heading.addEventListener('mouseleave', removeTitleHoverState);
            });

            // Specific blueprint click/tap visual state for ACCORD showcase features (prevents sticky mobile hover)
            const blueprintFeatures = document.querySelectorAll('.client-app-feature-v');
            blueprintFeatures.forEach(bf => {
                bf.addEventListener('click', () => {
                    follower.classList.add('blueprint-hover');
                    follower.innerHTML = '<span class="blueprint-cursor-label">VIEW</span>';

                    // Clear visual indicator state automatically after 800ms
                    setTimeout(() => {
                        follower.classList.remove('blueprint-hover');
                        follower.innerHTML = '';
                    }, 800);
                });
            });
        };

        const addHoverState = () => {
            cursor.classList.add('hovering');
            follower.classList.add('hovering');
        };
        const removeHoverState = () => {
            cursor.classList.remove('hovering');
            follower.classList.remove('hovering');
        };

        const addTitleHoverState = () => {
            follower.classList.add('title-hover');
        };
        const removeTitleHoverState = () => {
            follower.classList.remove('title-hover');
        };

        setupCursorHovers();
        window.setupCursorHovers = setupCursorHovers;
    }

    // ----------------------------------------------------
    // 2. SCROLL ANIMATIONS (Intersection Observer)
    // ----------------------------------------------------
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => observer.observe(el));
    }

    // ----------------------------------------------------
    // 3. PORTFOLIO DATA FETCHING & RENDERING (DYNAMIC GRIDS)
    // ----------------------------------------------------
    const portfolioGrid = document.getElementById('portfolio-grid');
    const featuredGrid = document.getElementById('featured-grid');
    let projectsData = [];

    const fetchAndRender = (container, isFeaturedOnly = false) => {
        fetch('data/projects.json?v=2.0.2')
            .then(response => {
                if (!response.ok) throw new Error('Network error');
                return response.json();
            })
            .then(projects => {
                projectsData = projects;

                const dataToRender = isFeaturedOnly
                    ? projects.filter(p => p.featured === true).slice(0, 4)
                    : projects;

                renderProjects(dataToRender, container);
                setupModal();
                setupProjectCardScrollObserver();
                if (window.setupCursorHovers) {
                    window.setupCursorHovers();
                }
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                container.innerHTML = '<p>Unable to load portfolio projects at this time.</p>';
            });
    };

    if (portfolioGrid) {
        fetchAndRender(portfolioGrid, false);
    } else if (featuredGrid) {
        fetchAndRender(featuredGrid, true);
    }

    // Architectural fallback images list from Unsplash to ensure visual variety and high-fidelity aesthetics
    const fallbackImages = [
        'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800', // Concrete architectural abstraction
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', // Modern luxury villa
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800', // Minimalist concrete exterior
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', // High-fidelity glass facade
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', // White plaster modern design
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800', // Structural wooden interior
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', // Bright monolithic studio space
        'https://images.unsplash.com/photo-1512403754473-27855f528a6f?auto=format&fit=crop&q=80&w=800', // Minimalist shadow architectural detail
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'  // Architect drafting layout
    ];

    function renderProjects(projects, container) {
        container.innerHTML = '';
        const isVerticalSequence = container.classList.contains('portfolio-vertical-sequence');

        projects.forEach(project => {
            const card = document.createElement(isVerticalSequence ? 'div' : 'article');
            card.className = isVerticalSequence ? 'project-vertical-row' : 'project-card';
            card.dataset.id = project.id;

            const fallbackImage = fallbackImages[(project.id - 1) % fallbackImages.length];
            const imgSrc = project.image || fallbackImage;

            if (isVerticalSequence) {
                card.innerHTML = `
                    <div class="project-vertical-image-container">
                        <img src="${imgSrc}" alt="${project.title}" onerror="if(this.src.endsWith('.webp')){this.src=this.src.replace('.webp','.png');}else{this.onerror=null;this.src='${fallbackImage}';}" loading="lazy">
                    </div>
                    <div class="project-vertical-spec-container">
                        <h3 class="project-vertical-title">${project.title.toUpperCase()}</h3>
                        <table class="project-vertical-specs">
                            <tr>
                                <td>TYPOLOGY</td>
                                <td>${project.typology}</td>
                            </tr>
                            <tr>
                                <td>CLIENT</td>
                                <td>${project.client}</td>
                            </tr>
                            <tr>
                                <td>AREA</td>
                                <td>${project.builtUpArea}</td>
                            </tr>
                            <tr>
                                <td>LOCATION</td>
                                <td>${project.location}</td>
                            </tr>
                        </table>
                        <p class="project-vertical-description">${project.description}</p>
                    </div>
                `;
            } else {
                card.innerHTML = `
                    <div class="project-image-container">
                        <img src="${imgSrc}" alt="${project.title}" onerror="if(this.src.endsWith('.webp')){this.src=this.src.replace('.webp','.png');}else{this.onerror=null;this.src='${fallbackImage}';}" loading="lazy">
                        <div class="project-info-overlay">
                            <h3>${project.title}</h3>
                            <span>${project.typology}</span>
                        </div>
                    </div>
                `;
            }
            container.appendChild(card);
        });
    }

    // ----------------------------------------------------
    // 3b. PROJECT CARDS & PORTFOLIO ROWS CENTER-SCREEN SCROLL REVEAL (MOBILE / TOUCH)
    // ----------------------------------------------------
    let projectScrollObserver = null;

    function setupProjectCardScrollObserver() {
        const isTouchOrMobile = () => {
            return window.matchMedia('(max-width: 1024px), (hover: none), (pointer: coarse)').matches;
        };

        // Completely bail out on true desktop mouse environments
        if (!isTouchOrMobile()) {
            // Clean up any lingering touch classes or inline variables on all project cards/rows
            document.querySelectorAll('.project-card, .project-vertical-row').forEach(card => {
                card.classList.remove('is-revealed');
                card.style.removeProperty('--scroll-progress');
            });
            if (projectScrollObserver) {
                projectScrollObserver.disconnect();
                projectScrollObserver = null;
            }
            return;
        }

        // Target both homepage featured cards and portfolio vertical sequence rows
        const cards = document.querySelectorAll('.project-card, .project-vertical-row');
        if (!cards.length) return;

        if (projectScrollObserver) {
            projectScrollObserver.disconnect();
            projectScrollObserver = null;
        }

        if (!('IntersectionObserver' in window)) {
            cards.forEach(card => card.classList.add('is-revealed'));
            return;
        }

        // Center-Screen Focal Zone (Middle Third of Viewport)
        // -30% top and -30% bottom margins restrict trigger area to the vertical center 40%
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px',
            threshold: 0.15
        };

        projectScrollObserver = new IntersectionObserver((entries) => {
            const isTouch = isTouchOrMobile();
            entries.forEach(entry => {
                if (!isTouch) {
                    entry.target.classList.remove('is-revealed');
                    entry.target.style.removeProperty('--scroll-progress');
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                } else {
                    entry.target.classList.remove('is-revealed');
                }
            });
        }, observerOptions);

        cards.forEach(card => projectScrollObserver.observe(card));
    }

    window.setupProjectCardScrollObserver = setupProjectCardScrollObserver;

    window.addEventListener('resize', () => {
        const isTouch = window.matchMedia('(max-width: 1024px), (hover: none), (pointer: coarse)').matches;
        if (!isTouch) {
            document.querySelectorAll('.project-card, .project-vertical-row').forEach(card => {
                card.classList.remove('is-revealed');
                card.style.removeProperty('--scroll-progress');
            });
            if (projectScrollObserver) {
                projectScrollObserver.disconnect();
                projectScrollObserver = null;
            }
        }
    }, { passive: true });

    // ----------------------------------------------------
    // 4. MODAL (FULL SCREEN PROJECT VIEW WITH SPECS TABLE)
    // ----------------------------------------------------
    function setupModal() {
        const modal = document.getElementById('project-modal');
        const closeBtn = document.querySelector('.close-modal');
        const modalBody = document.getElementById('modal-body-content');
        const projectCards = document.querySelectorAll('.project-card, .project-vertical-row');

        if (!modal || !closeBtn || !modalBody) return;

        let activeSlideIndex = 0;
        let currentProjectImages = [];
        let currentProject = null;

        const updateCarousel = () => {
            const imgEl = modalBody.querySelector('.carousel-active-image');
            const indexEl = modalBody.querySelector('.carousel-index');
            if (imgEl && indexEl) {
                imgEl.onerror = function() {
                    if (this.src.endsWith('.webp')) {
                        this.src = this.src.replace('.webp', '.png');
                    }
                };
                imgEl.src = currentProjectImages[activeSlideIndex];
                indexEl.textContent = `${activeSlideIndex + 1} / ${currentProjectImages.length}`;
            }
        };

        // Open Modal
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = parseInt(card.dataset.id);
                currentProject = projectsData.find(p => p.id === projectId);

                if (currentProject) {
                    activeSlideIndex = 0;
                    const mainImage = currentProject.image || fallbackImages[(currentProject.id - 1) % fallbackImages.length];
                    if (currentProject.gallery && Array.isArray(currentProject.gallery) && currentProject.gallery.length > 0) {
                        currentProjectImages = currentProject.gallery;
                    } else {
                        currentProjectImages = [
                            mainImage,
                            fallbackImages[(currentProject.id) % fallbackImages.length],
                            fallbackImages[(currentProject.id + 1) % fallbackImages.length],
                            fallbackImages[(currentProject.id + 2) % fallbackImages.length]
                        ];
                    }

                    populateModal(currentProject, currentProjectImages, modalBody);
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';

                    // Attach arrow listeners
                    const prevBtn = modalBody.querySelector('.modal-prev');
                    const nextBtn = modalBody.querySelector('.modal-next');

                    if (prevBtn && nextBtn) {
                        prevBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            activeSlideIndex = (activeSlideIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
                            updateCarousel();
                        });
                        nextBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            activeSlideIndex = (activeSlideIndex + 1) % currentProjectImages.length;
                            updateCarousel();
                        });
                    }
                }
            });
        });

        // Close Modal
        const closeModalFunc = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeModalFunc);

        // Click outside active display viewport dismisses modal
        modal.addEventListener('click', (e) => {
            const viewport = modal.querySelector('.modal-carousel-viewport');
            const close = modal.querySelector('.close-modal');

            // Arrows are inside the viewport, so viewport.contains() covers them
            if (viewport && !viewport.contains(e.target) && e.target !== close) {
                closeModalFunc();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (modal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeModalFunc();
                } else if (e.key === 'ArrowLeft') {
                    activeSlideIndex = (activeSlideIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
                    updateCarousel();
                } else if (e.key === 'ArrowRight') {
                    activeSlideIndex = (activeSlideIndex + 1) % currentProjectImages.length;
                    updateCarousel();
                }
            }
        });
    }

    function populateModal(project, images, container) {
        container.innerHTML = `
            <div class="slider-overlay-container">
                <div class="modal-carousel-viewport">
                    <img class="carousel-active-image" src="${images[0]}" alt="${project.title}" onerror="if(this.src.endsWith('.webp')){this.src=this.src.replace('.webp','.png');}">
                    <!-- Arrows float absolutely over the image -->
                    <button class="modal-prev" aria-label="Previous Slide"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                    <button class="modal-next" aria-label="Next Slide"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                    <div class="carousel-caption">
                        <h3 class="carousel-project-title">${project.title.toUpperCase()}</h3>
                        <p class="carousel-project-meta">${project.typology} &bull; ${project.location}</p>
                        <span class="carousel-index">1 / ${images.length}</span>
                    </div>
                </div>
            </div>
        `;
    }

    // ----------------------------------------------------
    // 5. CONTACT FORM PROCESSOR & THE DESIGN COMPASS HANDOFF
    // ----------------------------------------------------
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Check for URL parameters (e.g. from The Design Compass)
        const urlParams = new URLSearchParams(window.location.search);
        const isCompassAttached = urlParams.get('compass_attached') === 'true';
        const personaParam = urlParams.get('persona');
        const messageParam = urlParams.get('message');
        const subjectParam = urlParams.get('subject');
        const messageField = document.querySelector('textarea[name="message"]') || document.querySelector('#message');
        const subjectField = document.querySelector('input[name="subject"]') || document.querySelector('#subject');
        const projectTypeSelect = document.getElementById('project-type');

        if (isCompassAttached) {
            // Reveal sleek attached card above form
            const compassCard = document.getElementById('compass-attached-card');
            if (compassCard) {
                compassCard.style.display = 'block';
            }
            const personaDisplay = document.getElementById('compass-persona-display');
            if (personaDisplay && personaParam) {
                try {
                    personaDisplay.textContent = decodeURIComponent(personaParam);
                } catch (e) {
                    personaDisplay.textContent = personaParam;
                }
            }

            // Show status badge above message field
            const dnaNotice = document.getElementById('dna-loaded-badge');
            if (dnaNotice) {
                dnaNotice.style.display = 'inline-flex';
            }

            // Auto-select Architecture
            if (projectTypeSelect) {
                projectTypeSelect.value = 'Architecture';
            }

            // Set default subject
            if (subjectField) {
                const personaName = personaParam ? decodeURIComponent(personaParam) : "Spatial Vision";
                subjectField.value = `New Inquiry — The Design Compass: ${personaName}`;
            }

            // Keep the message textarea completely clean and empty for the client's own message
            if (messageField) {
                messageField.value = '';
                messageField.placeholder = "Tell us about your project or any specific thoughts on your Design Compass profile...";
            }

            // Retrieve serialized report from sessionStorage and populate hidden input for email delivery
            const hiddenDataField = document.getElementById('design-compass-data') || contactForm.querySelector('input[name="design_compass_data"]');
            if (hiddenDataField) {
                try {
                    const rawReport = sessionStorage.getItem("se_design_compass_report");
                    if (rawReport) {
                        const parsed = JSON.parse(rawReport);
                        let formattedReport = `=== THE DESIGN COMPASS: SPATIAL VISION REPORT ===\n`;
                        formattedReport += `ARCHITECTURAL PERSONA: ${parsed.persona || ''}\n`;
                        formattedReport += `TYPOLOGY: ${parsed.typology || ''}\n`;
                        formattedReport += `STRAPLINE: ${parsed.strapline || ''}\n\n`;
                        if (parsed.keyPrinciples && parsed.keyPrinciples.length) {
                            formattedReport += `KEY PRINCIPLES:\n`;
                            parsed.keyPrinciples.forEach(kp => {
                                formattedReport += `• ${kp.title}: ${kp.text}\n`;
                            });
                            formattedReport += `\n`;
                        }
                        if (parsed.selections && parsed.selections.length) {
                            formattedReport += `12 CALIBRATED SELECTIONS:\n`;
                            parsed.selections.forEach(s => {
                                formattedReport += `• ${String(s.chapter).padStart(2, '0')} // ${s.category}: Option ${s.option} - ${s.title} [${s.tag}]\n`;
                            });
                        }
                        hiddenDataField.value = formattedReport;
                    }
                } catch (err) {
                    console.warn("Error parsing Design Compass report for submission:", err);
                }
            }
        } else {
            // Fallback for legacy parameters
            if (messageField && messageParam) {
                try {
                    messageField.value = decodeURIComponent(messageParam);
                } catch (e) {
                    messageField.value = messageParam;
                }
                messageField.rows = 12;
                messageField.style.borderColor = 'var(--color-rust-orange, #D66A48)';
                const dnaNotice = document.getElementById('dna-loaded-badge');
                if (dnaNotice) {
                    dnaNotice.style.display = 'inline-flex';
                }
            }

            if (subjectField && subjectParam) {
                try {
                    subjectField.value = decodeURIComponent(subjectParam);
                } catch (e) {
                    subjectField.value = subjectParam;
                }
            }

            if (projectTypeSelect && (messageParam || subjectParam)) {
                projectTypeSelect.value = 'Architecture';
            }
        }

        // Helper function: Client-Side PDF Compilation for The Design Compass Report
        async function generateCompassPdfBlob(reportData) {
            if (!window.html2pdf) {
                throw new Error('html2pdf library is not loaded');
            }

            const now = new Date();
            const currentMonthYear = now.toLocaleString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
            const persona = reportData.persona || 'Spatial Vision';
            const strapline = reportData.strapline || '';
            const keyPrinciples = reportData.keyPrinciples || [];
            const selections = reportData.selections || [];

            const renderHeader = () => `
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid #1C1D1F; padding-bottom: 8px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="assets/images/logo.png" alt="Studio Equilibrium" style="height: 28px; width: auto; display: block;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; color: #1C1D1F; text-transform: uppercase; line-height: 1;">STUDIO EQUILIBRIUM</span>
                            <span style="font-family: 'Inter', sans-serif; font-size: 7.5px; letter-spacing: 0.08em; color: #666666; text-transform: uppercase;">ARCHITECTURE + INTERIORS // BENGALURU</span>
                        </div>
                    </div>
                    <div style="text-align: right; display: flex; flex-direction: column; gap: 2px;">
                        <span style="font-family: 'Inter', sans-serif; font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em; color: #D66A48; text-transform: uppercase; line-height: 1;">THE DESIGN COMPASS // SPATIAL VISION REPORT</span>
                        <span style="font-family: 'Inter', sans-serif; font-size: 7.5px; font-weight: 500; letter-spacing: 0.08em; color: #888888; text-transform: uppercase;">CONFIDENTIAL &bull; CONCEPT SCHEMATIC &bull; ${currentMonthYear}</span>
                    </div>
                </div>
            `;

            const container = document.createElement('div');
            container.id = 'dna-pdf-compile-container';
            container.style.cssText = 'position: fixed; left: -9999px; top: 0; width: 760px; background: #FFFFFF; color: #1C1D1F; font-family: "Inter", -apple-system, sans-serif; box-sizing: border-box; z-index: -9999; line-height: 1.4;';

            let principlesHtml = '';
            keyPrinciples.forEach((kp, idx) => {
                principlesHtml += `
                    <div style="border: 1px solid #D8D8D8; border-radius: 6px; padding: 12px 14px; background: #FFFFFF; box-sizing: border-box;">
                        <div style="font-size: 7.5px; font-weight: 700; letter-spacing: 0.12em; color: #DDAF4C; text-transform: uppercase; margin-bottom: 4px;">KEY PRINCIPLE ${String(idx + 1).padStart(2, '0')}</div>
                        <h4 style="font-size: 10.5px; font-weight: 600; color: #1C1D1F; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 0.04em;">${kp.title}</h4>
                        <p style="font-size: 9px; line-height: 1.45; color: #4A4A4A; margin: 0;">${kp.text}</p>
                    </div>
                `;
            });

            let selectionsHtml = '';
            selections.forEach((sel) => {
                selectionsHtml += `
                    <div style="border: 1px solid #E0E0E0; border-radius: 6px; overflow: hidden; background: #FFFFFF; display: flex; flex-direction: column; box-sizing: border-box;">
                        <img src="${sel.image}" alt="${sel.title}" style="width: 100%; height: 70px; object-fit: cover; display: block;">
                        <div style="padding: 6px 8px;">
                            <span style="font-size: 7.5px; font-weight: 700; color: #D66A48; text-transform: uppercase; display: block; margin-bottom: 2px;">${String(sel.chapter).padStart(2, '0')} // ${sel.category}</span>
                            <div style="font-size: 9px; font-weight: 600; color: #1C1D1F; line-height: 1.25;">${sel.title}</div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = `
                <div class="pdf-page-1" style="padding: 24px 28px 20px 28px; box-sizing: border-box; background: #FFFFFF;">
                    ${renderHeader()}

                    <div style="background: #1C1D1F; color: #FFFFFF; padding: 20px 24px; border-radius: 8px; margin-bottom: 18px;">
                        <div style="font-size: 8.5px; font-weight: 700; letter-spacing: 0.16em; color: #DDAF4C; text-transform: uppercase; margin-bottom: 6px;">// THE DESIGN COMPASS &bull; SPATIAL VISION REPORT</div>
                        <h2 style="font-size: 24px; font-weight: 600; letter-spacing: -0.01em; color: #FFFFFF; margin: 0 0 8px 0; text-transform: capitalize;">${persona}</h2>
                        <p style="font-size: 11px; line-height: 1.5; color: rgba(255, 255, 255, 0.85); margin: 0; font-weight: 300;">${strapline}</p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 14px;">
                        ${principlesHtml}
                    </div>
                </div>

                <div class="html2pdf__page-break" style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>

                <div class="pdf-page-2" style="padding: 24px 28px 20px 28px; box-sizing: border-box; background: #FFFFFF;">
                    ${renderHeader()}

                    <div style="margin-bottom: 10px;">
                        <h3 style="font-family: 'Inter', sans-serif; font-size: 10.5px; font-weight: 700; letter-spacing: 0.12em; color: #1C1D1F; text-transform: uppercase; margin: 0;">// THE DESIGN COMPASS &bull; 12 CALIBRATED SELECTIONS</h3>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 14px;">
                        ${selectionsHtml}
                    </div>

                    <div style="border: 1px solid #D8D8D8; border-left: 3.5px solid #D66A48; border-radius: 6px; padding: 12px 16px; background: #FAF9F6; box-sizing: border-box;">
                        <h4 style="font-size: 9.5px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #D66A48; margin: 0 0 5px 0;">A PERSONAL NOTE FROM OUR PRINCIPAL ARCHITECT</h4>
                        <p style="font-size: 9px; line-height: 1.45; font-style: italic; color: #2B2B2B; margin: 0 0 8px 0;">
                            &ldquo;Architecture is never merely about square footage—it is an art of aligning climate, light, human movement, and honest materials. The choices you have curated here form the initial genetic blueprint of your future space. We would love to sit down with you, study your site contours, and translate this vision into a living structural reality.&rdquo;
                        </p>
                        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid rgba(0, 0, 0, 0.08); padding-top: 6px;">
                            <div>
                                <strong style="font-size: 9.5px; font-weight: 700; color: #1C1D1F; display: block;">Prashanth Nagabhushan</strong>
                                <span style="font-size: 8px; color: #666666;">Principal Architect, Studio Equilibrium</span>
                            </div>
                            <div style="text-align: right; font-size: 8px; color: #666666; line-height: 1.3;">
                                <div>+91 99645 14987 &bull; prashanth@studioequilibrium.in</div>
                                <div>Hoskote, Bengaluru &bull; www.studioequilibrium.in</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(container);

            try {
                const imgs = Array.from(container.querySelectorAll('img'));
                await Promise.all(imgs.map(img => {
                    if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
                    return new Promise(res => {
                        img.onload = res;
                        img.onerror = res;
                        setTimeout(res, 2000);
                    });
                }));

                const opt = {
                    margin: 0,
                    filename: 'The_Design_Compass_Spatial_Vision_Report.pdf',
                    image: { type: 'jpeg', quality: 0.95 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        logging: false,
                        scrollY: 0
                    },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                    pagebreak: { mode: ['css', 'legacy'] }
                };

                const pdfBlob = await window.html2pdf().from(container).set(opt).outputPdf('blob');
                return pdfBlob;
            } finally {
                if (container && container.parentNode) {
                    container.parentNode.removeChild(container);
                }
            }
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('contact-submit-btn');
            const successOverlay = document.getElementById('form-success-overlay');
            const originalText = submitBtn.textContent;

            // Swap email replyto token with live value before POST
            const emailInput = document.getElementById('email');
            const replytoField = contactForm.querySelector('input[name="replyto"]');
            if (replytoField && emailInput) {
                replytoField.value = emailInput.value.trim();
            }

            submitBtn.textContent = 'SENDING...';
            submitBtn.disabled = true;

            try {
                const formData = new FormData(contactForm);

                // Background PDF Compilation for The Design Compass report if present
                const rawReport = sessionStorage.getItem("se_design_compass_report");
                if (rawReport) {
                    try {
                        const parsedReport = JSON.parse(rawReport);
                        submitBtn.textContent = 'COMPILING REPORT...';
                        const pdfBlob = await generateCompassPdfBlob(parsedReport);
                        if (pdfBlob && (pdfBlob instanceof Blob || (pdfBlob.size && pdfBlob.size > 0))) {
                            formData.append('attachment', pdfBlob, 'The_Design_Compass_Spatial_Vision_Report.pdf');
                        }
                    } catch (pdfErr) {
                        console.warn("PDF compilation bypassed or failed, proceeding with standard data submission:", pdfErr);
                    }
                }

                submitBtn.textContent = 'SENDING...';

                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Hide the form and show success overlay
                    contactForm.style.display = 'none';
                    if (successOverlay) {
                        successOverlay.style.display = 'flex';
                    }
                    contactForm.reset();
                    try {
                        sessionStorage.removeItem("se_design_compass_report");
                    } catch (e) {}
                } else {
                    throw new Error(data.message || 'Submission failed.');
                }
            } catch (err) {
                console.error('Form submission error:', err);
                submitBtn.textContent = 'FAILED — TRY AGAIN';
                submitBtn.style.color = 'var(--color-rust-orange)';
                submitBtn.disabled = false;

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 3500);
            }
        });
    }

    // ----------------------------------------------------
    // 6. ACCORD PORTAL BLUEPRINT INTERACTION
    // ----------------------------------------------------
    const activeScreenImg = document.getElementById('active-screen-img');
    const activeScreenImgTablet = document.getElementById('active-screen-img-tablet');
    const deviceMockup = document.querySelector('.device-mockup');
    const featureBlocks = document.querySelectorAll('.client-app-feature-v');

    const defaultImgPhone = 'assets/images/app/app-dashboard.webp';
    const defaultImgTablet = 'assets/images/app/tab-app-dashboard.webp';
    const targetConfigs = {
        stages: {
            phoneImg: 'assets/images/app/app-stages.webp',
            tabletImg: 'assets/images/app/tab-app-stages.webp',
            accent: 'active-sage'
        },
        documents: {
            phoneImg: 'assets/images/app/app-documents.webp',
            tabletImg: 'assets/images/app/tab-app-documents.webp',
            accent: 'active-mustard'
        },
        materials: {
            phoneImg: 'assets/images/app/app-materials.webp',
            tabletImg: 'assets/images/app/tab-app-materials.webp',
            accent: 'active-terracotta'
        },
        scope: {
            phoneImg: 'assets/images/app/app-brief.webp',
            tabletImg: 'assets/images/app/tab-app-brief.webp',
            accent: 'active-mustard'
        }
    };

    let currentActiveTarget = null;
    let imageTransitionTimeout = null;

    const applyState = (target, animate = true) => {
        if (!activeScreenImg) return;

        featureBlocks.forEach(fb => {
            fb.classList.remove('active-sage', 'active-terracotta', 'active-mustard');
        });

        let phoneImgToSet = defaultImgPhone;
        let tabletImgToSet = defaultImgTablet;
        let accentToSet = '';

        if (target && targetConfigs[target]) {
            const config = targetConfigs[target];
            phoneImgToSet = config.phoneImg;
            tabletImgToSet = config.tabletImg;
            accentToSet = config.accent;

            const matchingBlock = Array.from(featureBlocks).find(fb => fb.getAttribute('data-target') === target);
            if (matchingBlock) {
                matchingBlock.classList.add(accentToSet);
            }
        }

        if (imageTransitionTimeout) {
            clearTimeout(imageTransitionTimeout);
        }

        if (animate) {
            activeScreenImg.style.opacity = 0;
            if (activeScreenImgTablet) activeScreenImgTablet.style.opacity = 0;
            imageTransitionTimeout = setTimeout(() => {
                activeScreenImg.src = phoneImgToSet;
                if (activeScreenImgTablet) activeScreenImgTablet.src = tabletImgToSet;
                activeScreenImg.style.opacity = 1;
                if (activeScreenImgTablet) activeScreenImgTablet.style.opacity = 1;
            }, 150);
        } else {
            activeScreenImg.src = phoneImgToSet;
            if (activeScreenImgTablet) activeScreenImgTablet.src = tabletImgToSet;
            activeScreenImg.style.opacity = 1;
            if (activeScreenImgTablet) activeScreenImgTablet.style.opacity = 1;
        }
    };

    if (featureBlocks.length > 0 && activeScreenImg) {
        const hasHover = window.matchMedia('(hover: hover)').matches;

        featureBlocks.forEach(block => {
            const target = block.getAttribute('data-target');

            block.addEventListener('click', (e) => {
                if (currentActiveTarget === target) {
                    currentActiveTarget = null;
                    applyState(null, true);
                } else {
                    currentActiveTarget = target;
                    applyState(target, true);
                }
            });

            if (hasHover) {
                block.addEventListener('mouseenter', () => {
                    applyState(target, true);
                });

                block.addEventListener('mouseleave', () => {
                    applyState(currentActiveTarget, true);
                });
            }

            const triggerLink = block.querySelector('.app-feature-trigger');
            if (triggerLink) {
                triggerLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (currentActiveTarget === target) {
                        currentActiveTarget = null;
                        applyState(null, true);
                    } else {
                        currentActiveTarget = target;
                        applyState(target, true);
                    }
                });
                if (hasHover) {
                    triggerLink.addEventListener('mouseenter', (e) => {
                        e.stopPropagation();
                        applyState(target, true);
                    });
                }
            }
        });
    }

    // ----------------------------------------------------
    // 7. HORIZONTAL TIMELINE — DRAG-SCROLL & ACTIVE STEP OBSERVER
    // ----------------------------------------------------
    const timelineTrack = document.getElementById('timeline-track');

    if (timelineTrack) {
        const timelineSteps = timelineTrack.querySelectorAll('.timeline-step');

        // ── Click-and-drag scroll ──
        let isDragging = false;
        let dragStartX = 0;
        let scrollStartLeft = 0;

        timelineTrack.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.pageX - timelineTrack.offsetLeft;
            scrollStartLeft = timelineTrack.scrollLeft;
            timelineTrack.classList.add('is-dragging');
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - timelineTrack.offsetLeft;
            const delta = (x - dragStartX) * 1.4; // 1.4× multiplier for snappier feel
            timelineTrack.scrollLeft = scrollStartLeft - delta;
        });

        const endDrag = () => {
            isDragging = false;
            timelineTrack.classList.remove('is-dragging');
        };
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('mouseleave', endDrag);

        // Touch swipe (mobile) — native touch-scroll handles it,
        // but we prevent default drag-selection interference on desktop.
        timelineTrack.addEventListener('dragstart', (e) => e.preventDefault());

        // ── Dynamic Accordion Layout for Timeline Steps ──
        const ribaNodes = document.querySelectorAll('.riba-node');

        const deactivateAllSteps = () => {
            timelineSteps.forEach(step => step.classList.remove('expanded'));
            ribaNodes.forEach(node => node.classList.remove('node-active'));
        };

        const activateStep = (index) => {
            deactivateAllSteps();
            if (timelineSteps[index]) {
                timelineSteps[index].classList.add('expanded');
            }
            if (ribaNodes[index]) {
                ribaNodes[index].classList.add('node-active');
            }
        };

        const centerStep = (step) => {
            if (!step) return;
            const containerWidth = timelineTrack.offsetWidth;
            const stepWidth = step.offsetWidth;
            const scrollLeft = step.offsetLeft - (containerWidth / 2) + (stepWidth / 2);
            timelineTrack.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        };

        // Attach listeners to timeline steps
        timelineSteps.forEach((step, index) => {
            step.addEventListener('mouseenter', () => {
                activateStep(index); // Just expand on hover, don't auto-center to avoid scroll loops
            });
            step.addEventListener('mouseleave', () => {
                deactivateAllSteps();
            });
            step.addEventListener('click', () => {
                activateStep(index);
                centerStep(step); // Center on click is safe and intentional
            });
        });

        // Attach listeners to RIBA nodes
        ribaNodes.forEach((node, index) => {
            node.addEventListener('mouseenter', () => {
                activateStep(index);
                const step = timelineSteps[index];
                if (step) centerStep(step);
            });
            node.addEventListener('mouseleave', () => {
                deactivateAllSteps();
            });
            node.addEventListener('click', () => {
                activateStep(index);
                const step = timelineSteps[index];
                if (step) centerStep(step);
            });
        });
    }
});
