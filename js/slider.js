document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".track");
  
    // Duplicate images for seamless infinite scroll
    track.innerHTML += track.innerHTML;
  
    let position = 0;
  
    function getSpeed() {
      return 0.5; // lower = slower (smooth premium feel)
    }
  
    function animate() {
      const gap = parseInt(getComputedStyle(track).gap) || 0;
      const imgWidth = track.querySelector("img").offsetWidth + gap;
  
      position += getSpeed();
  
      // reset seamlessly
      if (position >= imgWidth * (track.children.length / 2)) {
        position = 0;
      }
  
      track.style.transform = `translateX(-${position}px)`;
  
      requestAnimationFrame(animate);
    }
  
    animate();
  });