<!--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
	Quiz Page: Here is where the quiz is played
-->
<!--PHP CODE -->
<?php
	/* Array */
	$arrayQuestions = array(
		"0"=>"What is the correct way to\r\ninsert a line break?",
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
		localStorage.setItem("questions", questions);
	</script>
	<body>
		<center>
			<div id="background" class="background">
				</div>
				<div class="psVita">
					<div class="game" id="game"></div>
				</div>
			</div>
		</center>
	</body>
</html>