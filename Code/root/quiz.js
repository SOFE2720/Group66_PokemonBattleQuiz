/*--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
	Game Page: This is the intro to the game
--*/
/*** Variables ***/
/* Background/Sprites */
var background;
var pokemon;
/* Animations */
var pokeball;
var pokeballOpen;
/* Sound Effects/Music*/
var music;
var select;
/* Display Word By Word Text */
var name;
var pokemonOakText;
var counter=0;
var line = [];
var wordIndex = 0;
var lineIndex = 0;
var wordDelay = 120;
var lineDelay = 400;
var content=[
	"Hello, "+name+"!",
	"Glad to meet you!"];
var quiz={

	create: function()
	{
		/* Create Sprites */
		background=game.add.sprite(0,-10,"quizBackground");
		background.scale.x=1.1;
	    background.scale.y=0.8;
		pokemon=game.add.sprite(240,75,"pokemon");
		pokemon.visible=false;
		pokemonOakText=game.add.sprite(0,305,"pokemonOakText");
		pokemonOakText.scale.x=1.071;
	    pokemonOakText.scale.y=1;
		/* Create Animations */
		pokeball=game.add.sprite(300,120,"pokeball");
		pokeball.visible=false;
		pokeballOpen=pokeball.animations.add("pokeballOpen",[0,1,2]);
		pokeballClose=pokeball.animations.add("pokeballClose",[2,1,0]);
		/* Create Music/Sound Effects */
		select=game.add.audio("select");
		music=game.add.audio("oakTheme");
		music.loopFull();
		/* Create Text */
		text = game.add.text(30, 322, '', { font: "36px Conv_pkmndp", fill: "#484848" });
		nextLine();
		/* Get Data From LocalStorage */
		name=localStorage.getItem("name");
		/* Create Functions */
		function nextLine() {
		    if (lineIndex === content.length)
		    {
		        //  We're finished this text
		        return;
		    }
		    //  Split the current line on spaces, so one word per array element
		    line = content[lineIndex].split(' ');
		    //  Reset the word index to zero (the first word in the line)
		    wordIndex = 0;
		    //  Call the 'nextWord' function once for each word in the line (line.length)
		    game.time.events.repeat(wordDelay, line.length, nextWord, this);
		    //  Advance to the next line
		    lineIndex++;
		    /* Change Message */
		    setTimeout(function() {changeMessage();counter++;}, 4500);
		}
		function nextWord() {
		    //  Add the next word onto the text string, followed by a space
		    if(text==undefined || text.text==undefined || line[wordIndex]==undefined)return;
	 
		    text.text = text.text.concat(line[wordIndex] + " ");
		    //  Advance the word index to the next word in the line
		    wordIndex++;
		    //  Last word?
		    if(wordIndex === line.length)
		    {
		        //  Add a carriage return
		        text.text = text.text.concat("\n");
		        //  Get the next line after the lineDelay amount of ms has elapsed
		        game.time.events.add(lineDelay, nextLine, this);
	    	}
		}
		/* Changes Message */
		function changeMessage()
		{
			/* Check Counter to display the next line */
			if(counter==1)
			{
				myMessage(["Welcome to Pokemon Battle Quiz!"]);
			}
			if(counter==2)
			{
				myMessage(["Here you will be fighting against other"+"\r\n"+"Pokemon to determine the Pokemon Champion!"]);
				pokeball.animations.play("pokeballOpen",4,false);
				pokeball.visible=true;
				setTimeout(function(){pokemon.visible=true;pokeball.visible=false;}, 1000);
			}
			if(counter==3)
			{
				myMessage(["You will be required to answer question correctly"+"\r\n"+"in order to perform an attack."]);
			}
			if(counter==4)
			{
				myMessage(["If you fail you will be punished by the Opponent!"]);
			}
			if(counter==5)
			{
				myMessage(["Click your mouse over the option"+"\r\n"+"you wish to select!"]);
			}
			if(counter==6)
			{
				myMessage(["Good Luck!"]);
			}
		}
		/* Erase Old Text And Add New Set Of Text */	
		function myMessage(message)
		{
			text.text="";
			lineIndex=0;
			wordIndex=0;
			content=message;
			wordDelay=120;
			lineDelay=400;		
	        nextLine();
		}
	},
	update: function()
	{
		/* Start Next State Once Speech Part Finishes */
		if(counter==8)
		{
			music.pause();
			this.state.start("quizStart");
		}
	},
}