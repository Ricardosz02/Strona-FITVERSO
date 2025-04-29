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

    // Kalkulator BMI
    document.getElementById("calculateBMI").addEventListener("click", function () {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100;  // Zamieniamy na metry
        const resultElement = document.getElementById("bmiResult");
        const infoElement = document.getElementById("bmiInfo");
        // Wskaźnik graficzny BMI
        const pointer = document.getElementById("bmiPointer");
        const bar = document.getElementById("bmiBarContainer");

        if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            resultElement.textContent = "Wprowadź poprawne dane!";
            resultElement.style.color = "white";
            infoElement.innerHTML = ""; // wyczyść opis
            return;
        }

        const bmi = weight / (height * height);
        let resultText = "";
        let color = "";

        if (bmi < 16.0) {
            resultText = "Wygłodzenie";
            color = "rgb(165, 217, 235)";
        } else if (bmi < 17.0) {
            resultText = "Wychudzenie";
            color = "rgb(89, 201, 238)";
        } else if (bmi < 18.5) {
            resultText = "Niedowaga";
            color = "#00BFFF";
        } else if (bmi < 25.0) {
            resultText = "Pożądana masa ciała";
            color = "#32CD32";
        } else if (bmi < 30.0) {
            resultText = "Nadwaga";
            color = "#FFA500";
        } else if (bmi < 35.0) {
            resultText = "Otyłość I stopnia";
            color = "#FF6347";
        } else if (bmi < 40.0) {
            resultText = "Otyłość II stopnia";
            color = "#FF4500";
        } else {
            resultText = "Otyłość III stopnia";
            color = "#8B0000";
        }

        resultElement.textContent = `Twoje BMI: ${bmi.toFixed(2)} (${resultText})`;
        resultElement.style.color = color;
        resultElement.classList.remove("fade-in");
        void resultElement.offsetWidth;
        resultElement.classList.add("fade-in");

        // Zakresy BMI: 15 - 40 (dla wizualizacji)
        const minBMI = 12;
        const maxBMI = 45;
        let position = 0;

        if (bmi < minBMI) {
            position = 0;
        } else if (bmi > maxBMI) {
            position = 100;
        } else {
            position = ((bmi - minBMI) / (maxBMI - minBMI)) * 100;
        }

        // Animacja wskaźnika
        pointer.style.opacity = 0;
        setTimeout(() => {
            pointer.style.left = `calc(${position}% - 10px)`;
            pointer.style.opacity = 1;
        }, 50);

        // Opis przedziałów BMI
        infoElement.innerHTML = `
        <div style="
        margin-top: 10px;
        font-size: 16px;
        background-color: #312A2A;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        ">
            <strong>Zakresy BMI:</strong><br>
            <span style="color:rgb(165, 217, 235);">• Wygłodzenie:</span> BMI &lt; 16.0<br>
            <span style="color:rgb(89, 201, 238);">• Wychudzenie:</span> 16.0 – 16.99<br>
            <span style="color: #00BFFF;">• Niedowaga:</span> 17.0 – 18.49<br>
            <span style="color: #32CD32;">• Pożądana masa ciała:</span> 18.5 – 24.99<br>
            <span style="color: #FFA500;">• Nadwaga:</span> 25.0 – 29.99<br>
            <span style="color: #FF6347;">• Otyłość I stopnia:</span> 30.0 – 34.99<br>
            <span style="color: #FF4500;">• Otyłość II stopnia:</span> 35.0 – 39.99<br>
            <span style="color: #8B0000;">• Otyłość III stopnia:</span> BMI ≥ 40.0
        </div>
    `;

    infoElement.classList.remove("fade-in");   // reset animacji
    void infoElement.offsetWidth;              // wymuszenie przeliczenia layoutu
    infoElement.classList.add("fade-in");      // dodanie animacji

    });

    // Kalkulator kaloryczności
    document.getElementById("calculateCalories").addEventListener("click", function () {
        const age = parseInt(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weightK").value);
        const height = parseFloat(document.getElementById("heightK").value);
        const gender = document.getElementById("gender").value;
        const activityLevel = document.getElementById("activityLevel").value;
        const calorieResultElement = document.getElementById("calorieResult");

        if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
            document.getElementById("calorieResult").textContent = "Wprowadź poprawne dane!";
            return;
        }

        // Obliczenie BMR (podstawowa przemiana materii)
        let bmr;
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Dla mężczyzn
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Dla kobiet
        }

        // Współczynnik aktywności
        let activityFactor;
        switch (activityLevel) {
            case "sedentary":
                activityFactor = 1.2; // Brak aktywności
                break;
            case "light":
                activityFactor = 1.375; // Lekka aktywność
                break;
            case "moderate":
                activityFactor = 1.55; // Średnia aktywność
                break;
            case "intense":
                activityFactor = 1.725; // Intensywna aktywność
                break;
        }

        const maintenanceCalories = bmr * activityFactor;
        const calorieReduction = maintenanceCalories - 500; // Redukcja o 500 kcal na dzień
        const calorieSurplus = maintenanceCalories + 500; // Nadwyżka o 500 kcal na dzień

        // Wyświetlanie wyników
        calorieResultElement.classList.remove("fade-in");
        void calorieResultElement.offsetWidth;
        calorieResultElement.innerHTML = `
        <div style="
        margin-top: 10px;
        font-size: 22px;
        background-color: #312A2A;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        ">
            Kalorie dla utrzymania wagi: ${maintenanceCalories.toFixed(2)} kcal<br>
            Kalorie dla redukcji wagi: ${calorieReduction.toFixed(2)} kcal<br>
            Kalorie dla przyrostu masy: ${calorieSurplus.toFixed(2)} kcal
        </div>
        `;
        calorieResultElement.classList.add("fade-in");
    });

});