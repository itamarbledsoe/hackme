var app;

function fin()
{
	title();
	app = new App();
	// document.body.appendChild(app.el);
	// app.start();
}

function title(s)
{
	s = title.BASE + (s ? title.SEP + s : "");
	document.title = s;
	return s;
}
title.BASE	= "hackme";
title.SEP	= " - ";