$('.signin')
	.on('click', function(e){
		$('.modal').fadeIn('1000');
	});

$('.close')
	.on('click', function(e){
		$('.modal').fadeOut('1000');
	});

$('.submit')
	.on('click', function(e){
		$('input').addClass('error');
	});

$('input')
	.on('mouseover',function(e){
		$(this).removeClass('error');
	});


