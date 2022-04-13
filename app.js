document.addEventListener('DOMContentLoaded', () => {

// get info to Js

// Current weight and fat
let currentWt = parseFloat(document.getElementById("currentWt").value);
let currentFat = parseFloat(document.getElementById("currentFat").value);
// Ideal weight and fat
let idealWt = parseFloat(document.getElementById("idealWt").value);
let idealFat = parseFloat(document.getElementById("idealFat").value);
// duration
let duration = parseFloat(document.getElementById("duration").value);
// calorie out
let bmr = parseFloat(document.getElementById("bmr").value);
let activeCal = parseFloat(document.getElementById("activeCal").value);
// macro split (percent)
let pSplitPcent = parseFloat(document.getElementById("pSplitPcent").value);
let cSplitPcent = parseFloat(document.getElementById("cSplitPcent").value);
let fSplitPcent = parseFloat(document.getElementById("fSplitPcent").value);

//**** results ****/
// Calorie In
let calIntake = document.getElementById("calIntake");
// macro split (grams)
let pSplitGrams = document.getElementById("pSplitGrams");
let cSplitGrams = document.getElementById("cSplitGrams");
let fSplitGrams = document.getElementById("fSplitGrams");

// calc button
const calcBtn = document.getElementById("calcBtn");

// calculation
calcBtn.addEventListener("click",() => {

    let currWtWoFat = currentWt*(100 - currentFat)/100;
    let idealWtWoFat = idealWt*(100 - idealFat)/100;

    // muscle gain/loss required
    let muscleGain = idealWtWoFat - currWtWoFat;
    // fat loss required
    let fatLoss = (currentWt*currentFat - idealWt*idealFat)/100;

    // calories in 1kg of fat
    const calInFat = 7700;
    // calories in 1kg of muscle
    const calInMuscle = 4000;

    // fat loss required per week
    let fatLossPerWeek = fatLoss/duration;
    // muscle gain required per week
    let muscleGainPerWeek = muscleGain/duration;

    let calInFatLoss = bmr - (fatLossPerWeek*calInFat/7);
    let calInMuscleGain = muscleGainPerWeek*calInMuscle/7;

    let calIntakeTotal = calInFatLoss + calInMuscleGain + activeCal

    calIntake.innerHTML = calIntakeTotal.toFixed(2);

    pSplitGrams.innerHTML = (calIntakeTotal*pSplitPcent/100/4).toFixed(2);
    cSplitGrams.innerHTML = (calIntakeTotal*cSplitPcent/100/4).toFixed(2);
    fSplitGrams.innerHTML = (calIntakeTotal*fSplitPcent/100/9).toFixed(2);

})






})