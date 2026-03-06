let ssc = document.getElementById("ssc");
let hsc = document.getElementById("hsc");
let bsc = document.getElementById("bsc");
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", check)

function check(event) 
{
    let sscChecked = ssc.checked;
    let hscChecked = hsc.checked;
    let bscChecked = bsc.checked;
    if (sscChecked) 
    {
        
        alert("SSC is selected!");
    }
    else if (hscChecked)
    {
        
        alert("HSC is selected!");
    }
    else if (bscChecked)
    {
        
        alert("BSc is selected!");
    }
    else
    {
        event.preventDefault();
        alert("Please select a degree.");
    }
}
