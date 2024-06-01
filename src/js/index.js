function activeBtn() {
    const btn = document.getElementById('hamMenu');
    const slideMenu = document.getElementById('deployableMenu');
    if (!btn.classList.contains('active')) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }

    if (!slideMenu.classList.contains('active')) {
        slideMenu.classList.add('active');
    } else {
        slideMenu.classList.remove('active');
    }
}