export default function getInput(id) {
   let element = document.getElementById(id);
   // проверка на число
   if (isNaN(+element.value)) element.value = 1;
   else {
      switch (id) {
          // ограничение на то что кол-во элементов >0 и <=50
         case "itemNumber":
            if (+element.value <= 0) element.value = 1;
            if (+element.value > 50) element.value = 50;
            break;
          // ограничение на скорость от 1 до 10
         case "speed":
            if (+element.value < 1) element.value = 1;
            if (+element.value > 10) element.value = 10;
            break;
      }
   }
   return +element.value;
}
