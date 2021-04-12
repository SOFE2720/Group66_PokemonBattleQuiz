<!--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
    Stats page: here you can see your stats
-->
<html>
    <head>
        <!--============ StyleSheet==============-->
        <link href="leadStylesheet.css" rel="stylesheet" type="text/css">
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
                <p class="nav">Your Stats</p>
            </nav>
         </div>
        <title>
            Stats
        </title>
        <!--Link for the font used throughout the website-->
        <link href="https://fonts.googleapis.com/css?family=Clicker+Script|Lobster+Two|Pacifico" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Felipa" rel="stylesheet">
        <!--Scripts -->
        <script src="../quiz.js"></script>
        <script src="../quizStart.js"></script>
        <script type="text/javascript">
            var res=localStorage.getItem("result");
        </script>
    </head>
    <body>
        <div class="first">
            <table class="courseTable" style="color: white;">
                <tr>
                    <td>Player</td>
                    <td>Score</td>
                </tr>
                    <?php

                        $username=$_GET["username"];
                        $score="<script>document.writeln(res);</script>";
                        echo "<tr><td>$username</td><td>$score%</td></tr>";
                    ?>      
            </table>
        </div>
        <div class="footer">
            <p>
                Yash, Kalapan, Abdul-Moiz &copy 2020 | All Rights Reserved
            </p>
        </div>
    </body>
</html>