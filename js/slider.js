(function () {
  const slider = document.querySelector('[data-slider]');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('[data-slide]'));
  const nextButton = document.querySelector('[data-next]');
  const prevButton = document.querySelector('[data-prev]');
  const dotsContainer = document.querySelector('[data-dots]');
  let activeIndex = 0;
  let autoPlayInterval;

  function setActiveSlide(index) {
    slides[activeIndex].classList.remove('is-active');
    dotsContainer.children[activeIndex].classList.remove('is-active');
    activeIndex = (index + slides.length) % slides.length;
    slides[activeIndex].classList.add('is-active');
    dotsContainer.children[activeIndex].classList.add('is-active');
  }

  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => {
        stopAutoPlay();
        setActiveSlide(index);
        startAutoPlay();
      });
      dotsContainer.appendChild(dot);
    });
    dotsContainer.children[activeIndex].classList.add('is-active');
  }

  function nextSlide() {
    setActiveSlide(activeIndex + 1);
  }

  function previousSlide() {
    setActiveSlide(activeIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, 6000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
  }

  createDots();
  startAutoPlay();

  nextButton?.addEventListener('click', () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });

  prevButton?.addEventListener('click', () => {
    stopAutoPlay();
    previousSlide();
    startAutoPlay();
  });

  slider.addEventListener('mouseenter', stopAutoPlay);
  slider.addEventListener('mouseleave', startAutoPlay);
})();
