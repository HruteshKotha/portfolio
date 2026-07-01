document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                
                // Trigger specific animations based on the section
                if (entry.target.id === 'about') {
                    animateNumbers();
                } else if (entry.target.id === 'skills') {
                    animateProgressBars();
                }
                
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all hidden sections
    document.querySelectorAll('.section-hidden').forEach(section => {
        sectionObserver.observe(section);
    });

    // 3. Animate Numbers
    let numbersAnimated = false;
    function animateNumbers() {
        if (numbersAnimated) return;
        
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.innerText = target + (target > 10 ? '+' : ''); // Add + to some numbers
                }
            };
            updateNumber();
        });
        
        numbersAnimated = true;
    }

    // 4. Animate Progress Bars
    let barsAnimated = false;
    function animateProgressBars() {
        if (barsAnimated) return;
        
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            // Small delay for better visual effect
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 300);
        });
        
        barsAnimated = true;
    }

    // 5. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for navbar
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Contact Form Submission Prevention (for demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span>Sent Successfully!</span> <i class="ph ph-check-circle"></i>';
            btn.style.background = 'var(--accent-purple)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // 7. Initialize hero section immediately
    setTimeout(() => {
        const hero = document.getElementById('hero');
        if (hero) hero.classList.add('section-visible');
    }, 100);
});
