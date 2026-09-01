const startGame = document.getElementById("start-game");

startGame.addEventListener("click", () => {
    window.location.href = "game.html";
});

const cardBackOptions = document.querySelectorAll(".card-back-option");

// Load saved card back
const savedCardBack = localStorage.getItem("cardBack") || "dark";

// Highlight saved selection
cardBackOptions.forEach(option => {
    if (option.dataset.back === savedCardBack) {
        option.classList.add("selected");
    } else {
        option.classList.remove("selected");
    }

    option.addEventListener("click", () => {
        cardBackOptions.forEach(button => {
            button.classList.remove("selected");
        });

        option.classList.add("selected");

        localStorage.setItem("cardBack", option.dataset.back);
    });
});