let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winnerPattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations! ${Winner} wins!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    newGameBtn.addEventListener("click", () => {
        resetGame();
        newGameBtn.removeEventListener("click", resetGame);

        
    });
};


const checkWinner = () => {
    for (let patten of winnerPattern) {
        let possitionVal1 = boxes[patten[0]].innerText;
        let possitionVal2 = boxes[patten[1]].innerText;
        let possitionVal3 = boxes[patten[2]].innerText;

        if (possitionVal1 != "" && possitionVal2 != "" && possitionVal3 != "") {
            if (possitionVal1 === possitionVal2 && possitionVal2 === possitionVal3) {
                console.log("Winner", possitionVal1);
                showWinner(possitionVal1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);