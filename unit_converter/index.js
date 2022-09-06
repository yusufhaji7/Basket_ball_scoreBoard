let convertBtn = document.getElementById("convert-btn")
let input_value = document.getElementById("input")
let lengthResult = document.getElementById("length")
let volumeResult = document.getElementById("volume")
let massResult = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    meterToFeet()
    feetToMeter()
    literToGallon()
    gallonToLiter()
    kgToPounds()
    poundesToKg()
})

function meterToFeet(){
    let inMeter = (parseFloat(input_value.value) * 3.28084).toFixed(2)
    lengthResult.textContent = `${input_value.value} meters = ${inMeter} feets|`
}
function feetToMeter(){
    let inFeet = (parseFloat(input_value.value) / 3.28083).toFixed(2)
    lengthResult.textContent += `${input_value.value} feets = ${inFeet} meters`
}
function literToGallon(){
    let inGallons = (parseFloat(input_value.value) * 0.264172).toFixed(2)
    volumeResult.textContent = `${input_value.value} liters = ${inGallons} gallons|`
}
function gallonToLiter(){
    let inLiters = (parseFloat(input_value.value) / 0.264172).toFixed(2)
    volumeResult.textContent += `${input_value.value} gallons = ${inLiters} liters`
}
function kgToPounds(){
    let inPounds = (parseFloat(input_value.value) * 2.20462).toFixed(2)
    massResult.textContent = `${input_value.value} KG = ${inPounds} Pounds|`
}
function poundesToKg(){
    let inKg = (parseFloat(input_value.value) / 2.20462).toFixed(2)
    massResult.textContent += `${input_value.value} Pounds = ${inKg} kgs`
}
