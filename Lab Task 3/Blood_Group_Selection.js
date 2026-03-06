let bloodgroup = document.getElementById("bloodgroup");
let submit = document.getElementById("submit");

submit.addEventListener("click", check);

function check(event) 
{
    // Get the selected value
    let selectedValue = bloodgroup.value;

    if (selectedValue === "") 
    {
        // Stop the form from submitting
        event.preventDefault();
        alert("Please select a blood group!");
    } 
    else 
    {
        // If it's not empty, it means they chose a real group
        alert("You selected: " + selectedValue);
    }
}