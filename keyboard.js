window.addEventListener("DOMContentLoaded", keySelect());


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

function shootBubbles(){
	return ;
}