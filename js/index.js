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