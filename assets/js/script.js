document.addEventListener('DOMContentLoaded', () => {

    /** -- ARRAY FOR CARD OPTIONS --  */
    const cardArray = [{
            name: "australia",
            img: "assets/images/oz.jpg"
        },
        {
            name: "china",
            img: "assets/images/china.jpg"
        },
        {
            name: "egypt",
            img: "assets/images/egypt.jpg"
        },
        {
            name: "france",
            img: "assets/images/france.jpg"
        },
        {
            name: "india",
            img: "assets/images/india.jpg"
        },
        {
            name: "italy",
            img: "assets/images/italy.jpg"
        },
        {
            name: "usa",
            img: "assets/images/usa.jpg"
        },
        {
            name: "uk",
            img: "assets/images/uk.jpg"
        },
        {
            name: "uk",
            img: "assets/images/bigben.jpg"
        },
        {
            name: "india",
            img: "assets/images/tajmahal.jpg"
        },
        {
            name: "italy",
            img: "assets/images/pisa.jpg"
        },
        {
            name: "france",
            img: "assets/images/eiffeltower.jpg"
        },
        {
            name: "usa",
            img: "assets/images/statue.jpg"
        },
        {
            name: "australia",
            img: "assets/images/operahouse.jpg"
        },
        {
            name: "egypt",
            img: "assets/images/pyramid.jpg"
        },
        {
            name: "china",
            img: "assets/images/wall.jpg"
        },
    ];

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let moveCount = 0;

    /** -- RANDOMISE CARD ARRAY -- */

    cardArray.sort(() => 0.5 - Math.random());

    /** -- CREATE BOARD -- */

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'assets/images/world.jpg');
            card.setAttribute('class', 'images');
            card.setAttribute('alt', 'heart shaped globe')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
        console.log("Creating board...");
    }

    /** CHECK MATCH AND RESET CARDS IF DO NOT MATCH -- */

    function checkForMatch() {
        let cards = document.querySelectorAll('.images');
        console.log(cards);
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //Increment the move count
        moveCount++;

        if ((cardsChosen[0]) === cardsChosen[1]) {
            alert('You found a match.');

            // Update the move count display
            updateMoveCountDisplay();

            cards[optionOneId].setAttribute('src', 'assets/images/tick.jpg');
            cards[optionTwoId].setAttribute('src', 'assets/images/tick.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/world.jpg');
            cards[optionTwoId].setAttribute('src', 'assets/images/world.jpg');
        }
    }

    function updateMoveCountDisplay() {
        const moveCountElement = document.getElementById('move-count');
        moveCountElement.textContent = `Moves: ${moveCount}`;
    }


    /** -- ALL CARDS MATCHED AND GAME COMPLETE -- */

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations! You found all the matches!';
    }
    console.log(checkForMatch);
}

/** -- FLIP CARD (AND STOP SAME CARD BEING CLICKED TWICE)-- */

let isFlipping = false;

function flipCard() {
    if (isFlipping) {
        return; // Ignore clicks while a card is being flipped
    }

    let cardId = this.getAttribute('data-id');

    // Check if the clicked card has already been chosen
    if (cardsChosenId.includes(cardId)) {
        return; // Ignore clicks on already chosen cards
    }
    // Mark that a card is being flipped
    isFlipping = true;

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(() => {
            checkForMatch();
            isFlipping = false; // Allow flipping again after checking for match
        }, 500);
    } else {
        isFlipping = false; // Allow flipping again if only one card is chosen
    }
    console.log(flipCard);
}

/** -- RESET MATCHES COUNTER AND CLEAR THE BOARD -- */

const resetButton = document.querySelector(".reset");
const moveContainer = document.querySelector('.move-count');

resetButton.addEventListener("click", () => {
    moveCount = 0;
    moveContainer.textContent = moveCount;

    // Reset matches count and update the display
    cardsWon = [];
    resultDisplay.textContent = cardsWon.length;


    grid.innerHTML = '';
    createBoard();
    console.log("Button clicked!");
    cardArray.sort(() => 0.5 - Math.random());
});

/** -- OPEN HOW TO PLAY, pop-up instructions -- */

const rulesButton = document.getElementById("rules");
let rules = document.getElementsByClassName("rules-card");

console.log(rulesButton);

rulesButton.addEventListener('click', showRules);

function showRules() {
    rules[0].style.display = "block";
}
console.log(showRules);

/** -- CLOSE HOW TO PLAY, pop-up instructions -- */

const playButton = document.querySelector(".play-button"); rules = document.getElementsByClassName("rules-card");

playButton.addEventListener('click', hideRules);

function hideRules() {
    rules[0].style.display = "none";
}
console.log(hideRules);

createBoard();

});