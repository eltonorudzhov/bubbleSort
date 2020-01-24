import getRandom from "./random.js";

export default function createElements(inputsValues){
    let w = 1200 / inputsValues.count;
    let trDiv = document.createElement("tr");
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
}