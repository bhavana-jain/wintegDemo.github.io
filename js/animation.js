document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".w_dashboard img, .staffing-solutions img, .w_consulting img, .clientele-list li, .learning-domains img");
   const learning = document.querySelector("#learning");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 1.0 // Fully visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  observer.observe(learning);
  
});

