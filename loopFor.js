const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;
let text = "";
let i = 0;
for (; i < len; i++) 
  text += cars[i] + "<br>";

document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";