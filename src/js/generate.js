export default function generate(){
    let inputsValues={
        max: '',
        min: '',
        count: '',
        speed: ''
    }
    let element = document.getElementById("MaxValue");
    inputsValues.max = +element.value
    element = document.getElementById("MinValue");
    inputsValues.min = +element.value
    element = document.getElementById("ItemNumber");
    inputsValues.count = +element.value
    element = document.getElementById("Speed");
    inputsValues.speed = +element.value
    return inputsValues
}