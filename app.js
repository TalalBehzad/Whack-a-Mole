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
}