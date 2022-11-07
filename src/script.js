
document.querySelector('#header-menu-button').addEventListener('click', (event) => {
    event.target.setAttribute('data-state', event.target.getAttribute('data-state') ? "" : "active")
});