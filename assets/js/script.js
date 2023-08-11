document.addEventListener('DOMContentLoaded', () => {

/** ARRAY FOR CARD OPTIONS  */
const cardArray = [{
        name: "australia",
        img: "images/oz.JPG"
    },
    {
        name: "china",
        img: "images/china.JPG"
    },
    {
        name: "egypt",
        img: "images/egypt.JPG"
    },
    {
        name: "france",
        img: "images/france.JPG"
    },
    {
        name: "india",
        img: "images/india.JPG"
    },
    {
        name: "italy",
        img: "images/italy.JPG"
    },
    {
        name: "usa",
        img: "images/usa.JPG"
    },
    {
        name: "uk",
        img: "images/uk.JPG"
    },
    {
        name: "uk",
        img: "images/bigben.JPG"
    },
    {
        name: "india",
        img: "images/tajmahal.JPG"
    },
    {
        name: "italy",
        img: "images/pisa.JPG"
    },
    {
        name: "france",
        img: "images/eiffeltower.JPG"
    },
    {
        name: "usa",
        img: "images/statue.JPG"
    },
    {
        name: "australia",
        img: "images/operahouse.JPG"
    },
    {
        name: "egypt",
        img: "images/pyramid.JPG"
    },
    {
        name: "china",
        img: "../images/wall.JPG"
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
        resultDisplay.textContent = 'Congratulations! You found all the matches!'
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