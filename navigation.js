document.addEventListener('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll('.drawer-menu .menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.sub-menu').style.display = 'block';
        });
        item.addEventListener('mouseout', () => {
            item.querySelector('.sub-menu').style.display = 'block';
        });
    });
});
