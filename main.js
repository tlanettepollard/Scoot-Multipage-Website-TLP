const menu = document.querySelector('.navbar-collapse');
const menuItems = document.querySelectorAll('.nav-link');
const mobileMenu = document.querySelector('#mobile-menu');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.open-icon');

function toggleMenu() {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('show');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

mobileMenu.addEventListener('click', toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener('click', toggleMenu);
    }
)