<!--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
	Quiz Page: Here is where the quiz is played
-->
<!--PHP CODE -->
<?php
	/* Get Username from homepage */
	$username=$_GET["username"];
	$url="login/homePage.php?username=".$username;
	/* Array */
	$arrayQuestions = array(
		"0"=>"What is the correct way to\r\ninsert a line break?",
		"1"=>"What is the correct tag\r\nfor the largest heading?",
		"2"=>"All variables in PHP start\r\nwith:",
		"3"=>"What is the correct way to\r\nadd a comment in PHP?",
		"4"=>"Which operator is used if\r\nboth values are equal?",
		"5"=>"To start a paragraph in\r\nin html you use:",
		"6"=>"If x=array(1,2,3,6)\r\nWhat is x[2]?",
		"7"=>"You can reference a\r\nfile by using:",
		"8"=>"A descriptive tag\r\nstarts with which tag:",
		"9"=>"which of the following\r\n are delimiters?",
		"10"=>"unset(array) deletes\r\nthe whole array.",
		"11"=>"Web programming is the best\r\ncourse ever.",
		"12"=>"The Factorial of 5 is\r\n 120.",
	);
?>
<html>
	<head>
		<title>
			Pokemon Battle
		</title>
	</head>
	<!--Stylesheet -->
	<link href="stylesheet.css" rel="stylesheet" type="text/css">
	<!--Scripts-->
	<script src="phaser.min.js"></script>
    <script src="phaser.js"></script>
    <script src="boot.js"></script>
    <script src="menu.js"></script>
    <script src="quiz.js"></script>
    <script src="quizStart.js"></script>
    <script src="preloadState.js"></script>
    <!--Intialize Game -->
    <script type="text/javascript">
		var game = new Phaser.Game(750, 430, Phaser.AUTO, 'game');
		game.state.add("boot",boot);
		game.state.add("preloadState",preloadState);
		game.state.add("menu",menu);
		game.state.add("quiz",quiz);
		game.state.add("quizStart",quizStart);
		game.state.start("boot");
		/* Reload Page Once to allow Php variables to be taken */
		window.onload = function() {
		    if(!window.location.hash) {
		        window.location = window.location + '#loaded';
		        window.location.reload();
		    }
		}
		/* Send Variables to Javascript Files */
		var questions = <?php echo json_encode($arrayQuestions); ?>;
		var name = <?php echo json_encode($username); ?>;
		localStorage.setItem("questions", questions);
		localStorage.setItem("name", name);
	</script>
	<body>
		<center>
			<div id="background" class="background">
				<div class="startLog">
					<input type="submit" name="action" value="Menu" onclick="location.href = '<?=$url?>';">
				</div>
				<div class="psVita">
					<div class="game" id="game"></div>
				</div>
			</div>
		</center>
	</body>
</html>