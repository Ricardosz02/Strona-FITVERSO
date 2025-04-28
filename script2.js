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


    // Trenerzy personalni

    const trenerzy = [
        {
          imie: "Miłosz",
          nazwisko: "Hamkało",
          staz: "5 lat",
          specjalizacja: "Trening funkcjonalny, mobilność",
          podopieczni: "Osoby po kontuzjach i sportowcy amatorzy",
          osiagniecia: [
            "Fizjoterapeuta reprezentacji juniorów",
            "Certyfikat FMS (Functional Movement Screen)"
          ],
          social: {
            instagram: "https://www.instagram.com/milosz_hamkalo/",
            tiktok: "https://www.tiktok.com/@milosz_hamkalo?is_from_webapp=1&sender_device=pc",
            youtube: "https://www.youtube.com/@miloszhamkalo"
          }
        },
        {
          imie: "Piotr",
          nazwisko: "Hajduk",
          staz: "10 lat",
          specjalizacja: "Kulturystyka, sylwetka",
          podopieczni: "Zawodnicy fitness i kulturyści",
          osiagniecia: [
            "Trener Mistrzów Polski IFBB",
            "Wykładowca akademicki AWF"
          ],
          social: {
            instagram: "https://www.instagram.com/piotrhajduk1/",
            tiktok: "https://www.tiktok.com/@piotr.hajduk?is_from_webapp=1&sender_device=pc",
            youtube: "https://www.youtube.com/@Trenerpiotrhajduk"
          }
        },
        {
          imie: "Szymon",
          nazwisko: "Moszny",
          staz: "4 lata",
          specjalizacja: "Trening cardio, redukcja tkanki tłuszczowej",
          podopieczni: "Osoby początkujące",
          osiagniecia: [
            "Autor ebooka o spalaniu tłuszczu",
            "Certyfikat ISSA (Certified Trainer)"
          ],
          social: {
            instagram: "https://www.instagram.com/szymonmoszny/",
            tiktok: "https://www.tiktok.com/@szymon_moszny_official",
            youtube: "https://www.youtube.com/@SzymonMoszny"
          }
        },
        {
          imie: "Marek",
          nazwisko: "Prawdzik",
          staz: "7 lat",
          specjalizacja: "Crossfit, siła dynamiczna",
          podopieczni: "Pasjonaci crossfitu, wojskowi",
          osiagniecia: [
            "3 miejsce w CrossFit Open Polska",
            "Współpracuje z jednostkami specjalnymi"
          ],
          social: {
            instagram: "https://www.instagram.com/marek_prawiedzik/",
            tiktok: "https://www.tiktok.com/@prawiedzik"
          }
        },
        {
          imie: "Michał",
          nazwisko: "Radomski",
          staz: "6 lat",
          specjalizacja: "Kalistenika, street workout",
          podopieczni: "Młodzież i miłośnicy treningu z masą ciała",
          osiagniecia: [
            "Twórca aplikacji mobilnej do treningu kalistenicznego",
            "Prowadzi kanał TikTok (100k+ followersów)"
          ],
          social: {
            instagram: "https://www.instagram.com/radomskim/"
          }
        },
        {
          imie: "Sebastian",
          nazwisko: "Suder",
          staz: "9 lat",
          specjalizacja: "Siła, trójbój siłowy",
          podopieczni: "Zawodnicy przygotowujący się do zawodów",
          osiagniecia: [
            "Rekordzista Polski w martwym ciągu (kategoria open)",
            "Uczestnik seminariów z Edem Coanem"
          ],
          social: {
            instagram: "https://www.instagram.com/sebastiansuder/",
            tiktok: "https://www.tiktok.com/@sebastiansuder1",
            youtube: "https://www.youtube.com/@SebastianKulturysta"
          }
        }
      ];
      
    // Dodanie funkcji rozwijania i zwijania z animacją
    document.querySelectorAll('.czytaj').forEach(p => {
        p.addEventListener('click', () => {
            const blok = p.closest('.blok');
            const infoDiv = blok.querySelector('.info');
            const id = blok.getAttribute('data-id');
            const trener = trenerzy[id];

            // Zmieniamy stan na przeciwny
            if (infoDiv.style.height === '0px' || infoDiv.style.height === '') {
                let socialHTML = '';
                if (trener.social) {
                    socialHTML += '<strong>Media społecznościowe:</strong><div class="social-media">';
                    if (trener.social.instagram)
                        socialHTML += `<a href="${trener.social.instagram}" target="_blank"><img src="Pictures/instagram.png" alt="Instagram" class="social-icon"></a>`;
                    if (trener.social.tiktok)
                        socialHTML += `<a href="${trener.social.tiktok}" target="_blank"><img src="Pictures/tiktok.png" alt="TikTok" class="social-icon"></a>`;
                    if (trener.social.youtube)
                        socialHTML += `<a href="${trener.social.youtube}" target="_blank"><img src="Pictures/youtube.png" alt="YouTube" class="social-icon"></a>`;
                    socialHTML += '</div>';
                }

                // Rozwinięcie
                infoDiv.innerHTML = `
                    <strong>Staż:</strong> ${trener.staz}<br>
                    <strong>Specjalizacja:</strong> ${trener.specjalizacja}<br>
                    <strong>Podopieczni:</strong> ${trener.podopieczni}<br>
                    <strong>Osiągnięcia:</strong>
                    <ul>
                        ${trener.osiagniecia.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    ${socialHTML}
                `;

                infoDiv.style.transition = 'height 0.5s ease, opacity 0.5s ease';
                infoDiv.style.height = '0';
                infoDiv.style.opacity = '0';

                // Ustawienia po załadowaniu zawartości
                setTimeout(() => {
                    infoDiv.style.height = `${infoDiv.scrollHeight}px`;
                    infoDiv.style.opacity = '1';
                    p.textContent = 'Zwiń dane';
                    blok.classList.add('enlarged');
                }, 10);

                // Zmieniamy rozmiar ikon
                const socialIcons = infoDiv.querySelectorAll('.social-icon');
                socialIcons.forEach(icon => {
                    icon.style.width = '40px';
                    icon.style.height = '40px';
                });
            } else {
                // Zwinięcie
                infoDiv.style.transition = 'height 0.5s ease, opacity 0.5s ease';
                infoDiv.style.height = '0';
                infoDiv.style.opacity = '0';
                p.textContent = 'Czytaj więcej';
                blok.classList.remove('enlarged');
            }
        });
    });
});
