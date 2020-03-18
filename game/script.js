const buttons = [...document.querySelectorAll('.playGround div')];
const labels = [88, 44, 33, 25, 06, 87, 88, 44, 33, 25, 06, 87];
const startBtn = document.querySelector('.start');

const gameRound = document.querySelector('.gameRound');
const gameMoves = document.querySelector('.gameMoves');
const gameMatches = document.querySelector('.gameMatched');

// document.querySelector('.gameScore');
const resultRounds = document.querySelector('.resultRounds');
const resultMoves = document.querySelector('.resultMoves');
const resultScore = document.querySelector('.resultScore');



const game = {
    round: null,
    first: null,
    second: null,
    moves: 0,
    score: 0,
}
const result = {
    rounds: null,
    moves: null,
    score: null,
}


function randomLabel(array, label) {

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i] = i;
    }

    for (let i = 0; i < array.length; i++) {

        let size = newArray.length;
        let randomIndex = Math.floor(Math.random() * size); //wylosowany index
        let number = newArray[randomIndex]; //wylosowany numer
        array[i].textContent = label[number];
        newArray[randomIndex] = newArray[size - 1]
        newArray.length = size - 1;

        // console.log("number: " + number + " label: " + labels[number]);
        // console.log(newArray);
    };
}
// randomLabel(buttons, labels);

function findLabel() {

    this.classList.remove('hidden');
    this.classList.add('reversed');
    this.removeEventListener('click', findLabel);

    if (game.first === null) {
        game.first = this.textContent;
    } else {
        game.second = this.textContent
    }

    if (game.first && game.second) {
        game.moves++;
        gameMoves.textContent = ` ${game.moves}`;
        if (game.first === game.second) {
            game.score++
            gameMatches.textContent = ` ${game.score}`;
            document.querySelectorAll('.reversed').forEach((i) => {
                i.classList.remove('reversed');
                i.classList.add('matched');
            })
            buttons.find((i) => {
                if (i.className === 'matched') {
                    i.removeEventListener('click', findLabel);
                }
            })
        } else {
            document.querySelectorAll('.reversed').forEach((i) => {
                setTimeout(function () {
                    i.classList.remove('reversed');
                    i.classList.add('hidden');
                    i.addEventListener('click', findLabel)
                }, 1000);
            });
        }
        game.first = null;
        game.second = null;
    }

    if (game.score === 6) {
        result.score += (game.score * 1000/game.moves);
        result.moves += game.moves;
        result.rounds = game.round;
        game.moves = 0
        game.score = 0;

        resultScore.textContent = ` ${parseInt(result.score)}`;
        resultMoves.textContent =` ${result.moves}`;
        resultRounds.textContent = ` ${result.rounds}`;   
        startBtn.addEventListener('click', startGame);     
    }
}

// buttons.forEach((i) => {
//     i.classList.add('hidden')
//     i.addEventListener('click', findLabel)
// })
function startGame(){
    this.removeEventListener('click', startGame)
    buttons.forEach((i) => {
        i.classList.add('hidden')
        i.addEventListener('click', findLabel)
    });
    setTimeout(function(){randomLabel(buttons, labels)}, 500);
    game.round++;
    game.score = null;
    game.moves = null;
    gameRound.textContent = game.round;
    gameMoves.textContent = game.moves;
    gameMatches.textContent = game.score; 
}
startBtn.addEventListener('click', startGame);


// buttons.forEach((i) => {
//     i.classList.add('hidden')
//     i.onclick = () => {
//         i.classList.remove('hidden');
//         if (game.first === null) {
//             game.first = i.textContent;
//             console.log(game.first);
//             console.log(i);
//         } else {
//             game.second = i.textContent
//             console.log(game.second);
//             console.log(i);
//         }

//     }
// });























// function random(x, max) {

//     const newArray = [];

//     for (let i = 0; i < max; i++) {
//         newArray[i] = i;
//     }
//     // console.log(newArray);
//     for (let i = 0; i < x; i++) {

//         let size = newArray.length;
//         let randomIndex = Math.floor(Math.random() * size); //wylosowany index
//         let number = newArray[randomIndex]; //wylosowany numer
//         newArray[randomIndex] = newArray[size - 1]
//         newArray.length = size - 1;

//         console.log("number " + number);
//         console.log(newArray);
//     };
// }