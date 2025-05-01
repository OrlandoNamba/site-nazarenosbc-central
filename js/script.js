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

// Seleciona a div da seta
const scrollIndicator = document.querySelector('.scroll-indicator');

// Função para verificar a posição do scroll
function toggleScrollIndicator() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight; 
    const indicatorPosition = scrollIndicator.getBoundingClientRect().top + scrollPosition;

    // Verifica se o meio da tela está acima ou abaixo da seta
    if (scrollPosition + windowHeight / 2 > indicatorPosition) {
        scrollIndicator.style.opacity = '0'; // Oculta suavemente
    } else {
        scrollIndicator.style.opacity = '1'; // Mostra suavemente
    }
}

// Adiciona o evento de scroll
window.addEventListener('scroll', toggleScrollIndicator);