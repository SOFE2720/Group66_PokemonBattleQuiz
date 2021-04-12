/*--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
	Boot Page: This is where the game is booted
--*/
var boot = {
	preload: function() {
		this.load.image("preloadBar","assets/bar.png");
	},
	create: function() {
		this.game.stage.backgroundColor="#0000";
		this.state.start("preloadState");
	}
};