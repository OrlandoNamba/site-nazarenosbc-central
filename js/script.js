const menuHamburger = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');
const overlay = document.createElement('div');

// Adiciona a classe ao filtro de fundo
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

menuHamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    menuHamburger.classList.toggle('active');
});

// Fecha o menu ao clicar no filtro
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    menuHamburger.classList.remove('active');
});