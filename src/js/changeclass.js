// меняет класс элемента по id и переданному имени класса
export default function changeClass(id, className) {
   document.getElementById("td" + id).setAttribute("class", className);
}