const slider = {
	slides: ['./img/fon.jpg','./img/fon2.jpg','./img/fon3.jpg','./img/fon.jpg','./img/fon2.jpg'],
	i: 0, 
	set: function(image) {
		document.querySelector(".slide").style.backgroundImage = "url("+image+")";
	},
	init: function() { 
		this.set(this.slides[this.i]);
	},
	left: function() { 
		this.i--;
		if(this.i < 0) this.i = this.slides.length-1;
		this.set(this.slides[this.i]);
	},
	right: function() { 
		this.i++;
		if(this.i == this.slides.length) this.i = 0;
		this.set(this.slides[this.i]);		
	}
};
slider.init();