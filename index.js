import generate from "./src/js/generate.js";
import getRandom from "./src/js/random.js";
// объявления
let inputsValues = generate();
let obj = [];
let trDiv = document.createElement("tr");
let w = 1200 / inputsValues.count;
for (let i = 0; i < inputsValues.count; i++) {
  let elemNumber = getRandom(inputsValues.min, inputsValues.max);
  let td = document.createElement("td");

  td.style.width = w + "px";
  td.id = "td" + i;
  td.style.height = w + "px";
  trDiv.appendChild(td);
  td.innerHTML = +elemNumber;
}
document.getElementById("sortElements").append(trDiv);

sortBubble();

function sortBubble() {
  let i = inputsValues.count - 1;
  document.getElementById("td0").setAttribute("class", "checker");
  timer(i)
  i--;
  let timerId = setInterval(function() {

    document.getElementById("td" + (i + 1)).setAttribute("class", "simple");
    document.getElementById("td0").setAttribute("class", "checker");
    if (i < 0) {
      document.getElementById("td0").setAttribute("class", "simple");
      document.getElementById("td1").setAttribute("class", "simple");
      clearInterval(timerId);
    }

    timer(i)

    i--;
  }, 800 * inputsValues.count);
}
function timer(i){
  let j = 0
  let firstTimer = setInterval(function() {
    document.getElementById("td" + (inputsValues.count-1-i)).setAttribute("class", "simple");
    if (j >= i) {
      clearInterval(firstTimer);
    }
    check(j);
    j++;
  }, 800);
}

function check(j) {
  if (
    +document.getElementById("td" + j).textContent >
    +document.getElementById("td" + (j + 1)).textContent
  ) {
    change(j);
  } else {
    document.getElementById("td" + (j + 1)).setAttribute("class", "checker");
    document.getElementById("td" + j).setAttribute("class", "simple");
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

  document.getElementById("td" + j).setAttribute("class", "simple");
}
