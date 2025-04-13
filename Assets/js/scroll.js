let scroll = false;
window.addEventListener('scroll', function() {
    const container = document.querySelector('.container');
    if (window.scrollY > 500) { // Change this value to adjust when to change the background
        container.classList.add('scrolled');
    } else {

        container.classList.remove('scrolled');
    }
});