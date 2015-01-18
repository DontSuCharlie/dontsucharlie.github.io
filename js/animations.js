/*This is for changing the color of the background when clicking on the menu buttons*/
var myButtons = [".one",".two",".three",".four"];//used for tracking other buttons
var myPages = ["about.html","courses.html","projects.html","contact.html"]
function changeColor(myClass)
{
	var originalColor = $(myClass).css('background-color');//original color
	var hoverColor;//hovered color
	$(myClass).click(function(){
		var currentIndex;
		for(var index = 0; index < myButtons.length; index++)//decolor all other buttons
		{
			if(myButtons[index] != myClass)//second boolean to prevent hover color from defined as original
			{
				$(myButtons[index]).css('background-color', originalColor);
				$(myButtons[index]).animate({fontSize: '100%'});
			}
			else{
				currentIndex = index;
				console.log(currentIndex);				
			}
		}
		if(!hoverColor)//if hoverColor hasn't been defined before, define it here and never again
		{
			hoverColor = $(myClass).css('background-color');
			$("#original").animate({opacity: '0'});//to make the title fade out			
			$("#original").css('display', 'none');//to make the title fade out			
		}
		if($('html').css('background-color') == hoverColor)//if the current color is the same as clicked, turn off the lights
		{
			$('html').animate({backgroundColor: 'rgb(0,0,0)'},{duration: 600});
			$(myClass).css('background-color', originalColor);
			$(myClass).animate({fontSize: '100%'});
			document.getElementById("content").innerHTML = "";
			$("#original").css('display', 'block');//to make the title fade out			
			$("#original").animate({opacity: '1'});	//back to black, so the title fades back in
		}
		else//otherwise change color to new buton
		{
			$('html').animate({backgroundColor: hoverColor},{duration: 600})
			$(myClass).css('background-color', hoverColor);
			$(myClass).animate({fontSize: '105%'});	
			$("#original").animate({opacity: '0'});//to make the title fade out
			$("#original").css('display', 'none');//to make the title fade out
			$("#content").load(myPages[currentIndex]);			
			//$(myPages[currentIndex]).css('display', 'block');			
			//$(myPages[currentIndex]).animate({display: '100'})
		}
	})
}

var main = function()
{
	$('.one').click(changeColor('.one'));
	$('.two').click(changeColor('.two'));
	$('.three').click(changeColor('.three'));
	$('.four').click(changeColor('.four'));
}
$(document).ready(main);