function validateForm() {
    var gender = document.getElementById("gender").value;
    var dd = document.getElementById("date").value;
    var mm = document.getElementById("month").value;
    var cc = document.getElementById("centuary").value;
    var yy = document.getElementById("year").value;

    if (gender === "") {
        alert("Gender can't be blank");
        return false;
    }
    if (dd === "" || dd > 31) {
        alert("Invalid date!");
        return false;
    }
    if (mm === "" || mm > 12) {
        alert("Invalid month!");
        return false;
    }
    if (cc === "" || cc > 21) {
        alert("Invalid century!");
        return false;
    }
    if (yy === "") {
        alert("Year is invalid!");
        return false;
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Calculate the day index using the Akan formula
    var d = Math.floor((((cc / 4) - (2 * cc) - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + parseInt(dd)) % 7);
    if (d < 0) {
        d = (d + 7) % 7; // Ensure the day index is within the correct range
    }

    var akanName = gender === "male" ? maleNames[d] : femaleNames[d];
    var birthDay = days[d];

    document.getElementById("result").innerHTML = `You were born on <strong>${birthDay}</strong>.<br>Your Akan name is <span class="text-success">${akanName}</span>! 🎉`;
    return false; // Prevent form submission
}
