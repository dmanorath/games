/*
	Description: TTT game
	Author: Manorath Dhakal
	Website: www.mrdhakal.com	
*/
var game = (function () {
    var player, play, board, displayBoard, gameContainer, loadGame, boardTable, winner, validateMove, playAgain;
    // player's display values
    player = {
        human: "X",
        computer: "O"
    };
    // empty board
    board =(function () {
        "use strict";
        var board;
        board = [];
        board[0] = ' ';
        board[1] = ' ';
        board[2] = ' ';
        board[3] = ' ';
        board[4] = ' ';
        board[5] = ' ';
        board[6] = ' ';
        board[7] = ' ';
        board[8] = ' ';
    });
    // display board
    boardTable = (function () {
        "use strict";
        board();
        var b = '<table> <tr>' +
            '<td id="board0">' + board[0] + '</td>' +
            '<td id="board1">' + board[1] + '</td>' +
            '<td id="board2">' + board[2] + '</td>' +
            '</tr> <tr>' +
            '<td id="board3">' + board[3] + '</td>' +
            '<td id="board4">' + board[4] + '</td>' +
            '<td id="board5">' + board[5] + '</td>' +
            '</tr> <tr>' +
            '<td id="board6">' + board[6] + '</td>' +
            '<td id="board7">' + board[7] + '</td>' +
            '<td id="board8">' + board[8] + '</td>' +
            '</tr> </table>';
        return b;
    });
    
    // check illegal moves
    validateMove = (function (x) {
        var temp;
         if(board[x] === 'X' || board[x] === 'O'){
            temp = 'false';
         }
        else{
            temp = 'true';
        }
         return temp;
    });
    
    //display board
    displayBoard = (function () {
        var b;
        board();

        gameContainer.setAttribute("id", "board");

        b = document.getElementById("board");
        b.innerHTML = boardTable();
        
        //detect which element is clicked
        function clickedEl(event) {
          //while (board != null) {
            var index;
            if (event.target.id === 'board0') {
                index = 0;
            }
            else if (event.target.id === 'board1') {
                index = 1;
            }
            else if (event.target.id === 'board2') {
                index = 2;
            }
            else if (event.target.id === 'board3') {
                index = 3;
            }
            else if (event.target.id === 'board4') {
                index = 4;
            }
            else if (event.target.id === 'board5') {
                index = 5;
            }
            else if (event.target.id === 'board6') {
                index = 6;
            }
            else if (event.target.id === 'board7') {
                index = 7;
            }
            else if (event.target.id === 'board8') {
                index = 8;
            }
            
            while(validateMove(index) === 'true'){
                board[index] = player.human;
                var whoWin = winner();
            }
            
            //computer
            var x = Math.floor((Math.random() * 9));               
            //if board's x index is already exist
            while(validateMove(x) === 'true'){
                board[x] = player.computer;
            }
            
            // update board after each moves
            b.innerHTML = boardTable();
            if(whoWin === 1) {
                   // document.getElementById("board").innerHTML = "You win!";
                alert("You win!");
                board = [];
                playAgain();
            }
            else if(whoWin === 2) {
                alert("Computer wins!");
                board = [];
            }
        }

        b.addEventListener('click', clickedEl, false);
    });
     
    //check for winner 
    winner = (function () {
        var win;
        if(board[0] === 'X' && board[1] === 'X' && board[2] === 'X')
            win = 1;
        else if(board[3] === 'X' && board[4] === 'X' && board[5] === 'X')
            win = 1;
        else if(board[6] === 'X' && board[7] === 'X' && board[8] === 'X')
            win = 1;
        else if(board[0] === 'X' && board[3] === 'X' && board[6] === 'X')
            win = 1;
        else if(board[1] === 'X' && board[4] === 'X' && board[7] === 'X')
            win = 1;
        else if(board[2] === 'X' && board[5] === 'X' && board[8] === 'X')
            win = 1;
        else if(board[0] === 'X' && board[4] === 'X' && board[8] === 'X')
            win = 1;
        else if(board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
            win = 1;
        
        if(board[0] === 'O' && board[1] === 'O' && board[2] === 'O')
            win = 2;
        else if(board[3] === 'O' && board[4] === 'O' && board[5] === 'O')
            win = 2;
        else if(board[6] === 'O' && board[7] === 'O' && board[8] === 'O')
            win = 2;
        else if(board[0] === 'O' && board[3] === 'O' && board[6] === 'O')
            win = 2;
        else if(board[1] === 'O' && board[4] === 'O' && board[7] === 'O')
            win = 2;
        else if(board[2] === 'O' && board[5] === 'O' && board[8] === 'O')
            win = 2;
        else if(board[0] === 'O' && board[4] === 'O' && board[8] === 'O')
            win = 2;
        else if(board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
            win = 2;
        return win;
    });

    //play again
    playAgain = (function () {
        gameContainer.innerHTML = '<button id="playGameMsg">Play Again</button>';
        board.clear();
     //   displayBoard.clear(); 
     //   gameContainer.clear();
        loadGame.clear();
        boardTable.clear();
    
        gameContainer.onclick = function () {
            play();
        };    
    });
    
    //play game
    play = (function () {
        gameContainer.setAttribute('id', 'loadGame');
        loadGame = document.getElementById('loadGame');
        loadGame.innerHTML = 'You are playing game against computer..<br/>';

        displayBoard();
    });
    
    //displays in main area
    gameContainer = document.getElementById('game-container');
    gameContainer.style.background = 'green';
    gameContainer.style.width = '500px';
    gameContainer.style.color = '#fff';
    gameContainer.innerHTML = '<button id="playGameMsg">Play Game</button>';
    
    gameContainer.onclick = function () {
        play();
    };
});

game();