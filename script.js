let playerChoice= document.querySelectorAll(".playerChoice");
let msg= document.querySelector(".hide");
let usersScore = document.querySelector(".youScore");
let compsScore = document.querySelector(".compScore");
let reset = document.querySelector("#reset");

let userScore=0;
let compScore=0;

const choicePattern=["stone", "paper", "scissor"];

const compChoice = () => {
    idx = Math.floor(Math.random()*3);
    return choicePattern[idx];
}

const playGame = (user) => {
    comp = compChoice();
    if (comp === user) {
        draw();
    } else {
        let userWin = true;
        if (user === "stone") {
            //paper, scissor
            userWin = comp === "paper" ? false : true;
        } else if (user === "paper") {
            // stone, scissor
            userWin = comp === "stone" ? true : false;
        } else {
            //stone, paper
            userWin = comp === "stone" ? false : true;
        }
        if (userWin) {
            userWon();
        } else {
            compWon();
        }
    }
}

const userWon = () => {
    msg.classList.remove("hide");
    userScore++;
    msg.innerHTML = "You Won!"
    usersScore.innerHTML = userScore;
}

const compWon = () => {
    msg.classList.remove("hide");
    msg.innerHTML = "Computer won!"
    compScore++;
    compsScore.innerHTML = compScore;
}

const draw = () => {
    msg.innerHTML = "It was a Draw!";
}

playerChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () => {
    msg.classList.add("hide");
    usersScore.innerHTML = 0;
    compsScore.innerHTML = 0;
}

reset.addEventListener("click", resetGame);