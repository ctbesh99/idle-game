var score = 0; 

var title = new Title('Start by getting 20 clicks!'); 
var button = new Button('Click+', btnPress);   
var scr = new Text(score);                    
let button2 = new Button('Click-', btnPress2); // Make a button
button2.hide()
var title2 = new Title('Now Get to -10 clicks');
title2.hide()
var title3 = new Title('Great!, Now go back to zero clicks!');
title3.hide()
var title4 = new Title('Good Job! Now have fun messing around!');
title4.hide()
var title5 = new Title('Acheivement! - Get 50 Clicks!');
title5.hide()
var beg = 'beginning'
                  
setInterval(btnPress, 1000); 
setInterval(btnPress2, 1000);  

function btnPress() {
  score++;        
  scr.edit(score); 


if(score > 19 && beg == 'beginning') {
button2.show()
title.hide()
title2.show()
beg = 'mid'

}
if(score == 0 && beg == 'end') {
  title3.hide()
  title4.show()
}
if(score == 50) {
  title5.show()
}
}

function btnPress2() {
  score--;
  scr.edit(score);

  if(score < -9 && beg == 'mid') {
  title2.hide()
  title3.show()
  beg = 'end'
  }
}
