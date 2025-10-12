let text = "";
let i = 1;

for (; i < 10; i++){ 
  if (i === 3) continue; 
  text += i*10 + "<br>";
}


document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";