 document.addEventListener('DOMContentLoaded', function() {
            // Initialize variables
            const slider = document.querySelector('.simple-slider');
            const slides = document.querySelectorAll('.slide');
            const indicators = document.querySelectorAll('.indicator');
            const progressBars = document.querySelectorAll('.indicator-progress');
            let currentSlide = 0;
            let slideInterval;
          //  const autoPlayDelay = 5000; // 5 seconds
            
          slides[0].classList.add('transition');
            // Initial setup - position slides
            slides[0].style.transform = 'translateX(0)';
            slides[0].style.opacity = '1';
            slides[1].style.transform = 'translateX(100%)';
            slides[1].style.opacity = '0';
            slides[2].style.transform = 'translateX(100%)';
            slides[2].style.opacity = '0';
            
            // Function to handle slide transitions
            function transitionSlide(from, to) {
                // Reset all progress bars
                progressBars.forEach(bar => {
                    bar.style.width = '0%';
                });
                
                // Update indicators
                indicators.forEach((indicator, i) => {
                    indicator.classList.remove('active');
                    if (i === to) {
                        indicator.classList.add('active');
                    }
                });
                
                // Handle different transition animations
                if (from === 0 && to === 1) {
                    // First slide exits to the left, second slide enters from the right
                    slides[from].style.transform = 'translateX(-100%)';
                    slides[from].style.opacity = '0';
                    slides[from].classList.remove('active');
                    slides[from].classList.remove('transition');
                    
                    slides[to].style.transform = 'translateX(0)';
                    slides[to].style.opacity = '1';
                    slides[to].classList.add('active');
                    setTimeout(function(){
                        slides[to].classList.add('transition');
                    })
                } 
                else if (from === 1 && to === 2) {
                    // Second slide exits to the top, third slide enters from the bottom
                    slides[from].style.transform = 'translateX(-100%)';
                    slides[from].style.opacity = '0';
                    slides[from].classList.remove('active');
                    slides[from].classList.remove('transition');
                    
                    slides[to].style.transform = 'translateX(0)';
                    slides[to].style.opacity = '1';
                    slides[to].classList.add('active');
                    setTimeout(function(){
                        slides[to].classList.add('transition');
                    })
                }
                else if (from === 2 && to === 0) {
                    // Third slide exits to the left, first slide enters from the left
                    slides[from].style.transform = 'translateX(-100%)';
                    slides[from].style.opacity = '0';
                    slides[from].classList.remove('active');
                    slides[from].classList.remove('transition');
                    
                    slides[to].style.transform = 'translateX(0)';
                    slides[to].style.opacity = '1';
                    slides[to].classList.add('active');
                    setTimeout(function(){
                        slides[to].classList.add('transition');
                    })
                }
                else if (from < to) {
                    // Default forward movement
                    slides[from].style.transform = 'translateX(-100%)';
                    slides[from].style.opacity = '0';
                    slides[from].classList.remove('active');
                    slides[from].classList.remove('transition');
                    
                    slides[to].style.transform = 'translateX(0)';
                    slides[to].style.opacity = '1';
                    slides[to].classList.add('active');
                    setTimeout(function(){
                        slides[to].classList.add('transition');
                    })
                } 
                else {
                    // Default backward movement
                    slides[from].style.transform = 'translateX(100%)';
                    slides[from].style.opacity = '0';
                    slides[from].classList.remove('active');
                    slides[from].classList.remove('transition');
                    
                    slides[to].style.transform = 'translateX(0)';
                    slides[to].style.opacity = '1';
                    slides[to].classList.add('active');
                    setTimeout(function(){
                        slides[to].classList.add('transition');
                    })

                }
                
                // Reset other slides that aren't involved in the transition
                for (let i = 0; i < slides.length; i++) {
                    if (i !== from && i !== to) {
                        if (i === 0) {
                            slides[i].style.transform = 'translateX(-100%)';
                        } else if (i === 1) {
                            slides[i].style.transform = 'translateX(100%)';
                        } else if (i === 2) {
                            slides[i].style.transform = 'translateY(100%)';
                        }
                        slides[i].style.opacity = '0';
                        slides[i].classList.remove('active');
                        slides[i].classList.remove('transition');
                    }
                }
                
                // Update currentSlide
                currentSlide = to;
            }
            
            // Function to move to the next slide
            function nextSlide() {
                const from = currentSlide;
                const to = (currentSlide + 1) % slides.length;
                transitionSlide(from, to);
                resetInterval();
            }
            
            // Set up click events for indicators
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    transitionSlide(currentSlide, index);
                    resetInterval();
                });
            });
            
            // Function to start automatic slideshow
            function startInterval() {
                slideInterval = setInterval(nextSlide, autoPlayDelay);
            }
            
            // Function to reset the interval timer
            function resetInterval() {
                clearInterval(slideInterval);
                startInterval();
            }
            
            // Initialize positioning for slides not currently shown
            slides.forEach((slide, index) => {
                if (index === 0) {
                    // First slide is active initially
                    slide.style.transform = 'translateX(0)';
                    slide.style.opacity = '1';
                } else if (index === 1) {
                    // Second slide starts from the right
                    slide.style.transform = 'translateX(100%)';
                    slide.style.opacity = '0';
                } else if (index === 2) {
                    // Third slide starts from the bottom
                    slide.style.transform = 'translateX(100%)';
                    slide.style.opacity = '0';
                }
            });
            
            // Initialize the automatic slideshow
            startInterval();
            
            // Handle keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    const from = currentSlide;
                    const to = (currentSlide - 1 + slides.length) % slides.length;
                    transitionSlide(from, to);
                    resetInterval();
                }
            });
        });