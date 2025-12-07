// =====================================================
        // GSAP SCROLLTRIGGER ANIMATIONS
        // =====================================================

                // Split text into individual characters for hover effect and animate on load
        document.addEventListener('DOMContentLoaded', function() {
            // Split brand name into characters
            const brandName = document.getElementById('dripspace-brand-name');
            const brandText = 'DripSpace';
            brandName.innerHTML = brandText.split('').map(char => 
                `<span class="dripspace-hero-brand-name-char">${char}</span>`
            ).join('');

            // Split main heading into characters
            const mainHeading = document.getElementById('dripspace-main-heading');
            const headingText = 'Premium style zero effort';
            mainHeading.innerHTML = headingText.split('').map(char => 
                `<span class="dripspace-hero-main-heading-char">${char === ' ' ? '&nbsp;' : char}</span>`
            ).join('');

            // Split subheading into characters
            const subheading = document.getElementById('dripspace-subheading');
            const subheadingText = 'Where clean aesthetics meet elevated comfort';
            subheading.innerHTML = subheadingText.split('').map(char => 
                `<span class="dripspace-hero-subheading-char">${char === ' ' ? '&nbsp;' : char}</span>`
            ).join('');

            // Animate brand name characters with stagger
            const brandChars = brandName.querySelectorAll('.dripspace-hero-brand-name-char');
            brandChars.forEach((char, index) => {
                setTimeout(() => {
                    char.classList.add('dripspace-animated');
                }, 400 + (index * 50));
            });

            // Animate heading characters with stagger
            const headingChars = mainHeading.querySelectorAll('.dripspace-hero-main-heading-char');
            headingChars.forEach((char, index) => {
                setTimeout(() => {
                    char.classList.add('dripspace-animated');
                }, 700 + (index * 30));
            });

            // Animate subheading characters with stagger
            const subheadingChars = subheading.querySelectorAll('.dripspace-hero-subheading-char');
            subheadingChars.forEach((char, index) => {
                setTimeout(() => {
                    char.classList.add('dripspace-animated');
                }, 1000 + (index * 20));
            });
        });
        gsap.registerPlugin(ScrollTrigger);

        // Header scroll effect
        gsap.to('header', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: '+=100',
                onEnter: () => document.querySelector('header').classList.add('scrolled'),
                onLeaveBack: () => document.querySelector('header').classList.remove('scrolled')
            }
        });

        // Hero Section Animations
        gsap.from('.luxurious h1.lux', {
            scrollTrigger: {
                trigger: '#main',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.luxurious h1.stylish', {
            scrollTrigger: {
                trigger: '#main',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 100,
            duration: 1.2,
            delay: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.left-text', {
            scrollTrigger: {
                trigger: '#main',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.4
        });

        gsap.from('.right-text', {
            scrollTrigger: {
                trigger: '#main',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.6
        });

        gsap.from('.gradient-container img', {
            scrollTrigger: {
                trigger: '#main',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            ease: 'power2.out'
        });

        // Page3 Image Cards Stagger Animation
        gsap.utils.toArray('.page3-image').forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 1,
                delay: i * 0.2,
                ease: 'power3.out'
            });
        });

        // Arrivals Section


        
        gsap.from('.arrivals-header', {
            scrollTrigger: {
                trigger: '.arrivals',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: -50,
            duration: 1
        });

        gsap.from('.arrivals-bottom-texts', {
            scrollTrigger: {
                trigger: '.arrivals-bottom-texts',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: 'back.out(1.2)'
        });

        // Grid Section Animations
        gsap.utils.toArray('.grid-column').forEach((col, i) => {
            gsap.from(col, {
                scrollTrigger: {
                    trigger: col,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.9,
                rotation: i % 2 === 0 ? -5 : 5,
                duration: 1,
                delay: i * 0.15,
                ease: 'power2.out'
            });
        });

        // Jackets Section - Stagger Animation



        gsap.from('.jackets h2', {
            scrollTrigger: {
                trigger: '.jackets',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });

        gsap.utils.toArray('.jacket-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 80,
                duration: 0.8,
                delay: (i % 6) * 0.1,
                ease: 'power2.out'
            });

            // Hover animation
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Shoes Section
        gsap.from('.shoes-slider-header', {
            scrollTrigger: {
                trigger: '.shoes-slider',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -100,
            duration: 1
        });

        // Page6 Text Animation
        gsap.from('.page6 h2', {
            scrollTrigger: {
                trigger: '.page6',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 1
        });

        gsap.from('.page6 p', {
            scrollTrigger: {
                trigger: '.page6',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.3
        });

        // =====================================================
        // MEGA MENU
        // =====================================================
        let currentMenu = null;

        function showMenu(menu) {
            hideMenu();
            const menuElm = document.getElementById(menu + '-menu');
            if (menuElm) {
                menuElm.classList.add('active');
                currentMenu = menuElm;
            }
        }

        function hideMenu() {
            if (currentMenu) {
                currentMenu.classList.remove('active');
                currentMenu = null;
            }
        }

        // =====================================================
        // ACCOUNT BOX
        // =====================================================
        const accountBtn = document.querySelector('.js-open');
        const accountBox = document.querySelector('.account');
        const inputBtn = document.getElementById('inputOpen');
        const input = document.getElementById('input');

        if (accountBtn && accountBox) {
            accountBtn.addEventListener('click', () => {
                accountBox.classList.toggle('open');
            });
        }

        if (inputBtn && input) {
            inputBtn.addEventListener('click', () => {
                input.classList.add('input-open');
            });
        }

        // =====================================================
        // HAMBURGER MENU
        // =====================================================
        const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const hamburgerSidebar = document.querySelector('.hamburger-sidebar');
        const hamburgerOverlay = document.querySelector('.hamburger-overlay');
        const sectionTitles = document.querySelectorAll('.hamburger-section-title');

        if (hamburgerBtn && hamburgerSidebar && hamburgerOverlay) {
            hamburgerBtn.addEventListener('click', () => {
                hamburgerSidebar.classList.add('open');
                hamburgerOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            function closeHamburgerMenu() {
                hamburgerSidebar.classList.remove('open');
                hamburgerOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', closeHamburgerMenu);
            }
            
            hamburgerOverlay.addEventListener('click', closeHamburgerMenu);

            sectionTitles.forEach(title => {
                title.addEventListener('click', () => {
                    const submenu = title.nextElementSibling;
                    const isOpen = submenu && submenu.classList.contains('open');

                    document.querySelectorAll('.hamburger-submenu').forEach(menu => {
                        menu.classList.remove('open');
                    });

                    document.querySelectorAll('.hamburger-section-title').forEach(t => {
                        t.classList.remove('active');
                    });

                    if (!isOpen && submenu) {
                        submenu.classList.add('open');
                        title.classList.add('active');
                    }
                });
            });
        }

        // =====================================================
        // ARRIVALS SLIDER
        // =====================================================
        const sliderTrack = document.getElementById('sliderTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('sliderDots');
        const items = document.querySelectorAll('.arrival-items');

        let currentIndex = 0;
        let itemsToShow = getItemsToShow();

        function getItemsToShow() {
            const width = window.innerWidth;
            if (width < 480) return 1;
            if (width < 768) return 2;
            if (width < 1024) return 3;
            return 3;
        }

        function getTotalSlides() {
            return Math.ceil(items.length / itemsToShow);
        }

        function createDots() {
            dotsContainer.innerHTML = '';
            const totalSlides = getTotalSlides();

            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function moveSlider() {
            const gap = 24; // 1.5rem = 24px
            const itemWidth = items[0].offsetWidth;
            const moveAmount = currentIndex * (itemWidth * itemsToShow + gap * itemsToShow);
            sliderTrack.style.transform = `translateX(-${moveAmount}px)`;
            updateDots();
        }

        function nextSlide() {
            const totalSlides = getTotalSlides();
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            moveSlider();
        }

        function prevSlide() {
            const totalSlides = getTotalSlides();
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1;
            }
            moveSlider();
        }

        function goToSlide(index) {
            currentIndex = index;
            moveSlider();
        }

        if (nextBtn && prevBtn && sliderTrack && items.length > 0) {
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);

            createDots();
            moveSlider();
        }

        // =====================================================
        // SHOES SLIDER
        // =====================================================
        const shoesTrack = document.getElementById('shoesTrack');
        const shoesPrev = document.getElementById('shoesPrevBtn');
        const shoesNext = document.getElementById('shoesNextBtn');
        const shoesItems = document.querySelectorAll('.shoes-item');
        let shoesIndex = 0;
        let shoesToShow = getShoesItemsToShow();

        function getShoesItemsToShow() {
            const width = window.innerWidth;
            if (width < 480) return 1;
            if (width < 768) return 2;
            return 3;
        }

        function moveShoesSlider() {
            const gap = 32; // 2rem = 32px
            const itemWidth = shoesItems[0].offsetWidth;
            const moveAmount = shoesIndex * (itemWidth * shoesToShow + gap * shoesToShow);
            shoesTrack.style.transform = `translateX(-${moveAmount}px)`;
        }

        function nextShoes() {
            const total = Math.ceil(shoesItems.length / shoesToShow);
            shoesIndex = (shoesIndex + 1) % total;
            moveShoesSlider();
        }

        function prevShoes() {
            const total = Math.ceil(shoesItems.length / shoesToShow);
            if (shoesIndex > 0) {
                shoesIndex--;
            } else {
                shoesIndex = total - 1;
            }
            moveShoesSlider();
        }

        if (shoesNext && shoesPrev && shoesTrack && shoesItems.length > 0) {
            shoesNext.addEventListener('click', nextShoes);
            shoesPrev.addEventListener('click', prevShoes);
        }

        // =====================================================
        // WINDOW RESIZE HANDLERS
        // =====================================================
        window.addEventListener('resize', () => {
            const oldItemsToShow = itemsToShow;
            const oldShoesToShow = shoesToShow;
            
            itemsToShow = getItemsToShow();
            shoesToShow = getShoesItemsToShow();
            
            // Reset indices if items to show changed
            if (oldItemsToShow !== itemsToShow) {
                currentIndex = 0;
                if (items.length > 0) {
                    createDots();
                }
            }
            if (oldShoesToShow !== shoesToShow) {
                shoesIndex = 0;
            }
            
            if (items.length > 0) {
                moveSlider();
            }
            if (shoesItems.length > 0) {
                moveShoesSlider();
            }
        });

        // =====================================================
        // REFRESH SCROLLTRIGGER ON LOAD
        // =====================================================
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });