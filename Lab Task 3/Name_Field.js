let name_input=document.getElementById("name");
let submit_button=document.getElementById("submit_button");

submit_button.addEventListener("click", check);

function check()
{    
    if( name_input.value ==="")
    {
        alert("You have not entered a name!");
    }
   
}

