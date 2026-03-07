let userid = document.getElementById("userid");
let submit = document.getElementById("submit");
let file = document.getElementById("picture");

submit.addEventListener("click", check )

function check(event)
{
    if(userid.value == "")
    {
        event.preventDefault();
        alert("userid must be filled out");
        
    }
    else if(userid.value<1)
    {
        event.preventDefault();
        alert("userid must be a positive number");
    }
    else if(file.value == "")
    {
        event.preventDefault();
        alert("Please select a file to upload");
        
    }
}