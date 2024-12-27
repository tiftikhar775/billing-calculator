function calculate() {
    // get user input
    let hourlyRate = document.getElementById("hr-rate").value;
    let numOfHours = document.getElementById("numHrs").value;

    let bill = hourlyRate * numOfHours;

    document.getElementById("bill").value = bill;
}

function clearFields() {
    document.getElementById("hr-rate").value = "";
    document.getElementById("numHrs").value = "";
    document.getElementById("bill").value = "";
}

calculate();
clear();