document.addEventListener("DOMContentLoaded", function () {
    // Tworzenie elementu logo
    const logoSb = document.createElement('a');
    logoSb.href = 'index.html';
    logoSb.id = 'logo_sb';

    // Tworzenie elementu img i przypisanie mu ścieżki do obrazka
    const logoImg = document.createElement('img');
    logoImg.src = 'Pictures/Logo.png'; // Ścieżka do obrazka
    logoImg.alt = 'Logo'; // Alternatywny tekst

    // Ustawienia rozmiaru obrazka
    logoImg.style.height = 'auto'; // Automatyczna wysokość, zachowująca proporcje obrazu
    logoImg.style.maxWidth = '100%'; // Zapewnienie, że obrazek nie wyjdzie poza kontener
    logoImg.style.borderRadius = '10px'; // Zaokrąglone rogi obrazka

    // Dodanie obrazka do linku logo
    logoSb.appendChild(logoImg);

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
    const closeMenu = document.getElementById("closeMenu");

    if (hamburger && sideMenu) {
        hamburger.addEventListener("click", function (event) {
            sideMenu.classList.toggle("show");
            event.stopPropagation();
        });

        closeMenu.addEventListener("click", function () {
            sideMenu.classList.remove("show");
        });
    }

    // Ukrycie menu po kliknięciu poza nim
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && event.target !== hamburger) {
            sideMenu.classList.remove("show");
        }
    });

    // Dynamiczne generowanie podmenu dla "Ćwiczenia" z symbolem +/-
    const submenuToggle = document.querySelector(".submenu-toggle");
    const toggleIcon = document.querySelector(".toggle-icon");
    const submenuParent = document.querySelector(".submenu-parent");

    if (submenuToggle && toggleIcon && submenuParent) {
        // Tworzenie podmenu dynamicznie
        const submenu = document.createElement("ul");
        submenu.classList.add("submenu");

        // Dane dla podmenu
        const submenuItems = [
            { text: "TRENING SIŁOWY", href: "trening-silowy.html" },
            { text: "CARDIO", href: "cardio.html" },
            { text: "STRETCHING", href: "stretching.html" }
        ];

        // Generowanie elementów podmenu
        submenuItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            submenu.appendChild(li);
        });

        // Dodanie podmenu do DOM
        submenuParent.appendChild(submenu);

        // Obsługa kliknięcia w symbol "+"/"−"
        toggleIcon.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            submenu.classList.toggle("show");
            // Zmiana symbolu +/-
            toggleIcon.textContent = submenu.classList.contains("show") ? "−" : "+";
        });

        // Kliknięcie w "Ćwiczenia" przenosi na podstronę (brak event.preventDefault)
        submenuToggle.addEventListener("click", function (event) {
            // Domyślne zachowanie linku (przejście na cwiczenia.html)
        });
    }

    // Powolne powiększanie .blok-inner
    document.querySelectorAll('.blok').forEach(blok => {
        const inner = blok.querySelector('.blok-inner');

        inner.style.transition = 'transform 0.6s ease';
        
        blok.addEventListener('mouseenter', () => {
            inner.style.transform = 'scale(1.05)';
        });
    
        blok.addEventListener('mouseleave', () => {
            inner.style.transform = 'scale(1)';
        });
    });
});
