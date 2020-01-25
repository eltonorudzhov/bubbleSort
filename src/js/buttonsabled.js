// активация/деактивация кнопок по запросу
export default function buttonsAbled(bool) {
   document.getElementById("startButton").disabled = bool;
   document.getElementById("generateButton").disabled = bool;
}
