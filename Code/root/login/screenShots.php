<!--Abdul-Moiz, Nancy, Kalapan, Yash Patel
    ScreenShot Page: Here You can see the ScreenShots of the Game!
-->
<html>
    <head>
        <!--============ StyleSheet==============-->
        <link href="screenStylesheet.css" rel="stylesheet" type="text/css">
        <!--Making the file paths for the navigation bar-->
        <div class="style__navbar">
        <?php
            //Get username and url to link back to homepage
            $username=$_GET["username"];
            $url="homePage.php?username=".$username;
        ?>
        <div class="startLog">
            <input type="submit" name="action" value="Menu" onclick="location.href = '<?=$url?>';">
        </div>
            <nav>
                <p class="nav">How to Play</p>
            </nav>
         </div>
        <title>
            How to Play
        </title>
        <!--Link for the font used throughout the website-->
        <link href="https://fonts.googleapis.com/css?family=Clicker+Script|Lobster+Two|Pacifico" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Felipa" rel="stylesheet">
    </head>
    <body>
        <div class="first">
            <div>
                <img src="../assets/quizSite.png" style="width: 800px; height: 400px;">
                <br><br>
                <div class="about">
                    <p>The above image is the main html page where you can start the quiz or look at the stats.</p>
                </div>
            </div>
            <br><br>
            <div>
                <img src="../assets/homeScreen.jpg" style="width: 800px; height: 400px;">
                <br><br>
                <div class="about">
                    <p>The above image is the starter screen for the game where you can click play to start the game. In the game you will be answering a series of questions and each time you get a question right, your pokemon will attack your opponent. However, when you get a question wrong, your pokemon will take damage.</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>
                Yash, Kalapan & Abdul-Moiz &copy 2020 | All Rights Reserved
            </p>
        </div>
    </body>
</html>