$(document).ready
var phrase = ["B","e","l","i","e","v","e"," ","y","o ","u"," ","c","a","n","" "","a","n","d"," ","y","o","u","r","e"," ","h","a","l","f","w","a","y"," ","t","h","e","r","e","."," ","T","h","e","o","d","o","r","e"," ","R","o","o","s","e","v","e","l","t"];
for(var index = 0; index< phrase.length; index += 1 ) {

  if(phrase[index] === "a") {
    phrase[index] = "-";  
  }
  else if(phrase[index] === "e"){
    phrase[index] ="-";
  
  }
  else if(phrase[index] === "i") {
    phrase[index] = "-";
  }
  else if(phrase[index] === "o") {
    phrase[index] = "-";
  }
  else if(phrase[index] === "u") {
    phrase[index] = "-";
  }

  else {
    alert(phrase);
  }

}