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
    logoImg.style.width = '180px'; // Ustawienie szerokości obrazka
    logoImg.style.height = 'auto'; // Automatyczna wysokość, zachowująca proporcje obrazu
    logoImg.style.maxWidth = '100%'; // Zapewnienie, że obrazek nie wyjdzie poza kontener
    logoImg.style.borderRadius = '20px'; // Zaokrąglone rogi obrazka

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
        { 
            nazwa: "Kurczak z ryżem", 
            kategoria: "obiad", 
            kalorie: 400, 
            czas: "30 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Owsianka z owocami", 
            kategoria: "śniadanie", 
            kalorie: 250, 
            czas: "10 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Sałatka warzywna", 
            kategoria: "kolacja", 
            kalorie: 150, 
            czas: "20 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Kanapka z awokado", 
            kategoria: "śniadanie", 
            kalorie: 300, 
            czas: "10 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Zupa krem z dyni", 
            kategoria: "obiad", 
            kalorie: 180, 
            czas: "25 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Omlet z warzywami", 
            kategoria: "śniadanie", 
            kalorie: 280, 
            czas: "10 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Makaron z tuńczykiem", 
            kategoria: "obiad", 
            kalorie: 450, 
            czas: "20 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Smoothie bananowe", 
            kategoria: "deser", 
            kalorie: 200, 
            czas: "5 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Tosty z masłem orzechowym", 
            kategoria: "śniadanie", 
            kalorie: 320, 
            czas: "10 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        },
        { 
            nazwa: "Kurczak z warzywami", 
            kategoria: "obiad", 
            kalorie: 390, 
            czas: "30 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ]
             
        },
        { 
            nazwa: "Pudding chia", 
            kategoria: "deser", 
            kalorie: 220, 
            czas: "15 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "twaróg 200g",
                "przyprawa Adobo 1 łyżka",
                "żółte pomidorki koktajlowe 200g",
                "dojrzałe awokado 1 sztuka",
                "cytryna 1 sztuka",
                "rukola 50 gramów",
                "pieprz czarny mielony 2 szczypty",
                "pszenne tosty kromki 8 sztuk"
            ],
            przygotowanie: [
                "Awokado przekrój wzdłuż na pół. Wyjmij pestkę. Następnie łyżką wyjmij miąższ i pokrój w plastry. Skrop sokiem z cytryny.",
                "Umyj pomidorki i przekrój na pół. Wyciśnij sok z cytryny. Umyj i osusz rukolę.",
                "Ser twarogowy wymieszaj z przyprawą Adobo.",
                "Posmaruj serkiem pieczywo. Na 4 kromkach połóż na wierzchu awokado, pomidorki oraz rukolą. Posyp szczyptą pieprzu oraz przyprawą Meksykańską.",
                "Przykryj pozostałym pieczywem. Przekrój na trójkąty i podawaj."
            ] 
        }
    ];

    const recipesPerPage = 4;
    let currentPage = 1;
    let currentSort = 'nazwa';
    let currentFilter = '';

    const przepisyContainer = document.getElementById("przepisy");
    const paginationContainer = document.getElementById("pagination");
    const sortSelect = document.getElementById("sortSelect");
    const filterSelect = document.getElementById("filterSelect");


    // Funkcja przewijająca do góry
function scrollToTop() {
    const scrollTargets = [
        document.getElementById("main"),
        document.scrollingElement,
        document.body
    ];
    for (const el of scrollTargets) {
        if (el && el.scrollTop > 0) {
            el.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        }
    }
}

// Obsługa kliknięcia przycisku "Na górę"
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", scrollToTop);
    }
});


    function czasNaMinuty(czas) {
        const match = czas.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }
    
    
    function toggleRecipeDetails(przepisDiv, przepis, button) {
        let detailsDiv = przepisDiv.querySelector(".recipe-details");
        if (detailsDiv) {
            const isVisible = detailsDiv.classList.contains("visible");
            detailsDiv.classList.toggle("visible");
            button.textContent = isVisible ? "Pokaż szczegóły" : "Ukryj szczegóły";
            return;
        }
    
        detailsDiv = document.createElement("div");
        detailsDiv.className = "recipe-details";
        detailsDiv.style.opacity = "0";
        detailsDiv.style.maxHeight = "0";
        detailsDiv.innerHTML = `
            <div class="details-container">
                <div class="skladniki">
                    <h4>Składniki:</h4>
                    <ul>
                        ${przepis.skladniki.map(skladnik => `<li>${skladnik}</li>`).join('')}
                    </ul>
                </div>
                <div class="przygotowanie">
                    <h4>Przygotowanie:</h4>
                    <ol>
                        ${przepis.przygotowanie.map(krok => `<li>${krok}</li>`).join('')}
                    </ol>
                </div>
            </div>
        `;
        przepisDiv.querySelector(".blok2").appendChild(detailsDiv);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                detailsDiv.classList.add("visible");
                detailsDiv.style.opacity = "";
                detailsDiv.style.maxHeight = "";
            });
        });
        button.textContent = "Ukryj szczegóły";
    }


    function renderRecipes() {
        let filtered = przepisy.filter(p => !currentFilter || p.kategoria === currentFilter);

        filtered.sort((a, b) => {
            if (currentSort === 'nazwa') return a.nazwa.localeCompare(b.nazwa);
            if (currentSort === 'kalorie') return a.kalorie - b.kalorie;
            if (currentSort === 'kalorie_desc') return b.kalorie - a.kalorie;
            if (currentSort === 'czas') return czasNaMinuty(a.czas) - czasNaMinuty(b.czas);
            if (currentSort === 'czas_desc') return czasNaMinuty(b.czas) - czasNaMinuty(a.czas);
        });

        const totalPages = Math.ceil(filtered.length / recipesPerPage);
        const start = (currentPage - 1) * recipesPerPage;
        const end = start + recipesPerPage;
        const currentRecipes = filtered.slice(start, end);

        przepisyContainer.innerHTML = '';
        currentRecipes.forEach(p => {
            const div = document.createElement("div");
            div.className = "przepis";
            div.innerHTML = `
            <div class="blok1">
                <div class="przepis-tresc">
                    <h3>${p.nazwa}</h3>
                    <p>Kategoria: ${p.kategoria}</p>
                    <p>Kalorie: ${p.kalorie}</p>
                    <p>Czas przygotowania: ${p.czas}</p>
                </div>
                <div class="przepis-obraz">
                    <img src="${p.obraz}" alt="${p.nazwa}">
                </div>
            </div>
            <div class="blok2"></div>
            <button class="details-button">Pokaż szczegóły</button>
            `;
            const button = div.querySelector(".details-button");
            button.addEventListener("click", () => toggleRecipeDetails(div, p, button));
            przepisyContainer.appendChild(div);
        });

        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';
    
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = "pagination-button";
            if (i === currentPage) {
                btn.classList.add("active");
            }
            btn.addEventListener("click", () => {
                currentPage = i;
                renderRecipes();
                scrollToTop();
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
