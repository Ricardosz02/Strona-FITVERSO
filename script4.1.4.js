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
            nazwa: "Martwy ciąg sumo",
            obraz: "Pictures/cwiczenie-dwuglowe1.jpg",
            miesnie: {
                glowne: [
                    "m. pośladkowy",
                    "m. dwugłowe ud",
                    "m. czworogłowe ud",
                    "m. prostownik grzbietu"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stań przed sztangą w bardzo szerokim rozkroku ze stopami skierowanymi na zewnątrz.",
                "Utrzymuj zgięte kolana nad stopami, pilnuj, aby nie były skierowane do środka.",
                "Plecy wyprostuj i pochyl około 45 stopni względem podłogi.",
                "Sztangę trzymaj na szerokość ramion dosuniętą blisko do podudzi.",
                "Łopatki utrzymuj dociśnięte do siebie, głowa jest przedłużeniem kręgosłupa."
            ],
            ruch: [
                "Wykonaj głęboki wdech oraz mocne spięcie mięśni brzucha w celu uruchomienia tłoczni brzusznej.",
                "Tułów utrzymaj w spięciu izometrycznym (sztywna bryła, żadnego ruchu).",
                "Utrzymując ciało w pozycji wyjściowej, zacznij ruch od pracy wyprostnej w biodrach, równocześnie zacznij lekko prostować kolana.",
                "Doprowadź do pełnego wyprostu w stawach biodrowych oraz kolanowych, nie odchylaj ciała w tył. Utrzymaj w pełni wyprostowaną pozycję ciała.",
                "Spokojnym, kontrolowanym ruchem odłóż sztangę, zachowując technikę jak przy podnoszeniu."
            ]
        },
        {
            nazwa: "Zginanie nóg na maszynie leżąc",
            obraz: "Pictures/cwiczenie-dwuglowe2.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowy uda",
                    "m. półścięgnisty",
                    "m. półbłoniasty"
                ],
                pomocnicze: [
                    "m. brzuchaty",
                    "m. podkolanowy"
                ]
            },
            pozycja_wyjsciowa: [
                "Zajmij miejsce na maszynie, dostosowując ją do swojego wzrostu.",
                "Kończyny dolne wyprostowane, wałek maszyny znajduje się kilka centymetrów poniżej łydek.",
                "Chwyć za uchwyty znajdujące się po bokach siedziska."
            ],
            ruch: [
                "Ustaw miednicę w pozycji neutralnej i zegnij stopy grzbietowo (palce stóp na siebie).",
                "Wraz z wydechem powietrza ugnij kończyny dolne, przeciągając wałek maszyny jak najdalej w stronę ud.",
                "Utrzymuj tułów nieruchomo, postaraj się utrzymać nogi w pozycji maksymalnego napięcia mięśni przez ułamek sekundy.",
                "Zegnij stopy podeszwowo (palce stóp od siebie).",
                "Następnie wraz z wdechem powolnym tempem wróć do pozycji wyjściowej, kontrolując ruch.",
                "Powtarzaj ruch wyznaczoną ilość razy."
            ]
        },
        {
            nazwa: "Zginanie nóg na maszynie siedząc",
            obraz: "Pictures/cwiczenie-dwuglowe3.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowy uda",
                    "m. półścięgnisty",
                    "m. półbłoniasty"
                ],
                pomocnicze: [
                    "m. brzuchaty",
                    "m. podkolanowy"
                ]
            },
            pozycja_wyjsciowa: [
                "Zajmij miejsce na maszynie, dostosowując ją do swojego wzrostu.",
                "Kończyny dolne wyprostowane, wałek maszyny znajduje się kilka centymetrów poniżej łydek.",
                "Chwyć za uchwyty znajdujące się po bokach siedziska."
            ],
            ruch: [
                "Wraz z wydechem powietrza ugnij kończyny dolne, przeciągając wałek maszyny jak najdalej pod uda.",
                "Utrzymuj tułów nieruchomo, postaraj się utrzymać nogi w pozycji maksymalnego napięcia mięśni przez ułamek sekundy.",
                "Następnie wraz z wdechem powolnym tempem wróć do pozycji wyjściowej, kontrolując ruch.",
                "Powtarzaj ruch wyznaczoną ilość razy."
            ]
        },
        {
            nazwa: "Martwy ciąg na prostych nogach",
            obraz: "Pictures/cwiczenie-dwuglowe4.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowy uda",
                    "m. półścięgnisty",
                    "m. półbłoniasty",
                    "mięśnie grzbietu"
                ],
                pomocnicze: [
                    "m. pośladkowy"
                ]
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, stopy blisko siebie, ramiona wyprostowane wzdłuż tułowia, sztanga trzymana w dłoniach.",
                "Plecy proste. Nogi minimalnie ugięte w kolanach."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję ciała, wykonaj wdech i rozpocznij opad tułowia w przód poprzez wysuwanie bioder w tył.",
                "Kontynuuj ruch do momentu wyczucia rozciągania w okolicach mięśni dwugłowych ud.",
                "Powróć do pozycji wyjściowej, prostując tułów poprzez wypchnięcie bioder w przód, i w końcowej fazie ruchu wykonaj wdech.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Odwodzenie nogi w tył z wykorzystaniem linki wyciągu dolnego",
            obraz: "Pictures/cwiczenie-dwuglowe5.jpg",
            miesnie: {
                glowne: [
                    "m. pośladkowy",
                    "m. dwugłowy uda",
                    "m. półścięgnisty",
                    "m. półbłoniasty"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stań przodem do wyciągu. Pochyl tułów lekko w przód, a ręce oprzyj o maszynę.",
                "Do nogi odwodzonej na wysokości kostki zamocuj linkę wyciągu dolnego.",
                "Drugą nogę pozostaw na ziemi.",
                "Lekko ugnij w kolanie nogę, którą odwodzisz.",
                "Wzrok skieruj na wprost."
            ],
            ruch: [
                "Zachowując prawidłową pozycję wyjściową, wraz z wydechem odwiedź nogę z zamocowaną linką w tył.",
                "Mięsień pośladkowy powinien być teraz mocno napięty, utrzymaj tę pozycję przez sekundę.",
                "Następnie powoli wróć nogą do pozycji wyjściowej, utrzymując napięcie mięśniowe na ile to możliwe.",
                "Po zakończeniu serii powtórzeń wykonaj ćwiczenie na drugą nogę w taki sam sposób.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Unoszenie bioder ze sztangą w oparciu o ławeczkę",
            obraz: "Pictures/cwiczenie-dwuglowe6.jpg",
            miesnie: {
                glowne: [
                    "m. pośladkowy",
                    "m. dwugłowy uda",
                    "m. czworogłowy uda"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Siad przed ławeczką prostą, z plecami opartymi o ławkę lub box na wysokości łopatek.",
                "Nogi ugięte na podłożu, ustawione w lekkim rozkroku (nie szerzej niż szerokość bioder), stopy skierowane na wprost.",
                "Ciężar ułożony na biodrach, ramiona przytrzymują sztangę."
            ],
            ruch: [
                "Wykonaj wdech do przepony, utrzymując prawidłową pozycję ciała, skieruj biodra wysoko w górę, tułów w spięciu izometrycznym (sztywna bryła, żadnego ruchu).",
                "Przytrzymaj biodra w skrajnym górnym położeniu przez pół sekundy, nie przekraczając linii ciała, głowa jest przedłużeniem kręgosłupa.",
                "Wraz z wydechem, w powolnym tempie wróć do pozycji wyjściowej, obniżając biodra w stronę ziemi, tak aby odłożyć ciężar/biodra na podłogę."
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
