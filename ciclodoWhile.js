let text = "";
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10); 

document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";