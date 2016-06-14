function Game()
{
	
}

Game.prototype =
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
		return '[Game]';
	}
};
// <div id="console-container"><textarea id="console"></textarea></div>
// <div id="frame-container"><iframe id="frame" src="empty.html" frameborder="0"></iframe></div>