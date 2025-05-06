
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("fade-out");
    setTimeout(() => loader.style.display = "none", 500);
  });
  
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('.nav-links a.active')?.classList.remove('active');
        const id = entry.target.getAttribute("id");
        document.querySelector(`.nav-links a[href="#${id}"]`)?.classList.add('active');
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.6
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  const toggleTheme = document.getElementById("theme-toggle");
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  

  const hamburger = document.getElementById("hamburger");
  const navLinksContainer = document.querySelector(".nav-links");
  
  hamburger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
  });
  

  window.addEventListener("scroll", () => {
    const progress = document.querySelector(".progress-bar");
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progress.style.width = `${scrollPercent}%`;
  });
  