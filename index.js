const btn = document.querySelector(".btn");
const inputEl = document.querySelector(".input-el");
const lengthValues = document.querySelectorAll(".length-value");
const volumeValues = document.querySelectorAll(".volume-value");
const massValues = document.querySelectorAll(".mass-value");
const meterToFeet = document.querySelector(".meter-to-feet");
const feetToMeter = document.querySelector(".feet-to-meter");
const literToUsGallon = document.querySelector(".liter-to-usgallon");
const usGallonToLiter = document.querySelector(".usgallon-to-liter");
const kilogramToPound = document.querySelector(".kilogram-to-pound");
const poundToKilogram = document.querySelector(".pound-to-kilogram");

btn.addEventListener("click", function () {
  for (let i = 0; i < lengthValues.length; i++) {
    lengthValues[i].textContent = inputEl.value;
  }
  for (let i = 0; i < volumeValues.length; i++) {
    volumeValues[i].textContent = inputEl.value;
  }
  for (let i = 0; i < massValues.length; i++) {
    massValues[i].textContent = inputEl.value;
  }

  let meterToFeetCalc = inputEl.value / 0.3048;
  let feetToMeterCalc = inputEl.value * 0.3048;
  let literToUsGallonCalc = inputEl.value / 3.785411784;
  let usGallonToLiterCalc = inputEl.value * 3.785411784;
  let kilogramToPoundCalc = inputEl.value / 0.45359237;
  let poundToKilogramCalc = inputEl.value * 0.45359237;

  meterToFeet.textContent = meterToFeetCalc.toFixed(3);
  feetToMeter.textContent = feetToMeterCalc.toFixed(3);
  literToUsGallon.textContent = literToUsGallonCalc.toFixed(3);
  usGallonToLiter.textContent = usGallonToLiterCalc.toFixed(3);
  kilogramToPound.textContent = kilogramToPoundCalc.toFixed(3);
  poundToKilogram.textContent = poundToKilogramCalc.toFixed(3);
});
