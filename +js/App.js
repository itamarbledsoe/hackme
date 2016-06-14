App.CLIENT_ID	= "clientId";
App.USERNAME	= "username";

function App()
{
	this.evaluateAction();
}

App.prototype =
{
	intro: null,
	lobby: null,
	game: null,
	
	request: function(path, handler)
	{
		var req = new XMLHttpRequest();
		req.onreadystatechange = function(evt)
		{
			handler(evt);
		};
		req.open("POST", path);
		req.send();
	},
	
	evaluateAction: function()
	{
		if (this.isClientNew())
		{
			this.showIntro();
		}
		else if (this.isClientInGame())
		{
			this.showGame();
		}
		else
		{
			this.showLobby();
		}
	},
	
	isClientNew: function()
	{
		if (localStorage.getItem(App.USERNAME) || localStorage.getItem(App.CLIENT_ID))
		{
			return false;
		}
	},
	
	isClientInGame: function()
	{
		
	},
	
	showIntro: function()
	{
		
	},
	
	showGame: function()
	{
		
	},
	
	showLobby: function()
	{
		
	},
	
	toString: function()
	{
		return '[App]';
	}
};