/*--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
	Menu Page: This is the menu of the game
--*/
/*** Variables ***/
/* Sprites */
var background;
var title;
var music;
/* Buttons */
var playButton;
var menu={
	
	create: function()
	{
		/* Create Sprites */
		background=game.add.sprite(0,0,"background");
	    background.scale.x=0.62;
	    background.scale.y=0.62;
	    title=game.add.sprite(30,80,"title");
	    title.scale.x=0.6;
	    title.scale.y=0.6;
	    playButton=game.add.button(325,300,"playButton", playButton, this);
	    playButton.scale.x=0.4;
	    playButton.scale.y=0.4;
	    /* Create Music And Sound Effects */
		music=game.add.audio("menuTheme");
		music.loopFull();
		select=game.add.audio("select");
	    /*Bring to top*/
	    game.world.bringToTop(title);
	    game.world.bringToTop(playButton);
	    /* Functions */
		function playButton(){
			select.play();
			music.pause();
			this.state.start("quiz");
		}
	},
}