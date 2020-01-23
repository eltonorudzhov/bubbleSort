import generate from "./src/js/generate.js";
import getRandom from "./src/js/random.js";
// объявления
let inputsValues = generate();
let trDiv = document.createElement("tr");
let w = 1200 / inputsValues.count;
for (let i = 0; i < inputsValues.count; i++) {
  let elemNumber = getRandom(inputsValues.min, inputsValues.max);
  let td = document.createElement("td");
  td.style.textAlign = td.style.width = w + "px";
  td.style.fontSize = w / 2 + "px";
  td.id = "td" + i;
  td.style.height = w + "px";
  trDiv.appendChild(td);
  td.innerHTML = +elemNumber;
}
document.getElementById("sortElements").append(trDiv);

sortBubble();

function sortBubble() {
  if (inputsValues.count == 1) {
    return;
  }
  let i = inputsValues.count - 1;
  // timer(i)
  let interv;

  setTimeout(function run() {
    interv = (i + 3) * 300;
    timer(i);
    if (i > 1) {
      setTimeout(run, interv);
    } else {
      console.log(i);
      console.log("DDD");
      document.getElementById("td0").setAttribute("class", "simple");
      document.getElementById("td1").setAttribute("class", "simple");
      return;
    }
    i--;
  }, interv);
}

function timer(i) {
  let j = 0;
  document.getElementById("td0").setAttribute("class", "checker");
  console.log(i, j);
  let firstTimer = setInterval(function() {
    if (j == i - 1) {
      document.getElementById("td" + j).setAttribute("class", "simple");
      clearInterval(firstTimer);
    }
    check(j);
    j++;
  }, 300);
}

function check(j) {
  if (
    +document.getElementById("td" + j).textContent >
    +document.getElementById("td" + (j + 1)).textContent
  ) {
    change(j);
  } else {
    setTimeout(() => {
      console.log("хы");
      document.getElementById("td" + (j + 1)).setAttribute("class", "checker");
    }, 50);

    document.getElementById("td" + (j + 1)).setAttribute("class", "checked");
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
}
