/*--Abdul-Moiz, Yash Patel, Kalapan Kannathasan
	Preload Page: This is where the page load all assets
--*/
/* VARIABLES */
var sprite;
var background;
var filter;
var numberTwo;
var numberTwoTrans;
var progressDisplay=0;
var preloadState= {

	preload: function(){
		/*******************************************
		*****     LOAD ALL ASSETS HERE        ******
		*******************************************/
		/* Load Sprites */
		game.load.image("numberTwoTrans", "assets/pokeball3.png");
		game.load.image("background", "assets/preloadBack.jpg");
		game.load.image("title", "assets/title.png");
		game.load.image("playButton", "assets/play1.png");
		game.load.image("quizBackground", "assets/pokemonOakBack.png");
		game.load.image("pokemonOakText", "assets/pokemonOakText.png");
		game.load.spritesheet("pokeball", "assets/pokeBallAnim.png",48,91,14);
		game.load.image("pokemon", "assets/pokemonOakPokemon.png");
		game.load.spritesheet("buttonOne", "assets/fightButton3.png",130,47,2);
		/* Load Music And Sound Effects */
		game.load.audio("menuTheme", "assets/menuTheme.mp3");
		game.load.audio("menuTheme", "assets/menuTheme.mp3");
		game.load.audio("oakTheme", "assets/pokemonOakMusic.mp3");
		game.load.audio("select", "assets/select.mp3");
		game.load.audio("quizStartTheme", "assets/trainerBattleMusic.mp3");
		/* Load Battle Background */
		game.load.image("battleBack", "assets/wildBattleBack2.png");
		/* Load Battle Sprites */
		game.load.image("charmeleonBack", "assets/charmeleonBack.png");
		game.load.image("charmanderBack", "assets/charmanderBack.png");
		game.load.image("garyBattle", "assets/garyBattle1.png");
		game.load.image("playerBase", "assets/playerbaseGrass.png");
		game.load.image("enemyBase", "assets/enemybaseGrass.png");
		game.load.image("playerBar", "assets/playerHealthBar.png");
		game.load.image("enemyBar", "assets/enemyHealthBar.png");
		game.load.image("squirtle", "assets/squirtle.png");
		game.load.image("battleMoves", "assets/battleMoves.png");
		game.load.image("battleOption", "assets/battleOption.png");
		/* Load Battle Sound Effects */
		game.load.audio("squirtleCry", "assets/squirtleCry.mp3");
		game.load.audio("charmanderCry", "assets/charmanderCry.mp3");
		game.load.audio("scratchSound", "assets/scratch.mp3");
		game.load.audio("normalDamage", "assets/normalDamage.mp3");
		game.load.audio("victoryTrainer", "assets/victoryTrainer.mp3");
		/* Load Attack Animations */
		game.load.spritesheet("scratch", "assets/scratchAnim.png",172.2,107,5);
		game.load.spritesheet("scratch2", "assets/scratchAnim.png",172.2,107,5);
		/* Load Starting Battle Animations */
		game.load.spritesheet("pokeball2", "assets/pokeBallAnim.png",48,91,14);
		game.load.spritesheet("pokeball3", "assets/pokeBallAnim.png",48,91,14);
		game.load.spritesheet("playerBack", "assets/playerThrow3.png",200,200,5);
		/* Load advancedTiming for Health Bars/Experience Bars */
		game.time.advancedTiming = true;
	},
	create: function(){
		//Create text for percentage
		this.percentage = this.add.text(450,350,"0%",{ fill: '#fff' });
		this.percentage.anchor.setTo(0.5);
		this.game.stage.backgroundColor="#0000";
		//Fire color
    	var fragmentSrc = [
	        "precision mediump float;",

	        "uniform float     time;",
	        "uniform vec2      resolution;",
	        "uniform vec2      mouse;",

	        "// Yuldashev Mahmud Effect took from shaderToy mahmud9935@gmail.com",

	        "float snoise(vec3 uv, float res)",
	        "{",
	            "const vec3 s = vec3(1e0, 1e2, 1e3);",

	            "uv *= res;",

	            "vec3 uv0 = floor(mod(uv, res))*s;",
	            "vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;",

	            "vec3 f = fract(uv); f = f*f*(3.0-2.0*f);",

	            "vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,",
	            "uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);",

	            "vec4 r = fract(sin(v*1e-1)*1e3);",
	            "float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);",

	            "r = fract(sin((v + uv1.z - uv0.z)*1e-1)*1e3);",
	            "float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);",

	            "return mix(r0, r1, f.z)*2.-1.;",
	        "}",

	        "void main( void ) {",

	            "vec2 p = -.5 + gl_FragCoord.xy / resolution.xy;",
	            "p.x *= resolution.x/resolution.y;",

	            "float color = 3.0 - (3.*length(2.*p));",

	            "vec3 coord = vec3(atan(p.x,p.y)/6.2832+.5, length(p)*.4, .5);",

	            "for(int i = 1; i <= 7; i++)",
	            "{",
	                "float power = pow(2.0, float(i));",
	                "color += (1.5 / power) * snoise(coord + vec3(0.,-time*.05, time*.01), power*16.);",
	            "}",

	            "gl_FragColor = vec4( color, pow(max(color,0.),2.)*0.4, pow(max(color,0.),3.)*0.15 , 1.0);",

        	"}"
    	];
	    filter = new Phaser.Filter(game, null, fragmentSrc);
	    filter.setResolution(680, 450); 
	    /* Create Sprites */
	   	numberTwo = game.add.sprite(this.game.world.centerX,this.game.world.centerY,"");
	   	numberTwo.width = 680;
    	numberTwo.height = 450;
	   	numberTwoTrans = game.add.sprite(this.game.world.centerX,this.game.world.centerY,"numberTwoTrans");
	   	numberTwoTrans.scale.x = 0.6;
        numberTwoTrans.scale.y = 0.6;
	    numberTwo.filters = [ filter ];
	    /*Bring to top*/
	    game.world.bringToTop(numberTwoTrans);
	    game.world.bringToTop(this.percentage);
	    /* Anchor */
	    numberTwoTrans.anchor.setTo(0.5,0.5);
	    numberTwo.anchor.setTo(0.5,0.5);
	},
	update: function(){
		filter.update();
		 if(progressDisplay < 100){
		 	progressDisplay++;
            this.percentage.text = progressDisplay+'%';
        }
        if(this.percentage.text=="100%")
        {
        	this.state.start("menu");
        }
	},
};
	