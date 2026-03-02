let name_input=document.getElementById("name");
let submit_button=document.getElementById("submit_button");

submit_button.addEventListener("click", check);

function check(event)
{
    let first_letter = name_input.value;
    let atleast_two_words = name_input.value.split(" "); 
    let must_contain = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.- ";   
    let lettersOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if( name_input.value ==="")
    { 
        event.preventDefault(); 
        alert("You have not entered a name!");
    }
    else if (atleast_two_words.length < 2) 
    {  
        event.preventDefault();
        alert("Please enter at least two words.");
    }
    else if (lettersOnly.includes(first_letter[0]) === false) 
    {
        event.preventDefault();
        alert("The name must start with a letter!");
    }
    else 
    {
      
        for (let i = 0; i < name_input.value.length; i++) 
        {
            let character = name_input.value[i];

            
            if (must_contain.includes(character) === false) 
            {
                event.preventDefault();
                alert("Character '" + character + "' is not allowed! Only letters, dots, and dashes.");
                return;
            }
        }
    }
   
}

