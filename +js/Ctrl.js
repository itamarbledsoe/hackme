function Ctrl()
{
	this.listeners = {};
	
	var self = this;
	document.addEventListener('mousedown', function(evt){ self.onEvent(evt); } );
}

Ctrl.prototype =
{
	listeners: null,
	
	addEventListener: function(thisArg, type, callback)
	{
		var callbacks = this.listeners[type];
		if (!callbacks)
		{
			callbacks = this.listeners[type] = [];
		}
		callbacks.push([thisArg, callback]);
	},
	
	forward: function(evt)
	{
		var callbacks = this.listeners[evt.type];
		var iCallback, nCallbacks, callback;
		if (callbacks)
		{
			nCallbacks = callbacks.length;
			for (iCallback = 0; iCallback < nCallbacks; iCallback++)
			{
				callback = callbacks[iCallback];
				callback[1].call(callback[0], evt);
			}
		}
	},
	
	onEvent: function(evt)
	{
		
		switch (evt.type)
		{
			default:
				break;
		}
		
		this.forward(evt);
	},
	
	toString: function()
	{
		return '[Ctrl]';
	}
};