function navToggle() {
    let navList = document.querySelector('.nav__list');
    let navToggleMenuClosed = document.querySelector('.nav__toggle-icon-closed');
    let navToggleMenuOpened = document.querySelector('.nav__toggle-icon-opened');
    let navbar = document.querySelector('.nav');
    
    navToggleMenuClosed.classList.toggle('nav__toggle-icon--hidden');
    navToggleMenuOpened.classList.toggle('nav__toggle-icon--hidden');

    navbar.classList.toggle('nav--fixed');

    navList.classList.toggle('nav__list--show');
}

document.querySelector('.nav__toggle').addEventListener('click', navToggle);