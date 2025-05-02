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

// Seleciona o menu, os links, o botão hambúrguer e o overlay
const menuLinks = document.querySelectorAll('.menu a');

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuHamburger.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Seleciona a div da seta
const scrollIndicator = document.querySelector('.scroll-indicator');

// Função para verificar a posição do scroll
function toggleScrollIndicator() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight; 
    const indicatorPosition = scrollIndicator.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition + windowHeight / 2 > indicatorPosition) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
}

// Adiciona o evento de scroll
window.addEventListener('scroll', toggleScrollIndicator);

// Seleciona o botão e o footer
const voltarTopoButton = document.getElementById('voltar-topo');
const footer = document.querySelector('.footer');

// Mostra o botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        voltarTopoButton.style.display = 'flex';
    } else {
        voltarTopoButton.style.display = 'none';
    }

    // Impede que o botão ultrapasse o footer
    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const buttonHeight = voltarTopoButton.offsetHeight;
    const windowHeight = window.innerHeight;

    if (window.scrollY + windowHeight - buttonHeight > footerPosition) {
        voltarTopoButton.style.bottom = `${windowHeight + window.scrollY - footerPosition + 20}px`;
    } else {
        voltarTopoButton.style.bottom = '2rem';
    }
});

let isScrollingToTop = false; // Flag para controlar a rolagem

// Função personalizada para rolagem suave
function smoothScrollToTop() {
    if (window.scrollY > 5 && isScrollingToTop) {
        const scrollStep = window.scrollY / 5;
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(smoothScrollToTop);
    } else {
        isScrollingToTop = false;
    }
}

// Leva o usuário ao topo ao clicar no botão
voltarTopoButton.addEventListener('click', () => {
    isScrollingToTop = true;
    smoothScrollToTop();
});