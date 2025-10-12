let text = "";

loop1: for (let j = 1; j < 5; j++) 
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) break loop2; 
    text += i + "<br>";
  }



document.getElementById("demo").innerHTML = "<strong style='color: blue; font-style: bold; font-family: Arial;'>" + text + "</strong>";