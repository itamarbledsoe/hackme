function View(w, h)
{
	this.el = document.createElement('canvas');
	this.size(w, h);
	var self = this;
	window.addEventListener('resize', function(evt){ self.onResize(evt); });
}

View.prototype =
{
	el: null,
	con: null,
	w: 0,
	h: 0,
	
	onResize: function(evt)
	{
		this.size(window.innerWidth, window.innerHeight);
	},
	
	size: function(w, h)
	{
		this.w = w;
		this.h = h;
		// this.el.setAttribute('width'	, w);
		// this.el.setAttribute('height'	, h);
		this.el.width	= w;
		this.el.height	= h;
		this.con = this.el.getContext('2d');
	},
	
	clear: function()
	{
		this.con.clearRect(0, 0, this.w, this.h);
	},
	
	drawP: function(x, y, r)
	{
		this.con.fillStyle = '#000';
		this.con.beginPath();
		this.con.arc(x, y, r, 0, Math.PI * 2);
		// this.con.rect(x - r * .5, y - r * .5, r, r);
		this.con.closePath();
		this.con.fill();
	},
	
	toString: function()
	{
		return '[View]';
	}
};