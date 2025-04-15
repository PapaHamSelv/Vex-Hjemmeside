// Select the toggle icon
const toggleIcon = document.querySelector('.toggle-icon');

// // Add event listener for toggling light/dark mode
// toggleIcon.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     document.body.classList.toggle('light-mode');
// });

// Typewriter Effekt
const typewriterElement = document.querySelector('.typewriter');
const typewriterTexts = ['Alt du skal bruge — ét sted', 'Kvalitet til din server!', 'Din server, dine muligheder!'];
let typewriterIndex = 0;

function typeWriter() {
    typewriterElement.textContent = ''; // Ryd teksten
    let text = typewriterTexts[typewriterIndex];
    let i = 0;

    const interval = setInterval(() => {
        if (i < text.length) {
            typewriterElement.textContent += text[i];
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length; // Skift til næste tekst
                typeWriter();
            }, 2000); // Pause før næste tekst
        }
    }, 100); // Hastighed for skrivning
}

typeWriter();

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Skift emoji afhængigt af tilstanden
    const toggleIcon = document.querySelector('.toggle-icon');
    if (body.classList.contains('light-mode')) {
        toggleIcon.textContent = '🌙'; // Måne-ikon for dark mode
    } else {
        toggleIcon.textContent = '💡'; // Pære-ikon for light mode
    }
}