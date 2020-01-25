// Проверка на необходимость дальнейшей сортировки
export default function checkNeeds(i) {
   for (let elem = 0; elem < i; elem++)
      if (
         +document.getElementById("td" + elem).textContent >
         +document.getElementById("td" + (elem + 1)).textContent
      )
      return true;
   return false;
}
