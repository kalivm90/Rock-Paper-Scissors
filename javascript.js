document.addEventListener("DOMContentLoaded", () => {

    var choices = ["rock", "paper", "scissors"];

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
            console.log(`Draw!`)
        } else if (win == 1) {
            console.log(`You lose, ${choices[computer]} beats ${choices[player]}!`)
        } else if (win == 2) {
            console.log(`You win, ${choices[player]} beats ${choices[computer]}`)
        }
    }

    function game() {
        const Turns = 5;

        for (let i = 0; i < Turns; i++) {
            computerGuess = getComputerChoice();
            playerGuess = prompt(`Enter Choice ${i+1}: `).toLowerCase();
            playRound(computerGuess, playerGuess)

            if (!choices.includes(playerGuess)) {
                console.log(`${playerGuess.toUpperCase()} is not a valid option, please pick again.`);
                i--;
            }
        
        }

    }

    game()



})