import generate from "./src/js/generate.js";
import changeClass from './src/js/changeclass.js'
import checkElements from './src/js/checkelements.js'
import buttonsAbled from './src/js/buttonsabled.js'
import checkNeeds from './src/js/checkneed.js'
// объявления
let inputsValues=generate()
let speed = (13-inputsValues.speed)*100
generateButton.onclick=()=> inputsValues = generate();
startButton.onclick = ()=>  sortBubble()

function sortBubble() {
   // делаем кнопки не активными, чтобы пользователь мог насладиться анимацией
   buttonsAbled(true)
   // если один элемент - сортировка не имеет смысла
   if (inputsValues.count == 1) {
      return;
   }
   let lastElem = inputsValues.count - 1;
   let period;
   setTimeout(function run() {
     console.log(speed)
     // задаем период таймера
      period = (lastElem + 2) * speed;
      // запускаем интервал
      oneSeries(lastElem);
      // проверка необходимости дальнейшей сортировки
      if ((lastElem > 1)&&(checkNeeds(lastElem))) {
     
         setTimeout(run, period);
      } 
      else {
        // активируем кнопки, когда заканчиваем сортирвку
         buttonsAbled(false)
         return;
      }
   lastElem--;
   }, period);
}

// Одна серия прохода по массиву
function oneSeries(lastElem) {
   let elem = 0;
   changeClass(0, "checker");
   let firstTimer = setInterval(function() {
      if (elem == lastElem - 1) {
         // Перед выходом из интервала делаем последний элемент простым, а не активным
         changeClass(elem, "simple");
         clearInterval(firstTimer);
      }
      checkElements(lastElem, elem);
      elem++;
   }, speed);
}
