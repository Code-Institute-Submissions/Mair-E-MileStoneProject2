document.addEventListener('DOMContentLoaded', () => {
    try {

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
        let matchCount = 0;
        let matchedCardCount = 0;

        /** -- RANDOMISE CARD ARRAY -- */

        cardArray.sort(() => 0.5 - Math.random());

        /** -- CREATE BOARD -- */

        function createBoard() {
            try {
                for (let i = 0; i < cardArray.length; i++) {
                    let card = document.createElement('img');
                    card.setAttribute('src', 'assets/images/world.jpg');
                    card.setAttribute('class', 'images');
                    card.setAttribute('alt', 'heart shaped globe');
                    card.setAttribute('data-id', i);
                    card.addEventListener('click', flipCard);
                    grid.appendChild(card);
                }
            } catch (error) {
                console.error("An error occurred in createBoard:", error);
            }
        }

        /** CHECK MATCH AND RESET CARDS IF DO NOT MATCH -- */

        function checkForMatch() {
            let cards = document.querySelectorAll('.images');
            console.log(cards);
            const optionOneId = cardsChosenId[0];
            const optionTwoId = cardsChosenId[1];

            if ((cardsChosen[0]) === cardsChosen[1]) {
                alert('You found a match.');

                cards[optionOneId].setAttribute('src', 'assets/images/tick.jpg');
                cards[optionTwoId].setAttribute('src', 'assets/images/tick.jpg');
                cardsWon.push(cardsChosen);

                //Increment the match count
                matchedCardCount++;

            } else {
                cards[optionOneId].setAttribute('src', 'assets/images/world.jpg');
                cards[optionTwoId].setAttribute('src', 'assets/images/world.jpg');
            }


            /** -- ALL CARDS MATCHED AND GAME COMPLETE -- */

            cardsChosen = [];
            cardsChosenId = [];
            // Update matched card count display
            resultDisplay.textContent = `Matches: ${matchedCardCount} / ${cardArray.length / 2}`;

            if (cardsWon.length === cardArray.length / 2) {
                resultDisplay.textContent = 'Congratulations! You found all the matches!';
            }
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
                }, 750);
            } else {
                isFlipping = false; // Allow flipping again if only one card is chosen
            }

        }

        /** -- RESET MATCHES COUNTER AND CLEAR THE BOARD -- */

        const resetButton = document.querySelector(".reset");
        const matchContainer = document.querySelector('.match-count');

        resetButton.addEventListener("click", () => {
            try {
                matchCount = 0;
                matchContainer.textContent = matchCount;

                // Reset matches count and update the display
                cardsWon = [];
                resultDisplay.textContent = cardsWon.length;


                grid.innerHTML = '';
                createBoard();

                cardArray.sort(() => 0.5 - Math.random());
            } catch (error) {
                console.error("An error occurred in resetButton click event:", error);
            }
        });

        /** -- OPEN HOW TO PLAY, pop-up instructions -- */

        const rulesButton = document.getElementById("rules");
        let rules = document.getElementsByClassName("rules-card");

        rulesButton.addEventListener('click', showRules);

        function showRules() {
            rules[0].style.display = "block";
        }

        /** -- CLOSE HOW TO PLAY, pop-up instructions -- */

        const playButton = document.querySelector(".play-button");
        rules = document.getElementsByClassName("rules-card");

        playButton.addEventListener('click', hideRules);

        function hideRules() {
            try {
                rules[0].style.display = "none";
            } catch (error) {
                console.error("An error occurred in playButton click event:", error);
            }
        }

        createBoard();

    } catch (error) {
        console.error("An error occurred:", error);
    }
});