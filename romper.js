let text = "";
let i = 0;
let longitud = 10;

for (; i < 10 ; i++) {
  if (i === 3) break; 
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";