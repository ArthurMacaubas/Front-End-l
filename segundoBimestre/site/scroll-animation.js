document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a animação ocorrer apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});