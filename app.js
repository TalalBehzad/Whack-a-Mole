let currentMole;
let currentbomb;
let score = 0 
let gameOver = false;
let moleInterval;
let bombInterval;

window.onload = function () {
 setGame();
moleInterval = setInterval(setMole, 1000); 
bombInterval = setInterval(setbomb, 2000);
}



function setGame() {
for (let i = 0; i < 9; i++ ) {
   let tile = document.createElement('div');
   tile.id = i.toString();
   tile.addEventListener('click', selectTile);
   document.getElementById('board').appendChild(tile);
}
}

function init(){
   clearInterval(barInterval);
   clearInterval(moleInterval);
   clearInterval(bombInterval);
   gameOver = false;
   score = 0;
   gameDuration = 30;
   barNum = gameDuration*1000;
   document.getElementById('score').textContent = '0';
   document.getElementById('message').textContent = '';
   barInterval = setInterval(progressbarframe, 10);
   moleInterval = setInterval(setMole, 1000); 
   bombInterval = setInterval(setbomb, 2000);
}


function setMole() {
   if (gameOver) {
      return;
   }
   if (currentMole) {
      currentMole.innerHTML = '';
   }
   let mole = document.createElement('img');
   mole.src = './images/Mole.png';
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


function setbomb() {
   if (gameOver) {
      return;
   }
   if (currentbomb) {
      currentbomb.innerHTML = '';
   }

   let bomb = document.createElement('img');
   bomb.src = './images/Bomb1.png';


   let num = getRandomTile();
   if (currentMole && currentMole.id === num) {
      return;
   }
   currentbomb = document.getElementById(num)
   currentbomb.appendChild(bomb); 
}



function selectTile() {
   if (gameOver) {
      return;
   }
   
   if (this === currentMole) {
      score += 10;
      document.getElementById('score').innerText = score.toString(); 
      currentMole.querySelector('img').src = './images/MoleHit.png';
   }
   else if (this === currentbomb) {
      document.getElementById('score').innerText = 'GAME OVER: ' + score.toString();
      gameOver = true;
   }
}

let progressBarElement = document.querySelector('#progress-bar')
let gameDuration = 30; 
let barNum = gameDuration*1000;
const barDen = gameDuration*1000;
let barInterval = setInterval(progressbarframe, 10);

function progressbarframe() {
   if (barNum <= 0) {
      endgame();
      clearInterval(barInterval);
      gameOver=true
   }
   else {
   barNum-=10;
   let currentbarNum = barNum/barDen;
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


function endgame(){
   clearInterval(barInterval);
   gameOver = true;
 if (score >= 300) {
   document.getElementById('message').textContent = 'YOU WON!';
 } else {
   document.getElementById('message').textContent = 'You Lost!';
 }
}


const resetBtn = document.getElementById('reset'); 
resetBtn.addEventListener('click', init);

//Code Graveyard comments 
//This represents the current moletile

//This represents the bomb tile

//Represents the score

//Represents the gameover

//We will use 1000 miliseconds which equals to 1 seconds for everytime the Mole appears on the screen.

//Since there are nine tiles we will create an for loop statment with the 9. Which means that if i is less then 9 it will go from 0 to 8.

// We will use the <div> id= '0-8' </div> to assign each tile an ID

//We will use 1000 miliseconds which equals to 1 seconds for everytime the Mole appears on the screen.

//We will use 2000 miliseconds which equals to 2 seconds for everytime the Bomb appears on the screen.

//By adding a gameover if for both the set mole function and the bomb function, this makes it so that when the game is over the mole and bomb stop moving all togather.

//Now we will need to input the mole on a random tile. This means that I will have to create a variable for number and make the attribute to a randomtile.

//Math.random will give me a number between 0 and one and if I multiply it to 9, The range will become from 0-9, then we round it down with math.floor we will get numbers from 0-8. After that use string for the id.

//Now with the bomb we will use a random tile to decide where the bomb is placed.

//By creating a if for both of the mole and bomb, this helps us so that the bomb and mole are showen accordingly in the holes.

//We are doing the same steps exactly as the previous mole tile

//This makes it so that the score gets updated each time the mole gets clicked on

//This creates for us a gameover once the bomb has been clicked accidently.

//progress bar countdown timer

//represents the seconds for the bar

//win/lose logic

//reset button 


