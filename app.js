/* JAVASCRIPT FOR DRIFTSTID */

// Storing the value from form in variables.


let nameOfMachine = document.getElementById("maskiner").value;

let machineTime = document.getElementById("machine_time").value;

let numberOfParts = document.getElementById("number_of_parts").value;

// Const to create the result using the selected values.

const machineInfo = {
  name: nameOfMachine,
  runtime: machineTime,
  numbers: numberOfParts,
}

let submitButton = document.getElementById("submit_button");



// function to create the right result in html.

submitButton.addEventListener("click", function(event) {
  let percentRuntime = "";
  let inputNumber = "";
  let expectedNumber = "";
  if (machineInfo.name === "125T") {
    // slår 62 slag pr minutt.
    averageRuntime = "45%" // Har lyst å hente ut denne informasjonen fra et excel ark
    expectedNumber = 62 * machineInfo.runtime;
    inputNumber = machineInfo.numbers;
    x = inputNumber / expectedNumber;
    percentRuntime = x * 100; // Har lyst å lagre denne informasjonen i et excel-ark
  }
  if (machineInfo.name === "4s5") {
    averageRuntime = "79%" // Har lyst å hente ut denne informasjonen fra et excel ark
    expectedNumber = 20 * machineInfo.runtime;
    inputNumber = machineInfo.numbers;
    x = inputNumber / expectedNumber;
    percentRuntime = x * 100; // Har lyst å lagre denne informasjonen i et excel-ark

    // postResult.innerHTML = percentRuntime + "% driftstid";
  }
  if (machineInfo.name === "3s6") {
    averageRuntime = "60%" // Har lyst å hente ut denne informasjonen fra et excel ark
    expectedNumber = 12 * machineInfo.runtime;
    inputNumber = machineInfo.numbers;
    x = inputNumber / expectedNumber;
    percentRuntime = x * 100; // Har lyst å lagre denne informasjonen i et excel-ark
  }
  let postResult = document.getElementById("result")

  postResult.style.display = "block"
  postResult.innerHTML = percentRuntime.toFixed(2) + "% driftstid" + "<br><em> Gjennomsnittet for " + machineInfo.name + " er: " + averageRuntime + "</em>";

  event.preventDefault();
});
