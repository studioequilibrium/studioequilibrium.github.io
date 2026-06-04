/**
 * Studio Equilibrium - Enhanced Interactivity (Multi-page Safe & Custom Physics Follower)
 */

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
    // 0B. AUTOMATED HERO LANDING BACKGROUND SLIDESHOW
    // ----------------------------------------------------
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlideIndex = 0;
        setInterval(() => {
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            slides[currentSlideIndex].classList.add('active');
        }, 4000);
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

            const interactiveElements = document.querySelectorAll('a, button, .project-card, .close-modal, .view-all-btn, .submit-btn, select, option, input, textarea, .client-app-feature-v');
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

    // Define known existing files in assets directory to detect missing assets dynamically
    const existingAssets = [
        'assets/images/logo.png',
        'assets/images/logo-mark.png',
        'assets/images/app-dashboard.png',
        'assets/images/app-stages.png',
        'assets/images/app-documents.png',
        'assets/images/app-materials.png',
        'assets/images/app-brief.png',
        'assets/images/Enscape_2023-12-03-00-52-43.png',
        'assets/images/Enscape_2023-12-03-00-54-00.png',
        'assets/images/Enscape_2023-12-03-00-57-33.png'
    ];

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

    function getAssetImage(path, projectId = 1) {
        const isPathBlank = !path || path.trim() === '';
        const isMissing = path && path.startsWith('assets/') && !existingAssets.includes(path);
        if (isPathBlank || isMissing) {
            return fallbackImages[(projectId - 1) % fallbackImages.length];
        }
        return path;
    }

    function renderProjects(projects, container) {
        container.innerHTML = '';
        const isVerticalSequence = container.classList.contains('portfolio-vertical-sequence');
        
        projects.forEach(project => {
            const card = document.createElement(isVerticalSequence ? 'div' : 'article');
            card.className = isVerticalSequence ? 'project-vertical-row' : 'project-card';
            card.dataset.id = project.id;

            const fallbackImage = fallbackImages[(project.id - 1) % fallbackImages.length];
            const imgSrc = getAssetImage(project.image, project.id);

            if (isVerticalSequence) {
                card.innerHTML = `
                    <div class="project-vertical-image-container">
                        <img src="${imgSrc}" alt="${project.title}" onerror="this.onerror=null; this.src='${fallbackImage}';">
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
                                <td>SCALE</td>
                                <td>${project.scale}</td>
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
                        <img src="${imgSrc}" alt="${project.title}" onerror="this.onerror=null; this.src='${fallbackImage}';">
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
                    const mainImage = getAssetImage(currentProject.image, currentProject.id);
                    currentProjectImages = [
                        mainImage,
                        fallbackImages[(currentProject.id) % fallbackImages.length],
                        fallbackImages[(currentProject.id + 1) % fallbackImages.length],
                        fallbackImages[(currentProject.id + 2) % fallbackImages.length]
                    ];
                    
                    populateModal(currentProject, currentProjectImages, modalBody);
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';

                    // Attach arrow listeners
                    const prevBtn = modalBody.querySelector('.prev-arrow');
                    const nextBtn = modalBody.querySelector('.next-arrow');

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
                    <img class="carousel-active-image" src="${images[0]}" alt="${project.title}">
                    <!-- Arrows float absolutely over the image -->
                    <button class="carousel-arrow prev-arrow" aria-label="Previous Slide">&#8592;</button>
                    <button class="carousel-arrow next-arrow" aria-label="Next Slide">&#8594;</button>
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
    // 5. CONTACT FORM PROCESSOR
    // ----------------------------------------------------
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract values securely
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const projectType = document.getElementById('project-type').value;
            const message = document.getElementById('message').value;
            
            const payload = {
                name: name.trim(),
                email: email.trim(),
                projectType: projectType,
                message: message.trim()
            };
            
            // Log payload structure ready for backend transmission
            console.log('Dispatching request to email service endpoint...', payload);
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'SENDING...';
            submitBtn.disabled = true;
            
            // Mock security processing and delay
            setTimeout(() => {
                submitBtn.textContent = 'MESSAGE SENT';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }, 1200);
        });
    }

    // ----------------------------------------------------
    // 6. ACCORD PORTAL BLUEPRINT INTERACTION
    // ----------------------------------------------------
    const activeScreenImg = document.getElementById('active-screen-img');
    const activeScreenImgTablet = document.getElementById('active-screen-img-tablet');
    const deviceMockup = document.querySelector('.device-mockup');
    const featureBlocks = document.querySelectorAll('.client-app-feature-v');
    
    const defaultImgPhone = 'assets/images/app-dashboard.png';
    const defaultImgTablet = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'; // Analytics dashboard mockup
    const targetConfigs = {
        stages: {
            phoneImg: 'assets/images/app-stages.png',
            tabletImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800', // Web plan stages mockup
            accent: 'active-sage'
        },
        documents: {
            phoneImg: 'assets/images/app-documents.png',
            tabletImg: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=800', // Documents/workstation mockup
            accent: 'active-mustard'
        },
        materials: {
            phoneImg: 'assets/images/app-materials.png',
            tabletImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', // Architectural materials library
            accent: 'active-terracotta'
        },
        scope: {
            phoneImg: 'assets/images/app-brief.png',
            tabletImg: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800', // Product scope/wireframes mockup
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

    // ----------------------------------------------------
    // 8. INTERACTIVE PARTICLE CANVAS BACKGROUND (Upgraded Ripple Engine)
    // ----------------------------------------------------
    const canvas = document.getElementById('bg-particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, active: false };
        let ripples = [];
        let lastX = 0;
        let lastY = 0;

        const spacing = 22; // grid spacing (increased density for drafting matrix)
        const returnEase = 0.05; // spring constant
        const friction = 0.85; // damping/friction
        const minMoveDist = 15; // minimum distance to spawn next ripple

        const idleColor = { r: 51, g: 51, b: 51 }; // dark grey #333333
        const idleAlpha = 0.15; // low opacity grid

        const palette = [
            { r: 214, g: 106, b: 72 },   // rust orange #D66A48
            { r: 122, g: 139, b: 113 }, // sage green #7A8B71
            { r: 221, g: 175, b: 76 }    // mustard gold #DDAF4C
        ];

        class Particle {
            constructor(x, y) {
                this.baseX = x;
                this.baseY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
                this.radius = 1;
                
                // Color interpolation state
                this.color = { ...idleColor };
                this.alpha = idleAlpha;
                this.targetColor = { ...idleColor };
                this.targetAlpha = idleAlpha;
                this.isShifted = false;
            }

            draw() {
                ctx.fillStyle = `rgba(${Math.round(this.color.r)}, ${Math.round(this.color.g)}, ${Math.round(this.color.b)}, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                // Spring force returning to base coordinates
                const dxBase = this.baseX - this.x;
                const dyBase = this.baseY - this.y;
                let ax = dxBase * returnEase;
                let ay = dyBase * returnEase;

                let isCurrentlyPushed = false;

                // 1. Direct magnetic deflection from cursor (short range: 50px)
                if (mouse.active && mouse.x !== null && mouse.y !== null) {
                    const dxMouse = this.x - mouse.x;
                    const dyMouse = this.y - mouse.y;
                    const distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                    if (distance < 50) {
                        const force = (50 - distance) / 50 * 1.5;
                        const angle = Math.atan2(dyMouse, dxMouse);
                        ax += Math.cos(angle) * force;
                        ay += Math.sin(angle) * force;
                        isCurrentlyPushed = true;
                    }
                }

                // 2. Deflection from expanding ripple waves (max radius: 180px)
                ripples.forEach(ripple => {
                    const dxRipple = this.x - ripple.x;
                    const dyRipple = this.y - ripple.y;
                    const distance = Math.sqrt(dxRipple * dxRipple + dyRipple * dyRipple);
                    const thickness = 25;
                    const distFromWave = Math.abs(distance - ripple.radius);

                    if (distFromWave < thickness && distance > 10) {
                        const force = (1 - distFromWave / thickness) * ripple.strength * (1 - ripple.radius / ripple.maxRadius);
                        const angle = Math.atan2(dyRipple, dxRipple);
                        ax += Math.cos(angle) * force;
                        ay += Math.sin(angle) * force;
                        isCurrentlyPushed = true;
                    }
                });

                // Physics integration
                this.vx += ax;
                this.vy += ay;
                this.vx *= friction;
                this.vy *= friction;
                this.x += this.vx;
                this.y += this.vy;

                // Color shift state manager
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (isCurrentlyPushed || speed > 0.3) {
                    if (!this.isShifted) {
                        const randomColor = palette[Math.floor(Math.random() * palette.length)];
                        this.targetColor = { ...randomColor };
                        this.targetAlpha = 0.75; // vivid color opacity
                        this.isShifted = true;
                    }
                } else if (speed < 0.05) {
                    this.targetColor = { ...idleColor };
                    this.targetAlpha = idleAlpha;
                    this.isShifted = false;
                }

                // Smooth color transition
                this.color.r += (this.targetColor.r - this.color.r) * 0.06;
                this.color.g += (this.targetColor.g - this.color.g) * 0.06;
                this.color.b += (this.targetColor.b - this.color.b) * 0.06;
                this.alpha += (this.targetAlpha - this.alpha) * 0.06;
            }
        }

        function initGrid() {
            particles = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const cols = Math.floor(canvas.width / spacing) + 2;
            const rows = Math.floor(canvas.height / spacing) + 2;

            const offsetX = (canvas.width - (cols - 1) * spacing) / 2;
            const offsetY = (canvas.height - (rows - 1) * spacing) / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = offsetX + i * spacing;
                    const y = offsetY + j * spacing;
                    particles.push(new Particle(x, y));
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Propagate ripple wave fronts
            ripples.forEach(r => {
                r.radius += r.speed;
            });
            ripples = ripples.filter(r => r.radius <= r.maxRadius);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            initGrid();
        });

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;

            const dist = Math.sqrt((e.clientX - lastX) ** 2 + (e.clientY - lastY) ** 2);
            if (dist > minMoveDist) {
                ripples.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 0,
                    maxRadius: 100, // deflection radius: 100px (localized precision)
                    speed: 6,
                    strength: 2.2
                });
                lastX = e.clientX;
                lastY = e.clientY;
            }
        });

        window.addEventListener('mouseleave', () => {
            mouse.active = false;
            mouse.x = null;
            mouse.y = null;
        });

        initGrid();
        animate();
    }
});
