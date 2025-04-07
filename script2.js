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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ];
      
      document.querySelectorAll('.czytaj').forEach(p => {
        p.addEventListener('click', () => {
          const blok = p.parentElement;
          const id = blok.getAttribute('data-id');
          const infoDiv = blok.querySelector('.info');
          const trener = trenerzy[id];
      
          if (infoDiv.style.display === 'block') {
            infoDiv.style.display = 'none';
            return;
          }
      
          infoDiv.innerHTML = `
            <strong>Staż:</strong> ${trener.staz}<br>
            <strong>Specjalizacja:</strong> ${trener.specjalizacja}<br>
            <strong>Podopieczni:</strong> ${trener.podopieczni}<br>
            <strong>Osiągnięcia:</strong>
            <ul>
              ${trener.osiagniecia.map(item => `<li>${item}</li>`).join('')}
            </ul>
          `;
          infoDiv.style.display = 'block';
        });
      });
});
