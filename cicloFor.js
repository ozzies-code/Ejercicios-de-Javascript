let text = "";
let i = 0;

for (; i < 5; i++) 
  text += "The number is " + i + "<br>";

document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";