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
            nazwa: "Unoszenie prostych nóg na stojaku",
            obraz: "Pictures/cwiczenie-brzuch1.jpg",
            miesnie: {
                glowne: [
                    "m. prosty brzucha",
                    "m. biodrowo-lędźwiowy",
                    "m. prosty uda"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Podpór na przedramionach na stojaku, plecy dociśnięte do oparcia.",
                "Tułów w jednej linii z wyprostowanymi nogami, miednica ustawiona neutralnie."
            ],
            ruch: [
                "Napinając mocno mięśnie brzucha, unieś proste nogi.",
                "Kontynuuj ruch, aż miednica uniesie się w górę. Jest to warunek odpowiedniej pracy mięśni brzucha.",
                "W najwyższym punkcie postaraj się zatrzymać ruch na ułamek sekundy i wykonaj wydech.",
                "Następnie spokojnym, kontrolowanym ruchem opuść nogi do pozycji wyjściowej.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Spięcia brzucha z linkami wyciągu górnego",
            obraz: "Pictures/cwiczenie-brzuch2.jpg",
            miesnie: {
                glowne: [
                    "m. prosty brzucha",
                    "m. napinacz powięzi szerokiej"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Klęk z lekkim opadem przed bramą/wyciągiem górnym.",
                "Dłonie dociśnięte do głowy trzymają linę wyciągu górnego."
            ],
            ruch: [
                "Weź wdech, a następnie zegnij tułów do przodu, napinając jednocześnie mocno mięśnie brzucha i kierując łokcie do bioder.",
                "Postaraj się wykonać ten ruch bez wykonywania zgięcia w biodrach, a jedynie poprzez „skulenie się”. Zatrzymaj ruch w momencie maksymalnego napięcia mięśni brzucha przez ułamek sekundy.",
                "Wykonaj wydech i wróć do pozycji wyjściowej, wykonując płynny wdech."
            ]
        },
        {
            nazwa: "Spacer farmera",
            obraz: "Pictures/cwiczenie-brzuch3.jpg",
            miesnie: {
                glowne: [
                    "m. stabilizujące"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, ramiona trzymają ciężar.",
                "Łopatki ściągnięte, brzuch oraz pośladki mocno napięte, wzrok skierowany przed siebie."
            ],
            ruch: [
                "Utrzymując mocno napiętą sylwetkę rozpocznij marsz. Stawiaj niewielkie kroki, pilnuj, aby utrzymać stałe, spokojne tempo. Nie doprowadzaj do zgięcia bocznego ciała, nie pochylaj się i nie odchylaj w trakcie ruchu."
            ]
        },
        {
            nazwa: "Landmine twist",
            obraz: "Pictures/cwiczenie-brzuch4.jpg",
            miesnie: {
                glowne: [
                    "m. prosty brzucha",
                    "mięśnie skośne brzucha"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, plecy proste.",
                "Koniec sztangi trzymany w wyprostowanych ramionach nad głową.",
                "Klatka piersiowa wypchnięta, łopatki ściągnięte, mięśnie brzucha i mięśnie pośladkowe napięte."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, weź wdech i wykonaj powolną rotację ciała, równocześnie opuszczaj sztangę w kierunku biodra.",
                "Podczas ruchu utrzymuj mocno napięte mięśnie, ruch opuszczania wykonuj powoli, z dużą kontrolą.",
                "Następnie energicznie unieś sztangę do pozycji początkowej, jednocześnie wykonaj wydech."
            ]
        },
        {
            nazwa: "Unoszenie prostych nóg do drążka",
            obraz: "Pictures/cwiczenie-brzuch5.jpg",
            miesnie: {
                glowne: [
                    "m. prosty brzucha",
                    "m. biodrowo-lędźwiowy",
                    "m. prosty uda"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Złap drążek nachwytem (kciuki na zewnątrz) na szerokość barków.",
                "Tułów w jednej linii, kończyny dolne wyprostowane, miednica ustawiona neutralnie."
            ],
            ruch: [
                "Napinając mocno mięśnie brzucha, zacznij unosić wyprostowane nogi w kierunku drążka.",
                "Kontynuuj ruch, aż miednica uniesie się w górę. Jest to warunek odpowiedniej pracy mięśni brzucha.",
                "W najwyższym punkcie zatrzymaj ruch na ułamek sekundy i wykonaj wydech.",
                "Następnie spokojnym, kontrolowanym ruchem opuść nogi do pozycji początkowej.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Izometryczny skurcz mięśni brzucha w podporze przodem (Deska/Ścianka/Plank)",
            obraz: "Pictures/cwiczenie-brzuch6.jpg",
            miesnie: {
                glowne: [
                    "m. prosty brzucha",
                    "m. skośne brzucha",
                    "m. core",
                    "m. ramion",
                    "m. grzbietu",
                    "m. pośladkowe",
                    "m. czworogłowe uda"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Podpór przodem na przedramionach, łokcie pod barkami, nogi złączone, wyprostowane, ustawione w jednej linii z tułowiem – równolegle do podłoża.",
                "Zbliż łopatki do siebie i ściągnij je. Wciągnij brzuch, pępek zbliż do kręgosłupa, napnij mięśnie brzucha i pośladki. Wzrok skieruj w przód."
            ],
            ruch: [
                "Utrzymuj prawidłową pozycję wyjściową, napięcie mięśni brzucha, nóg i pośladków.",
                "Oddychaj spokojnie, nie wstrzymuj powietrza. Postaraj się wytrzymać jak najdłużej."
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
