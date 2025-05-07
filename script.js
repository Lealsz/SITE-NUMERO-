document.addEventListener('DOMContentLoaded', () => {
  // Formulário de contato com validação simples
  const form = document.getElementById('form-contato');
  form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

      if (nome && email && mensagem) {
          alert(`Mensagem enviada!\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
          form.reset();
      } else {
          alert('Por favor, preencha todos os campos!');
      }
  });

  // Usando IntersectionObserver para animações ao rolar
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animado');
          }
      });
  }, { threshold: 0.5 });

  sections.forEach(section => {
      observer.observe(section);
  });
});
