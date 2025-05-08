document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');

    // Validação animada de formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        if (nome.value && email.value && mensagem.value) {
            alert(`Mensagem enviada!\n\nNome: ${nome.value}\nEmail: ${email.value}\nMensagem: ${mensagem.value}`);
            form.reset();
        } else {
            [nome, email, mensagem].forEach(field => {
                if (!field.value) {
                    field.classList.add('erro');
                    setTimeout(() => field.classList.remove('erro'), 1000);
                }
            });
            alert('Por favor, preencha todos os campos!');
        }
    });

    // Animações com IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animado');
                if (entry.target.classList.contains('habilidade')) {
                    const barra = entry.target.querySelector('.barra-progresso');
                    barra.style.width = barra.getAttribute('data-progresso') || '50%';
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section, .habilidade').forEach(sec => observer.observe(sec));

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(ancora => {
        ancora.addEventListener('click', function (e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            destino.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Barra de progresso do scroll
    const barraProgresso = document.createElement('div');
    barraProgresso.style.position = 'fixed';
    barraProgresso.style.top = '0';
    barraProgresso.style.left = '0';
    barraProgresso.style.height = '4px';
    barraProgresso.style.background = '#00c3ff';
    barraProgresso.style.zIndex = '9999';
    barraProgresso.style.width = '0%';
    document.body.appendChild(barraProgresso);

    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollAtual = window.scrollY;
        const progresso = (scrollAtual / scrollTotal) * 100;
        barraProgresso.style.width = `${progresso}%`;
    });
});
window.onload = function() {
    setTimeout(function() {
        document.getElementById('intro').style.display = 'none';
    }, 6500); 
};

