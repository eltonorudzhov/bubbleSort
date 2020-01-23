import generate from "./src/js/generate.js";
import getRandom from "./src/js/random.js";
// объявления
let inputsValues = generate();
let trDiv = document.createElement("tr");
let speed = (13-inputsValues.speed)*100
let w = 1200 / inputsValues.count;

for (let i = 0; i < inputsValues.count; i++) {
  let elemNumber = getRandom(inputsValues.min, inputsValues.max);
  let td = document.createElement("td");
  if (w>400)
    w=400
  td.style.textAlign = td.style.width = w + "px";
  td.style.fontSize = w / 2 + "px";
  td.id = "td" + i;
  td.style.height = w + "px";
  trDiv.appendChild(td);
  td.setAttribute("class", 'simple');
  td.innerHTML = +elemNumber;
}
document.getElementById("sortElements").append(trDiv);

sortBubble();

function sortBubble() {
  if (inputsValues.count == 1) {
    return;
  }
  let i = inputsValues.count - 1;
  let interv;
  setTimeout(function run() {
    console.log(speed)
    interv = (i + 3) * speed;
    timer(i);
    if (i > 1) {
      setTimeout(run, interv);
    } else {
      changeClass(0, "simple");
      changeClass(1, "simple");
      return;
    }
    i--;
  }, interv);
}
function changeClass(id, className) {
  document.getElementById("td" + id).setAttribute("class", className);
}
function timer(i) {
  let j = 0;
  changeClass(0, "checker");
  //document.getElementById("td0").setAttribute("class", "checker");
  console.log(i, j);
  let firstTimer = setInterval(function() {
    if (j == i - 1) {
      changeClass(j, "simple");
      //   document.getElementById("td" + j).setAttribute("class", "simple");
      clearInterval(firstTimer);
    }
    check(i, j);
    j++;
  }, speed);
}

function check(i, j) {
  if (
    +document.getElementById("td" + j).textContent >
    +document.getElementById("td" + (j + 1)).textContent
  ) {
    change(j);
  } else {
    setTimeout(() => {
      console.log("хы");
      if (j + 2 <= i) changeClass(j + 1, "checker");
      else changeClass(j + 1, "simple");
    }, 50);
    if (j + 2 <= i) changeClass(j + 1, "checked");
    changeClass(j, "simple");
  }
}
function change(j) {
  document
    .getElementById("td" + j)
    .parentNode.insertBefore(
      document.getElementById("td" + (j + 1)),
      document.getElementById("td" + j)
    );
  document.getElementById("td" + j).id = "td" + (j + 1);
  document.getElementById("td" + (j + 1)).id = "td" + j;
}
