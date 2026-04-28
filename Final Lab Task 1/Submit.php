<?php

    if(isset($_POST['submit']))
      {
        $username = $_REQUEST['username'];
        $password = $_REQUEST['password'];

        if($username == "" || $password == "")
            {
                echo "null username/password!";
            }
            elseif (!preg_match('/^[a-zA-Z0-9._-]+$/', $username)) 
                {
                    echo "Username can only contain alphanumeric characters, period, dash, or underscore.";
                }
            elseif (strlen($username) < 2) 
                {
                    echo "Username must contain at least two (2) characters.";
                }
            elseif (strlen($password) < 8) 
                {
                    echo "Password must not be less than eight (8) characters.";
                }
            elseif (!preg_match('/[@#$%]/', $password)) 
                {
                    echo "Password must contain at least one of the special characters (@, #, $, %).";
                }    
    else
        {
            if($username == $password)
            {
                echo "valid user!";
            }
            else
            {
                echo "invalid user!";
            }
        }
    


      }


      else   
       {
                # echo "Please submit the form first.";
                header("location: Login_page.html"); // Sends them back to the form
                exit();
                

       }

?>