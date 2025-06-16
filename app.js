document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ All scripts loaded");

  // logo hover
  const logo = document.getElementById("logo-img");

  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.src = "images/logo-hover.png";
    });

    logo.addEventListener("mouseleave", () => {
      logo.src = "images/logo-default.png";
    });
  }

  // menu toggle
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");

  if (menu && menuLinks) {
    menu.addEventListener("click", function () {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });
  }


  //carousel
  const track = document.querySelector(".carousel-track");
  const slides = track ? Array.from(track.children) : [];
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  if (track && slides.length && nextButton && prevButton) {
    let currentIndex = 0;
    const visibleSlides = 4;

    function updateSlidePosition() {
      const slideWidth = slides[0].offsetWidth;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      console.log(`➡️ Slide index: ${currentIndex}`);
    }

    nextButton.addEventListener("click", () => {
    currentIndex += visibleSlides;
    if (currentIndex >= slides.length) {
      currentIndex = 0; // Loop back to start
      }
      updateSlidePosition();
    });

    prevButton.addEventListener("click", () => {
    currentIndex -= visibleSlides;
    if (currentIndex < 0) {
    // Loop to end of carousel
      currentIndex = Math.floor((slides.length - 1) / visibleSlides) * visibleSlides;
      }
    updateSlidePosition();
    });

    window.addEventListener("resize", updateSlidePosition);
    updateSlidePosition();
  }

  // pop out
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");

  if (modal && modalImage && closeBtn && slides.length) {
    slides.forEach(slide => {
      const img = slide.querySelector("img");
      if (img) {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
          modal.style.display = "block";
          modalImage.src = img.src;
        });
      }
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // resume
  window.downloadResume = function () {
    const resumeURL = "files/RESUME_DEGREE_AISYA AINA.pdf";
    const a = document.createElement("a");
    a.href = resumeURL;
    a.download = "RESUME_DEGREE_AISYA AINA.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

    document.querySelectorAll('.project-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.project-item');
      const isOpen = item.classList.contains('open');

      // Optional: close others first
      document.querySelectorAll('.project-item').forEach(p => {
        p.classList.remove('open');
        p.querySelector('.toggle-icon').textContent = '+';
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        header.querySelector('.toggle-icon').textContent = '-';
      }
    });
  });
});
