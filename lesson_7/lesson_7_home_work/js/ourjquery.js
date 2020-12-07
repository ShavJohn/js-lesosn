/*
	Vorpes parametr @ndhunum e tarber baner
	masnavorapes (css selector || HTMLElement)
	ev veradarcnum e ognakanin vor@ kentronacac
	e konkret DOM elementneri vra.
	
	Params
		some (string) - css selector
		some (HTMLElement) - konkret 1 DOM element
*/
function $(some){
	let elems;

	if(some instanceof HTMLElement){
		elems = [some];
	}
	else{
		elems = document.querySelectorAll(some);
	}
	 
	return new OurJquery(elems);
}


/*
	elems - (NodeList || Array) of DOM elements

*/
function OurJquery(elems){
	this.elems = elems;

	/*
		Avelacnum e DOM elementnerin konkret html-class
		params:
			name (string) - html-class i anvanum@
	*/
	this.addClass = function(name){
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].classList.add(name);
		}

		return this;
	}

	/*
		Gngum e DOM elementneric konkret html-class
		params:
			name (string) - html-class i anvanum@
	*/
	this.removeClass = function(name){
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].classList.remove(name);
		}

		return this;
	}

	/*
		Stugum e ka ardyoq dom elementneric aragini vra konkret html-class,
		params:
			name (string) - html-class i anvanum@
	*/
	this.hasClass = function(name){
		// Petq e stugel goyutyun uni ardyoq this.elems[0]
		return this.elems[0].classList.contains(name);
	}

	/*
		Add event Listener
		params:
			name (string) - event name
			handler (function) - handler
	*/
	this.on = function(name, handler){
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].addEventListener(name, handler);
		}

		return this;
	}

	/*
		Petq e hashvi arnel vor functian - @
		karox e ashxatel 2 rejimov 

		1.	params:
				name (string) - attribute - i anun@
			Return:
				Veradarcnum e dom elementneric aragini tvyal anunov(name) atrribute - i arjeq@

		params:
			name (string) - attribute - i anun@ (name)
			value (string) - attribute - i arjeq@ (value)
		NodeList - i bolor elementnerin avelacnum e tvyal attribute - @ (name) ev veragrum e arjeq (value)
	*/
	this.attr = function(name, value){
		if(value === undefined){
			return this.elems[0].getAttribute(name);
		}
		
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].setAttribute(name, value);
		}

		return this;
	}

	/*
		Petq e hashvi arnel vor functian - @
		karox e ashxatel 2 rejimov

		params:
			name (string) - property - i anun@ (orinak disabled)

		return:
			Veradarcnum e dom elementneric aragini tvyal anunov(name) atrribute - i arjeq@

		params:
			name (string) - property - i anun@
			value (string) - property - i arjeq@
		NodeList - i bolor elementnerin avelacnum e tvyal property - in (name) ev veragrum e arjeq (value)
	*/
	this.prop = function(name, value){
		if(value === undefined){
			return this.elems[0].getAttribute(name);
		}
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].setAttribute(name, value);
		}
		return this;
	}

	/*
		Petq e hashvi arnel vor functian - @
		karox e ashxatel 3 rejimov

		param1 - str, param2 - chi poxancvac
		.css('color'); => return NodeList - i aragin elementi style.color-@

		param1 - str, param2 - str
		.css('color', 'red'); => NodeList - i bolor elementneri style.color - in 
		veragrel "red" (style.color = 'red')

		param1 - object, param2 - chi poxancvac
			.css({
				color: '#fff',
				background: '#f90',
				cursor: 'pointer'
			}); => Bolor elementnerin tal
			style.color = '#fff'
			style.background = '#f90'
			style.cursor = 'pointer'
	*/

	this.css = function(param1, param2){
		if(param2 === undefined){
			return this.elems[0].getAttribute(param1);
		}
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].setAttribute(param1, param2);
		}
		for(person in param1){
			console.log(person, "=>", param1[person]);
		}
		return this;
	}
}