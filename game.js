var score = 0;
var num = 0;
var flash = 6;
var title = new Title("Ugg it's 3:00am");
title.hide()
var title2 = new Title("'A scratching noise can be heard coming from the basement!'");
title2.hide()
var button = new Button('Wake Up', btnPress);   
var scr = new Text(flash);  
scr.hide()                  
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
let button11 = new Button('Continue', btnPress11);
button11.hide()
let button12 = new Button('Go Investigate', btnPress12);
button12.hide()
let button13 = new Button('Continue', btnPress13);
button13.hide()
let button14 = new Button('Turn on light', btnPress14);
button14.hide()
let Crank = new Button('Crank', Crank1);
Crank.hide()
let sub1 = new Button('sub', sub);
sub1.hide()
var beg = 10
var flash1; 



                  
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
  button1.remove()
  button2.remove()
  button3.remove()
  button4.remove()
  button5.remove()
  button6.remove()
  button7.remove()
}

function btnPress9() {
  button9.hide()
  button10.hide()
  title2.edit('Tip: Always keep the flashlight cranked while in the basement! Do it by pressing the crank button! Make sure that the number always stays above 0!')
  title.edit("'you fumble around in the darkness until you find a crank up flash light.'")
  title2.show()
  
  button12.show()
}

function btnPress10() {
  title.edit("'A figure of midnight black lunges at you from the basement!'")
  button9.hide()
  button10.hide()
  button11.show()
  

}

function btnPress11() {
  button11.hide()
  title.edit("'You head is nauled off and you parish in a bloody mess.'")
  
}

function Crank1() {
  flash++;
  scr.show()
  scr.edit(flash)
  

}

function btnPress12() {
  beg = 10
  title.edit("'You began to venture in the basement. A dark figure swoops across the room.'")
  flash1 = setInterval(flash2, 1000);
  Crank.show()
  flash--;
  button12.hide()
  button12.remove()
  button8.remove()
  button9.remove()
  
}

function btnPress13() {
  title.edit("'Further in you go, fear fills your entire body. There is a light!'")
  title2.hide()
  button14.show()
  button13.hide()
  
}

function btnPress14() {
title.edit("'They light does not work!'")
button14.hide()

}

function flash2() {
  flash--;
  scr.edit(flash)

  if(flash == 0) {
  
  Crank.hide()
  button13.hide()
title2.hide()
title.edit('YOU DIED! Tip: Next time, crank the flash light!')
StopLoop()

}

if(flash > 10) {
  flash = 10
}
}


function StopLoop() {
  clearInterval(flash1)
}


score--;





