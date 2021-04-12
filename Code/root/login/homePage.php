<!--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
    Home Page: Here is all the links to play the game
-->
<!-- PHP CODE -->
<?php
    /* Get Variables from process.php */
    $username=$_GET["username"];
    $url="../quiz.php?username=".$username;
    $url2="leaderboard.php?username=".$username;
    $url3="screenShots.php?username=".$username;
?>
<html>
    <head>
        <!--============ StyleSheet==============-->
        <link href="homeStylesheet.css" rel="stylesheet" type="text/css">
        <!--Making the file paths for the navigation bar-->
        <div class="style__navbar">
         <nav>
            <p class="nav">Welcome To The Pokemon Battle Quiz</p>
            <p id="username">Welcome <?=$username?>!<p>
            <div class="logout">
                <input type="submit" name="action" value="Logout" onclick="location.href = 'signIn.php';">
            </div>
         </nav>
         </div>
        <title>
            Homepage
        </title>
        <!--Link for the font used throughout the website-->
        <link href="https://fonts.googleapis.com/css?family=Clicker+Script|Lobster+Two|Pacifico" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Felipa" rel="stylesheet">
    </head>
    <body>
        <!--========== Welcome ==========-->
        <div class="first">
            <div>
                <h1 class="name">Welcome</h1>
            </div>
            <div class="about">
                <p>
                    In this quiz, you will be answering a series of questions. Each time you get a question right, your pokemon will attack your opponent but if you get a question wrong, your pokemon will be attacked.
                </p>
            </div>
            <div class="start">
                <input type="submit" name="action" value="Start Quiz" onclick="location.href = '<?=$url?>';">
                <br>
                <input type="submit" name="action2" value="Stats" onclick="location.href = '<?=$url2?>';">
                <br>
                <input type="submit" name="action2" value="How To Play" onclick="location.href = '<?=$url3?>';">
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