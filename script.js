// Atualiza o ano automaticamente
document.getElementById('ano').textContent = new Date().getFullYear();

// Loader desaparece após carregar
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute('href'));
    if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
  });
});

// ScrollSpy
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 120;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Animar entrada das seções
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Feedback do formulário
document.getElementById('formulario').addEventListener('submit', e => {
  e.preventDefault();
  const botao = e.target.querySelector('button');
  botao.textContent = 'Enviando...';
  botao.disabled = true;

  setTimeout(() => {
    alert('Mensagem enviada com sucesso!');
    e.target.reset();
    botao.textContent = 'Enviar';
    botao.disabled = false;
  }, 1500);
});
