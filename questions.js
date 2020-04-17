
function testedquestion() {
  var questionflu = prompt("Are you experiencing flu like symptoms");
  if (questionflu.toLowerCase() == "yes") {
    alert("Let's get you tested");
    document.write('<h1>' + 'Please follow links to get tested' + '<h1>');
  } else if (questionflu.toLowerCase() == "no") {
    alert("Stay Safe Out There");
    document.write('<h1>' + 'Updates on where to not go' + '<h1>');
  }
} 


function followstate() {
  var questionstate = prompt("do you live in washington");
  if (questionstate.toLowerCase() == "yes") {
    alert("Your Doomed");
  } else if (questionstate.toLowerCase() == "no") {
    alert("Lucky You");
  }
} 



function temptest() {
  
  var correctAnswer = 11152
  
  for(var i = 0; i < 8; i=i+1){
    var numberGuess = prompt ('Guess how many cases your state has(you get 8 trys)');
    if(numberGuess == correctAnswer){
      alert('Sucks but your right');
      break;
    } else {
      alert('Sorry, please try again!')
    }
    if (i==7) {
      casenumbers = '11152';
    }
  
  }
}


function rightone() {
  var userName = prompt('Are you in Seattle');
  var cityyourin = ''
  while( (cityyourin != 'YES') && (cityyourin != 'NO') ){
    cityyourin = prompt('Are you still alive? (yes or no)').toUpperCase();
}

} 



testedquestion();
followstate();
temptest();
rightone();