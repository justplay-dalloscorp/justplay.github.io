// JustPlay Carousel Component
class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.carousel-slide');
        this.indicators = container.querySelectorAll('.carousel-indicator');
        this.prevBtn = container.querySelector('.carousel-prev');
        this.nextBtn = container.querySelector('.carousel-next');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        
        this.init();
    }

    init() {
        if (this.slides.length === 0) return;
        
        this.showSlide(0);
        this.setupEventListeners();
        this.startAutoPlay();
    }

    setupEventListeners() {
        // Previous button
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }

        // Next button
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.container.contains(document.activeElement) || 
                this.container.matches(':hover')) {
                if (e.key === 'ArrowLeft') {
                    this.previousSlide();
                } else if (e.key === 'ArrowRight') {
                    this.nextSlide();
                }
            }
        });

        // Touch/swipe support
        this.setupTouchEvents();
    }

    setupTouchEvents() {
        let startX = 0;
        let endX = 0;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));

        // Show current slide
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }
        if (this.indicators[index]) {
            this.indicators[index].classList.add('active');
        }

        this.currentSlide = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            this.showSlide(index);
        }
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    destroy() {
        this.stopAutoPlay();
        // Remove event listeners if needed
    }
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new Carousel(carousel);
    });
});
