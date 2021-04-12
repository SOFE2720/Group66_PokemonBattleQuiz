<!--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
    Log In/Sign In Page: Here is where You Login or sign in to the page
-->
<html>
    <head>
        <!--============ StyleSheet==============-->
        <link href="signStylesheet.css" rel="stylesheet" type="text/css">
        <!--Making the file paths for the navigation bar-->
        <<div class="style__navbar">
            <nav>
                <p class="nav">Welcome To The Pokemon Battle Quiz</p>
            </nav>
         </div>
        <title>
            Log In/Sign In
        </title>
        <!--Link for the font used throughout the website-->
        <link href="https://fonts.googleapis.com/css?family=Clicker+Script|Lobster+Two|Pacifico" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Felipa" rel="stylesheet">
    </head>
    <body>
        
        <!--========== Login ==========-->
        <div class="first">
            <div>
                <h1 class="name">Login</h1>
            </div>
            <div class="cred">
                <form action="proccess.php" method="post"> 
                    <br>
                    Username: <input type="text" name="username" required="">
                    <br>
                    <br>
                    Password: <input type="password" name="password" required="">
                    <br>
                    <br>
                    <input type="submit" name="action2" value="Login">
                    <br>
                </form>
            </div>
        <!--=======Register====-->
            <div>
                <h1 class="name">Register Here</h1>
            </div>
            <div class="cred">
                <form action="proccess.php" method="post"> 
                    <br>
                    Username: <input type="text" name="username" required="">
                    <br>
                    <br>
                    Password: <input type="password" name="password" required="">
                    <br>
                    <br>
                    <input type="submit" name="action" value="Register">
                    <br>
                </form>
            </div>
        </div>
        <!--========== Footer ==========-->
        <div class="footer">
            <p>
                Yash, Kalapan & Abdul-Moiz &copy 2020 | All Rights Reserved
            </p>
        </div>
    </body>
</html>