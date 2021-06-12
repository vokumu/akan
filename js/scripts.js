function validateDate(date) {
    if(date == ""){
        document.getElementById("invalid_date").innerHTML = "Date cannot be empty";
    }
    else if(isNaN(date)){
        document.getElementById("invalid_date").innerHTML = "Date has to be a number";
    }
    else if (date <=0 || date > 31) {
        document.getElementById("invalid_date").innerHTML = "Input not a valid Date";
    } 
    else {
        return date
    }
}
function validateMonth(month) {
    if(month == ""){
        document.getElementById("invalid_month").innerHTML = "Month cannot be empty";
    }
    else if(isNaN(month)){
        document.getElementById("invalid_month").innerHTML = "Month has to be a number";
    }
    else if (month <=0 || month > 12) {
        document.getElementById("invalid_month").innerHTML = "Input not a valid Month";

    } else {
        return month
    }
}