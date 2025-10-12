const cars = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let text = "";
for (;cars[i];) {
  text += "<h1>" + cars[i] + "</h1>" + "<br>";
  i++;
}

document.getElementById("demo").innerHTML = "<strong style='color: Red; font-style: italic; font-size: medium; font-family: Arial Narrow;'>" + text + "</strong>";