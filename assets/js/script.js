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
            card.setAttribute('src', 'assets/images/world.jpg')
            card.setAttribute('class', 'images')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        console.log("Creating board...");
    }

    /** CHECK MATCH AND RESET CARDS IF DO NOT MATCH -- */

    function checkForMatch() {
        let cards = document.querySelectorAll('.images')
        console.log(cards);
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ((cardsChosen[0]) === cardsChosen[1]) {
            alert('You found a match.')
            cards[optionOneId].setAttribute('src', 'assets/images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'assets/images/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/world.jpg')
            cards[optionTwoId].setAttribute('src', 'assets/images/world.jpg')
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