let text = "";
let i = 0;

while (i < 10) {
  text += "The number is " + i + "<br>";
  i++;
}

document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";
