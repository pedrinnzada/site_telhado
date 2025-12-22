// Script para o menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Alterna a classe 'active' para mostrar/ocultar o menu
});

// Script para o header scrolled
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
