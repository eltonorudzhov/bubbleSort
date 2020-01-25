import changeClass from "./changeclass.js";
import changeElements from "./changeelements.js";
export default function checkElements(lastElem, elem) {
  // Проверяются элементы. Если действующий старше следующего, то они меняются местами
  // Иначе действующим элементом становится следующий
   if (
      +document.getElementById("td" + elem).textContent >
      +document.getElementById("td" + (elem + 1)).textContent
   ) {
    changeElements(elem);
   } 
   else {
      setTimeout(() => {
         if (elem + 2 <= lastElem) changeClass(elem + 1, "checker");
         else changeClass(elem + 1, "simple");
      }, 80);
    // подсвечивает новый действующий элемент
   if (elem + 2 <= lastElem) changeClass(elem + 1, "new-checker");
   // меняем класс действующего элемента элемент
   changeClass(elem, "simple");
   }
}
