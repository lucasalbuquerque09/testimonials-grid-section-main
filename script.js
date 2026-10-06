/* DOM element */
const revealElements = document.querySelectorAll('.reveal');
/* Intersection Observer */
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target)
        }
    })

});
/* Observe each reveal element */
revealElements.forEach((element) => {
    revealObserver.observe(element);
})
