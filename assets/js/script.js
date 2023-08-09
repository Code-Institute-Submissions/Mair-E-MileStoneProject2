const board = document.getElementById("board");

/** ARRAY FOR GAME-AREA LAYOUT */
let pairCards = () => [{
        name: "australia",
        img: "assets/images/oz.png"
    },
    {
        name: "china",
        img: "assets/images/china.png"
    },
    {
        name: "egypt",
        img: "assets/images/egypt.png"
    },
    {
        name: "france",
        img: "assets/images/france.png"
    },
    {
        name: "india",
        img: "assets/images/india.png"
    },
    {
        name: "italy",
        img: "assets/images/italy.png"
    },
    {
        name: "usa",
        img: "assets/images/usa.png"
    },
    {
        name: "uk",
        img: "assets/images/uk.png"
    },
    {
        name: "bigben",
        img: "assets/images/bigben.png"
    },
    {
        name: "tajmahal",
        img: "assets/images/tajmahal.png"
    },
    {
        name: "pisa",
        img: "assets/images/pisa.png"
    },
    {
        name: "eiffeltower",
        img: "assets/images/eiffeltower.png"
    },
    {
        name: "statue",
        img: "assets/images/statue.png"
    },
    {
        name: "operahouse",
        img: "assets/images/operahouse.png"
    },
    {
        name: "pyramid",
        img: "assets/images/pyramid.png"
    },
    {
        name: "wall",
        img: "assets/images/wall.png"
    },
];

/** RANDOMIZES CARDS */
let randomize = () => {
    let cardInfo = pairCards();
    //randomize the array from pairCards variable: //
    cardInfo.sort(() => Math.random() - 0.5);
    return cardInfo;
};

randomize();

/** CREATE GAME-AREA BOARD */
let gamearea = () => {
    let cardInfo = randomize();

    cardInfo.forEach((item) => {
        // Generate HTML card sides and their id names //
        let card = document.createElement("div");
        let cardFront = document.createElement("img");
        let cardBack = document.createElement("img");
        cardBack.setAttribute('src', 'assets/images/world.JPG');

        card.classList = "card";
        cardFront.classList = "card-front";
        cardBack.classList = "card-back";
        cardFront.setAttribute("alt", "country-landmark");
        cardBack.setAttribute("alt", "heart-globe");

        // Put images onto card faces //
        cardFront.src = item.img;
        card.setAttribute("name", item.name);

        // Put cards in div with id='board' //
        board.appendChild(card);
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        card.addEventListener('click', (event) => {
            card.classList.toggle("toggle");
            checkMatch(event);
        });
    });
};