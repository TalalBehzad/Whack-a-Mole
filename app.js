let currentMole;//This represents the current moletile
let currentbomb;//This represents the bomb tile
let score = 0 //Represents the score 
let gameOver = false; //Represents the gameover

window.onload = function () {
 setGame();
}



//Since there are nine tiles we will create an IF statment with the 9. Which means that if i is less then 9 it will go from 0 to 8.
function setGame() {
for (let i = 0; i < 9; i++ ) {
      // We will use the <div> id= '0-8' </div> to assign each tile an ID
   let tile = document.createElement('div');
   tile.id = i.toString();
   tile.addEventListener('click', selectTile);
   document.getElementById('board').appendChild(tile);
}
setInterval(setMole, 1000); //We will use 1000 miliseconds which equals to 1 seconds for everytime the Mole appears on the screen.
setInterval(setbomb, 2000); //We will use 2000 miliseconds which equals to 2 seconds for everytime the Bomb appears on the screen.
}


function setMole() {
   if (gameOver) {
      return;
   }
   //By adding a gameover if for both the set mole function and the bomb function, this makes it so that when the game is over the mole and bomb stop moving all togather.
   if (currentMole) {
      currentMole.innerHTML = '';
   }
   let mole = document.createElement('img');
   mole.src = './images/Mole.png';
   //Now we will need to input the mole on a random tile. This means that I will have to create a variable for number and make the attribute to a randomtile.
   let num = getRandomTile()
   if (currentbomb && currentbomb.id === num) {
      return;
   }
   currentMole = document.getElementById(num);
   currentMole.appendChild(mole);
}

function getRandomTile() {
   let num = Math.floor(Math.random() * 9);
   return num.toString();
}
//Math.random will give me a number between 0 and one and if I multiply it to 9, The range will become from 0-9, then we round it down with math.floor we will get numbers from 0-8. After that use string for the id.


function setbomb() {
   if (gameOver) {
      return;
   }
   if (currentbomb) {
      currentbomb.innerHTML = '';
   }

   let bomb = document.createElement('img');
   bomb.src = './images/Bomb1.png';

   //Now with the bomb we will use a random tile to decide where the bomb is placed. 

   let num = getRandomTile();
   if (currentMole && currentMole.id === num) {
      return;
   }
   //By creating a if for both of the mole and bomb, this helps us so that the bomb and mole are showen accordingly in the holes. 
   currentbomb = document.getElementById(num)
   currentbomb.appendChild(bomb); 
   //We are doing the same steps exactly as the previous mole tile
}



function selectTile() {
   if (gameOver) {
      return;
   }
   
   if (this === currentMole) {
      score += 10;
      document.getElementById('score').innerText = score.toString(); 
      currentMole.querySelector('img').src = './images/MoleHit.png';
      //This makes it so that the score gets updated each time the mole gets clicked on 
   }
   else if (this === currentbomb) {
      document.getElementById('score').innerText = 'GAME OVER: ' + score.toString();
      gameOver = true;
      //This creates for us a gameover once the bomb has been clicked accidently. 
   }
}

//progress bar countdown timer
const progressBarElement = document.querySelector('#progress-bar')
const gameDuration = 30; //represents the seconds for the bar
let barNum = gameDuration*1000;
const barDen = gameDuration*1000;
const barInterval = setInterval(progressbarframe, 10);

function progressbarframe() {
   if (barNum <= 0) {
      endgame();
      clearInterval(barInterval);
      gameOver=true
   }
   else {
   barNum-=10;
   const currentbarNum = barNum/barDen;
   if(currentbarNum<=0.10) {
   progressBarElement.setAttribute('style', `width: ${100*currentbarNum}%; background-color: #ff3300;`);
   }
   else if(currentbarNum<=0.25) {
   progressBarElement.setAttribute('style', `width: ${100*currentbarNum}%; background-color: #ff9f40;`);
   }
   else {
   progressBarElement.setAttribute('style', `width: ${100*currentbarNum}%;`);
   }
}
}


//win/lose logic 
function endgame(){
   clearInterval(barInterval);
   gameOver = true;
 if (score >= 300) {
   document.getElementById('message').textContent = 'YOU WON!';
 } else {
   document.getElementById('message').textContent = 'You Lost!';
 }
}

// function render() {
// gameOver();
// }
// if (score >= 300) {
//    gameOver('You Win!');
// } else {
//    gameOver('Times up, you lose!');
// }

// function init(){
// currentMole;
// currentbomb;
// score = 0 
// gameOver = false; 
// progressBarElement = document.querySelector('#progress-bar')
// gameDuration = 30; //represents the seconds for the bar
// barNum = gameDuration*1000;
// barDen = gameDuration*1000;
// barInterval = setInterval(progressbarframe, 10);

// }
// const resetBtn = document.getElementById('reset'); 
// resetBtn.addEventListener('click', init);