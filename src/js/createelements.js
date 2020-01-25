import getRandom from "./random.js";

export default function createElements(inputsValues){
    // очищаем поле
   document.getElementById("sortElements").innerHTML="";
   // вычисляем ширину одного шара
   let widthElem = document.documentElement.clientWidth / inputsValues.count;
   // если ширина больше высоты - присваиваем ширине высоту
   if (widthElem>document.documentElement.clientHeight)
      widthElem=document.documentElement.clientHeight
   let trDiv = document.createElement("tr");
   for (let i = 0; i < inputsValues.count; i++) {
      // получаем случайное число в нужном диапазоне
      let elemNumber = getRandom(inputsValues.min, inputsValues.max);
      let td = document.createElement("td");
      td.style.textAlign = td.style.width = widthElem + "px";
      td.style.fontSize = widthElem / 2 + "px";
      td.id = "td" + i;
      td.style.height = widthElem + "px";
      // выше описаны свойства для элемента td. Добавляем его в блок tdDiv
      trDiv.appendChild(td);
      td.setAttribute("class", 'simple');
      td.innerHTML = +elemNumber;
   }
   document.getElementById("sortElements").append(trDiv);
}