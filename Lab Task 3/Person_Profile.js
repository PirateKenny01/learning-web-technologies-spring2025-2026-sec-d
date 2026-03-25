let name_input=document.getElementById("name");
let email_input = document.getElementById("email");
let male_radio = document.getElementById("male");
let female_radio = document.getElementById("female");
let other_radio = document.getElementById("other");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let bloodgroup = document.getElementById("bloodgroup");
let ssc = document.getElementById("ssc");
let hsc = document.getElementById("hsc");
let bsc = document.getElementById("bsc");
let msc = document.getElementById("msc");
let file = document.getElementById("picture");


let submit_button=document.getElementById("submit_button");

if (!submit_button) 
{
    console.error("Error: Could not find the element with id='submit_button'!");
} 
else 
{
    submit_button.addEventListener("click", function(event) 
    {
        console.log("Button clicked!"); 
        check1(event);
        check2(event);
        check3(event);
        check4(event);
        check5(event);
        check6(event);
        check7(event);
    });
}

function check1(event)
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

function check2(event) 
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

function check3(event) 
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

function check4(event) 
{
    let d = day.value;
    let m = month.value;
    let y = year.value;

    if (d === "") {
        if (m === "") {
            if (y === "") {
                event.preventDefault();
                alert("You have not entered anything in the DOB");
                return;
            }
            event.preventDefault();
            alert("Day and Month are not selected yet");
            return;
        }
        if (y === "") 
        {
            event.preventDefault();
            alert("Day and Year are not selected yet");
            return;
        }
        event.preventDefault();
        alert("Day is not entered!");
    } 
    else if (m === "") {
        if (y === "") 
        {
            event.preventDefault();
            alert("Month and Year are not selected yet");
            return;
        }
        event.preventDefault();
        alert("Month is not entered!");
    } 
    else if (y === "") 
    {
        event.preventDefault();
        alert("Year is not entered!");
    }

    let dNum = parseInt(d);
    let mNum = parseInt(m);
    let yNum = parseInt(y);

    if (isNaN(dNum)) 
    {
        event.preventDefault();
        alert("Day must be a number!");
        return;
    }
    if (isNaN(mNum)) 
    {
        event.preventDefault();
        alert("Month must be a number!");
        return;
    }
    if (isNaN(yNum)) 
    {
        event.preventDefault();
        alert("Year must be a number!");
        return;
    }
    if (dNum < 1) 
    {
        event.preventDefault();
        alert("Day cannot be less than 1");
        return;
    }
    if (dNum > 31) 
    {
        event.preventDefault();
        alert("Day cannot be greater than 31");
        return;
    }
    if (mNum < 1) 
    {
        event.preventDefault();
        alert("Month cannot be less than 1");
        return;
    }
    if (mNum > 12) 
    {
        event.preventDefault();
        alert("Month cannot be greater than 12");
        return;
    }
    if (yNum < 1900) 
    {
        event.preventDefault();
        alert("Year cannot be less than 1900");
        return;
    }
    if (yNum > 2016) 
    {
        event.preventDefault();
        alert("Year cannot be greater than 2016");
        return;
    }
}

function check5(event) 
{
    
    let selectedValue = bloodgroup.value;

    if (selectedValue === "") 
    {
        event.preventDefault();
        alert("Please select a blood group!");
    } 
    else 
    {
        alert("You selected: " + selectedValue);
    }
}

function check6(event) 
{
    let sscChecked = ssc.checked;
    let hscChecked = hsc.checked;
    let bscChecked = bsc.checked;
    let mscChecked = msc.checked;
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
    else if (mscChecked)
    {
        
        alert("Msc is selected!");
    }
    else
    {
        event.preventDefault();
        alert("Please select a degree.");
    }
}

function check7(event)
{
    
    if(file.value == "")
    {
        event.preventDefault();
        alert("Please select a file to upload");
        
    }
}


