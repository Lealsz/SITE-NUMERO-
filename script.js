
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento carregado e script.js está funcionando.');

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                console.log(`Navegando para a seção: ${targetId}`);
            }
        });
    });
});
