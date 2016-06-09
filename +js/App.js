function App()
{
	
}

App.prototype =
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
		return '[App]';
	}
};