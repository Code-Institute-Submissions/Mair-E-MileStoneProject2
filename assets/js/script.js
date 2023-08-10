document.addEventListener('DOMContentLoaded', () => {

/** ARRAY FOR CARD OPTIONS  */
const cardArray = [{
        name: "australia",
        img: "../images/oz.png"
    },
    {
        name: "china",
        img: "../images/china.png"
    },
    {
        name: "egypt",
        img: "../images/egypt.png"
    },
    {
        name: "france",
        img: "../images/france.png"
    },
    {
        name: "india",
        img: "assets/images/india.png"
    },
    {
        name: "italy",
        img: "../images/italy.png"
    },
    {
        name: "usa",
        img: "../images/usa.png"
    },
    {
        name: "uk",
        img: "../images/uk.png"
    },
    {
        name: "uk",
        img: "../images/bigben.png"
    },
    {
        name: "india",
        img: "../images/tajmahal.png"
    },
    {
        name: "italy",
        img: "../images/pisa.png"
    },
    {
        name: "france",
        img: "../images/eiffeltower.png"
    },
    {
        name: "usa",
        img: "../images/statue.png"
    },
    {
        name: "australia",
        img: "../images/operahouse.png"
    },
    {
        name: "egypt",
        img: "../images/pyramid.png"
    },
    {
        name: "china",
        img: "../images/wall.png"
    },
];

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector('#result')
var cardsChosen =[]
var cardsChosenId =[]
var CardsWon = []

/** Randomise card array */

cardArray.sort(() => 0.5 - Math.random())

/** CREATE BOARD */
function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/world.JPG')
        card.setAttribute('data-id', i)
        card.addEventListener('click, flipcard')
        grid.appendChild(card)
    }
}

createBoard()

/** CHECK MATCH */

function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if ((cardsChosen[0]) === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.JPG')
        cards[optionTwoId].setAttribute('src', 'images/white.JPG')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/world.JPG')
        cards[optionTwoId].setAttribute('src', 'images/world.JPG')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = CardsWon.length
    if (CardsWon.lengh === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You foud all the matches!'
    };
}


/** FLIP CARD */

function flipCard() {
    var cardId = this.getAttribure('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


/** NEW GAME */

/** COUNT NUMBER OF MOVES AND TOTAL SCORE*/

/** HOW TO PLAY, pop-up OPEN and CLOSE instructions */

const rulesButton = document.querySelector(".rules");
let rules = document.getElementsByClassName("rules-card");

rulesButton.addEventListener('click', showRules);

function showRules() {
    rules[0].style.display = "block";
}

const playButton = document.querySelector(".play-button");
rules = document.getElementsByClassName("rules-card");

playButton.addEventListener('click', hideRules);

function hideRules() {
    rules[0].style.display = "none";
}
})