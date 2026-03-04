let male_radio = document.getElementById("male");
let female_radio = document.getElementById("female");
let other_radio = document.getElementById("other");
let submit_button = document.getElementById("submit_button");

submit_button.addEventListener("click",check )

function check (event) 
{
    let maleChecked = male_radio.checked;
    let femaleChecked = female_radio.checked;
    let otherChecked = other_radio.checked;
    if (maleChecked) 
    {
        event.preventDefault();
        alert("Male is  selected!");
    }
    else if (femaleChecked)
    {
        event.preventDefault();
        alert("Female is  selected!");
    }
    else if (otherChecked)
    {
        event.preventDefault();
        alert("Other is  selected!");
    }
    else
    {
        event.preventDefault();
        alert("Please select a gender.");
    }
};