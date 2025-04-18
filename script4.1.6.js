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
    // Paginacja ćwiczeń
    // ---------------------
    const cwiczenia = [
        {
            nazwa: "Przyciąganie liny z wyciągu do twarzy (Face pull)",
            obraz: "Pictures/cwiczenie-barki1.jpg",
            miesnie: {
                glowne: [
                    "m. naramienny tylny",
                    "m. podgrzebieniowy",
                    "m. obły mniejszy",
                    "m. czworoboczny"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stań na wprost wyciągu.",
                "Stopy ustaw w lekkim rozkroku, plecy proste.",
                "Złap oburącz za grubą linę do ćwiczeń.",
                "Unieś ramiona przed siebie, łokcie są skierowane na zewnątrz.",
                "Utrzymuj brzuch w stałym napięciu."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech, a następnie opuść łopatki oraz zbliż je do kręgosłupa.",
                "Następnie przyciągnij linę w kierunku twarzy, kierując łokcie na boki; pilnuj, aby barki się nie unosiły.",
                "Kontynuuj ruch, dopóki łokcie nie przekroczą linii barków, a środek liny będzie znajdować się przy twarzy.",
                "W pozycji maksymalnego napięcia zatrzymaj ruch.",
                "Wróć do pozycji wyjściowej, wypuszczając powietrze."
            ]
        },
        {
            nazwa: "Odwodzenie ramion w bok ze sztangielkami",
            obraz: "Pictures/cwiczenie-barki2.jpg",
            miesnie: {
                glowne: [
                    "m. naramienny",
                    "m. piersiowy większy, część mostkowo-żebrowa (środkowa)"
                ],
                pomocnicze: [
                    "m. czworoboczny"
                ]
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, ramiona wyprostowane (lekko odblokowane w łokciu), ustawione wzdłuż tułowia, w dłoniach hantle.",
                "Palce skierowane do tułowia. Kciuki zwrócone do przodu.",
                "Stopy w lekkim rozkroku.",
                "Plecy proste."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i wznieś hantle w bok, aż ramiona będą ustawione równolegle do podłogi.",
                "Następnie dwukrotnie wolniej opuszczaj hantle, wykonuj przy tym wydech.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wyciskanie hantli nad głowę siedząc",
            obraz: "Pictures/cwiczenie-barki3.jpg",
            miesnie: {
                glowne: [
                    "m. naramienny przedni"
                ],
                pomocnicze: [
                    "m. czworoboczny",
                    "m. trójgłowy ramienia"
                ]
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca na ławce. Plecy dociśnięte do oparcia. Nogi mocno zapierają się o podłogę.",
                "Unieś ramiona tak, aby hantle znajdowały się na wysokości głowy/barków.",
                "Palce zwrócone do przodu, łokcie w jednej linii z nadgarstkiem."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, weź wdech, a następnie unieś ramiona z równoczesnym wyprostem w stawach łokciowych i wyciśnij hantle nad głowę. Ruch odbywa się po trójkącie, tzn. hantle schodzą się do środka w momencie, gdy są nad głową.",
                "Zatrzymaj na chwilę ruch w końcowej fazie, następnie powolnym ruchem opuszczaj hantle, wykonując płynny wydech.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wyciskanie nad głowę na maszynie chwytem neutralnym",
            obraz: "Pictures/cwiczenie-barki4.jpg",
            miesnie: {
                glowne: [
                    "m. naramienny przedni",
                    "m. naramienny środkowy"
                ],
                pomocnicze: [
                    "m. czworoboczny"
                ]
            },
            pozycja_wyjsciowa: [
                "Ustaw odpowiedni ciężar na maszynie.",
                "Usiądź na siedzisku i złap za uchwyty. Kciuki skierowane do środka (nachwyt).",
                "Stopy w lekkim rozkroku, mocno dociśnięte do podłoża."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, unieś ramiona, wykonując wdech.",
                "W końcowej fazie zatrzymaj na ułamek sekundy ramiona nad głową, wykonując wydech.",
                "Następnie kontrolowanym ruchem opuść ramiona, wykonaj wdech i przygotuj się do kolejnego powtórzenia.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wznosy ramion w bok w opadzie tułowia siedząc",
            obraz: "Pictures/cwiczenie-barki5.jpg",
            miesnie: {
                glowne: [
                    "m. naramienny tylny"
                ],
                pomocnicze: [
                    "m. równoległoboczny",
                    "m. czworoboczny"
                ]
            },
            pozycja_wyjsciowa: [
                "Usiądź na krawędzi ławki poziomej.",
                "Pochyl się, opierając klatkę piersiową o swoje uda.",
                "Chwyć sztangielki, ramiona lekko ugięte w łokciach, dłonie ustawione kciukami do siebie."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i wznieś hantle, odwodząc ramiona w tył.",
                "Gdy ramiona będą ustawione równolegle do podłogi, postaraj się zatrzymać ruch na ułamek sekundy i wypuść powietrze.",
                "Następnie dwukrotnie wolniej opuszczaj hantle, wykonując wydech. Weź wdech i przygotuj się do kolejnego powtórzenia."
            ]
        },
        {
            nazwa: "Landmine press half kneeling",
            obraz: "Pictures/cwiczenie-barki6.jpg",
            miesnie: {
                glowne: [
                    "m. naramienne",
                    "m. trójgłowy ramienia",
                    "m. prosty brzucha"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja klęku wykrocznego.",
                "Noga wykroczna ugięta pod kątem prostym w biodrze i kolanie.",
                "Mięśnie brzucha i pośladki mocno napięte, koniec sztangi trzymaj na wysokości barku w ręce przeciwnej do nogi wykrocznej."
            ],
            ruch: [
                "Wykonaj wdech, a następnie zdecydowanym ruchem wyciśnij ciężar nad głowę. W końcowej fazie ruchu pochyl lekko ciało w przód, aby z ramieniem tworzyło jedną linię.",
                "Spokojnym ruchem rozpocznij opuszczanie ciężaru. W końcowej fazie ruchu wykonaj wydech.",
                "Utrzymuj stałe, mocne napięcie, nie kołysz ciałem."
            ]
        }
    ];

    const exercisesPerPage = 4;
let currentPage = 1;

const cwiczeniaContainer = document.getElementById("cwiczenia");
const paginationContainer = document.getElementById("pagination");

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

function toggleExerciseDetails(cwiczenieDiv, cwiczenie, button) {
    let detailsDiv = cwiczenieDiv.querySelector(".exercise-details");
    if (detailsDiv) {
        const isVisible = detailsDiv.classList.contains("visible");
        detailsDiv.classList.toggle("visible");
        button.textContent = isVisible ? "Pokaż szczegóły" : "Ukryj szczegóły";
        return;
    }

    detailsDiv = document.createElement("div");
    detailsDiv.className = "exercise-details";
    detailsDiv.style.opacity = "0";
    detailsDiv.style.maxHeight = "0";
    detailsDiv.innerHTML = `
        <div class="details-container">
            <div class="miesnie">
                <h4>Mięśnie zaangażowane:</h4>
                <p><strong>Główne:</strong></p>
                <ul>
                    ${cwiczenie.miesnie.glowne.map(miesien => `<li>${miesien}</li>`).join('')}
                </ul>
                ${cwiczenie.miesnie.pomocnicze.length > 0 ? `
                    <p><strong>Pomocnicze:</strong></p>
                    <ul>
                        ${cwiczenie.miesnie.pomocnicze.map(miesien => `<li>${miesien}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
            <div class="pozycja_wyjsciowa">
                <h4>Pozycja wyjściowa:</h4>
                <ol>
                    ${cwiczenie.pozycja_wyjsciowa.map(krok => `<li>${krok}</li>`).join('')}
                </ol>
            </div>
            <div class="ruch">
                <h4>Ruch:</h4>
                <ol>
                    ${cwiczenie.ruch.map(krok => `<li>${krok}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
    cwiczenieDiv.querySelector(".blok2").appendChild(detailsDiv);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            detailsDiv.classList.add("visible");
            detailsDiv.style.opacity = "";
            detailsDiv.style.maxHeight = "";
        });
    });
    button.textContent = "Ukryj szczegóły";
}

function renderExercises() {
    const totalPages = Math.ceil(cwiczenia.length / exercisesPerPage);
    const start = (currentPage - 1) * exercisesPerPage;
    const end = start + exercisesPerPage;
    const currentExercises = cwiczenia.slice(start, end);

    cwiczeniaContainer.innerHTML = '';
    currentExercises.forEach(c => {
        const div = document.createElement("div");
        div.className = "cwiczenie";
        div.innerHTML = `
        <div class="blok1">
            <div class="cwiczenie-tresc">
                <h3>${c.nazwa}</h3>
            </div>
            <div class="cwiczenie-obraz">
                <img src="${c.obraz}" alt="${c.nazwa}">
            </div>
        </div>
        <div class="blok2"></div>
        <button class="details-button">Pokaż szczegóły</button>
        `;
        const button = div.querySelector(".details-button");
        button.addEventListener("click", () => toggleExerciseDetails(div, c, button));
        cwiczeniaContainer.appendChild(div);
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
            renderExercises();
            scrollToTop();
        });
        paginationContainer.appendChild(btn);
    }
}

renderExercises();


});
