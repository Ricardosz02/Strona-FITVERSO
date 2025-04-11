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

    // ---------------------
    // Paginacja i filtrowanie przepisów
    // ---------------------
    const przepisy = [
        { nazwa: "Kurczak z ryżem", kategoria: "obiad", kalorie: 400 },
        { nazwa: "Owsianka z owocami", kategoria: "śniadanie", kalorie: 250 },
        { nazwa: "Sałatka warzywna", kategoria: "kolacja", kalorie: 150 },
        { nazwa: "Kanapka z awokado", kategoria: "śniadanie", kalorie: 300 },
        { nazwa: "Zupa krem z dyni", kategoria: "obiad", kalorie: 180 },
        { nazwa: "Omlet z warzywami", kategoria: "śniadanie", kalorie: 280 },
        { nazwa: "Makaron z tuńczykiem", kategoria: "obiad", kalorie: 450 },
        { nazwa: "Smoothie bananowe", kategoria: "deser", kalorie: 200 },
        { nazwa: "Tosty z masłem orzechowym", kategoria: "śniadanie", kalorie: 320 },
        { nazwa: "Kurczak z warzywami", kategoria: "obiad", kalorie: 390 },
        { nazwa: "Pudding chia", kategoria: "deser", kalorie: 220 }
    ];

    const recipesPerPage = 4;
    let currentPage = 1;
    let currentSort = 'nazwa';
    let currentFilter = '';

    const przepisyContainer = document.getElementById("przepisy");
    const paginationContainer = document.getElementById("pagination");
    const sortSelect = document.getElementById("sortSelect");
    const filterSelect = document.getElementById("filterSelect");

    function renderRecipes() {
        let filtered = przepisy.filter(p => !currentFilter || p.kategoria === currentFilter);

        filtered.sort((a, b) => {
            if (currentSort === 'nazwa') return a.nazwa.localeCompare(b.nazwa);
            if (currentSort === 'kalorie') return a.kalorie - b.kalorie;
            if (currentSort === 'kalorie_desc') return b.kalorie - a.kalorie;
        });

        const totalPages = Math.ceil(filtered.length / recipesPerPage);
        const start = (currentPage - 1) * recipesPerPage;
        const end = start + recipesPerPage;
        const currentRecipes = filtered.slice(start, end);

        przepisyContainer.innerHTML = '';
        currentRecipes.forEach(p => {
            const div = document.createElement("div");
            div.className = "przepis";
            div.innerHTML = `<h3>${p.nazwa}</h3><p>Kategoria: ${p.kategoria}</p><p>Kalorie: ${p.kalorie}</p>`;
            przepisyContainer.appendChild(div);
        });

        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = (i === currentPage) ? "active" : "";
            btn.addEventListener("click", () => {
                currentPage = i;
                renderRecipes();
            });
            paginationContainer.appendChild(btn);
        }
    }

    sortSelect.addEventListener("change", function () {
        currentSort = this.value;
        renderRecipes();
    });

    filterSelect.addEventListener("change", function () {
        currentFilter = this.value;
        currentPage = 1;
        renderRecipes();
    });

    renderRecipes();

});
