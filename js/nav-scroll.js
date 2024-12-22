document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


// Detectar scroll
window.addEventListener('scroll', handleNavbarScroll);

// Detectar cuando se abre el menú desplegable
navCollapse.addEventListener('show.bs.collapse', () => {
    navbar.classList.add('navbar-open'); // Navbar se vuelve opaco al abrir el menú
    navbar.classList.remove('navbar');
});

// Detectar cuando se cierra el menú desplegable
navCollapse.addEventListener('hide.bs.collapse', () => {
    navbar.classList.remove('navbar-open');
    handleNavbarScroll(); // Reaplica el estado dependiendo del scroll
});

