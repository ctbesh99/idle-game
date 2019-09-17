var score = 0;
var locked = 'You got a hat!'

postToPage(score);


createButton('Clicker', btnPress);
changeTitle('Clicker Game');

createButton('Clicker2', btnPress2,);

setInterval(btnPress, 1000);
setInterval(btnPress2, 1000);
function btnPress2() {
  score--;
  postToPage(score);
}

  function btnPress() {
  score++;
  postToPage(score);

  if(score > 100) {
  postToPage(locked)
}

}

  



