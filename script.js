const cards = [
    "clubs_2.png",
    "clubs_3.png",
    "clubs_4.png",
    "clubs_5.png",
    "clubs_6.png",
    "clubs_7.png",
    "clubs_8.png",
    "clubs_9.png",
    "clubs_10.png",
    "clubs_A.png",
    "clubs_J.png",
    "clubs_Q.png",
    "clubs_K.png",
    "spades_2.png",
    "spades_3.png",
    "spades_4.png",
    "spades_5.png",
    "spades_6.png",
    "spades_7.png",
    "spades_8.png",
    "spades_9.png",
    "spades_A.png",
    "spades_J.png",
    "spades_Q.png"
];

const gameBoard = document.getElementById("game-board");

cards.forEach(cardImage => {
    const card = document.createElement("div");
    card.classList.add("card");

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front");

    const back = document.createElement("div");
    back.classList.add("card-back");

    const frontImage = document.createElement("img");
    frontImage.src = "images/" + cardImage;

    const backImage = document.createElement("img");
    backImage.src = "images/back_dark.png";

    front.appendChild(frontImage);
    back.appendChild(backImage);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });

    gameBoard.appendChild(card);
});