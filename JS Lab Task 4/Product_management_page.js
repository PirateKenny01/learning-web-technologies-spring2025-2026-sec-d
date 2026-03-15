let items = document.getElementById("Items");
let quantity = document.getElementById("quantity");
let submit = document.getElementById("submit");
let totalCost = document.getElementById("totalCost");
let costPerItem = 1000; // Assuming a fixed cost per item for simplicity

submit.addEventListener("click", check);

function check(event) 
{
    let quantityValue = quantity.value;
    if (quantityValue === "")
    {
        event.preventDefault();
        alert("Please enter a quantity!");
        return;
    }
    
    let selectedValue = items.value;

    if (selectedValue === "") 
    {
        event.preventDefault();
        alert("Please select an item!");
    } 
    else 
    {
        alert("You selected: " + selectedValue);
    }
}