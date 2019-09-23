var score = 0; 
var title = new Title('Start by getting 20 clicks!'); 
var button = new Button('Click+', btnPress);   
var scr = new Text(score);                    
let button2 = new Button('Click-', btnPress2); // Make a button

var beg = 'beginning'
                  
setInterval(btnPress, 1000); 
setInterval(btnPress2, 1000);  

function btnPress() {
  score++;        
  scr.edit(score); 




  }

