// var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateform() {
    var gender=document.getElementById("gender").value;
    var dd=document.getElementById("date").value;
    var mm=document.getElementById("month").value;
    var cc=document.getElementById("centuary").value;
    var yy=document.getElementById("year").value;

    var newDate=parseInt(dd);
    var newCentuary=parseInt(cc);
    var newYear=parseInt(yy);

    if(gender=="") {
        alert("Gender can't be blank");
        return false;
    } else if (dd=="" || dd>31) {
        alert("date is invalid");
        return false;
    } else if (mm=="" || mm>12) {
        alert("month is invalid");
    } else if (cc=="" ||cc>21) {
        alert("centuary is invalid");
    } else if (yy=="") {
        alert("Year is invalid");
    }
    const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var d=parseInt((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7);

    if(d==0&&gender=='male'){
        alert('Your Akan name is: '+maleNames[0]+'You were born on '+days[0])
        return false;
    }
    if (d==0&&gender=='male'){
        alert('Your Akan name is: '+maleNames[0]+'You were born in '+days[0])
        return false; }
    if (d==0&&gender=='male'){
            alert('Your Akan name is: '+maleNames[0]+'You were born in '+days[0])
            return false; }
            if (d==0&&gender=='male'){
                alert('Your Akan name is: '+maleNames[0]+'You were born in '+days[0])
                return false; }
                if (d==0&&gender=='male'){
                    alert('Your Akan name is: '+maleNames[0]+'You were born in '+days[0])
                    return false; }
                    if (d==0&&gender=='male'){
                        alert('Your Akan name is: '+maleNames[0]+'You were born in '+days[0])
                        return false; }
};


