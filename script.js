var restart, squares, curr = "X", currentPlayerRef, gameOver = false;

window.onload = () => {
    setGame();
}

const setGame = () => {
    gameOver = false;
    restart = document.querySelector("#b");
    squares = document.querySelectorAll("td");
    currentPlayerRef = document.getElementById("current");
    winnerRef = document.getElementsByClassName("winner");
    setCurrentPlayerText();
    restart.addEventListener('click', clearBoard);
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', changeMarker);
    }
}

const clearBoard = () => {
    console.log("game reset")
    gameOver = false;
    curr = "X";
    setCurrentPlayerText();
    winnerRef[0].className = "winner";
    winnerRef[0].textContent = ""
    for (let i = 0; i < squares?.length; i++) {
        squares[i].textContent = '';
    }
}

function changeMarker() {
    if (gameOver) return;
    // console.log("this.textContent", this.textContent)
    if (this.textContent === '') {
        this.textContent = curr;
    }
    if (curr === "X") curr = "O";
    else curr = "X";
    setCurrentPlayerText();
    checkWin();
}

const setCurrentPlayerText = () => {
    currentPlayerRef.textContent = "Current Player: " + curr;
}

const checkWin = (index) => {
    // horizontally
    for (let i = 0; i < 3; i++) {
        if (squares[i * 3].textContent === squares[(i * 3) + 1].textContent && squares[i * 3].textContent === squares[(i * 3) + 2].textContent && squares[i * 3].textContent !== '') {
            // console.log("horizontal win");
            winnerRef[0].classList.add("visible");
            winnerRef[0].textContent = curr==="X"?"O":"X" + " Wins!"
            gameOver = true;
            return;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (squares[i].textContent === squares[3 + i].textContent && squares[i].textContent === squares[6 + i].textContent && squares[i].textContent !== '') {
            // console.log("vertical win");
            winnerRef[0].classList.add("visible");
            winnerRef[0].textContent = curr==="X"?"O":"X" + " Wins!"
            gameOver = true;
            return;
        }
    }
    // diagonal l-to-r
    if (squares[4].textContent === squares[0].textContent && squares[4].textContent === squares[8].textContent && squares[4].textContent !== '') {
        // console.log("diagonal l-to-r win");
        winnerRef[0].classList.add("visible");
        winnerRef[0].textContent = curr==="X"?"O":"X" + " Wins!"
        gameOver = true;
        return;
    }

    // diagonal r-to-l
    if (squares[4].textContent === squares[2].textContent && squares[4].textContent === squares[6].textContent && squares[4].textContent !== '') {
        // console.log("diagonal r-to-l win");
        winnerRef[0].classList.add("visible");
        winnerRef[0].textContent = curr==="X"?"O":"X" + " Wins!"
        gameOver = true;
        return;
    }
}
