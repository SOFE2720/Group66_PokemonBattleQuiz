<!--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
    Process: Here is where all data is processed
-->
<html>
    <head>
        <!--============ StyleSheet==============-->
        <link href="proccessStylesheet.css" rel="stylesheet" type="text/css">
        <title>
            Process
        </title>
        <!--Link for the font used throughout the website-->
        <link href="https://fonts.googleapis.com/css?family=Clicker+Script|Lobster+Two|Pacifico" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Felipa" rel="stylesheet">
    </head>
    <body>
        <div class="first">
            <!--========== PHP Code ==========-->
            <?php
                if (isset($_POST['action']) == 'Register') {
                    /*
                    Get the form info
                    */
                    $username=$_POST["username"];
                    $password=$_POST["password"];
                    $url="homePage.php?username=".$username;
                    /*
                    /* Make LowerCase */
                    $username=strtolower($username);
                    $username=chop($username);
                    /*
                    Create a variable with the form info in the format I want to write to the file with
                    */  
                    $info="$username,$password\r\n";

                    try{
                        $data=file_get_contents("userReg.txt");//read the data from the file
                        $lines=explode("\r\n", $data);//explode all lines into an array using the \r\n
                        $match=false;//use this to keep track of the name existing in our file
                        foreach ($lines as $value) {//go through each line in the array $lines
                            $line=explode(",", $value);//explode each line using the comma
                            /*
                            Now that I have each line exploded into its own array I can check for a match between the proper elements and the users username and password. The username is the first element of each line (see $info) and the password is in the second element.
                            */
                            if($username==$line[0])//if it exists set match to true and get out of the for loop (no need to continue checking)
                            {
                                $match=true;
                                break;
                            }
                        }

                    }catch(Exception $e){echo "ERROR, no user file exists.";}
                    //once all checking is done refer to $match to see if the name exists and if not write to the file otherwise don't and let the user know 
                    if($match)
                    {
                        echo "<span>Sorry but you have already registered.</span>";
                    }
                    else
                    {
                        echo "<span>Thank you for registering!</span>";
                        file_put_contents("userReg.txt", $info, FILE_APPEND);
                        header('Location: '.$url);
                        exit();
                    }
                }
                if (isset($_POST['action2']) == 'Login') {
                    /*
                    Get the form info
                    */
                    $username=$_POST["username"];
                    $password=$_POST["password"];
                    $url="homePage.php?username=".$username;
                    /* Make LowerCase */
                    $username=strtolower($username);
                    $username=chop($username);
                    /*
                    Create a variable with the form info in the format I want to write to the file with
                    */  
                    $info="$username,$password\r\n";

                    try{
                        $data=file_get_contents("userReg.txt");//read the data from the file
                        $lines=explode("\r\n", $data);//explode all lines into an array using the \r\n
                        $match=false;//use this to keep track of the name existing in our file
                        foreach ($lines as $value) {//go through each line in the array $lines
                            $line=explode(",", $value);//explode each line using the comma
                            /*
                            Now that I have each line exploded into its own array I can check for a match between the proper elements and the users username and password. The username is the first element of each line (see $info) and the password is in the second element.
                            */
                            if($username==$line[0] && $password==$line[1])//if the name exists set match to true and get out of the for loop (no need to continue checking)
                            {
                                $match=true;
                                break;
                            }
                        }

                    }catch(Exception $e){echo "ERROR, no user file exists.";}
                    //once all checking is done refer to $match to see if the name exists and if not write to the file otherwise don't and let the user know 
                    if($match==true)
                    {
                        echo "<span>Welcome</span>";
                        header('Location: '.$url);
                        exit();
                    }
                    else
                    {
                        echo "<span>Invalid Credentials! Please Try Again.</span>";
                    }
                }
            ?>
        </div>
        <div class="button">
            <form action="signIn.php" method="post"> 
                <input type="submit" name="action" value="Go Back">
            </form>
        </div>
    </body>
</html>
