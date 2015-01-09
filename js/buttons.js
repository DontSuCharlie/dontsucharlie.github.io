$(function() {
	$(".one").tooltip({content:"Shameless self advertising here!", my: "center bottom-20", at:"center top", collision:"fit"});
	$(".two").tooltip({content:"Interested in Purdue? Take a look at my experiences~", my: "right", at:"center", collision:"fit"});
	$(".three").tooltip({content: "Look, <span class=\"strikeThru\">but don't</span> DO touch! Play with my projects!", my: "right", at:"center", collision:"fit" });
	$(".four").tooltip({content: "Thoughts? Feedback? Ideas?", my: "right", at:"center", collision:"fit"});
});


/*var buttons = [document.querySelector(".one"), document.querySelector(".two"),document.querySelector(".three"),document.querySelector(".four")];
for(i = 0; i < buttons.length; i++)
{
	buttons[i].addEventListener('click', function(){})
}
Animation here
*/