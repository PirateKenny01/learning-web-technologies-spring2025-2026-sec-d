<?php
// Check which button was clicked
if (isset($_POST['login_submit'])) 
{
     handleLogin();
} 
elseif (isset($_POST['change_password_submit'])) 
{
    handleChangePassword();
}
elseif (isset($_POST['profile_submit'])) 
{
    handleProfilePicture();
} 
elseif (isset($_POST['registration_submit'])) 
{
    handleRegistration();
}
else 
{
    header("location: Login_page.html"); // Sends them back to the form
    exit();
}

function handleLogin() 
{
   //$test = $_POST['something_fake']; // This will be undefined since it doesn't exist in the form, so we can test if it's set or not to determine if the form was submitted correctly.
   $username = $_POST['username'] ?? ""; // The ?? operator is the null coalescing operator. It checks if $_POST['username'] is set and not null. If it is, it uses that value; otherwise, it defaults to an empty string.
   $password = $_POST['password'] ?? "";

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

function handleChangePassword() 
{
    $current_input = $_POST['Current_Password'] ?? '';
    $new_password = $_POST['New_Password'] ?? '';
    $retype_new_password = $_POST['Retype_New_Password'] ?? '';

    if($current_input =="")
    {
        echo "Current password cannot be empty.";
    }
    elseif ($new_password == "") 
    {
        echo "New password cannot be empty.";
    }
    elseif ($retype_new_password == "") 
    {
        echo "Retype new password cannot be empty.";
    }
    elseif ($new_password === $current_input)
    {
        echo "New password cannot be the same as the current password.";
    }
    elseif ($new_password !== $retype_new_password) 
    {
        echo "New password and retype new password do not match.";
    } 
    else 
    {
        echo "Password changed successfully!";
    }
}

// Function for Profile Picture Upload
function handleProfilePicture() 
{
    if (isset($_FILES['profile_pic'])) 
    {
        // 1. Get file information
        $file_name = $_FILES['profile_pic']['name'];
        $file_size = $_FILES['profile_pic']['size'];
       
        // 2. Define Validation Rules
        // Rule A: Check format (jpeg, jpg, png)
        $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        $allowed_ext = ['jpeg', 'jpg', 'png'];

        // Rule B: Check size (4MB = 4 * 1024 * 1024 bytes)
        $max_size = 4 * 1024 * 1024;

        // 3. Run Validations
        if (!in_array($file_ext, $allowed_ext)) 
        {
            echo "Error: Only JPEG, JPG, and PNG files are allowed.";
        } 
        elseif ($file_size > $max_size) 
        {
            echo "Error: File size must be less than 4MB.";
        } 
        else 
        {
            $src = $_FILES['profile_pic']['tmp_name'];
            // 4. If validation passes, move the file
            $des = "uploads/" . basename($_FILES['profile_pic']['name']); // Ensure 'uploads' directory exists and is writable

            if (move_uploaded_file($src, $des)) 
            {
                echo "Profile Picture Uploaded!";
            } 
            else 
            {
                echo "Upload failed.";
            }
        }
    }
}

function handleRegistration() 
{
    $name     = $_POST['name'] ?? "";
    $email    = $_POST['email'] ?? "";
    $username = $_POST['username'] ?? "";
    $password = $_POST['password'] ?? "";
    $conf_pw  = $_POST['confirm_password'] ?? "";
    $gender   = $_POST['gender'] ?? ""; 
    $day      = $_POST['day'] ?? "";
    $month    = $_POST['month'] ?? "";
    $year     = $_POST['year'] ?? "";

    if (empty($name)     || 
        empty($email)    || 
        empty($username) || 
        empty($password) || 
        empty($conf_pw)  || 
        empty($day)      || 
        empty($month)    || 
        empty($year)) 
    {
        echo "All text fields are required!";
    }
    // GENDER LOGIC: Check if gender is selected
    elseif (empty($gender)) 
    {
        echo "Please select a gender.";
    }
    // Optional: Strict check to ensure they didn't "hack" the HTML value
    //elseif (!in_array($gender, ['male', 'female', 'other'])) 
    //{
    //    echo "Invalid gender selection.";
    //}
    elseif (!preg_match("/^[a-zA-Z-' ]*$/", $name) || strlen($name) < 2) 
    {
        echo "Name must be at least 2 characters and contain only letters/spaces.";
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
    {
        echo "Invalid email format.";
    }
    elseif ($password !== $conf_pw) 
    {
        echo "Passwords do not match!";
    }
    elseif (!checkdate((int)$month, (int)$day, (int)$year)) 
    {
        echo "Invalid Date of Birth.";
    }
    else 
    {
        echo "Registration Successful!<br>";
        echo "Username: " . htmlspecialchars($username) . "<br>";
        echo "Gender: " . ucfirst($gender); // ucfirst makes it "Male" instead of "male"
    }
}
?>