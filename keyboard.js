window.addEventListener("DOMContentLoaded", keySelect());

// -------- INIT ----------------------------------------------------------------------

var game = new Game();

function init() 
{
	game.init();
}

// -------- ACTIVATION DES TOUCHES ----------------------------------------------------

function keySelect()
{
	document.addEventListener('keydown', function(event) 
	{
	    if(event.key == "ArrowLeft"  || event.key == "q") 
	    {
	        alert('Left was pressed');
	    }
	    else if(event.key == "ArrowUp" || event.key == "z") 
	    {
	        alert('Up was pressed');
	    }
	    else if(event.key == "ArrowRight" || event.key == "d") 
	    {
	        alert('Right was pressed');
	    }
	    else if(event.key == "ArrowDown" || event.key == "s") 
	    {
	        alert('Down was pressed');
	    }
	    else if(event.keyCode == 32 ) 
	    {
	        shootBubbles();
	    }
	});
}

// --------- SHOOOOOOOT ------------------------------------------------------

function shootBubbles()
{
	return ;
}

// -------- CLASSE CHARACTER -------------------------------------------------
class Character
{
	constructor(nom)
	{
		this.nom = nom;

	}

	/*function move()
	{
			document.addEventListener('keydown', function(event) 
		{
		    if(event.key == "ArrowLeft"  || event.key == "q") 
		    {
		        alert('Left was pressed');
		        console.log("___");
		    }
		    else if(event.key == "ArrowUp" || event.key == "z") 
		    {
		        alert('Up was pressed');
		    }
		    else if(event.key == "ArrowRight" || event.key == "d") 
		    {
		        alert('Right was pressed');
		    }
		    else if(event.key == "ArrowDown" || event.key == "s") 
		    {
		        alert('Down was pressed');
		    }
		    else if(event.keyCode == 32 ) 
		    {
		        shootBubbles();
		    }
		});

	}*/
}

// ------- TEST METTRE IMAGES --------------------------------------------------

var imageRepository = new function() {
	
	this.background = new Image();
	this.spaceship = new Image();
	this.bullet = new Image();
	this.enemy = new Image();
	this.enemyBullet = new Image();

	// Ensure all images have loaded before starting the game
	var numImages = 5;
	var numLoaded = 0;

	function imageLoaded() 
	{
		numLoaded++;
		if (numLoaded === numImages) 
		{
			window.init();
		}
	}

	this.background.onload = function() {
		imageLoaded();
	}
	this.spaceship.onload = function() {
		imageLoaded();
	}
	this.bullet.onload = function() {
		imageLoaded();
	}
	this.enemy.onload = function() {
		imageLoaded();
	}
	this.enemyBullet.onload = function() {
		imageLoaded();
	}

	// Set images src
	this.background.src = "imgs/bg.png";
	this.spaceship.src = "imgs/ship.png";
	this.bullet.src = "imgs/bullet.png";
	this.enemy.src = "imgs/enemy.png";
	this.enemyBullet.src = "imgs/bullet_enemy.png";
}