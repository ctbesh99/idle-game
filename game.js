var score = 0;
var num = 0;
var title = new Title("Ugg it's 3:00am");
title.hide()
var title2 = new Title("'A scratching noise can be heard coming from the basement!'");
title2.hide()
var button = new Button('Wake Up', btnPress);   
var scr = new Text(score);                    
let button2 = new Button('Next', btnPress2);
button2.hide()
let button3 = new Button('Leave it', btnPress3);
button3.hide()
let button4 = new Button('Investigate', btnPress4);
button4.hide()
let button5 = new Button('Continue', btnPress5);
button5.hide()
let button6 = new Button('Throw away', btnPress6);
button6.hide()
let button7 = new Button('Read', btnPress7);
button7.hide()
let button8 = new Button('Continue', btnPress8);
button8.hide()
let button9 = new Button('Find flashlight', btnPress9);
button9.hide()
let button10 = new Button('Go Investigate', btnPress10);
button10.hide()
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
title.edit("'A knock can be heard from the front door'")
button2.show()
}
if(score == 3) {

  title.edit("'You go to answer the door'")
  
  button2.hide()
  title2.show()
  button3.show()
  button4.show()
 





}
}

function btnPress3() {
score = 10
if(score == 10) {
  title2.hide()
  title.edit("'You continue to the door and open it. There is a note on the door step.'")
 button3.hide()
 button4.hide()
 button7.show()
button6.show()
}

}

function btnPress4() {
  title2.hide()
  title.edit("'You open the basement door. Scratch marks cover the backside, but nothing is there.'")
  button3.hide()
  button4.hide()
  button5.show()
 


}

function btnPress5() {
  score = 10
if(score == 10) {
  button5.hide()
  title.edit("'You continue to the door and open it. There is a note on the door step.'")
  button7.show()
  button6.show()

}
}

function btnPress6() {
  button7.hide()
  button6.hide()
  title.edit("'You toss the note aside.'")
  button8.show()

}

function btnPress7() {
  button7.hide()
  button6.hide()
  title.edit("'Dear Jack, thank you for your purchase. We hope you enjoy your new home. Please forget the rumors you might have heard about this place. Your landlord Lary.'")

  button8.show()

}

function btnPress8() {
  button8.hide()
  title.edit("'There are now banging noises coming from the basement door!'")
  button9.show()
  button10.show()
}

function btnPress9() {

}

function btnPress10() {
  
}

score--;





