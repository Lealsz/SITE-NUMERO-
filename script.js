document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const navbarLinks = document.querySelectorAll('.nav-links a');
    const hamburgerMenu = document.getElementById('hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    const loader = document.getElementById('loader');
    const sections = document.querySelectorAll('.section');
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    document.body.appendChild(progressBar);
  
    let isDarkMode = localStorage.getItem('theme') === 'dark';
  
    const toggleTheme = () => {
      document.body.classList.toggle('dark', !isDarkMode);
      isDarkMode = !isDarkMode;
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      themeToggleButton.textContent = isDarkMode ? '🌙' : '🌞';
    };
  
    themeToggleButton.addEventListener('click', toggleTheme);
  

    hamburgerMenu.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
    });
  

    const setActiveLink = () => {
      const scrollPosition = window.scrollY;
      navbarLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 50 && scrollPosition <= sectionTop + sectionHeight - 50) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
  
    window.addEventListener('load', () => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500); 
    });
  )
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / docHeight) * 100;
      progressBar.style.width = `${scrollPercentage}%`;
  
      setActiveLink();
    });
  
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;
  
        const interval = setInterval(() => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.round(current);
          } else {
            counter.textContent = target;
            clearInterval(interval);
          }
        }, 10);
      };
  
      const observerCounter = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
          }
        });
      }, { threshold: 0.5 });
  
      observerCounter.observe(counter);
    });
  
    if (isDarkMode) {
      document.body.classList.add('dark');
      themeToggleButton.textContent = '🌙';
    } else {
      document.body.classList.remove('dark');
      themeToggleButton.textContent = '🌞';
    }
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
      });
    });
  });
  