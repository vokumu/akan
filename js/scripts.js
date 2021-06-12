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