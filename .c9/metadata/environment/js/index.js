{"filter":false,"title":"index.js","tooltip":"/js/index.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":228,"column":0},"action":"remove","lines":["<!DOCTYPE html>","<html lang=\"en\">","","<head>","\t<!-- Meta Data -->","\t<meta charset=\"UTF-8\">","\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">","\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">","\t<meta name=\"description\" content=\"Simon Memory Game\">","\t<meta name=\"keywords\" content=\"Simon Game, Memory, Memory Game, Brain Training, Memory, Game, Funny, Challenge\">","\t<meta name=\"author\" content=\"Stefan Sarbu\">","","\t<!--  Game Title -->","\t<title> the Simon Game</title>","","\t<!-- Favicon -->","\t<link class=\"favicon\" rel=\"icon\" href=\"images/favicon.ico\" type=\"image/ico\">","","\t<!-- CSS Link -->","\t<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">","\t<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">","\t<link href=\"https://fonts.googleapis.com/css?family=Architects+Daughter|Indie+Flower&display=swap\" rel=\"stylesheet\">","\t<link rel=\"stylesheet\" href=\"css/style.css\" type=\"text/css\" />","","</head>","","<body>","\t<!-- Main container -->","\t<div id=\"wrapper\" class=\"clearfix\">","\t\t<!-- Main Heading -->","\t\t<div class=\"container-fluid heading-container\">","\t\t\t<div class=\"row justify-content-center\">","\t\t\t\t<h1 class=\"m-0 py-3\">Simon Game</h1>","\t\t\t</div>","\t\t</div>","\t\t<!-- How to Play Button -->","\t\t<div class=\"button-container\">","\t\t\t<div class=\"row justify-content-left\">","\t\t\t\t<button id=\"how-to-play-button\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#howToPlayModal\"><i class=\"fa fa-gamepad d-block\"></i> How To Play</button>","\t\t\t</div>","\t\t</div>","      <!-- Settings Button--> ","       <div class=\"button-container\">","\t\t\t<div class=\"row justify-content-right\">","\t\t\t\t<button id=\"settings-button\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#settingsModal\"><i class=\"fa fa-cogs d-block\"></i> Settings </button>","\t\t\t</div>","\t\t</div> ","        ","\t\t<!-- Game Board -->","\t\t<div class=\"container-fluid game-board-container\">","\t\t\t<div class=\"row no-gutters\">","\t\t\t\t<div class=\"game-board col\">","\t\t\t\t\t<!-- Side Colors -->","\t\t\t\t\t<div class=\"sides\">","\t\t\t\t\t\t<div id=\"1\" class=\"side green-side disabled\"></div>","\t\t\t\t\t\t<div id=\"2\" class=\"side red-side disabled\"></div>","\t\t\t\t\t\t<div id=\"3\" class=\"side yellow-side disabled\"></div>","\t\t\t\t\t\t<div id=\"4\" class=\"side blue-side disabled\"></div>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- Control -->","\t\t\t\t\t<div class=\"control\">","\t\t\t\t\t\t","\t\t\t\t\t\t<div id=\"turn-screen\" class=\"num-display\">||</div>","\t\t\t\t\t\t<div id=\"start\" class=\"start-btn\">PLAY</div>","\t\t\t\t\t\t<!--<div class=\"container strict-container\">","\t\t\t\t\t\t\t<div class=\"control-label strict-label\">","\t\t\t\t\t\t\t\t<p class=\"m-0 p-0\">STRICT</p>","\t\t\t\t\t\t\t\t<div class=\"strict-switch\">","\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"strict\" class=\"toggle\" checked/>","\t\t\t\t\t\t\t\t</div>","\t\t\t\t\t\t\t</div>-->","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>","\t\t</div>","","\t\t<!-- Footer -->","\t\t<div class=\"container-fluid footer-container\">","\t\t\t<div class=\"row justify-content-center\">","\t\t\t\t<p class=\"footer m-0 py-3\">Game Project by Stefan Sarbu</p>","\t\t\t</div>","\t\t</div>","","\t\t<!-- How To Play Modal Section -->","\t\t<div class=\"modal fade\" id=\"howToPlayModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"scrollTitle\" aria-hidden=\"true\">","\t\t\t<div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">","\t\t\t\t<div class=\"modal-content\">","\t\t\t\t\t<!-- How to Play Modal Header -->","\t\t\t\t\t<div class=\"modal-header px-0 pl-4\">","\t\t\t\t\t\t<h5 class=\"modal-title\" id=\"scrollTitle\">How To Play</h5>","\t\t\t\t\t\t<button type=\"button\" class=\"close pl-0 mr-2\" data-dismiss=\"modal\" aria-label=\"Close\">","          \t\t\t\t\t<span aria-hidden=\"true\">&times;</span>","        \t\t\t\t</button>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- How To Play Modal Body -->","\t\t\t\t\t<div class=\"modal-body howToPlay-modal-body\">","\t\t\t\t\t\t<div class=\"buttons-box m-2 px-2 py-2\">","\t\t\t\t\t\t\t<a id=\"modal-scroll\" href=\"#howToPlay-heading-modal\"><i class=\"fa fa-sort-down\"></i></a>","\t\t\t\t\t\t\t<h3 class=\"text-center\"><b>Objective:</b></h3>","\t\t\t\t\t\t\t 'PLAY' button will start the game. First, the game will begin with a flash of 1 (one) of the 4 (four) colored sides from the board and will increase by 1 (one) on the number display with each pattern the player followed correctly. The goal of the Simon Game is to repeat the pattern that the computer  has generated until the player will be able to reach the end of the game by scoring  <strong>'20'</strong>, the maximum, in order to be the WINNER of the Simon Game. So, if you think that you have a great skill and memory, play, stay focused and try not to make mistakes! Accept challenge ?!?<br>","<br>","\t\t\t\t\t\t\t<h3 class=\"text-center\"><b>To Win:</b></h3>","\t\t\t\t\t\t\t<ul class=\"p-0 pl-3\">","\t\t\t\t\t\t\t\t<li>Reaching to the score of <strong>'20'</strong> will make the player become the WINNER of the Simon Game.</li>","                                <li>However, if 'STRICT' mode is not activated and the player clicks to activate it, the number counter will start back at '0'.</li>","                                <li>The player can opt to switch off 'STRICT' mode at any time, not having to begin a new game.</li>","                            </ul><br>","\t\t\t\t\t\t\t<h3 id=\"howToPlay-heading-modal\" class=\"text-center\"><b>Button:</b></h3>","\t\t\t\t\t\t\t<p><strong class=\"h5 font-weight-bold\">PLAY - </strong>To start the Simon Game, just simply press 'PLAY'. If the player decides at some time to begin all over again will have to just click 'PLAY'.</p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- How To Play Modal Footer -->","\t\t\t\t\t<div class=\"modal-footer\">","\t\t\t\t\t\t<button id=\"close-button\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">EXIT</button>","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>","\t\t</div>","","<!-- Settings Modal Section -->","\t\t<div class=\"modal fade\" id=\"settingsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"scrollTitle\" aria-hidden=\"true\">","\t\t\t<div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">","\t\t\t\t<div class=\"modal-content\">","\t\t\t\t\t<!-- Settings Modal Header -->","\t\t\t\t\t<div class=\"modal-header px-0 pl-4\">","\t\t\t\t\t\t<h5 class=\"modal-title\" id=\"scrollTitle\">Settings</h5>","\t\t\t\t\t\t<button type=\"button\" class=\"close pl-0 mr-2\" data-dismiss=\"modal\" aria-label=\"Close\">","          \t\t\t\t\t<span aria-hidden=\"true\">&times;</span>","        \t\t\t\t</button>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- Settings Modal Body -->","\t\t\t\t\t<div class=\"modal-body settings-modal-body\">","\t\t\t\t\t\t<div class=\"buttons-box m-2 px-2 py-2\">","\t\t\t\t\t\t\t<a id=\"modal-scroll\" href=\"#settings-heading-modal\"><i class=\"fa fa-sort-down\"></i></a>","\t\t\t\t\t\t\t<h3 class=\"text-center\"><b>Objective:</b></h3>","\t\t\t\t\t\t\t '<br>","<br>","\t\t\t\t\t\t\t<h3 class=\"text-center\"><b>To Win:</b>","                            <br>","\t\t\t\t\t\t\t<h3 id=\"settings-heading-modal\" class=\"text-center\"><b>Button:</b></h3>","\t\t\t\t\t\t\t<p><strong class=\"h5 font-weight-bold\">PLAY - </strong></p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- Settings Modal Footer -->","\t\t\t\t\t<div class=\"modal-footer\">","\t\t\t\t\t\t<button id=\"close-button\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">EXIT</button>","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>","\t\t</div>","","\t\t<!-- Lose Modal Section -->","\t\t<div class=\"modal fade\" id=\"loseModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"scrollTitle\" aria-hidden=\"true\">","\t\t\t<div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">","\t\t\t\t<div class=\"modal-content\">","\t\t\t\t\t<!-- Lose Modal Header -->","\t\t\t\t\t<div class=\"modal-header px-0 pl-4\">","\t\t\t\t\t\t<h5 class=\"modal-title\" id=\"scrollTitle-2\">Game Over</h5>","\t\t\t\t\t\t<button type=\"button\" class=\"close pl-0 mr-2\" data-dismiss=\"modal\" aria-label=\"Close\">","          \t\t\t\t\t<span aria-hidden=\"true\">&times;</span>","        \t\t\t\t</button>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- Lose Modal Body -->","\t\t\t\t\t<div class=\"modal-body\">","\t\t\t\t\t\t<div class=\"buttons-box m-2 px-2 py-2 text-center\">","\t\t\t\t\t\t\t<h4>Your Score is:</h4><br>","\t\t\t\t\t\t\t<h2 id=\"lose-modal-display\" class=\"text-center\">--</h2>","\t\t\t\t\t\t\t<p class=\"m-0 mt-5 text-center\">Please Click 'PLAY' To Start Again</p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- Lose Modal Footer -->","\t\t\t\t\t<div class=\"modal-footer justify-content-between\">","\t\t\t\t\t\t<button id=\"start-modal-button\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">PLAY</button>","\t\t\t\t\t\t<button id=\"close-button-2\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>","\t\t</div>","","\t\t<!-- Winner Modal Section -->","\t\t<div class=\"modal fade\" id=\"winModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"scrollTitle\" aria-hidden=\"true\">","\t\t\t<div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">","\t\t\t\t<div class=\"modal-content win-modal-content\">","\t\t\t\t\t<!-- Winner Modal Header -->","\t\t\t\t\t<div class=\"modal-header px-0 pl-4\">","\t\t\t\t\t\t<h5 class=\"modal-title text-uppercase\" id=\"scrollTitle-3\">!WINNER!</h5>","\t\t\t\t\t\t<button type=\"button\" class=\"close pl-0 mr-2\" data-dismiss=\"modal\" aria-label=\"Close\">","          \t\t\t\t\t<span aria-hidden=\"true\">&times;</span>","        \t\t\t\t</button>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- Winner Modal Body -->","\t\t\t\t\t<div class=\"modal-body\">","\t\t\t\t\t\t<div class=\"buttons-box m-2 px-2 py-2 text-center\">","\t\t\t\t\t\t\t<h4 class=\"text-uppercase\">You Won with the score of:</h4><br>","\t\t\t\t\t\t\t<h2 id=\"win-modal-display\" class=\"text-center\">--</h2>","\t\t\t\t\t\t\t<h5 class=\"m-0 mt-5 text-center font-weight-bold text-uppercase\">Congrats!</h5>","\t\t\t\t\t\t\t<p class=\"m-0 mt-3 text-center\">Please Click 'PLAY' To Start Again</p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<!-- Winner Modal Footer -->","\t\t\t\t\t<div class=\"modal-footer justify-content-between\">","\t\t\t\t\t\t<button id=\"start-modal-win-button\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">PLAY</button>","\t\t\t\t\t\t<button id=\"close-button-3\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>","\t\t</div>","","\t\t<!-- Audio Samples -->","\t\t<audio id=\"sound-green\" src=\"sounds/1_Cartoon_Boing.mp3\"></audio>","\t\t<audio id=\"sound-red\" src=\"sounds/2_Cartoon_Cowbell.mp3\"></audio>","\t\t<audio id=\"sound-yellow\" src=\"sounds/3_Electronic_Chime.mp3\"></audio>","\t\t<audio id=\"sound-blue\" src=\"sounds/4_ding-sound-effect.mp3\"></audio>","\t\t<audio id=\"sound-lost\" src=\"sounds/lost-throat-clearing.mp3\"></audio>","\t\t<audio id=\"sound-win\" src=\"sounds/win-mega-raid.mp3\"></audio>","","\t\t<!-- Scripts are loaded here -->","\t\t<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>","\t\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>","\t\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>","\t\t<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>","\t\t<script src=\"js/simon.js\"></script>","","","</body>","","</html>",""],"id":5},{"start":{"row":0,"column":0},"end":{"row":321,"column":0},"action":"insert","lines":["// Variables","","let order = [];","let playerOrder = [];","let strictMode = true;","let playInterval, playTimeout, computerCount, playerCount, turn;","","// Making use of jQuery variables like buttons, sides, modals, number and message(s) are targetted.","","const countText = document.getElementById(\"turn-screen\");","const side = document.getElementsByClassName('side');","const greenSide = document.getElementById(\"1\");","const redSide = document.getElementById(\"2\");","const yellowSide = document.getElementById(\"3\");","const blueSide = document.getElementById(\"4\");","const playButton = document.getElementById(\"start\");","const strictSwitch = document.getElementById(\"strict\");","const modalScroll = document.getElementById('modal-scroll');","const startModal = document.getElementById(\"start-modal-button\");","const startWinModal = document.getElementById(\"start-modal-win-button\");","const loseModalDisplay = document.getElementById(\"lose-modal-display\");","const winModalDisplay = document.getElementById(\"win-modal-display\");","","/* ","The jQuery ready method can have inside the code and will start to run as soon as the DOM (Document Object Modal) is ready to execute the JavaScript code.","*/","","$(document).ready(function() {","","    // Upon click this jQuery function will allow modal scroll icon to scroll down.","","    $(modalScroll).on('click', function(e) {","        var linkHref = $(this).attr('href');","        e.preventDefault();","        $('.modal-body').animate({","            scrollTop: $(linkHref).offset().top","        }, 1000);","    });","","    /* ","    3 Click functions that have assigned the startButtonClick jQuery function in order to allow the player to play a new game..","    */","","    $(playButton).click(function() {","        startGame();","    });","","    $(startModal).on(\"click\", function() {","        startGame();","    });","","    $(startWinModal).on(\"click\", function() {","        startGame();","    });","","    /*","   A function to verify if the STRICT slider is On (true) or Off (false) when it's clicked. If On (true) then it will return to its default setting (ready to start a new game).","    */","","    $(strictSwitch).on(\"click\", function() {","        if (strictSwitch.checked == true) {","            strictMode = true;","            turn = 1;","            $(\".side\").addClass('disabled');","            clearInterval(playInterval);","            if ($(countText).text() == \"|\") {","                $(countText).text(\"|\");","            }","            else {","                $(countText).text(\"0\");","            }","            setTimeout(function() {","                eraseLightOnAllSides();","            }, 600);","        }","        else {","            strictMode = false;","        }","    });","","    /* ","    Clicking on each of the sides, it will push a number into the player's instance array based on which has been clicked.  After that, it will run a light and sound function, based on the color.    */","","    $(side).click(function() {","        clearTimeout(playTimeout);","        eraseLightOnAllSides();","        let sideId = $(this).attr('id');","        if (sideId == 1) {","            SoundPlusGreenLight();","            playerOrder.push(parseInt(sideId));","        }","        if (sideId == 2) {","            SoundPlusRedLight();","            playerOrder.push(parseInt(sideId));","        }","        if (sideId == 3) {","            SoundPlusYellowLight();","            playerOrder.push(parseInt(sideId));","        }","        if (sideId == 4) {","            SoundPlusBlueLight();","            playerOrder.push(parseInt(sideId));","        }","        verify();","    });","});","","/*","This function has the role to allow the player to start a new game,  setting everything back to default and generating the game's first instance. */","","function startGame() {","    clearInterval(playInterval);","    eraseLightOnAllSides();","    $(countText).text('0');","    order = [];","    turn = 0;","    $(\".side\").addClass('disabled');","    randomNumber();","    startPlay();","}","","/*","Here, it takes place a random number from 1 (one) to 4 (four) and after that the number will be pushed into the instance array.","*/","","function randomNumber() {","    randomNum = Math.ceil(Math.random() * 4);","    order.push(randomNum);","    console.log(order);","}","","/* ","It's the computer's turn to generate an instance. It will add 1 to turn, and that way it will increase. After this, it will set the player's and computer's count back to '0' and set the player's instance back to an empty string.","It runs the player's interval which will keep a switch statement that will verify each of the number inside the instance array, generating the sound and light that corresponds to the number found and doing a break after each one, that way will be able o avoid the light and sound from the previous side that was selected. It will do this until it will reach the number value of the computer's count.","At the point the array instance lentgh matches the computer's count it will stop the play interval and allow the player to click. Then, the computer's count increases with 1.*/","","function startPlay() {","    turn++;","    playerCount = 0;","    computerCount = 0;","    playerOrder = [];","    playInterval = setInterval(function() {","        switch (order[computerCount]) {","            case 1:","                SoundPlusGreenLight();","                break;","            case 2:","                SoundPlusRedLight();","                break;","            case 3:","                SoundPlusYellowLight();","                break;","            case 4:","                SoundPlusBlueLight();","                break;","            default:","                break;","        }","        if (order.length === computerCount) {","            clearInterval(playInterval);","            $(\".side\").removeClass('disabled');","        }","        computerCount++;","    }, 800);","}","","/* ","Sounds and lights are being generated here.","*/","","function SoundPlusGreenLight() {","    $(greenSide).addClass('green-light')","    playerTimeout();","    soundListen('green');","}","","function SoundPlusRedLight() {","    $(redSide).addClass('red-light')","    playerTimeout();","    soundListen('red');","}","","function SoundPlusYellowLight() {","    $(yellowSide).addClass('yellow-light')","    playerTimeout();","    soundListen('yellow');","}","","function SoundPlusBlueLight() {","    $(blueSide).addClass('blue-light')","    playerTimeout();","    soundListen('blue');","}","","/* ","Lights of all of the sides are being erased, with a timeout function that will erase all lights after a time interval.","*/","","function playerTimeout() {","    playTimeout = setTimeout(function() {","        eraseLightOnAllSides();","    }, 400);","}","","/*","Here all the sounds are being generated. Taking the argument of 'soundDo' and every time the function is called, it will take the argument of whatever sound needs to be implemented after 'sound-'.","*/","","function soundListen(soundDo) {","    let sound = $(`#sound-${soundDo}`)[0];","    sound.currentTime = 0;","    sound.play();","}","","/* ","Here, the lights are being removed, and all of the colors go back to their original state from being flashed.  ","*/","","function eraseLightOnAllSides() {","    $(greenSide).removeClass(\"green-light\");","    $(redSide).removeClass(\"red-light\");","    $(yellowSide).removeClass(\"yellow-light\");","    $(blueSide).removeClass(\"blue-light\");","}","","// All of the colours will flash at the same time.","","function addLightOnAllSides() {","    $(greenSide).addClass(\"green-light\");","    $(redSide).addClass(\"red-light\");","    $(yellowSide).addClass(\"yellow-light\");","    $(blueSide).addClass(\"blue-light\");","}","","/* ","When the player loses, this function is to order a game over modal to appear with the final score.","*/","","function displayModal() {","    $('#loseModal').modal('show');","    $(loseModalDisplay).text(turn);","}","","/*","The game gets verified but this function, and will increase the player's count. With 2 (two) assigned variables will verify if the player's  and computer's instance match or not.","The 'If' statement comes into place to verify each of the possibilities during the game and react accordingly.","*/","","function verify() {","    playerCount++;","    let playerPcOrdYes = playerOrder[playerCount - 1] === order[playerCount - 1];","    let playerPcOrdNo = playerOrder[playerCount - 1] !== order[playerCount - 1];","    /* ","    In this case, 'If' statement will verify that if the player arrived to 20 (twenty) on the play count, STRICT mode is On (true) and if the computer's instance array matches with the player's instance array. If 'True' the play interval will cease, the sides are deactivated and the winning function will run.","    */","    if (playerCount === 20 && strictMode && playerPcOrdYes) {","        clearInterval(playInterval);","        $(\".side\").addClass('disabled');","        winGame();","    }","    /* ","    The computer's instance array is verified if it matches the player's instance array. If yes, the a new random number gets pushed into the computer's array, sides are displayed, count text gets updated to the newest score and the gameplay will run. */","    ","    else if (playerPcOrdYes) {","        if (playerOrder.length === turn) {","            randomNumber();","            $(\".side\").addClass('disabled');","            $(countText).text(playerCount);","            setTimeout(startPlay, 500);","        }","    }","    /* ","    The computer's instance array is verified if it matches the player's instance array, if not and STRICT mode is not active, the sides will be disabled, switch the turn back to the previous turn and light all sides, and the sound corresponding to lose will be heard together with the message \"Try Again\" on the count text, all the colors on the sides will be erased, the current score will be displayed and restart the previous instance again.","    */","    else if (playerPcOrdNo && !strictMode) {","        $(\".side\").addClass('disabled');","        turn--;","        soundListen('lost');","        $(countText).text('Try');","        addLightOnAllSides();","        setTimeout(function() {","            eraseLightOnAllSides();","            $(countText).text('Again');","            setTimeout(function() {","                $(countText).text(turn);","                setTimeout(startPlay, 500);","            }, 600);","        }, 600);","    }","    /* ","    STRICT mode is true, the computer's instance array doesn't match with the player's instance array, 'Else' statement will display that the player lost. Sides are disabled, losing sound heard, 'Lose' message in the count text displayed and all sides flashing at once. Flash dissapears, then the modal will appear showing the player's score.","    */","    else {","        $(\".side\").addClass('disabled');","        soundListen('lost');","        $(countText).text('Lose');","        addLightOnAllSides();","        setTimeout(function() {","            eraseLightOnAllSides();","            setTimeout(function() {","                $(countText).text(turn);","                displayModal();","            }, 600);","        }, 400);","    }","}","","/* ","When the player becomes the WINNER  of the Simon Game, this function will show WIN in the count text, all sides will flash, together with the win sound and after the win modal will be displayed with the max score of 20.","*/","","function winGame() {","    $(countText).text(\"WIN!\");","    clearTimeout(playerTimeout);","    addLightOnAllSides();","    setTimeout(function() {","        $(winModalDisplay).text(turn);","        $('#winModal').modal('show');","        soundListen('win');","    }, 1400);","}",""]}]]},"ace":{"folds":[],"scrolltop":4045,"scrollleft":0,"selection":{"start":{"row":308,"column":52},"end":{"row":308,"column":52},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":287,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1568651747432,"hash":"a9d7d91d9f5040245730eed5399504c46e73fa75"}