var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateform() {
    var firstName=document.getElementsByName("firstName");
    var date=document.myform.date.value;
    var month=document.myform.month.value;
    var year=document.myform.year.value;
    console.log(year)

    var newDate=parseInt(date);
    var newYear=parseInt(year);

    if(firstName==null ||firstName=="") {
        alert("Name can't be blank");
        return false;
    } else if (date>31) {
        alert("date is invalid");
        return false;
    } else if (month>12) {
        alert("month is invalid");
    } else if (year>2021) {
        alert("year is invalid");
    }
    alert(newYear)

}

function getGender() {
    var gender=document.getElementsByName("dropdown");
    if(gender[0].onselect==true){
        var gender="male";
    } else if (gender[1].onselect==true) {
        var gender="female";
    } else {
        return true;
    }
}