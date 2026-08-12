// ==========================
// CARROUSEL
// ==========================

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let index = 0;
let interval;

// Affiche une image
function showSlide(i) {

    index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Image suivante
function nextSlide() {

    index++;

    if (index >= dots.length) {
        index = 0;
    }

    showSlide(index);
}

// Image précédente (si tu ajoutes un bouton plus tard)
function previousSlide() {

    index--;

    if (index < 0) {
        index = dots.length - 1;
    }

    showSlide(index);
}

// Démarrage automatique
function startCarousel() {

    interval = setInterval(nextSlide, 3000);

}

// Redémarre le timer après un clic
function restartCarousel() {

    clearInterval(interval);
    startCarousel();

}

// Navigation avec les points
dots.forEach((dot, i) => {

    dot.addEventListener("click", () => {

        showSlide(i);

        restartCarousel();

    });

});

// Lance le carrousel
showSlide(0);

startCarousel();







