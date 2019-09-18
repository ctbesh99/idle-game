<<<<<<< HEAD
var score = 0;
var locked = 'You got a hat!'

postToPage(score);


createButton('Clicker', btnPress);
changeTitle('Clicker Game');



setInterval(btnPress, 1000);
setInterval(btnPress2, 1000);
setInterval(btnPress3, 1000);


function btnPress2() {
  score--;
  postToPage(score);
}

  function btnPress() {
  score++;
  postToPage(score);
}

  if(score == 100) {
  postToPage(locked)
  changeTitle('Now try making it to -1');
  createButton('subtract', btnPress2,);
}



  



=======
var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
>>>>>>> upstream/master
