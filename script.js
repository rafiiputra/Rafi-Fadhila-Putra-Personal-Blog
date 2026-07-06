/* --- ABOUT SLIDER LOOP --- */
let currentSlide = 0;
const sliderTrack = document.getElementById('sliderTrack');
const dots = document.querySelectorAll('.dot');

function updateSlidePosition() {
    if(sliderTrack) {
        sliderTrack.style.transform = `translateX(-${currentSlide * 50}%)`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
        });
    }
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 1;
    if (currentSlide > 1) currentSlide = 0;
    updateSlidePosition();
}

function setSlide(index) {
    currentSlide = index;
    updateSlidePosition();
}

/* --- BRANDS HORIZONTAL CAROUSEL LOGIC --- */
let currentBrandIndex = 0;
const brandTrack = document.getElementById('brandsTrack');
const brandViewport = document.getElementById('brandsViewport');
const brandProgressBar = document.getElementById('brandProgressBar');
const btnPrev = document.getElementById('brandPrev');
const btnNext = document.getElementById('brandNext');

function getBrandSliderMetrics() {
    const firstCard = brandTrack ? brandTrack.querySelector('.brand-card') : null;
    if (!firstCard || !brandViewport) return { cardWidth: 0, maxScroll: 0, maxIndex: 0 };
    const gap = parseInt(window.getComputedStyle(brandTrack).gap) || 0;
    const cardWidth = firstCard.offsetWidth + gap;
    const maxScroll = brandTrack.scrollWidth - brandViewport.offsetWidth;
    const maxIndex = Math.max(0, Math.ceil(maxScroll / cardWidth));
    return { cardWidth, maxScroll, maxIndex };
}

function moveBrandSlide(direction) {
    const { cardWidth, maxScroll, maxIndex } = getBrandSliderMetrics();
    if (maxScroll <= 0) return;
    currentBrandIndex += direction;
    if (currentBrandIndex < 0) currentBrandIndex = 0;
    if (currentBrandIndex > maxIndex) currentBrandIndex = maxIndex;
    
    let targetX = currentBrandIndex * cardWidth;
    if (targetX > maxScroll) targetX = maxScroll;
    brandTrack.style.transform = `translateX(-${targetX}px)`;
    
    if(brandProgressBar) {
        const progressPercent = (targetX / maxScroll) * 100;
        brandProgressBar.style.width = `${progressPercent}%`;
    }
    if(btnPrev) btnPrev.disabled = currentBrandIndex === 0;
    if(btnNext) btnNext.disabled = targetX >= maxScroll;
}

/* --- SEAMLESS INFINITE AUTO-SWIPER CAROUSEL (CAMPAIGN) --- */
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('campaignSlider');
    const wrapper = document.getElementById('campaignWrapper');
    if(!slider || !wrapper) return;
    
    // Clone items for infinite loop effect
    const cards = Array.from(slider.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        slider.appendChild(clone);
    });

    let speed = 0.8; 
    let currentX = 0;
    let isHovered = false;

    const getResetPoint = () => {
        const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
        return (cards[0].offsetWidth + gap) * cards.length;
    };

    wrapper.addEventListener('mouseenter', () => isHovered = true);
    wrapper.addEventListener('mouseleave', () => isHovered = false);

    function renderLoop() {
        if (!isHovered) {
            currentX -= speed;
            if (Math.abs(currentX) >= getResetPoint()) {
                currentX = 0;
            }
            slider.style.transform = `translateX(${currentX}px)`;
        }
        requestAnimationFrame(renderLoop);
    }
    requestAnimationFrame(renderLoop);
});

/* --- NAV LINK INTERACTIVE SMOOTH SCROLL --- */
const navOrderLink = document.getElementById('navOrderLink');
if(navOrderLink) {
    navOrderLink.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetSec = document.getElementById('order-details');
        if(targetSec) {
            targetSec.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

/* --- CONTROL INFRASTRUCTURE MODALS --- */
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openModal(title, description) {
    if(modalTitle && modalBody && modalOverlay) {
        modalTitle.innerText = title;
        modalBody.innerText = description;
        modalOverlay.classList.add('active');
    }
}

function closeModal() {
    if(modalOverlay) modalOverlay.classList.remove('active');
}

function closeModalOutside(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
}