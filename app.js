let hands = document.querySelector('.hands');     // all the hands are in this container---------------
let contest = document.querySelector('.contest'); // all the contest components are in this container-------------
let newGame = document.querySelector('.newGame'); // this is button to start the new Game------------------------
let userImg = document.getElementById('userPickImg')  //this shows the img what you [pick in the options page]
let housePickImg = document.getElementById('housePickImg')  // this shows the imgs what house picks this is hoing to be random----

let decisionContainer = document.querySelector('#decision'); //h1  that renders the winner
let scoreContainer = document.querySelector('#score')   // the headint tag that prints the score

function pickYourChoise(hand) {
    userImg.parentElement.classList.remove('rock', 'paper', 'scissors')


    console.log(hand)
    //show the next page with the hand you picked

    hands.style.display = "none";
    contest.style.display = "flex";

    //to start again----------
    newGame.addEventListener('click', () => {
        hands.style.display = "flex";
        contest.style.display = "none";

    })


    //set The user pick---
    userImg.src = `/images/icon-${hand}.svg`;
    userImg.parentElement.classList.add(`${hand}`);
    //set the computer hand----
    const cpHand = pickComputerHand();

    //deciding the winner-----------------------------------------------

    const [decision, score] = refree(hand, cpHand)

    decisionContainer.innerText = decision;
    scoreContainer.innerText = score

}


const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissors'];
    let RN = Math.floor(Math.random() * 3)
    housePickImg.parentElement.classList.remove('rock', 'paper', 'scissors')

    let cpHand = hands[RN];


    housePickImg.src = `/images/icon-${cpHand}.svg`;
    housePickImg.parentElement.classList.add(`${cpHand}`)

    return cpHand;

}

//globals---------
let decision = "";
let score = 0;

const refree = (user, computer) => {

    if (user == "paper" && computer == "scissors") {
        decision = 'YOU LOOSE'
    }
    else if (user == 'paper' && computer == "rock") {
        decision = 'YOU WON';
        score = score + 1;
    }
    else if (user == "paper" && computer == "paper") {
        decision = "ITS A TIE!"
    }
    else if (user == 'rock' && computer == "scissors") {
        decision = 'YOU WON';
        score = score + 1;
    }
    else if (user == 'rock' && computer == "rock") {
        decision = 'ITS A TIE!';
    }
    else if (user == 'rock' && computer == "paper") {
        decision = 'YOU LOOSE';
        score = score + 1;
    }
    else if (user == 'scissors' && computer == "scissors") {
        decision = 'ITS A TIE';
    }
    else if (user == 'scissors' && computer == "rock") {
        decision = 'YOU LOOSE';
    }
    else if (user == 'scissors' && computer == "paper") {
        decision = 'YOU WON';
        score = score + 1;
    }

    return [decision, score];
}

const setDecision = decision => {
    console.log(decision)

}