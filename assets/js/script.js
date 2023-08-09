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