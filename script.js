// Scroll animation
const faders = document.querySelectorAll('.fade-section');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

faders.forEach(section => {
  appearOnScroll.observe(section);
});

window.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("intro-heading");
    const para = document.getElementById("intro-para");
    const traits = document.querySelectorAll(".trait");
  
    // Fade in heading first
    setTimeout(() => {
      heading.classList.add("show");
    }, 300); // small delay after load
  
    // Fade in paragraph second
    setTimeout(() => {
      para.classList.add("show");
    }, 1200); // after heading
  
    // Animate traits one-by-one
    traits.forEach((trait, i) => {
      setTimeout(() => {
        trait.classList.add("show");
      }, 2000 + i * 600); // stagger traits
    });
  });
  
  // Lightbox functionality
const lightboxImgs = document.querySelectorAll(".lightbox-img");
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxModalImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

lightboxImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightboxModal.style.display = "block";
    lightboxModalImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightboxModal.style.display = "none";
});

// Close on outside click
lightboxModal.addEventListener("click", (e) => {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = "none";
  }
});
// Show next image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % lightboxImgs.length;
  lightboxModalImg.src = lightboxImgs[currentIndex].src;
});

// Show previous image
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + lightboxImgs.length) % lightboxImgs.length;
  lightboxModalImg.src = lightboxImgs[currentIndex].src;
});

