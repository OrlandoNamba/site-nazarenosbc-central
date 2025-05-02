
// Menu Hamburguer
const menuHamburger = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');
const overlay = document.createElement('div');

overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

menuHamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    menuHamburger.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    menuHamburger.classList.remove('active');
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuHamburger.classList.remove('active');
        overlay.classList.remove('active');
    });
});


// Seta indicadora de scroll
const scrollIndicator = document.querySelector('.scroll-indicator');

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

window.addEventListener('scroll', toggleScrollIndicator);


// Criar botão de voltar ao topo
const voltarTopoButton = document.getElementById('voltar-topo');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        voltarTopoButton.style.display = 'flex';
    } else {
        voltarTopoButton.style.display = 'none';
    }

    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const buttonHeight = voltarTopoButton.offsetHeight;
    const windowHeight = window.innerHeight;

    if (window.scrollY + windowHeight - buttonHeight > footerPosition) {
        voltarTopoButton.style.bottom = `${windowHeight + window.scrollY - footerPosition + 20}px`;
    } else {
        voltarTopoButton.style.bottom = '2rem';
    }
});

let isScrollingToTop = false;

function smoothScrollToTop() {
    if (window.scrollY > 5 && isScrollingToTop) {
        const scrollStep = window.scrollY / 5;
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(smoothScrollToTop);
    } else {
        isScrollingToTop = false;
    }
}

voltarTopoButton.addEventListener('click', () => {
    isScrollingToTop = true;
    smoothScrollToTop();
});