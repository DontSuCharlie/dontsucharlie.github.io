var prevClass;
var myButtons = [".one",".two",".three",".four"];
function changeColor(myClass)
{
	var originalColor = $(myClass).css('background-color');
	var hoverColor;
	$(myClass).click(function(){
		if(!hoverColor)
			hoverColor = $(myClass).css('background-color');
		if($('html').css('background-color') != 'rgb(0,0,0)')
		{

		}
		if($('html').css('background-color') == hoverColor)
		{
			$('html').animate({backgroundColor: 'rgb(0,0,0)'},{duration: 600});
			$(myClass).css('background-color', originalColor);
			//$(myClass).animate({fontSize: '100%'});						
		}
		else
		{
			$('html').animate({backgroundColor: hoverColor},{duration: 600})
			$(myClass).css('background-color', hoverColor);
			//$(myClass).animate({fontSize: '105%'});			
		}
		for(var index = 0; index < myButtons.length; index++)
		{
			if(myButtons[index] != myClass && $(myButtons[index]).css('background-color') != originalColor)
				$(myButtons[index]).css('background-color', originalColor);
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

/*
var main = function()
{
    var originalColor = $('li').css('background-color');//grabs non-hovered color
    var hoverColor;
    $('li').click(function()
        {
            if(!hoverColor)//if not declared
                hoverColor = $('li').css('background-color');
            if($('html').css('background-color') == hoverColor)
            {
                $('html').css('background-color', originalColor);
                $('li').css('background-color', originalColor);
            }
            else
            {
                $('html').css('background-color', hoverColor);
                $('li').css('background-color', hoverColor);
            }
        }
                  )}
$(document).ready(main);*/