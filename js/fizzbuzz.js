$(document).ready(function(){
	$('input').on('click', function(){
		$('input').val('');
	})
	$('#submit').on('click', function(){
			var yourNumber = parseInt($('input').val());
			fizzbuzz(yourNumber);
	});
	$('#clear').on('click', function(){
		location.reload(true);
	});
	
function fizzbuzz(topNumber){
for(var i = 1; i <= topNumber ; i++){
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
}

});

