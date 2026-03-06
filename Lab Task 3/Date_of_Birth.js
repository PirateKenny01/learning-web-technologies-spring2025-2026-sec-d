let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", check )
    
function check(event) {
    let d = day.value;
    let m = month.value;
    let y = year.value;

    if (d === "") {
        if (m === "") {
            if (y === "") {
                event.preventDefault();
                alert("You have not entered anything");
                return;
            }
            event.preventDefault();
            alert("Day and Month are not selected yet");
            return;
        }
        if (y === "") {
            event.preventDefault();
            alert("Day and Year are not selected yet");
            return;
        }
        event.preventDefault();
        alert("Day is not entered!");
    } 
    else if (m === "") {
        if (y === "") {
            event.preventDefault();
            alert("Month and Year are not selected yet");
            return;
        }
        event.preventDefault();
        alert("Month is not entered!");
    } 
    else if (y === "") {
        event.preventDefault();
        alert("Year is not entered!");
    }

    let dNum = parseInt(d);
    let mNum = parseInt(m);
    let yNum = parseInt(y);

    if (isNaN(dNum)) {
        event.preventDefault();
        alert("Day must be a number!");
        return;
    }
    if (isNaN(mNum)) {
        event.preventDefault();
        alert("Month must be a number!");
        return;
    }
    if (isNaN(yNum)) {
        event.preventDefault();
        alert("Year must be a number!");
        return;
    }
    if (dNum < 1) {
        event.preventDefault();
        alert("Day cannot be less than 1");
        return;
    }
    if (dNum > 31) {
        event.preventDefault();
        alert("Day cannot be greater than 31");
        return;
    }
    if (mNum < 1) {
        event.preventDefault();
        alert("Month cannot be less than 1");
        return;
    }
    if (mNum > 12) {
        event.preventDefault();
        alert("Month cannot be greater than 12");
        return;
    }
    if (yNum < 1900) {
        event.preventDefault();
        alert("Year cannot be less than 1900");
        return;
    }
    if (yNum > 2016) {
        event.preventDefault();
        alert("Year cannot be greater than 2016");
        return;
    }
}