 window.onscroll = function() {
 	var gototop = document.getElementById('go-top');
 	if (typeof(element) != 'undefined' && element != null)
 	{
 		if (pageYOffset >= 1000) {
		gototop.style.display = "block";
	} else {
		gototop.style.display = "none";
	}
	}

};