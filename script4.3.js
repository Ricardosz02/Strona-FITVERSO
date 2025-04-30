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

    // ---------------------
    // Paginacja ćwiczeń
    // ---------------------
    const cwiczenia = [
        {
            nazwa: "Rozciąganie mięśni klatki piersiowej",
            miesnie: {
                glowne: [
                    "mięśnie piersiowe"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stojąc w lekkim rozkroku, oddal się od krawędzi ściany/stabilnego elementu na odległość swojego ramienia.",
                "Zgiętą w łokciu rękę unieś powyżej swojego kompleksu barkowego i oprzyj ją o stabilny element.",
                "Przed wykonaniem rozciągania postaraj się przybliżyć łopatkę w kierunku kręgosłupa po stronie rozciąganej."
            ],
            ruch: [
                "W pozycji wyjściowej zacznij skręcać tułów w kierunku przeciwległym do miejsca ułożenia ramienia.",
                "Po osiągnięciu maksymalnego skrętu w miarę możliwości i elastyczności mięśni zacznij wysuwać biodra i tułów w przód, oddalając klatkę piersiową i mostek od miejsca ułożenia ramienia.",
                "Rozciąganie wykonuj przez około 90–120 sekund, systematycznie pogłębiając tę pozycję co około 30 sekund."
            ]
        },
        {
            nazwa: "Rozciąganie mięśni brzucha",
            miesnie: {
                glowne: [
                    "m. brzucha"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Leżenie przodem, dłonie oparte na wysokości klatki piersiowej."
            ],
            ruch: [
                "Z pozycji wyjściowej unieś tułów, trzymając biodra oparte na podłodze.",
                "Wzrok skieruj przed siebie.",
                "Utrzymaj pozycję przez 20 sekund, a następnie wróć do pozycji wyjściowej."
            ]
        },
        {
            nazwa: "Rozciąganie mięśni klatki piersiowej w leżeniu",
            miesnie: {
                glowne: [
                    "mięśnie piersiowe"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Leżąc przodem, wysuń jedną rękę – strony rozciąganej – w przód tak, by jej łokieć znalazł się na wysokości ucha. Asystującą rękę ustaw na wysokości kompleksu barkowego tak, by cała dłoń miała kontakt z podłożem, a jej przedramię było prostopadłe do podłoża."
            ],
            ruch: [
                "Przed wykonaniem rozciągania postaraj się przybliżyć łopatkę w kierunku kręgosłupa po stronie rozciąganej.",
                "Odpychając się ręką asystującą, przekładaj nogę po stronie ręki asystującej za oś ciała, postaraj się wykonać skręt tułowia w kierunku ręki rozciąganej.",
                "W tej pozycji postaraj się oddalać klatkę piersiową/mostek od ręki rozciąganej. Rozciąganie wykonuj przez około 90–120 sekund, systematycznie pogłębiając tę pozycję co około 30 sekund."
            ]
        },
        {
            nazwa: "Rozciąganie mięśni naramiennych w leżeniu",
            miesnie: {
                glowne: [
                    "mięśnie naramienne"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Leżąc przodem, wysuń w bok jedną rękę na wysokość barku.",
                "Dłoń drugiej ręki asystującej znajduje się na wysokości głowy."
            ],
            ruch: [
                "Z pozycji wyjściowej zacznij unosić bark przeciwległy do ręki rozciąganej, jednocześnie skręcając ciało tak, by osiągnąć pozycję leżącą na boku.",
                "W momencie odczuwania rozciągania mięśni od strony podłoża pozostań w tej pozycji przez około 90–120 sekund, systematycznie pogłębiając pozycję rozciągania co około 30 sekund."
            ]
        },
        {
            nazwa: "Rozciąganie bicepsów",
            miesnie: {
                glowne: [
                    "mięsień dwugłowy ramienia",
                    "mięśnie zginaczy przedramienia"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stojąc bokiem do ściany na odległość wyprostowanej ręki, unieś w bok prostą rękę na wysokość barku, skieruj jej palce bezpośrednio w tył.",
                "Delikatnie odwodząc rękę w tył, ułóż dłoń wewnętrzną stroną do ściany.",
                "Zachowaj naturalną krzywiznę kręgosłupa, głowa stanowi przedłużenie kręgosłupa, klatka piersiowa wypchnięta."
            ],
            ruch: [
                "Z pozycji wyjściowej zacznij delikatnie skręcać tułów i biodra w przeciwną stronę do ręki rozciąganej.",
                "W momencie odczuwania rozciągania ręki uniesionej pozostań w tej pozycji przez około 90–120 sekund, systematycznie pogłębiając pozycję rozciągania co około 30 sekund."
            ]
        },
        {
            nazwa: "Rozciąganie tylnego aktonu mięśni naramiennych w staniu",
            miesnie: {
                glowne: [
                    "mięśnie naramienne"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stojąc, wyprostowaną rękę unieś na wysokość barku. Drugą ręką asystującą złap od dołu okolice łokcia ręki rozciąganej."
            ],
            ruch: [
                "Z pozycji wyjściowej zacznij przywodzić rękę do wewnątrz. Postaraj się delikatnie pomagać drugą ręką, naciskając na łokieć. Ruch przywiedzenia wykonuj do osiągnięcia odczucia rozciągania.",
                "Rozciąganie wykonuj przez około 90–120 sekund dla jednej kończyny, starając się systematycznie przyciągać rękę rozciąganą co około 30 sekund."
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
