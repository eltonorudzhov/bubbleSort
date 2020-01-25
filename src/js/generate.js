import createElements from './createElements.js'
import getInput from './getinput.js'
export default function generate(){
   let inputsValues={
      max: getInput("maxValue"),
      min: getInput("minValue"),
      count: getInput("itemNumber"),
      speed: getInput("speed")
   }
   // если минимальный и максимальный элемент перепутаны - поменять местами
   if (inputsValues.min>inputsValues.max){
       document.getElementById("maxValue").value=inputsValues.min
       document.getElementById("minValue").value=inputsValues.max
   }
   // создаем элементы на поле
   createElements(inputsValues)
   return inputsValues
}