// document.addEventListener("DOMContentLoaded", () => {

//     var choices = ["rock", "paper", "scissors"];

//     // 0th index is for rock, 1 is for paper, 2 is for scissors
//     // each nested array contains 0 for tie, 1 for win, 2 for lose
//     // so [0][0] means rock ties rock, [0][1] means rock loses to paper, [0][2] means rock beats paper
//     // [1][0] paper scissors vs rock and so on

//     let winArray = [[0, 2, 1],
//                     [1, 0, 2],
//                     [2, 1, 0]]


//     function getComputerChoice() {
//         var index = Math.floor(Math.random() * choices.length);
//         return choices[index]
//     }


//     function playRound(computer, player) {
//         computer = choices.indexOf(computer)
//         player = choices.indexOf(player)
//         let win = winArray[computer][player]

//         if (win == 0) {
//             console.log(`Draw!`)
//         } else if (win == 1) {
//             console.log(`You lose, ${choices[computer]} beats ${choices[player]}!`)
//         } else if (win == 2) {
//             console.log(`You win, ${choices[player]} beats ${choices[computer]}`)
//         }
//     }

//     function game() {
//         const Turns = 5;

//         for (let i = 0; i < Turns; i++) {
//             computerGuess = getComputerChoice();
//             playerGuess = prompt(`Enter Choice ${i+1}: `).toLowerCase();
//             playRound(computerGuess, playerGuess)

//             if (!choices.includes(playerGuess)) {
//                 console.log(`${playerGuess.toUpperCase()} is not a valid option, please pick again.`);
//                 i--;
//             }

//         }

//     }

//     game()
// })

document.addEventListener("DOMContentLoaded", () => {

    let choices = ["rock", "paper", "scissors"];

    // 0th index is for rock, 1 is for paper, 2 is for scissors
    // each nested array contains 0 for tie, 1 for win, 2 for lose
    // so [0][0] means rock ties rock, [0][1] means rock loses to paper, [0][2] means rock beats paper
    // [1][0] paper scissors vs rock and so on

    let winArray = [[0, 2, 1],
    [1, 0, 2],
    [2, 1, 0]]


    function getComputerChoice() {
        var index = Math.floor(Math.random() * choices.length);
        return choices[index]
    }


    function playRound(computer, player) {
        computer = choices.indexOf(computer)
        player = choices.indexOf(player)
        let win = winArray[computer][player]
        if (win == 0) {
            return [`Draw!`, win]
        } else if (win == 1) {
            return [`You lose, ${choices[computer]} beats ${choices[player]}!`, win]
        } else if (win == 2) {
            return [`You win, ${choices[player]} beats ${choices[computer]}!`, win]
        }
    }

    // "/\w\S*/g" is regex https://www.w3schools.com/js/js_regexp.asp
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, txt => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    let winElem = document.querySelector(".wins");
    let loseElem = document.querySelector(".loses");
    let totalElem = document.querySelector(".total");
    let buttons = document.querySelectorAll("button")
    
    let wins, lose, total;
    const TURNS = 4;
    wins = lose = total = 0;


    // buttons.forEach(item => {
    //     item.addEventListener("click", e => {

    //         let computerChoice = getComputerChoice();
    //         let playerChoice = e.target.textContent.toLowerCase();
    //         let winner = playRound(computerChoice, playerChoice);

    //         let message = document.querySelector(".message")

    //         function reset(id, message) {
    //             let retryMessage = " Choose new selection to start over.";
    //             wins = 0;
    //             lose = 0;
    //             total = 0;
    //             document.querySelector(id).textContent = message + retryMessage;
    //         }


    //         (winner[1] == 1) ? lose++ : (winner[1] == 2) ? wins++ : {}

    //         if (total == 0 && document.querySelector(".score-flex button")) {
    //             document.querySelector(".score-flex button").remove()
    //         }

    //         if (total == 4) {
    //             (wins > lose) ? reset(".message", "Player Wins!") : (wins < lose) ? reset(".message", "Computer Wins!") : reset(".message", "DRAW!");

    //         } else {
    //             total++;
    //             message.textContent = winner[0];
    //             winElem.innerHTML = `Wins: <span style="color: green"> ${wins} </span>`;
    //             loseElem.innerHTML = `Loses: <span style="color: maroon"> ${lose} </span>`;
    //             totalElem.innerHTML = `Total: <span style="color: black;"> ${total} </span>`;
    //         }
    //     });
    // });

    let img = document.querySelectorAll("img")
    
    img.forEach(item => {
        item.addEventListener("click", (e) => {
            
            let computerChoice = getComputerChoice();
            let playerChoice = e.target.id.toLowerCase();
            let winner = playRound(computerChoice, playerChoice);

            let message = document.querySelector(".message")

            function reset(id, message) {
                let retryMessage = " Choose new selection to start over.";
                wins = lose = total = 0;
                document.querySelector(id).textContent = message + retryMessage;
            }

            function updateScoreboard() {
                winElem.innerHTML = `Wins: <span style="color: green"> ${wins} </span>`;
                loseElem.innerHTML = `Loses: <span style="color: maroon"> ${lose} </span>`;
                totalElem.innerHTML = `Total: <span style="color: black;"> ${total} </span>`;
            }

            (winner[1] == 1) ? lose++ : (winner[1] == 2) ? wins++ : {}

            if (total == 4) {
                total++;
                updateScoreboard();
                (wins > lose) ? reset(".message", "Player Wins!") : (wins < lose) ? reset(".message", "Computer Wins!") : reset(".message", "DRAW!");
            } else {
                total++;
                message.textContent = winner[0];
                updateScoreboard();
            }

        })
    })
});