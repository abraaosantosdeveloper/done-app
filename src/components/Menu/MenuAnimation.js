export function MenuAnimation() {// Animação do menu
// Seleciona os elementos
const menuContainer = document.getElementById('menu-container');
const menu = document.getElementById('menu');

let hideTimeout;

// Função para mostrar o menu
function showMenu() {
    clearTimeout(hideTimeout);
    menu.style.transform = 'translateX(0)';
}

// Função para esconder o menu com delay
function hideMenu() {
    hideTimeout = setTimeout(() => {
        menu.style.transform = 'translateX(-100%)';
    }, 100); // 200ms de delay
}

// Event listeners para o container cinza
menuContainer.addEventListener('mouseenter', showMenu);
menuContainer.addEventListener('mouseleave', hideMenu);
}