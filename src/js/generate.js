export default function generate(){
    let inputsValues={
        max: '',
        min: '',
        count: ''
    }
    let element = document.getElementById("MaxValue");
    inputsValues.max = +element.value
    element = document.getElementById("MinValue");
    inputsValues.min = +element.value
    element = document.getElementById("ItemNumber");
    inputsValues.count = +element.value
    return inputsValues
}