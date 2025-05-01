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
    // Paginacja i filtrowanie przepisów
    // ---------------------
    const przepisy = [
        { 
            nazwa: "Owsianka Bounty", 
            kategoria: "deser", 
            kalorie: 415, 
            czas: "15 min", 
            obraz: "Pictures/przepis1.jpg",
            skladniki: [
                "Płatki owsiane - 40g",
                "Woda - 300ml",
                "Skyr naturalny - 150g",
                "Kilka kropel aromatu kokosowego",
                "Kakao - 5g",
                "Erytrytol (wg uznania)",
                "Wiórki kokosowe - 15g",
                "Baton Bounty - 1szt"
            ],
            przygotowanie: [
                "Płatki zalewamy wodą i gotujemy, dodajemy aromat + ewentualnie słodzik i czekamy, aż napęcznieją.",
                "Połowę skyra oraz część wiórek dodajemy do owsianki i mieszamy.",
                "Drugą połowę mieszamy ze słodzikiem i kakao.",
                "Owsiankę przedkładamy do miseczki, dekorujemy skyrem czekoladowym, wiórkami kokosowymi i cukierkiem bounty."
            ] 
        },
        { 
            nazwa: "Makaron w sosie śmietanowym", 
            kategoria: "obiad", 
            kalorie: 1184, 
            czas: "30 min", 
            obraz: "Pictures/przepis2.jpg",
            skladniki: [
                "Makaron penne - 200g",
                "Szpinak mrożony - 200g",
                "Kurczak - 200g",
                "Serki topione śmietanowe (w trójkącie) - 4szt",
                "Garść rukoli",
                "Przyprawy wg uznania (np. sól, przyprawa do kurczaka, zioła prowansalskie)"
            ],
            przygotowanie: [
                "Makaron gotujemy wg instrukcji.",
                "Kurczaka kroimy, przyprawiamy i podsmażamy. Dodajemy rozmrożony szpinak, przyprawiamy i podsmażamy jeszcze przez chwilę.",
                "Makaron odcedzamy dodajemy do reszty, dorzucamy serki topione oraz rukolę, dokładnie mieszamy i podsmażamy, aż serki się roztopią.",
                "Wykładamy na talerz i dekorujemy."
            ] 
        },
        { 
            nazwa: "Koktajl jagodowy", 
            kategoria: "śniadanie", 
            kalorie: 400, 
            czas: "5 min", 
            obraz: "Pictures/przepis3.jpg",
            skladniki: [
                "Mleko 1,5% tłuszczu - 1 szklanka",
                "Banan - 1szt",
                "Czarne jagody (lub borówki amerykańskie) - 50g",
                "Płatki owsiane - 2 łyżki",
                "Orzechu włoskie - 3szt"
            ],
            przygotowanie: [
                "Płatki owsiane i posiekane orzechy zalać na kilka minut mlekiem.",
                "Następnie dodać owoce i zblendować na koktajl."
            ] 
        },
        { 
            nazwa: "Kanapka z awokado", 
            kategoria: "śniadanie", 
            kalorie: 300, 
            czas: "10 min", 
            obraz: "Pictures/przepis4.jpg",
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
            nazwa: "Szakszuka", 
            kategoria: "śniadanie", 
            kalorie: 400, 
            czas: "20 min", 
            obraz: "Pictures/przepis5.jpg",
            skladniki: [
                "Pomidory krojone z puszki - 200g",
                "Jajka - 2szt",
                "Czerwona fasolka z puszki - 80g",
                "Cebula - 0,5szt",
                "Ząbek czosnku - 1 ząbek",
                "Oliwa z oliwek - 1 łyżka",
                "Posiekana natka pietruszki - 2 łyżczeki",
                "Przyprawy: sól, pieprz, papryka słodka i ostra, kmin rzymski, cynamon"
            ],
            przygotowanie: [
                "Na patelni rozgrzać olej, przesmażyć posiekaną cebulę i rozdrobniony czosnek.",
                "Dodać na patelnię pomidory oraz przyprawy – gotować 4 min.",
                "Następnie dodać wypłukaną fasolkę i wymieszać.",
                "Na pomidory wbić jajka i doprawić solą.",
                "Przykryć i gotować około 3 min – aż białko się zetnie.",
                "Przed podaniem posypać natką pietruszki."
            ] 
        },
        { 
            nazwa: "Czekoladowe pancakes", 
            kategoria: "kolacja",
            kalorie: 510, 
            czas: "25 min", 
            obraz: "Pictures/przepis6.jpg",
            skladniki: [
                "Banan - 1szt",
                "Gorzka czekolada - 30g",
                "Proszek budyniowy - 6 łyżeczek",
                "Erytrol - 2 łyżki",
                "Mleko - 0,5 szklanki",
                "Mąka orkiszowa pełnoziarnista - 4 łyżki",
                "Mąka przenna typ 500 - 4 łyżki",
                "Jaja kurze - 1szt",
                "Oliwa z oliwek - 2 łyżeczki"
            ],
            przygotowanie: [
                "W kielichu blendera umieszczamy wszystkie składniki oprócz borówek i oliwy. Blendujemy na gładką masę, w razie potrzeby dolewamy odrobinę wody, aby uzyskać preferowaną konsystencję ciasta. Jedną kostkę czekolady możemy pozostawić do dekoracji.",
                "Zblendowaną masę dosładzamy erytrolem wedle uznania.",
                "Na patelni rozgrzewamy oliwę. Wylewamy małe porcje ciasta, zachowując odstępy między placuszkami. Zmniejszamy moc palnika i na wolnym ogniu smażymy placuszki do ścięcia masy. Aby masa szybciej się ścięła, możemy przykryć patelnię pokrywką. Gdy placuszki są ścięte, obracamy je na drugą stronę za pomocą płaskiej szpatułki i smażymy do zarumienienia.",
                "Gotowe placuszki przekładamy na talerz. Podajemy razem z owocami. Przed podaniem możemy rozpuścić pozostawioną czekoladę (np. w mikrofali) i polać nią placuszki lub zetrzeć na tarce o małych oczkach i posypać danie."
            ] 
        },
        { 
            nazwa: "Indyk w sosie serowym", 
            kategoria: "obiad", 
            kalorie: 1935, 
            czas: "80 min", 
            obraz: "Pictures/przepis7.jpg",
            skladniki: [
                "Filet z indyka - 400g",
                "Oliwa z oliwek - 10ml",
                "Ser typu Cheddar - 75g",
                "Śmietana 18% - 200ml",
                "Ciepła woda (może być ta z gotującego się makaronu) - 100ml",
                "Cebula - 1szt",
                "Ząbki czosnku - 2szt",
                "Szpinak - 2 garści",
                "Przyprawa do sosu - pół łyżeczki soli, płaska łyżeczka cukru/erytrytolu/ksylitolu, odrobina świeżo zmielonego pieprzu",
                "Przyprawa do mięsa - 10 ml oliwy z oliwek, 1 płaska łyżeczka przyprawy do drobiu, czosnek, odrobina chili, 1/2 łyżeczki słodkiej papryki",
                "Makaron penne - 250g",
                "Świeża natka pietruszki - 1szt"
            ],
            przygotowanie: [
                "Mięso pokroić w drobną kostkę, dodać oliwę i przyprawy i odstawić do lodówki na 30-60 minut.",
                "Cebulę drobno pokroić, rozgrzać patelnię i wlać oliwę.",
                "Wrzucić cebulę i zeszklić, dodać mięso. Całość wymieszać i smażyć do momentu aż mięso będzie lekko zarumienione. Na patelnię wrzucić szpinak i wymieszać.",
                "W międzyczasie zagotować wodę na makaron i zacząć gotować makaron.",
                "Do miseczki wlać 200 ml śmietany, zmniejszyć ogień na patelni.",
                "Do miseczki ze śmietaną dodać odrobinę mięsa z patelni i wymieszać. Zabieg wykonujemy aby ewentualnie nie zważyć śmietany.",
                "Na patelnię wrzucić 2 pokrojone lub wyciśnięte ząbki czosnku. Dodać śmietanę. Wymieszać i doprowadzić do wrzenia, co jakiś czas mieszając.",
                "Dodawać stopniowo ciepłej wody cały czas mieszając.",
                "Ser zetrzeć na tarce. Dodać na patelnię. Przyprawić do smaku cukrem/słodzikiem i odrobiną soli i startego pieprzu.",
                "Gotować całość przez 2-3 minuty od czasu do czasu mieszając.",
                "Na patelnię wrzucić makaron i wymieszać. Posypać natką pietruszki."
            ] 
        },
        { 
            nazwa: "Biała fit pizza z patelni", 
            kategoria: "obiad", 
            kalorie: 527, 
            czas: "15 min", 
            obraz: "Pictures/przepis8.jpg",
            skladniki: [
                "Dodatki:",
                "Szpinak - 3 garście",
                "Cebula - 1/4szt",
                "Szynka dojrzewająca - 2-3 plasterki",
                "Mozzarella - 50g",
                "Pomidor - 5 plastrów",
                "Papryka - 1szt",
                "Sos:",
                "Jogurt naturalny - 3 łyżki",
                "Czosnek - 1 ząbek",
                "Woda lub mleko - 30ml",
                "Sok z cytryny - 1 łyżka",
                "Sól - 1/3 łyżeczki",
                "Erytrol lub ksylitol - 1 łyżeczka",
                "Oregano - szczypta",
                "Pieprz - szczypta",
                "Ciasto:",
                "Mąka pszenna pełnoziarnista - 25g",
                "Mąka ryżowa - 25g",
                "Jajko - 1szt",
                "Proszek do pieczenia - 1/2 łyżeczki",
                "Otręby lub płatki owsiane - 1 łyżeczka",
                "Oliwa z oliwek - 1 łyżka",
                "Mleko - 30ml",
                "Woda - 30ml",
                "Przyprawy - 1/2 łyżeczki soli, 1/2 łyżeczki bazylii"
            ],
            przygotowanie: [
                "Podsmażyć cebulę i szpinak, po podsmażeniu zdjąć z patelni.",
                "Przygotować sos czyli wszystkie składniki wymieszać ze sobą w miseczce.",
                "Wylać ciasto na rozgrzaną patelnię, za pomocą łyżki uformować placek w kształcie koła.",
                "Gdy pojawią się liczne pęcherzyki przewrócić ciasto na drugą stronę i zdjąć z palnika.",
                "Posmarować ciasto sosem (ja użyłem 2/3 sosu), nałożyć szpinak, cebulę i pozostałe dodatki.",
                "Smażyć pod przykrywką  przez 12 minut.",
                "Zdjąć z patelni, pokroić polać resztą sosu i udekorować np. rukolą."
            ] 
        },
        { 
            nazwa: "Mocno czekoladowe trufle z mleka zagęszczonego i kakao", 
            kategoria: "deser", 
            kalorie: 648, 
            czas: "10 min", 
            obraz: "Pictures/przepis9.jpg",
            skladniki: [
                "Mleko zagęszczone słodzone gostyńskie - 120g",
                "Ciemne kakao - 60g",
                "Czekolada do picia w proszku (do obtoczenia trufel) - 5g"
            ],
            przygotowanie: [
                "Z podanego przepisu wychodzi 18 kulek po 10 g każda.",
                "Mleko zagęszczone słodzone (użyte gostyńskie z tubki) wlać do szklanej miski i podgrzać w mikrofalówce przez 25 sekund (moc 800 W). Dodać przesiany przez sitko proszek kakaowy i dokładnie wymieszać łopatką.",
                "Masę przełożyć do folii spożywczej, lekko spłaszczyć i schłodzić w zamrażalniku przez ok. 30-40 minut.",
                "Następnie masę podzielić na 18 kawałków (po 10 g). Z każdej części uformować kulkę i następnie obtoczyć ją w czekoladzie w proszku.",
                "Kulki przechowywać w lodówce."
            ] 
        },
        { 
            nazwa: "Cebulaki", 
            kategoria: "kolacja", 
            kalorie: 2291, 
            czas: "60 min", 
            obraz: "Pictures/przepis10.jpg",
            skladniki: [
                "Ciasto:",
                "Mąka pszenna typ 450 - 400g",
                "Drożdże suszone - 7g",
                "Cukier - 0,5 łyżeczki",
                "Sól - 1 łyżeczka",
                "Letnia woda - 230g",
                "Olej rzepakowy - 30g",
                "Dodatki:",
                "Ser żołty mozzarella - 175g",
                "Cebula - 1szt",
                "Masło - 1 łyżeczka",
                "Ketchup łagodny - 35g",
                "Przyprawa do pizzy"
            ],
            przygotowanie: [
                "Ser żółty zetrzeć na tarce o grubych oczkach.",
                "Cebulę pokroić w piórka. Na patelni rozgrzać masło i zeszklić cebulę.",
                "Do miski dodać mąkę, drożdże, cukier i sól, wymieszać. Następnie wlać letnią wodę i olej, wymieszać wszystko łyżką i zarobić ciasto. Wyrabiać przez kilka minut. Ciasto powinno być gładkie i odchodzić od dłoni. Na koniec uformować je w kulę, lekko oprószyć, miskę przykryć folią i odstawić do wyrośnięcia na ok. 40 minut.",
                "Po tym czasie ciasto podzielić na 7 równych części i z każdej uformować dłońmi okrągły placek, pozostawiając delikatnie wyższe brzegi.",
                "Układać je na blaszce wyłożonej papierem do pieczenia.",
                "Każdy placek posmarować cienką warstwą ketchupu, oprószyć przyprawą do pizzy, następnie nałożyć podsmażoną cebulę i starty ser (po ok. 25 g mozzarelli na sztukę).",
                "Piec w temp. 250°C (opcja góra-dół) przez ok. 10 minut. Cebulaki upiec w dwóch turach."
            ]
             
        },
        { 
            nazwa: "Sałatka z kurczakiem i ryżem czerwonym", 
            kategoria: "kolacja", 
            kalorie: 232, 
            czas: "20 min", 
            obraz: "Pictures/przepis11.jpg",
            skladniki: [
                "Ryż czerowny - 20g",
                "Filet z kurczaka - 80g",
                "Pomidor - 120g",
                "Seler naciowy - 45g",
                "Miks sałat - 1 garść",
                "Kiełki rzodkiewki - 8g",
                "Olej rzepakowy - 5g",
                "Cytryna - 20g"
            ],
            przygotowanie: [
                "Komosę ryżową ugotuj.",
                "Fileta z kurczaka dopraw, używając ulubionych przypraw.",
                "Podduś na niewielkiej ilości oleju.",
                "Pomidora i selera naciowego pokrój w kosteczkę.",
                "Wymieszaj wszystkie składniki, skrop sokiem z cytryny i dopraw do smaku."
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
                        ${przepis.skladniki.map((skladnik) => {
                            // Dodaj klasę .special-ingredient dla określonych składników w wybranych przepisach
                            const isSpecial = 
                                (przepis.nazwa === "Biała fit pizza z patelni" && 
                                 (skladnik === "Dodatki:" || skladnik === "Sos:" || skladnik === "Ciasto:")) ||
                                (przepis.nazwa === "Cebulaki" && 
                                 (skladnik === "Ciasto:" || skladnik === "Dodatki:"));
                            return `<li ${isSpecial ? 'class="special-ingredient"' : ''}>${skladnik}</li>`;
                        }).join('')}
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