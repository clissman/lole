const intervalID = setInterval(createDancer, 100);

function createDancer(e) {
  const dancer = document.createElement("p");
  dancer.innerText = "💃🏽";
  dancer.classList.add("dancer");

  container.appendChild(dancer);
  dancer.style.position = "absolute";
  dancer.style.left = x + "px";
  dancer.style.top = y + "px";
}

let x;
let y;

function updateDisplay(event) {
  x = event.clientX;
  y = event.clientY;
}

let container = document.getElementById("container");
container.addEventListener("mousemove", updateDisplay);
