document.addEventListener('DOMContentLoaded', () => {

    /** -- ARRAY FOR CARD OPTIONS --  */
    const cardArray = [{
            name: "australia",
            img: "assets/images/oz.JPG"
        },
        {
            name: "china",
            img: "assets/images/china.JPG"
        },
        {
            name: "egypt",
            img: "assets/images/egypt.JPG"
        },
        {
            name: "france",
            img: "assets/images/france.JPG"
        },
        {
            name: "india",
            img: "assets/images/india.JPG"
        },
        {
            name: "italy",
            img: "assets/images/italy.JPG"
        },
        {
            name: "usa",
            img: "assets/images/usa.JPG"
        },
        {
            name: "uk",
            img: "assets/images/uk.JPG"
        },
        {
            name: "uk",
            img: "assets/images/bigben.JPG"
        },
        {
            name: "india",
            img: "assets/images/tajmahal.JPG"
        },
        {
            name: "italy",
            img: "assets/images/pisa.JPG"
        },
        {
            name: "france",
            img: "assets/images/eiffeltower.JPG"
        },
        {
            name: "usa",
            img: "assets/images/statue.JPG"
        },
        {
            name: "australia",
            img: "assets/images/operahouse.JPG"
        },
        {
            name: "egypt",
            img: "assets/images/pyramid.JPG"
        },
        {
            name: "china",
            img: "assets/images/wall.JPG"
        },
    ];

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    /** -- RANDOMISE CARD ARRAY -- */

    cardArray.sort(() => 0.5 - Math.random())

    /** -- CREATE BOARD -- */

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'assets/images/world.JPG')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        console.log("Creating board...");
    }

    /** CHECK MATCH AND RESET CARDS IF DO NOT MATCH -- */

    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ((cardsChosen[0]) === cardsChosen[1]) {
            alert('You found a match.')
            cards[optionOneId].setAttribute('src', 'assets/images/white.JPG')
            cards[optionTwoId].setAttribute('src', 'assets/images/white.JPG')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/world.JPG')
            cards[optionTwoId].setAttribute('src', 'assets/images/world.JPG')
            alert('Sorry, try again.')
        }

        /** -- ALL CARDS MATCHED AND GAME COMPLETE -- */

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found all the matches!'
        };
        console.log(checkForMatch);
    }

    /** -- FLIP CARD -- */

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        };
        console.log(flipCard);
    }

    /** -- RESET MATCHES COUNTER AND CLEAR THE BOARD -- */

    const resetButton = document.querySelector(".reset");
    const moveContainer = document.querySelector('.move-count');
    let moveCount = 0;

    resetButton.addEventListener("click", () => {
        moveContainer.innerHTML = 0;
        moves = 0;
        grid.innerHTML = '';
        createBoard();
        console.log("Button clicked!");
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

    const playButton = document.querySelector(".play-button");
    rules = document.getElementsByClassName("rules-card");

    playButton.addEventListener('click', hideRules);

    function hideRules() {
        rules[0].style.display = "none";
    }
    console.log(hideRules);

    createBoard()

})