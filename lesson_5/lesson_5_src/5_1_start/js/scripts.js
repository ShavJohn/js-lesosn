window.addEventListener('load', function(){
    
    let div = document.querySelector('#text');
	
    
    // first method set event with addEventListener and anonymous function
    div.addEventListener('click', function(){
        div.innerHTML = 'clicked';
        div.className = 'fortest';
        div.style.color = '#f00';
    });


    // second method set event with addEventListener and normal function
    /*
    div.addEventListener('click', myClick);

    function myClick(){
        div.innerHTML = 'ura';
        div.className = 'test';
        div.style.color = '#f00';
        div.style.fontSize = '30px';
    }
    */


    // third method set event with onclick and anonymous function
    /*
    div.onclick = function(){
        div.innerHTML = 'ura';
        div.className = 'test';
        div.style.color = '#f00';
        div.style.fontSize = '30px';
    };
    */


    // fourth method set event with onClick and normal function
    /*
    div.onclick = myClick;

    function myClick(){
        div.innerHTML = 'ura';
        div.className = 'test';
        div.style.color = '#f00';
        div.style.fontSize = '30px';
    }
    */
});




 //Loop all elements in some object and show result

/*function print_object(obj){
    var res = '<ul>';
    
    for(i in obj)
        res += '<li><b>' + i + '</b>: ' + obj[i] + '</li>';
        
    res += '</ul>';
    document.write(res);
}

print_object(div);

*/