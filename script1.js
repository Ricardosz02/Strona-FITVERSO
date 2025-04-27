document.addEventListener("DOMContentLoaded", function () {
    // Tworzenie elementu logo
    const logoSb = document.createElement('a');
    logoSb.href = 'index.html';
    logoSb.id = 'logo_sb';

    // Tworzenie elementu img i przypisanie mu ścieżki do obrazka
    const logoImg = document.createElement('img');
    logoImg.src = 'Pictures/Logo.png';
    logoImg.alt = 'Logo';

    // Ustawienia rozmiaru obrazka
    logoImg.style.height = 'auto';
    logoImg.style.maxWidth = '100%';
    logoImg.style.borderRadius = '10px';

    // Dodanie obrazka do linku logo
    logoSb.appendChild(logoImg);

    // Dodanie logo do kontenera
    const baner = document.getElementById('baner');
    baner.insertBefore(logoSb, baner.firstChild);

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
            event.stopPropagation();
        });
    }

    // Ukrycie menu po kliknięciu poza nim
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && event.target !== hamburger) {
            sideMenu.classList.remove("show");
        }
    });

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

    document.addEventListener('DOMContentLoaded', () => {
        const blocks = document.querySelectorAll('.blok');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });
      
        blocks.forEach(block => observer.observe(block));
      });
});
