/*--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
    Game Screen
*/
/*** Variables ***/
/* Sprites */
var background;
var pokemonBack;
var garyBattle;
var playerBase;
var enemyBase;
var playerBar;
var playerBack;
var enemyBar;
var squirtle;
var pokemonOakText;
/* Player Health And Enemy Health */
var playerHP;
var enemyHP;
/* Health Bars */
var enemyHPBar;
var playerHPBar;
/* Player Level */
var playerLvl=5;
/* Attack Animations */
var scratch;
var scratch2;
var scratchAnim2;
var scratchAnim;
/* Battle Sound Effects */
var squirtleCry;
var charmanderCry;
var scratchSound;
var LvlUp;
var victoryTrainer;
var normalDamage;
/* Display Word by Word Text */
var line1 = [];
var wordIndex1 = 0;
var lineIndex1 = 0;
var wordDelay1 = 120;
var lineDelay1 = 400;
var content1=["Rival Gary would like to battle!"];
var counter1=0;
/* Text */
var text;
/* Starting Battle Animations */
var pokeball2;
var pokeballOpen;
var pokeball3;
var pokeballOpen2;
var playerThrow;
/* Music */
var music;
/* Retrieve Data */
var data;
var show;
/* Number Generators */
var generate;
/* Question Tracker */
var tracker=0;
var questionsWrong=0;
var score=0;
/* Buttons */
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;
var buttonOne1;
var buttonTwo1;
var buttonThree1;
var buttonFour1;
var buttonOne2;
var buttonTwo2;
var buttonThree2;
var buttonFour2;
/* Array */
var random= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var x=0;
var result;
/* Create Game */
var quizStart={

	create: function() {
		/* Create Phaser.Physics.Arcade */
		game.physics.startSystem(Phaser.Physics.ARCADE);
		/* Create Background */
		background=game.add.sprite(0,0,"battleBack");
		background.scale.x=1.5;
		background.scale.y=0.9;
		/* Create Sprites */
		battleOption=game.add.sprite(-5,336, "battleOption");
		battleOption.scale.x=1.5;
   		charmanderBack=game.add.sprite(10,200, "charmanderBack");
   		garyBattle=game.add.sprite(500,25, "garyBattle");
   		enemyBase=game.add.sprite(480,150, "enemyBase");
   		playerBase=game.add.sprite(-150,290, "playerBase");
   		playerBar=game.add.sprite(495,250, "playerBar");
   		enemyBar=game.add.sprite(-10,60, "enemyBar");
   		playerBack=game.add.sprite(0,150, "playerBack");
   		squirtle=game.add.sprite(530,110, "squirtle");
   		pokemonOakText=game.add.sprite(0,336,"pokemonOakText");
		pokemonOakText.scale.x=1.071;
	    pokemonOakText.scale.y=0.75;
	    /* Create Music And Sound Effects */
	    squirtleCry=game.add.audio("squirtleCry");
	    normalDamage=game.add.audio("normalDamage");
		charmanderCry=game.add.audio("charmanderCry");
		scratchSound=game.add.audio("scratchSound");
		LvlUp=game.add.audio("LvlUp");
		victoryTrainer=game.add.audio("victoryTrainer");
		music=game.add.audio("quizStartTheme");
		music.loopFull();
   		/* Set CharmanderBack to variable pokemonBack to enable switch later on */
   		pokemonBack=charmanderBack;
   		/*Set Visibility to False */
   		battleOption.visible=false;
   		charmanderBack.visible=false;
   		squirtle.visible=false;
   		enemyBar.visible=false;
   		playerBar.visible=false;
   		/* Create Text */
		text1 = game.add.text(30,350, '', { font: "30px Conv_pkmndp", fill: "#484848" });
		buttonText = game.add.text(410,352, '', { font: "24px Conv_pkmndp", fill: "#484848" });
		buttonText2 = game.add.text(410,398, '', { font: "24px Conv_pkmndp", fill: "#484848" });
		buttonText3 = game.add.text(570,350, '', { font: "24px Conv_pkmndp", fill: "#484848" });
		buttonText4 = game.add.text(555,398, '', { font: "24px Conv_pkmndp", fill: "#484848" });
		buttonText.visible=false;
		buttonText2.visible=false;
		buttonText3.visible=false;
		buttonText4.visible=false;
		/* Create Buttons */
		buttonOne=game.add.button(370,340,"buttonOne",buttonOne, this);
		buttonTwo=game.add.button(370,385,"buttonOne",buttonTwo, this);
		buttonThree=game.add.button(530,340,"buttonOne",buttonThree, this);
		buttonFour=game.add.button(530,385,"buttonOne",buttonFour, this);
		buttonOne.visible=false;
		buttonTwo.visible=false;
		buttonThree.visible=false;
		buttonFour.visible=false;
		/* Create Button Mouseovers */
		buttonOne.onInputOver.add(Oneover, this);
       	buttonOne.onInputOut.add(Oneout, this);
		buttonTwo.onInputOver.add(Twoover, this);
       	buttonTwo.onInputOut.add(Twoout, this);
       	buttonThree.onInputOver.add(Threeover, this);
       	buttonThree.onInputOut.add(Threeout, this);
       	buttonFour.onInputOver.add(Fourover, this);
       	buttonFour.onInputOut.add(Fourout, this);
       	/* Create Button Animations */
		buttonOne1=buttonOne.animations.add("buttonOne1",[1]);
		buttonOne2=buttonOne.animations.add("buttonOne2",[0]);
		buttonTwo1=buttonTwo.animations.add("buttonTwo1",[1]);
		buttonTwo2=buttonTwo.animations.add("buttonTwo2",[0]);
		buttonThree1=buttonThree.animations.add("buttonThree1",[1]);
		buttonThree2=buttonThree.animations.add("buttonThree2",[0]);
		buttonFour1=buttonFour.animations.add("buttonFour1",[1]);
		buttonFour2=buttonFour.animations.add("buttonFour2",[0]);
		/* Call Text Function */
		nextLine1();
   		/* Bring to Top */
   		game.world.bringToTop(pokemonBack);
   		game.world.bringToTop(garyBattle);
   		game.world.bringToTop(battleOption);
   		game.world.bringToTop(buttonOne);
   		game.world.bringToTop(buttonTwo);
   		game.world.bringToTop(buttonThree);
   		game.world.bringToTop(buttonFour);
   		game.world.bringToTop(buttonText);
   		game.world.bringToTop(buttonText2);
   		game.world.bringToTop(buttonText3);
   		game.world.bringToTop(buttonText4);
   		game.world.bringToTop(pokemonOakText);
   		game.world.bringToTop(text1);
   		/* Create Player Health And Enemy Health */
		playerHP=100;
		enemyHP=100;
   		/* Create Player HealthBar */
		this.barProgress=100;
		this.bar = this.add.bitmapData(100, 5.7);
		playerHPBar=game.add.sprite(677 - (this.bar.width * 0.5), 290, this.bar);
       	game.add.tween(this).to({barProgress:playerHP}, 2000, null, true, 0, 0);
       	playerHPBar.visible=false;
		/* Create Enemy HealthBar */
		this.barProgress2=100;
		this.bar2 = this.add.bitmapData(100, 5.7);
		enemyHPBar=game.add.sprite(156 - (this.bar2.width * 0.5), 100, this.bar2);
       	game.add.tween(this).to({barProgress2:enemyHP}, 2000, null, true, 0, 0);
       	enemyHPBar.visible=false;
       	/* Create Battle Text */
		enemyName = game.add.text(10,66, '', { font: "26px Conv_pkmndp", fill: "#484848", fontWeight:"bold"});
		playerName = game.add.text(535,256, '', { font: "26px Conv_pkmndp", fill: "#484848", fontWeight:"bold"});
		enemyName.visible=false;
		enemyName.text="SQUIRTLE";
		playerName.visible=false;
		playerName.text="CHARMANDER";
		enemyLvl = game.add.text(170,68, '', { font: "26px Conv_pkmndp", fill: "#484848", fontWeight:"bold"});
		enemyLvl.text="Lv5";
		enemyLvl.visible=false;
		playerLvlText= game.add.text(690,256, '', { font: "26px Conv_pkmndp", fill: "#484848", fontWeight:"bold"});
		playerLvlText.text="Lv"+playerLvl;
		playerLvlText.visible=false;
		/* Create Starting Battle Animations */
   		pokeball2=game.add.sprite(580,150,"pokeball2");
		pokeball2.visible=false;
		pokeball3=game.add.sprite(75,265,"pokeball3");
		pokeball3.visible=false;
		pokeballOpen=pokeball2.animations.add("pokeballOpen",[0,1,2]);
		pokeballOpen2=pokeball3.animations.add("pokeballOpen2",[0,1,2]);
		playerThrow=playerBack.animations.add("playerThrow",[0,1,2,3,4]);
		/* Create Battle Attack Animations */
   		scratch=game.add.sprite(530,115,"scratch");
		scratch.visible=false;
		scratch2=game.add.sprite(40,220,"scratch2");
		scratch2.visible=false;
		scratchAnim=scratch.animations.add("scratchAnim",[0,1,2,3,4]);
		scratchAnim2=scratch2.animations.add("scratchAnim2",[0,1,2,3,4]);
		/* Create Animation Stopped Functions */
		pokeballOpen.onComplete.add(animationsStopped2,this);
		playerThrow.onComplete.add(animationsStopped3,this);
		pokeballOpen2.onComplete.add(animationsStopped4,this);
		scratchAnim.onComplete.add(animationsStopped5,this);
		scratchAnim2.onComplete.add(animationsStopped6,this);
		/* Retrieve Variables From Php Page */
		data=localStorage.getItem("questions");
		/* Create Functions */
		function nextLine1() {
		    if (lineIndex1 === content1.length)
		    {
		        //  We're finished this text
		        return;
		    }
		    //  Split the current line on spaces, so one word per array element
		    line1 = content1[lineIndex1].split(' ');
		    //  Reset the word index to zero (the first word in the line)
		    wordIndex1 = 0;
		    //  Call the 'nextWord' function once for each word in the line (line.length)
		    game.time.events.repeat(wordDelay1, line1.length, nextWord1, this);
		    //  Advance to the next line
		    lineIndex1++;
		    /* Change Message */
		    setTimeout(function() {changeMessage1();counter1++;}, 4500);//4500
		}
		function nextWord1() {
		    //  Add the next word onto the text string, followed by a space
		    if(text1==undefined || text1.text==undefined || line1[wordIndex1]==undefined)return;
	 
		    text1.text = text1.text.concat(line1[wordIndex1] + " ");
		    //  Advance the word index to the next word in the line
		    wordIndex1++;
		    //  Last word?
		    if(wordIndex1 === line1.length)
		    {
		        //  Add a carriage return
		        text1.text = text1.text.concat("\n");
		        //  Get the next line after the lineDelay amount of ms has elapsed
		        game.time.events.add(lineDelay1, nextLine1, this);
	    	}
		}
		/* Changes Message */
		function changeMessage1()
		{
			/* Check Counter to display the next line */
			if(counter1==0)
			{
				myMessage1(["The Quiz Will Now Begin..."]);
				pokeball2.animations.play("pokeballOpen",3,false);
				pokeball2.visible=true;
				garyBattle.visible=false;
			}
		}
		/* Erase Old Text And Add New Set Of Text */	
		function myMessage1(message)
		{
			text1.text="";
			lineIndex1=0;
			wordIndex1=0;
			content1=message;
			wordDelay1=120;
			lineDelay1=400;		
	        nextLine1();
		}
		/* All Animation Stopped Functions */
		function animationsStopped2() {
			squirtle.visible=true;
			squirtleCry.play();
			pokeball2.visible=false;
			setTimeout(function(){myMessage1(["Go! CHARMANDER!"]);}, 1000);
			setTimeout(function(){playerBack.animations.play("playerThrow",4,false);}, 1000);
		}
		function animationsStopped3() {
			pokeball3.animations.play("pokeballOpen2",3,false);
			pokeball3.visible=true;
			playerBack.visible=false;
		}
		function animationsStopped4() {
			charmanderBack.visible=true;
			charmanderCry.play();
			playerBar.visible=true;
			enemyBar.visible=true;
			enemyName.visible=true;
			playerName.visible=true;
			playerLvlText.visible=true;
			enemyLvl.visible=true;
	        playerHPBar.visible=true;
	        enemyHPBar.visible=true;
			pokeball3.visible=false;
			pokemonOakText.visible=false;
			battleOption.visible=true;
			nextQuestion();
		}
		function animationsStopped5() {
			charmanderBack.x-=10;
			scratch.visible=false;
			enemyHP=enemyHP-10;
			this.barProgress2=enemyHP;
	    	setTimeout(function(){squirtle.visible=false}, 500);
	    	setTimeout(function(){squirtle.visible=true}, 600);
	    	setTimeout(function(){squirtle.visible=false}, 700);
	    	setTimeout(function(){squirtle.visible=true}, 800);
	    	setTimeout(function(){normalDamage.play();}, 800);
	    	/* Check If Enemy is dead or not */
	    	if(enemyHP<=0)
	    	{
	    		score=tracker+questionsWrong;
	    		result=(Math.round((tracker/score)*100));
	    		setTimeout(function(){squirtleCry.play();}, 2000);
	    		setTimeout(function(){enemyBar.visible=false;}, 2000);
	    		setTimeout(function(){enemyHPBar.visible=false;}, 1500);
	    		setTimeout(function(){myMessage1(["Foe SQUIRTLE","fainted!"]);}, 2000);
	    		setTimeout(function(){enemyLvl.visible=false;}, 2000);
	    		setTimeout(function(){enemyName.visible=false;}, 2000);
	    		setTimeout(function(){squirtle.visible=false;}, 2000);
	    		setTimeout(function(){music.pause();}, 2000);
	    		setTimeout(function(){victoryTrainer.play();}, 2000);
	    		setTimeout(function(){myMessage1(["Congratulations You Won!","Your Score is "+tracker+"/"+score+"! Click Menu at the top to go back"]);}, 4000);
	    		localStorage.setItem("result", result);
	    	}
	    	else
	    	{
	    		setTimeout(function() {nextQuestion();}, 4000);
	    	}
		}
		function animationsStopped6() {
			squirtle.x+=10;
			scratch2.visible=false;
			playerHP=playerHP-25;
			this.barProgress=playerHP;
			setTimeout(function(){charmanderBack.visible=false}, 500);
	    	setTimeout(function(){charmanderBack.visible=true}, 600);
	    	setTimeout(function(){charmanderBack.visible=false}, 700);
	    	setTimeout(function(){charmanderBack.visible=true}, 800);
	    	setTimeout(function(){normalDamage.play()}, 800);
	    	/* Check If player is dead or not */
	    	if(playerHP==0)
	    	{
	    		score=tracker+questionsWrong;
	    		result=(Math.round((tracker/score)*100));
	    		setTimeout(function(){charmanderCry.play();}, 2000);
	    		setTimeout(function(){playerBar.visible=false;}, 2000);
	    		setTimeout(function(){playerHPBar.visible=false;}, 1500);
	    		setTimeout(function(){myMessage1(["Charmander","fainted!"]);}, 2000);
	    		setTimeout(function(){playerLvl.visible=false;}, 2000);
	    		setTimeout(function(){playerLvlText.visible=false;}, 2000);
	    		setTimeout(function(){playerName.visible=false;}, 2000);
	    		setTimeout(function(){charmanderBack.visible=false;}, 2000);
	    		setTimeout(function(){myMessage1(["Ooof Nice Try","Your Score is "+tracker+"/"+score+"! Click Menu at the top to go back"]);}, 4000);
	    		localStorage.setItem("result", result);
	    	}
	    	else
	    	{
	    		setTimeout(function() {nextQuestion();}, 4000);
	    	}
    	}
    	/* Button Clicks In Quiz */
		function buttonOne(){
			pokemonOakText.visible=true;
			battleOption.visible=false;
			hideButton();
			if (show=="What is the correct way to\r\ninsert a line break?"||show=="You can reference a\r\nfile by using:")
			{
				correct();
			}
			else
			{
				wrong();
			}
		}
		function buttonTwo(){
			pokemonOakText.visible=true;
			battleOption.visible=false;
			hideButton();
			if (show=="What is the correct tag\r\nfor the largest heading?" || show=="All variables in PHP start\r\nwith:" || show=="which of the following\r\n are delimiters?") 
			{
				correct();
			}
			else 
			{
				wrong();
			}
		}
		function buttonThree(){
			pokemonOakText.visible=true;
			battleOption.visible=false;
			hideButton();
			if (show=="What is the correct way to\r\nadd a comment in PHP?" || show=="To start a paragraph in\r\nin html you use:" || show=="unset($array) deletes\r\nthe whole array." || show=="Web programming is the best\r\ncourse ever." || show=="The Factorial of 5 is\r\n 120.") 
			{
				correct();
			}
			else
			{
				wrong();
			}
		}
		function buttonFour(){
			pokemonOakText.visible=true;
			battleOption.visible=false;
			hideButton();
			if (show=="Which operator is used if\r\nboth values are equal?" || show=="If x=array(1,2,3,6)\r\nWhat is x[2]?" ||show=="A descriptive tag\r\nstarts with which tag:" || show=="unset($array['5'])\r\ndeletes 5th element") 
			{
				correct();
			}
			else
			{
				wrong();
			}
		}
		/* Other Functions */
		function nextQuestion()
		{
			generate=random[x];
			battleOption.visible=true;
			pokemonOakText.visible=false;
			show=questions[generate];
			myMessage1([show]);
			setTimeout(function() 
			{
				if(show=="unset(array) deletes\r\nthe whole array." || show=="Web programming is the best\r\ncourse ever." || show=="The Factorial of 5 is\r\n 120." || show=="unset($array['5'])\r\ndeletes 5th element")
				{
					/* Make Text invisble */
					buttonText3.visible=true;
					buttonText4.visible=true;
					/* Make Button1 and 2 invisble*/
					buttonThree.visible=true;
					buttonFour.visible=true;
				}
				else{
					/* Make all buttons and their associated texts visible */
					buttonOne.visible=true;
					buttonTwo.visible=true;
					buttonThree.visible=true;
					buttonFour.visible=true;
					buttonText.visible=true;
					buttonText2.visible=true;
					buttonText3.visible=true;
					buttonText4.visible=true;
				}
			}, 1000);
			x++;//Makes questions go one by one.
		}
		function hideButton()
		{
			buttonOne.visible=false;
			buttonTwo.visible=false;
			buttonThree.visible=false;
			buttonFour.visible=false;
			/* Make Text invisble */
			buttonText.visible=false;
			buttonText2.visible=false;
			buttonText3.visible=false;
			buttonText4.visible=false;
		}
		function correct()
		{
			select.play();
			scratch.visible=true;
			charmanderBack.x+=10;
			scratch.animations.play("scratchAnim",10,false);
			myMessage1(["CORRECT!! CHARMANDER used Scratch!","Next Question!"]);
			scratchSound.play();
			tracker++;
		}
		function wrong() 
		{
			select.play();
			scratch2.visible=true;
			squirtle.x-=10;
    		scratch2.animations.play("scratchAnim2",10,false);
			myMessage1(["WRONG!! SQUIRTLE used Scratch!","Next Question!"]);
			scratchSound.play();
			questionsWrong++;
		}
		/* Button Mouseovers Functions*/
		function Oneover()
		{
			buttonOne.animations.play("buttonOne1",10,false);
		}
		function Oneout()
		{
			buttonOne.animations.play("buttonOne2",10,false);
		}
		function Twoover()
		{
			buttonTwo.animations.play("buttonTwo1",10,false);
		}
		function Twoout()
		{
			buttonTwo.animations.play("buttonTwo2",10,false);
		}
		function Threeover()
		{
			buttonThree.animations.play("buttonThree1",10,false);
		}
		function Threeout()
		{
			buttonThree.animations.play("buttonThree2",10,false);
		}
		function Fourover()
		{
			buttonFour.animations.play("buttonFour1",10,false);
		}
		function Fourout()
		{
			buttonFour.animations.play("buttonFour2",10,false);
		}
	},
	update: function() {
		/* Player HealthBar*/
		this.bar.context.clearRect(0, 0, this.bar.width, this.bar.height);
       	if(this.barProgress < 25) 
       	{
           this.bar.context.fillStyle = '#f00';   
        }
        else if(this.barProgress < 50) 
        {
            this.bar.context.fillStyle = '#ff0';
        }
        else
        {
            this.bar.context.fillStyle = '#0f0';
       	}
        this.bar.context.fillRect(0, 0, this.barProgress, 8);
       	this.bar.dirty = true;
        /* Enemy HealthBar */
        this.bar2.context.clearRect(0, 0, this.bar2.width, this.bar2.height);
       	if(this.barProgress2 < 25)
       	{
           this.bar2.context.fillStyle = '#f00';   
        }
        else if(this.barProgress2 < 50)
        {
            this.bar2.context.fillStyle = '#ff0';
        }
        else
        {
            this.bar2.context.fillStyle = '#0f0';
       	}
        this.bar2.context.fillRect(0, 0, this.barProgress2, 8);
       	this.bar2.dirty = true;
       	/* Assign Button Text Values Depending On Question */
       	if(show=="What is the correct way to\r\ninsert a line break?")
       	{
       		buttonText.text="<br>";
       		buttonText2.text="<hr>";
       		buttonText3.text="<lb>";
       		buttonText4.text="<break>";
       	}
       	else if(show=="What is the correct tag\r\nfor the largest heading?")
       	{
       		buttonText.text="<h6>";
       		buttonText2.text="<h1>";
       		buttonText3.text="<b1>";
       		buttonText4.text="<h>";
       	}
       	else if(show=="All variables in PHP start\r\nwith:")
       	{
       		buttonText.text="!";
       		buttonText2.text="$";
       		buttonText3.text="&";
       		buttonText4.text="@";
       	}
       	else if(show=="What is the correct way to\r\nadd a comment in PHP?")
       	{
       		buttonText.text="$/../$";
       		buttonText2.text="<!--!>";
       		buttonText3.text="/*..*/";
       		buttonText4.text="/../";
       	}
       	else if(show=="Which operator is used if\r\nboth values are equal?")
       	{
       		buttonText.text="!=";
       		buttonText2.text="===";
       		buttonText3.text="==";
       		buttonText4.text="=";
       	}
       	else if(show=="To start a paragraph in\r\nin html you use:")
       	{
       		buttonText.text="<br>";
       		buttonText2.text="<par>";
       		buttonText3.text="<p>";
       		buttonText4.text="<pg>";
       	}
       	else if(show=="If x=array(1,2,3,6)\r\nWhat is x[2]?")
       	{
       		buttonText.text="6";
       		buttonText2.text="1";
       		buttonText3.text="2";
       		buttonText4.text="3";
       	}
       	else if(show=="You can reference a\r\nfile by using:")
       	{
       		buttonText.text="Href";
       		buttonText2.text="Link";
       		buttonText3.text="File";
       		buttonText4.text="Mail";
       	}
       	else if(show=="A descriptive tag\r\nstarts with which tag:")
       	{
       		buttonText.text="<d>";
       		buttonText2.text="<ds>";
       		buttonText3.text="<dd>";
       		buttonText4.text="<dl>";
       	}
       	else if(show=="which of the following\r\n are delimiters?")
       	{
       		buttonText.text="/";
       		buttonText2.text="All";
       		buttonText3.text=".";
       		buttonText4.text="#";
       	}
       	else if(show=="unset(array) deletes\r\nthe whole array.")
       	{
       		buttonText3.text="TRUE";
       		buttonText4.text="FALSE";
       	}
       	else if(show=="Web programming is the best\r\ncourse ever.")
       	{
       		buttonText3.text="TRUE";
       		buttonText4.text="FALSE";
       	}
       	else if(show=="The Factorial of 5 is\r\n 120.")
       	{
       		buttonText3.text="TRUE";
       		buttonText4.text="FALSE";
       	}
       	else if(show=="unset($array['5'])\r\ndeletes 5th element")
       	{
       		buttonText3.text="TRUE";
       		buttonText4.text="FALSE";
       	}
	},
}