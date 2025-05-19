let currentMole;//This represents the current moletile
let currentbomb;//This represents the bomb tile

window.onload = function () {
 setGame();
}



//Since there are nine tiles we will create an IF statment with the 9. Which means that if i is less then 9 it will go from 0 to 8.
function setGame() {
for (let i = 0; i < 9; i++ ) {
      // We will use the <div> id= '0-8' </div> to assign each tile an ID
   let tile = document.createElement('div');
   tile.id = i.toString();
   document.getElementById('board').appendChild(tile);
}
setInterval(setMole, 1000); //We will use 1000 miliseconds which equals to 1 seconds for everytime the Mole appears on the screen.
setInterval(setbomb, 2000); //We will use 2000 miliseconds which equals to 2 seconds for everytime the Bomb appears on the screen.
}


function setMole() {
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


