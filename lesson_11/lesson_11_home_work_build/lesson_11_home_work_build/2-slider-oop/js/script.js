window.addEventListener('load', function(){

	let s1 = new OtherSlider('.gallery-1');
	s1.startAutoPlay(2000);

	new Slider('.gallery-2');

});

class Slider{
	constructor(selector){
		this.rootElem = document.querySelector(selector);

		this.btnPrev = this.rootElem.querySelector('.buttons .prev');
		this.btnNext = this.rootElem.querySelector('.buttons .next');

		this.images = this.rootElem.querySelectorAll('.photos img');
		this.i = 0;
		
		this.btnPrev.addEventListener('click', () => {
			this.prev();
		});

		this.btnNext.addEventListener('click', () => {
			this.next();
		});
	}

	prev(){
		this.images[this.i].classList.remove('showed');
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
	}

	next(){
		this.images[this.i].classList.remove('showed');
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}
}

class OtherSlider extends Slider{
	constructor(selector){
		super(selector);
		this.interval;
	}

	startAutoPlay(time){
		this.interval = setInterval(() => {
			this.next();
		}, time);
	}

	stopAutoPlay(){
		clearInterval(this.interval);
	}
}

/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/