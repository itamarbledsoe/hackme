function Intro()
{
	
}

Intro.prototype =
{
	start: function()
	{
		
	},
	
	attack: function(code)
	{
		frm.contentWindow.eval(code);
	},
	
	toString: function()
	{
		return '[Intro]';
	}
};
// <div id="username-container"><div id="first-question">WHO ARE YOU?</div><input type="text" id="username"></input></div>