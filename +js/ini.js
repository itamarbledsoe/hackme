var app;

function fin()
{
	title();
	// usr_c = document.getElementById('username-container');
	// con_c = document.getElementById('console-container');
	// frm_c = document.getElementById('frame-container');
	// usr = document.getElementById('username');
	// con = document.getElementById('console');
	// frm = document.getElementById('frame');
	// usr.focus();
	// addEventListener('keydown', function(evt)
	// {
		// if(evt.keyCode==13)usr_c.classList.toggle('hidden');
	// });
	app = new App();
}

function title(s)
{
	s = title.BASE + (s ? title.SEP + s : "");
	document.title = s;
	return s;
}
title.BASE	= "hackme";
title.SEP	= " - ";