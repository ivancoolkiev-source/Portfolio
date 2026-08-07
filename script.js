document.addEventListener('DOMContentLoaded', () => {
  const hoverSound = new Audio('hoverSound.mp3');
  hoverSound.volume = 0.4;

  const clickSound = new Audio('clickSound.mp3');
  clickSound.volume = 0.4;

  const interactiveElements = document.querySelectorAll('a, button, .nav-link-item');

  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(() => {});
    });

    element.addEventListener('click', (e) => {
      if (element.tagName === 'A' && element.href && !element.target) {
        e.preventDefault();
        const targetUrl = element.href;

        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});


        setTimeout(() => {
          window.location.href = targetUrl;
        }, 150);
      } else {
        
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
    });
  });
});