$(document).ready(function(){
	for(var i = 1; i <= 100 ; i++){
		var mod3 = i%3;
		var mod5 = i%5;
		if(mod3==0){
			if(mod5 == 0){
				$('body').append("<p>fizz buzz</p>");
			}
			else {
				$('body').append("<p>fizz</p>");
			}
		}
		else if(mod5==0){
			$('body').append("<p>buzz</p>");
		}
		else {
			$('body').append("<p>" + i + "</p>");
		}
	}
});