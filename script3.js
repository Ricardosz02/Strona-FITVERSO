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
            toggleIcon.textContent = submenu.classList.contains("show") ? "−" : "+";
        });

        // Kliknięcie w "Ćwiczenia" przenosi na podstronę
        submenuToggle.addEventListener("click", function (event) {
            // Domyślne zachowanie linku
        });
    }

    // ---------------------
    // Paginacja i filtrowanie przepisów z Tasty API
    // ---------------------
    const apiKey = 'c8136c509fmshe666e51d1848ab8p1409d9jsn6356a8d153ed';
    const recipesPerPage = 4;
    let currentPage = 1;
    let currentSort = 'nazwa';
    let currentFilter = '';
    let recipeCache = { '': [] };

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

    // Pobieranie przepisów z Tasty API z opcjonalnym zapytaniem kategorii
    async function fetchRecipes(categoryQuery = '') {
        // Sprawdź, czy przepisy dla danej kategorii są w buforze
        if (recipeCache[categoryQuery] && recipeCache[categoryQuery].length > 0) {
            console.log(`Używam przepisów z pamięci podręcznej dla kategorii: ${categoryQuery || 'wszystkie'}`);
            return recipeCache[categoryQuery];
        }

        try {
            const url = new URL('https://tasty.p.rapidapi.com/recipes/list');
            url.searchParams.append('from', '0');
            url.searchParams.append('size', '20');
            if (categoryQuery) {
                url.searchParams.append('q', categoryQuery);
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            });
            if (!response.ok) {
                throw new Error(`Błąd HTTP: ${response.status}`);
            }
            const data = await response.json();
            const recipes = data.results.map(recipe => {
                // Mapowanie kategorii
                const tags = recipe.tags && recipe.tags.length > 0 ? recipe.tags.map(tag => tag.name) : [];
                const kategoria = mapTagsToCategory(tags, categoryQuery);

                // Mapowanie kalorii
                const kalorie = recipe.nutrition && recipe.nutrition.calories ? recipe.nutrition.calories : 0;

                // Mapowanie czasu
                const czas = recipe.total_time_minutes ? `${recipe.total_time_minutes} min` : 'N/A';

                // Mapowanie składników
                const skladniki = recipe.sections && recipe.sections.length > 0 && recipe.sections[0].components 
                    ? recipe.sections[0].components.map(comp => comp.raw_text).filter(text => text.trim() !== '')
                    : ['Brak składników'];

                // Mapowanie instrukcji
                const przygotowanie = recipe.instructions && recipe.instructions.length > 0 
                    ? recipe.instructions.map(inst => inst.display_text)
                    : ['Brak instrukcji przygotowania'];

                // Logowanie danych dla debugowania
                console.log(`Przepis: ${recipe.name}`);
                console.log(`- Kategoria: ${kategoria} (oryginalne tagi: ${tags.join(', ') || 'Brak'})`);
                console.log(`- Kalorie: ${kalorie}`);
                console.log(`- Czas: ${czas}`);
                console.log(`- Składniki:`, skladniki);
                console.log(`- Przygotowanie:`, przygotowanie);
                console.log('---');

                return {
                    nazwa: recipe.name || 'Bez nazwy',
                    kategoria: kategoria,
                    kalorie: kalorie,
                    czas: czas,
                    obraz: recipe.thumbnail_url || 'Pictures/placeholder.jpg',
                    skladniki: skladniki,
                    przygotowanie: przygotowanie
                };
            });
            console.log(`Wszystkie przepisy dla kategorii "${categoryQuery || 'wszystkie'}":`, recipes);

            // Zapis do pamięci podręcznej
            recipeCache[categoryQuery] = recipes;
            return recipes;
        } catch (error) {
            console.error(`Błąd podczas pobierania przepisów dla kategorii "${categoryQuery || 'wszystkie'}":`, error);
            przepisyContainer.innerHTML = '<p>Wystąpił błąd podczas ładowania przepisów. Spróbuj ponownie później.</p>';
            return [];
        }
    }

    // Mapowanie tagów na kategorie
    function mapTagsToCategory(tags, categoryQuery) {
        const tagMap = {
            'breakfast': 'śniadanie',
            'brunch': 'śniadanie',
            'lunch': 'obiad',
            'dinner': 'kolacja',
            'dessert': 'deser',
            'snack': 'deser',
            'appetizer': 'deser',
            'soup': 'obiad',
            'salad': 'kolacja',
            'main-dish': 'obiad',
            'sweet': 'deser',
            'baking': 'deser',
            'cake': 'deser',
            'pie': 'deser',
            'cookies': 'deser'
        };

        // Jeśli categoryQuery jest podane, priorytet dla kategorii zgodnej z zapytaniem
        if (categoryQuery) {
            const queryToCategory = {
                'breakfast': 'śniadanie',
                'lunch': 'obiad',
                'dinner': 'kolacja',
                'dessert': 'deser'
            };
            return queryToCategory[categoryQuery] || 'inne';
        }

        // Mapowanie na podstawie tagów
        for (const tag of tags) {
            const lowerTag = tag.toLowerCase();
            if (tagMap[lowerTag]) {
                return tagMap[lowerTag];
            }
        }
        return 'inne';
    }

    // Konwersja czasu na minuty do sortowania
    function czasNaMinuty(czas) {
        const match = czas.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }

    // Przełączanie szczegółów przepisu
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

    // Renderowanie przepisów
    async function renderRecipes() {
        // Mapowanie filtra na zapytanie API
        const filterToQuery = {
            'śniadanie': 'breakfast',
            'obiad': 'lunch',
            'kolacja': 'dinner',
            'deser': 'dessert',
            '': '' // Wszystkie kategorie
        };
        const categoryQuery = filterToQuery[currentFilter] || '';

        // Pobierz przepisy dla wybranej kategorii
        const recipes = await fetchRecipes(categoryQuery);

        let filtered = recipes.filter(p => !currentFilter || p.kategoria === currentFilter);

        filtered.sort((a, b) => {
            if (currentSort === 'nazwa') return a.nazwa.localeCompare(b.nazwa);
            if (currentSort === 'kalorie') return (a.kalorie || 0) - (b.kalorie || 0);
            if (currentSort === 'kalorie_desc') return (b.kalorie || 0) - (a.kalorie || 0);
            if (currentSort === 'czas') return czasNaMinuty(a.czas) - czasNaMinuty(b.czas);
            if (currentSort === 'czas_desc') return czasNaMinuty(b.czas) - czasNaMinuty(a.czas);
        });

        const totalPages = Math.ceil(filtered.length / recipesPerPage);
        const start = (currentPage - 1) * recipesPerPage;
        const end = start + recipesPerPage;
        const currentRecipes = filtered.slice(start, end);

        przepisyContainer.innerHTML = '';
        if (currentRecipes.length === 0) {
            przepisyContainer.innerHTML = '<p>Brak przepisów dla wybranej kategorii. Spróbuj innej kategorii.</p>';
        } else {
            currentRecipes.forEach(p => {
                const div = document.createElement("div");
                div.className = "przepis";
                div.innerHTML = `
                    <div class="blok1">
                        <div class="przepis-tresc">
                            <h3>${p.nazwa}</h3>
                            <p>Kategoria: ${p.kategoria}</p>
                            <p>Kalorie: ${p.kalorie > 0 ? p.kalorie : 'N/A'}</p>
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
        }

        renderPagination(totalPages);
    }

    // Renderowanie paginacji
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

    // Obsługa zmiany sortowania
    sortSelect.addEventListener("change", function () {
        currentSort = this.value;
        renderRecipes();
    });

    // Obsługa zmiany filtra
    filterSelect.addEventListener("change", function () {
        currentFilter = this.value;
        currentPage = 1;
        renderRecipes();
    });

    // Inicjalne renderowanie przepisów
    renderRecipes();
});