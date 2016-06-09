var app, usr_c, con_c, frm_c, usr, con, frm;

function fin()
{
	title();
	usr_c = document.getElementById('username-container');
	con_c = document.getElementById('console-container');
	frm_c = document.getElementById('frame-container');
	usr = document.getElementById('username');
	con = document.getElementById('console');
	frm = document.getElementById('frame');
	usr.focus();
	app = new App();
	// document.body.appendChild(app.el);
	// app.start();
	addEventListener('keydown', function(evt)
	{
		if(evt.keyCode==13)usr_c.classList.toggle('hidden');
	});
}

function title(s)
{
	s = title.BASE + (s ? title.SEP + s : "");
	document.title = s;
	return s;
}
title.BASE	= "hackme";
title.SEP	= " - ";