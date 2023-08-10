document.addEventListener('DOMContentLoaded', () => {

/** ARRAY FOR CARD OPTIONS  */
const cardArray = [{
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
        name: "uk",
        img: "assets/images/bigben.png"
    },
    {
        name: "india",
        img: "assets/images/tajmahal.png"
    },
    {
        name: "italy",
        img: "assets/images/pisa.png"
    },
    {
        name: "france",
        img: "assets/images/eiffeltower.png"
    },
    {
        name: "usa",
        img: "assets/images/statue.png"
    },
    {
        name: "australia",
        img: "assets/images/operahouse.png"
    },
    {
        name: "egypt",
        img: "assets/images/pyramid.png"
    },
    {
        name: "china",
        img: "assets/images/wall.png"
    },
];

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector('#result')
var cardsChosen =[]
var cardsChosenId =[]
var CardsWon = []

/** Randomise card array */

cardArray.sort(( => 0.5 - Math.random))

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
    if (cardsChosen[0]) === cardsChosen[1]) {
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
    } 
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

/** HOW TO PLAY, pop-up OPEN instructions */

})