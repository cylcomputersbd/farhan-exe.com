document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(360deg) scale(1.2)';
        icon.style.transition = 'transform 0.4s ease-in-out';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});
