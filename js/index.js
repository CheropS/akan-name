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
    
};

function findName () {
    const days=["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];
    var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dCalc=parseInt((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7);
}
    if (gender == "male" ){
        if (day == "Sunday") {
            akanName = "Kwasi";
        }else if (day == "Monday") {
            akanName = "Kwadwo";
        }else if (day == "Tuesday") {
            akanName = "Kwabena";
        }else if (day == "Wednesday") {
            akanName = "Kwaku"
        }else if (day == "Thursday") {
            akanName = "Yaw"
        }else if (day == "Friday") {
            akanName = "Kofi"
        }else if (day == "Saturday"){
            akanName = "Kwame"
        }

    }else if (gender == "female") {
        if (day == "Sunday") {
            akanName = "Akosua";
        }else if (day == "Monday") {
            akanName = "Adwoa";
        } else if (day == "Tuesday") {
            akanName = "Abenaa";
        } else if (day == "Wednesday") {
            akanName = "Akua";
        } else if (day == "Thursday") {
            akanName = "Yaa";
        } else if (day == "Friday") {
            akanName = "Afua";
        } else if (day == "Saturday") {
            akanName = "Ama";
        }
        console.log(dCalc);
    }

