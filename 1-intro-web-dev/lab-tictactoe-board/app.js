document.querySelectorAll('.row>div').forEach(z => z.addEventListener("click", cellClick));
document.querySelector(".gameDirection").addEventListener('click', boardReset);

let board = document.querySelectorAll('.row>div');
let direction = document.querySelector('.gameDirection');  /* pulls the info tagged elements into javascrips  */
let win = null;
let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let winningSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

direction.innerHTML = currentPlayer + " starts, choose were to begin";

function symbol() {
    console.log(currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    direction.innerHTML = "It is " + currentPlayer + "'s turn";
    console.log(currentPlayer);
};

function cellClick(click, clickIndex) {
    console.log(boardState);
    if (click.target.innerHTML == "" && click.target.innerHTML != "X" && click.target.innerHTML != "O" && win == null) {
        click.target.innerHTML = currentPlayer;
        clickIndex = click.target.getAttribute('data-cell');
        boardState[clickIndex] = currentPlayer;
        console.log(boardState);
        symbol();
        boardCheck();
    };
};

function boardCheck() {
    console.log('start check');
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningSets[i];
        let a = boardState[winCondition[0]];
        let b = boardState[winCondition[1]];
        let c = boardState[winCondition[2]];
        if (a == '' || b == '' || c == '') {
            continue;
        }
        if (a == b && b == c) {
            win = true;
            direction.innerHTML = a + " is the Winner! Click here to reset board";
            break;
        } else if (!boardState.includes("") && win == null) {
            direction.innerHTML = "Draw, click here to reset the board";
        };
    };
    console.log(win);
    console.log('end check')
};

function boardReset() {
    win = null
    currentPlayer = "X";
    direction.innerHTML = "Game Reset. " + currentPlayer + " starts, choose were to start";
    boardState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.row>div').forEach(z => z.innerHTML = "");
};