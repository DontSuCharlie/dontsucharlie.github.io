function openHome()
{
	//var tabName = document.getElementById("tabName").value;
	chrome.tabs.create({'url':'index.html'});
	//:'chrome://extensions/__MSG_@@extension_id__/homepage.html'});
}
document.addEventListener('DOMContentLoaded', function(){document.querySelector('button').addEventListener('click', openHome)})