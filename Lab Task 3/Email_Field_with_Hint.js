let email_input = document.getElementById("email");
let submit_button2 = document.getElementById("submit_button");

submit_button2.addEventListener("click", check);

function check(event) 
{
    let emailValue = email_input.value;
    let atSymbol = emailValue.indexOf("@");
    let dot = emailValue.lastIndexOf(".");
    let extension = emailValue.substring(dot + 1); 

    if (emailValue === "") 
    {
        event.preventDefault();
        alert("You have not entered an email!");
    } 
    
    else if (atSymbol < 1) 
    {
        event.preventDefault();
        alert("@ is missing!");
    }
   
    else if (dot === -1) 
    {
        event.preventDefault();
        alert(". is missing!");
    }
    
    else if (dot <= atSymbol + 1) 
    {
        event.preventDefault();
        alert(". must be placed after @ and there must be at least one character between @ and .");
    }
    
    else if (extension.length < 2) 
    {
        event.preventDefault();
        alert(".com must be there!");
    }
}