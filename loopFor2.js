const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;
let i = 0;
let text = "";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}

document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";