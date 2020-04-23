var NumberOfWin = 0;
var NumberOfLost = 0;

for(var i =1; i<=5;i++){
    var guessnumber = parseInt(prompt("Enter a number from 1 to 5:"));

var randomnumber = Math.floor(Math.random()*5) + 1;

if(guessnumber==randomnumber){
    console.log("You have Won");
    NumberOfWin++;
}else{
    console.log("You have lost. The random number was:"+randomnumber);
    NumberOfLost++; 
}    
}

document.write("Total Number Of Win = "+NumberOfWin+ "<br>");
document.write("Total Number Of Lost = "+NumberOfLost+ "<br>");