
export default function changeElements(elem) {
    // Меняются элементы местами и меняются их id
   document
      .getElementById("td" + elem)
      .parentNode.insertBefore(
         document.getElementById("td" + (elem+ 1)),
         document.getElementById("td" + elem)
      );
   document.getElementById("td" + elem).id = "td" + (elem + 1);
   document.getElementById("td" + (elem + 1)).id = "td" + elem;
}
  