const noButton = document.getElementById("noButton");

let escapeCount = 0;

const maxEscapes = 6;

let selectedDate = "";
let selectedPlace = "";


// КНОПКА НЕТ
noButton.addEventListener("mouseenter", function () {

    if (escapeCount >= maxEscapes) {
        return;
    }

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX =
        window.innerWidth - buttonWidth - 20;

    const maxY =
        window.innerHeight - buttonHeight - 20;


    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;


    noButton.style.position = "fixed";

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    noButton.style.zIndex = "1000";

    escapeCount++;
});


// СЛАЙД 1 -> СЛАЙД 2
function goToDatePage() {

    showScreen("screen2");
}


// СОХРАНЯЕМ ДАТУ
function saveDate() {

    const date =
        document.getElementById("datePicker").value;


    if (!date) {

        alert("Гозел, сначала выбери дату 🌷");

        return;
    }


    selectedDate = date;


    showScreen("screen3");
}


// ВЫБОР МЕСТА
function selectPlace(place) {

    selectedPlace = place;


    const dateObject =
        new Date(selectedDate + "T00:00:00");


    const prettyDate =
        dateObject.toLocaleDateString(
            "ru-RU",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    document.getElementById("finalDate").innerHTML =
        "📅 Наша дата: <b>" + prettyDate + "</b>";


    document.getElementById("finalPlace").innerHTML =
        "📍 Куда идём: <b>" + selectedPlace + "</b>";


    showScreen("screen4");


    createHearts();
}


// ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ
function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(function (screen) {

        screen.classList.remove("active");
    });


    document
        .getElementById(screenId)
        .classList.add("active");
}


// СЕРДЕЧКИ
function createHearts() {

    setInterval(function () {

        const heart =
            document.createElement("div");


        heart.classList.add("heart");


        const hearts =
            ["❤️", "💖", "💕", "💗", "🌷"];


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.animationDuration =
            3 + Math.random() * 3 + "s";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 6000);


    }, 250);
}