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


    // Trenerzy personalni

    const trenerzy = [
        {
          imie: "Miłosz",
          nazwisko: "Hamkało",
          staz: "5 lat",
          specjalizacja: "trening funkcjonalny, mobilność",
          podopieczni: "osoby po kontuzjach i sportowcy amatorzy",
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
          specjalizacja: "kulturystyka, sylwetka",
          podopieczni: "zawodnicy fitness i kulturyści",
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
          specjalizacja: "trening cardio, redukcja tkanki tłuszczowej",
          podopieczni: "osoby początkujące",
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
          specjalizacja: "crossfit, siła dynamiczna",
          podopieczni: "pasjonaci crossfitu, wojskowi",
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
          specjalizacja: "kalistenika, street workout",
          podopieczni: "młodzież i miłośnicy treningu z masą ciała",
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
          specjalizacja: "siła, trójbój siłowy",
          podopieczni: "zawodnicy przygotowujący się do zawodów",
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
          const blok = p.closest('.blok'); // Znajdź rodzica blok
          const infoDiv = blok.querySelector('.info');
          const id = blok.getAttribute('data-id');
          const trener = trenerzy[id];

          // Zmieniamy stan na przeciwny (jeśli rozwinięte to zwijamy i odwrotnie)
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

              

              infoDiv.style.transition = 'height 0.5s ease, opacity 0.5s ease'; // Ustawienie animacji
              infoDiv.style.height = `0`; // Wysokość na podstawie zawartości
              infoDiv.style.opacity = '0';  // Ustawiamy pełną przezroczystość
              

              // Ustawienia na po załadowaniu zawartości
              setTimeout(() => {
                infoDiv.style.height = `${infoDiv.scrollHeight}px`; // Ustawienie odpowiedniej wysokości
                infoDiv.style.opacity = '1';  // Ustawienie pełnej przezroczystości
            }, 10); // Krótkie opóźnienie na rozruch animacji

              // Zmieniamy rozmiar ikon
              const socialIcons = infoDiv.querySelectorAll('.social-icon');
              socialIcons.forEach(icon => {
              icon.style.width = '40px';  // Ustawienie szerokości ikony
              icon.style.height = '40px'; // Ustawienie wysokości ikony
          });
          } else {
              // Zwinięcie
              infoDiv.style.transition = 'height 0.5s ease, opacity 0.5s ease'; // Ustawienie animacji
              infoDiv.style.height = '0'; // Zmniejszenie wysokości
              infoDiv.style.opacity = '0';  // Ustawienie przezroczystości na 0
          }
      });
  });
    
});
