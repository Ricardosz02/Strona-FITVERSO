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

    // Kalkulator BMI
    document.getElementById("calculateBMI").addEventListener("click", function () {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100;  // Zamieniamy na metry

        if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            document.getElementById("bmiResult").textContent = "Wprowadź poprawne dane!";
            return;
        }

        const bmi = weight / (height * height);
        let result = "";

        if (bmi < 18.5) {
            result = "Niedowaga";
        } else if (bmi < 24.9) {
            result = "Prawidłowa waga";
        } else if (bmi < 29.9) {
            result = "Nadwaga";
        } else {
            result = "Otyłość";
        }

        document.getElementById("bmiResult").textContent = `Twoje BMI: ${bmi.toFixed(2)} (${result})`;
    });

    // Kalkulator kaloryczności
    document.getElementById("calculateCalories").addEventListener("click", function () {
        const age = parseInt(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weightK").value);
        const height = parseFloat(document.getElementById("heightK").value);
        const gender = document.getElementById("gender").value;
        const activityLevel = document.getElementById("activityLevel").value;

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
        document.getElementById("calorieResult").innerHTML = `
            Kalorie dla utrzymania wagi: ${maintenanceCalories.toFixed(2)} kcal<br>
            Kalorie dla redukcji wagi: ${calorieReduction.toFixed(2)} kcal<br>
            Kalorie dla przyrostu masy: ${calorieSurplus.toFixed(2)} kcal
        `;
    });

});