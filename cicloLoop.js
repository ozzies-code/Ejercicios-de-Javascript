const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
let i = 0;
for (; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";