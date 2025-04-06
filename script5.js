document.addEventListener("DOMContentLoaded", function () {
    // Tworzenie elementu logo
    const logoSb = document.createElement('a');
    logoSb.href = 'index.html';
    logoSb.id = 'logo_sb';
    logoSb.textContent = 'LOGO';

    // Dodanie obwódki w innym kolorze oraz zaokrąglonych rogów
    const borderColor = '#312A2A'; // Kolor obwódki i tła
    logoSb.style.border = `3px solid ${borderColor}`; // Obwódka w wybranym kolorze
    logoSb.style.padding = '10px'; // Dodanie odstępu wewnętrznego
    logoSb.style.borderRadius = '15px'; // Zaokrąglone rogi
    logoSb.style.backgroundColor = borderColor; // Tło w tym samym kolorze

    // Dodanie logo do kontenera
    const baner = document.getElementById('baner');
    baner.insertBefore(logoSb, baner.firstChild); // Wstawienie logo na początek kontenera

    // Efekt podświetlenia bloków
    const bloki = document.querySelectorAll(".blok");

    bloki.forEach(blok => {
        blok.addEventListener("mouseenter", function () {
            this.style.transition = "0.3s ease-in-out";
            this.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.3)";
        });

        blok.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });

    // Wysuwane menu
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");

    if (hamburger && sideMenu) {
        hamburger.addEventListener("click", function (event) {
            sideMenu.classList.toggle("show");
            event.stopPropagation(); // Zapobiega zamknięciu menu, gdy klikniesz hamburger
        });
    }

    // Ukrycie menu po kliknięciu poza nim
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && event.target !== hamburger) {
            sideMenu.classList.remove("show");
        }
    });
});