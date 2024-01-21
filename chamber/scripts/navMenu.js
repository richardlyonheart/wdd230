const burgerButton = document.querySelector('#menu')
var menu = document.querySelector('.navlist')

burgerButton.addEventListener('click', () => {
    if (burgerButton.textContent.includes ("☰") && window.innerWidth < 1000) {
        menu.style.display = 'grid';
        burgerButton.textContent = "X";
    } else {
        burgerButton.textContent = '☰';
        menu.style.display = 'none';
    }
})