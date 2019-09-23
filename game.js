var score = 0;
var num = 0;
var title = new Title("Ugg it's 3:00am");
title.hide()
var title2 = new Title("'A knock can be heard from the front door'");
title2.hide()
var title3 = new Title("'You go to answer the door'");
title3.hide()
var title4 = new Title("'A scratching noise can be heard coming from the basement!'");
title4.hide()
var button = new Button('Wake Up', btnPress);   
var scr = new Text(score);                    
let button2 = new Button('Next', btnPress2);
button2.hide()
let button3 = new Button('Leave it', btnPress3);
button3.hide()
let button4 = new Button('Investigate', btnPress4);
button4.hide()
let sub1 = new Button('sub', sub);
sub1.hide()
var beg = 'beginning'
                  
setInterval(btnPress, 1000); 
setInterval(btnPress2, 1000);
setInterval(numIncrease, 1000);  

function btnPress() {
  score = 1;       
    
if(score == 1) {
  button.hide()
  title.show()
  button2.show()

  
}

  }

function btnPress2() {
  score++;
  
if(score == 2) {
button2.hide()
title2.show()
button2.show()
}
if(score == 3) {

  title3.show()
  button2.hide()
  
  scr.edit(num);
if(num == 10) {

  title4.show()

if(num == 300) {

  button3.show()
  button4.show()

}
}

}
}


score--;





