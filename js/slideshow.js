/**
 * MarkFlow Studio - Slideshow Module
 * Converts Markdown into a fullscreen slideshow presentation.
 * Supports keyboard navigation, progress tracking, and slide animations.
 */

'use strict';

const MarkFlowSlideshow = (function () {

    // ========== State ==========
    let slides = [];
    let currentSlide = 0;
    let isActive = false;
    let overlayEl = null;
    let containerEl = null;
    let contentEl = null;
    let counterEl = null;
    let progressBarEl = null;

    // ========== Initialization ==========

    /**
     * Initialize the slideshow module
     */
    function init() {
        overlayEl = document.getElementById('slideshowOverlay');
        containerEl = document.getElementById('slideshowContainer');
        contentEl = document.getElementById('slideContent');
        counterEl = document.getElementById('slideCounter');
        progressBarEl = document.getElementById('progressBar');

        // Bind keyboard navigation
        document.addEventListener('keydown', handleSlideshowKeydown);

        // Bind button navigation
        document.getElementById('btnSlidePrev').addEventListener('click', prevSlide);
        document.getElementById('btnSlideNext').addEventListener('click', nextSlide);

        // Bind click on overlay background to exit
        overlayEl.addEventListener('click', function (e) {
            if (e.target === overlayEl) {
                exit();
            }
        });
    }

    // ========== Slide Parsing ==========

    /**
     * Parse Markdown content into slides
     * Slides are separated by horizontal rules (---)
     * @param {string} markdown - The raw Markdown text
     * @returns {string[]} Array of slide content strings
     */
    function parseSlides(markdown) {
        if (!markdown || typeof markdown !== 'string') {
            return ['<h1>No Content</h1><p>Write some Markdown and add <code>---</code> to create slides.</p>'];
        }

        // Split by horizontal rule (--- on its own line)
        const rawSlides = markdown.split(/\n\s*---\s*\n/);

        // Filter out empty slides and parse each one
        return rawSlides
            .map(function (slide) {
                return slide.trim();
            })
            .filter(function (slide) {
                return slide.length > 0;
            })
            .map(function (slide, index) {
                return MarkFlowParser.parse(slide, {
                    cjkSpacing: true,
                    cjkIndent: false  // Disable indent in slides for cleaner look
                });
            });
    }

    // ========== Slide Rendering ==========

    /**
     * Render the current slide with animation
     * @param {string} direction - The animation direction ('next' or 'prev')
     */
    function renderSlide(direction) {
        if (slides.length === 0) return;

        const html = slides[currentSlide];

        if (direction) {
            // Animate out
            const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
            contentEl.classList.add(outClass);

            setTimeout(function () {
                contentEl.classList.remove(outClass);
                contentEl.innerHTML = html;
                contentEl.classList.remove('slide-out-left', 'slide-out-right');
                // Force reflow for animation restart
                void contentEl.offsetWidth;
                contentEl.style.animation = 'none';
                void contentEl.offsetWidth;
                contentEl.style.animation = '';
            }, 280);
        } else {
            contentEl.innerHTML = html;
        }

        // Update counter
        counterEl.textContent = (currentSlide + 1) + ' / ' + slides.length;

        // Update progress bar
        const progress = slides.length > 1
            ? ((currentSlide + 1) / slides.length) * 100
            : 100;
        progressBarEl.style.width = progress + '%';
    }

    // ========== Navigation ==========

    /**
     * Go to the next slide
     */
    function nextSlide() {
        if (!isActive || slides.length === 0) return;

        if (currentSlide < slides.length - 1) {
            currentSlide++;
            renderSlide('next');
        }
    }

    /**
     * Go to the previous slide
     */
    function prevSlide() {
        if (!isActive || slides.length === 0) return;

        if (currentSlide > 0) {
            currentSlide--;
            renderSlide('prev');
        }
    }

    /**
     * Go to a specific slide by index
     * @param {number} index - The slide index
     */
    function goToSlide(index) {
        if (!isActive || index < 0 || index >= slides.length) return;

        const direction = index > currentSlide ? 'next' : 'prev';
        currentSlide = index;
        renderSlide(direction);
    }

    /**
     * Go to the first slide
     */
    function firstSlide() {
        if (!isActive) return;
        goToSlide(0);
    }

    /**
     * Go to the last slide
     */
    function lastSlide() {
        if (!isActive) return;
        goToSlide(slides.length - 1);
    }

    // ========== Keyboard Handling ==========

    /**
     * Handle keyboard events for slideshow navigation
     * @param {KeyboardEvent} e - The keyboard event
     */
    function handleSlideshowKeydown(e) {
        if (!isActive) return;

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                nextSlide();
                break;

            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                prevSlide();
                break;

            case 'Home':
                e.preventDefault();
                firstSlide();
                break;

            case 'End':
                e.preventDefault();
                lastSlide();
                break;

            case 'Escape':
                e.preventDefault();
                exit();
                break;
        }
    }

    // ========== Enter / Exit ==========

    /**
     * Enter slideshow mode
     * @param {string} markdown - The Markdown content to present (optional)
     */
    function enter(markdown) {
        const content = markdown || MarkFlowEditor.getContent();
        slides = parseSlides(content);
        currentSlide = 0;
        isActive = true;

        // Show overlay
        overlayEl.style.display = 'flex';

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Render first slide
        renderSlide(null);

        // Focus for keyboard events
        overlayEl.focus();
    }

    /**
     * Exit slideshow mode
     */
    function exit() {
        isActive = false;
        overlayEl.style.display = 'none';
        document.body.style.overflow = '';

        // Return focus to editor
        const editorEl = document.getElementById('editor');
        if (editorEl) {
            editorEl.focus();
        }
    }

    // ========== Touch Support ==========

    /**
     * Initialize touch/swipe support for mobile
     */
    function initTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        const minSwipeDistance = 50;

        if (!overlayEl) return;

        overlayEl.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        overlayEl.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            const distance = touchStartX - touchEndX;

            if (Math.abs(distance) >= minSwipeDistance) {
                if (distance > 0) {
                    nextSlide(); // Swipe left -> next
                } else {
                    prevSlide(); // Swipe right -> prev
                }
            }
        }, { passive: true });
    }

    // ========== Public API ==========
    return {
        init: init,
        initTouchSupport: initTouchSupport,
        enter: enter,
        exit: exit,
        next: nextSlide,
        prev: prevSlide,
        goTo: goToSlide,
        isActive: function () { return isActive; },
        getSlideCount: function () { return slides.length; },
        getCurrentSlide: function () { return currentSlide; }
    };

})();
