// var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateform() {
    var gender=document.getElementsByName("dropdown").value;
    var dd=document.getElementsByName("date").value;
    var mm=document.getElementsByName("month").value;
    var cc=document.getElementsByName("centuary").value;
    var yy=document.getElementsByName("year").value;

    var newDate=parseInt(dd);
    var newYear=parseInt(yy);

    if(gender=="") {
        alert("Gender can't be blank");
        return false;
    } else if (dd>31) {
        alert("date is invalid");
        return false;
    } else if (mm>12) {
        alert("month is invalid");
    } else if (cc>21) {
        alert("centuary is invalid");
    } else if (yy>21) {
        alert("Year is invalid");
    }
    alert(newYear)
}


// function getGender() {
//     var gender=document.getElementsByName("dropdown");
//     if(gender[0].onselect==true){
//         var gender="male";
//     } else (gender[1].onselect==true) {
//         var gender="female"; }
        
