let items = document.getElementById("Items");
let quantity = document.getElementById("quantity");
let submit = document.getElementById("submit");
let totalCost = document.getElementById("totalCost");
let itemPrices = 1000; 3// fixed unit

    submit.addEventListener("click", check);

function check(event) 
{

    event.preventDefault();
    
    
    let selectedValue = items.value;
    let quantityValue = quantity.value;
    
    if (selectedValue === "") 
    {
        alert("Please select an item!");
    } 
    else if (quantityValue === "")
    {
        alert("Please enter a quantity!");
        return;
    }
    else if (quantityValue < 0)
    {
        alert("Quantity cannot be negative!");
        return;
    }
    
   
   let total = itemPrices * quantityValue;
    totalCost.value = "$" + total.toFixed(2);
    
    console.log("Total calculated:", total);

    if (total > 1000)
    {
        alert("You are now eligible for gift coupon");
    }
    


}
//extra credit task
let checkListButton = document.getElementById("Check list");

checkListButton.addEventListener("click", confirmList);
function confirmList() 
{
    let selectedValue = items.value;
    let quantityValue = quantity.value;
    
    if (selectedValue === "") 
    {
        alert("Please select an item!");
    } 
    else if (quantityValue === "")
    {
        alert("Please enter a quantity!");
        return;
    }
    else if (quantityValue < 0)
    {
        alert("Quantity cannot be negative!");
        return;
    }
    else
    {        
        confirm("Your selection is: " + selectedValue + " with quantity: " + quantityValue);
    }
   
   let total = itemPrices * quantityValue;
    totalCost.value = "$" + total.toFixed(2);
    confirm("Total calculated: $" + total.toFixed(2));
    console.log("Total calculated:", total);

    if (total > 1000)
    {
        alert("You are now eligible for gift coupon");
    }
}

