const board = document.getElementById("board");

/** ARRAY FOR GAME-AREA LAYOUT */
let pairCards = () => [{
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    },
    {
        name: "xx",
        img: "assets/images/xx.png"
    }, 
];

/** RANDOMIZES CARDS ON BOARD */
let randomize = () => {
    let cardInfo = pairCards();
    //randomize the array from pairCards variable: //
    cardInfo.sort(() => Math.random() - 0.5);
    return cardInfo;
};

randomize();