import generate from "./src/js/generate.js";
import Sort from "./src/js/Classes/sort.js";
// объявления
let inputsValues = generate();
let sort = new Sort(inputsValues)
sort.sortBubble()

