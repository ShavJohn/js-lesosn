window.addEventListener('load', function(){
	let some = document.querySelector('.some');
	let other = document.querySelector('.other');
	
	some.addEventListener('click', changeColor);
	other.addEventListener('mouseenter', changeColor);

	function changeColor(){
		let colors = ['#f90', '#f00', '#0f0'];
		let num = Math.floor(Math.random() * colors.length);
		this.style.color = colors[num];
	}

});

/*
	a() -> window
	someObj.method() -> someObj
	
	f.apply(context, ...)
	f.call(context, ...)

*/

/*

let some = {
	age: 200,
	weight: 80,
	f: function(){
		return this.age + this.weight;
	}
}

let other = {
	age: 100,
	weight: 90
};

console.log(some.f());
console.log(some.f.call(other));

*/