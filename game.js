const deck = [
    // Hearts
    "hearts_2.png",
    "hearts_3.png",
    "hearts_4.png",
    "hearts_5.png",
    "hearts_6.png",
    "hearts_7.png",
    "hearts_8.png",
    "hearts_9.png",
    "hearts_10.png",
    "hearts_J.png",
    "hearts_Q.png",
    "hearts_K.png",
    "hearts_A.png",

    // Diamonds
    "diamonds_2.png",
    "diamonds_3.png",
    "diamonds_4.png",
    "diamonds_5.png",
    "diamonds_6.png",
    "diamonds_7.png",
    "diamonds_8.png",
    "diamonds_9.png",
    "diamonds_10.png",
    "diamonds_J.png",
    "diamonds_Q.png",
    "diamonds_K.png",
    "diamonds_A.png",

    // Clubs
    "clubs_2.png",
    "clubs_3.png",
    "clubs_4.png",
    "clubs_5.png",
    "clubs_6.png",
    "clubs_7.png",
    "clubs_8.png",
    "clubs_9.png",
    "clubs_10.png",
    "clubs_J.png",
    "clubs_Q.png",
    "clubs_K.png",
    "clubs_A.png",

    // Spades
    "spades_2.png",
    "spades_3.png",
    "spades_4.png",
    "spades_5.png",
    "spades_6.png",
    "spades_7.png",
    "spades_8.png",
    "spades_9.png",
    "spades_10.png",
    "spades_J.png",
    "spades_Q.png",
    "spades_K.png",
    "spades_A.png"
];

// Pick 12 random cards from the deck
const selectedCards = [...deck]
    .sort(() => Math.random() - 0.5)
    .slice(0, 12);

// Create two copies of each card
const cards = [...selectedCards, ...selectedCards];

// Shuffle the 24 cards
cards.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById("game-board");
let firstCard = null;
let secondCard = null;
let lockBoard = false;

cards.forEach(cardImage => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.card = cardImage;

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front");

    const back = document.createElement("div");
    back.classList.add("card-back");

    const frontImage = document.createElement("img");
    frontImage.src = "images/" + cardImage;

    const backImage = document.createElement("img");

    const selectedCardBack = localStorage.getItem("cardBack") || "dark";

    if (selectedCardBack === "white") {
        backImage.src = "images/back_light.png";
    } else {
        backImage.src = "images/back_dark.png";
    }

    front.appendChild(frontImage);
    back.appendChild(backImage);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener("click", () => {
        // Don't allow clicking while we're checking a pair
        if (lockBoard) return;

        // Don't allow clicking the same card twice
        if (card === firstCard) return;

        // Flip the card
        card.classList.add("flipped");

        // First card
        if (firstCard === null) {
            firstCard = card;
            return;
        }

        // Second card
        secondCard = card;

        // Check for a match
        if (firstCard.dataset.card === secondCard.dataset.card) {
            // MATCH!
            firstCard = null;
            secondCard = null;
        } else {
            // NOT a match
            lockBoard = true;

            setTimeout(() => {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");

                firstCard = null;
                secondCard = null;
                lockBoard = false;
            }, 1000);
        }
    });

    gameBoard.appendChild(card);
});