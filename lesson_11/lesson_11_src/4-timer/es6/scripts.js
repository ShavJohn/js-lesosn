window.addEventListener('load', function(){

	let t1 = new Timer(document.querySelector('.timer1'), 10);
	t1.start();
	console.log(t1);

	let t2 = new Timer(document.querySelector('.timer2'), 60);
	t2.start();
	console.log(t2);

	let t3 = new Timer(document.querySelector('.timer3'), 5000);
	t3.start();
	console.log(t3);

	let t4 = new TimerFormat(document.querySelector('.timer4'), 5000);
	t4.start();
	console.log(t4);

	document.querySelector('.timer2stop').addEventListener('click', function(){
		this.innerHTML = 'Скидка ваша!';
		t2.stop();
	});

});

class Timer{
	constructor(el, t){
		this.el = el;
		this.time = t;
		this.interval;
		this.render();
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	stop(){
		clearInterval(this.interval);
	}

	tick(){
		this.time--;
		this.render();

		if(this.time <= 0){
			this.stop();
		}
	}

	render(){
		this.el.innerHTML = this.time;
	}
}

class TimerFormat extends Timer{
	render(){
		let h = parseInt(this.time / 3600);
		let h_s = this.time % 3600;
		let m = parseInt(h_s / 60);
		let s = h_s % 60;
		this.el.innerHTML = `${h}:${m}:${s}`;
	}
}

/*

class WildCat{
	findEat(){
		// while(hungry) run-run-run
	}
}

class HomeCat{
	findEat(){
		// while(hungry)
		//   run around human and myay-myam
		// 	
		//	  if(> 2 day)
		//		super.findEat();
		//		break;
	}
}

*/

/*
class Monster{
	constructor(h, p){
		this.health = h;
		this.power = p;
	}

	getDamage(damage){
		this.health -= damage;

		if(this.health < 0){
			this.health = 0;
		}
	}

	calcAttack(){
		return this.power + Math.floor(Math.random() * this.power);
	}
}

function Monster(h, p){
	this.health = h;
	this.power = p;
}

Monster.prototype.getDamage = function(damage){
	this.health -= damage;

	if(this.health < 0){
		this.health = 0;
	}
}

Monster.prototype.calcAttack = function(){
	return this.power + Math.floor(Math.random() * this.power);
}
*/