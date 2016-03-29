(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.


	$mouseover = $('.mouse-over');
	$click = $('.click');
	$sub = $('.submit');
	$timeout = $('.timeout');
	var stringData = '';
	if(document.cookie!='')
	{
			$("#randomDiv").append("<p>Last time, you choose: "+document.cookie+"</p>");
	}
	$mouseover.on("mouseover", function() {
	//	alert("a");
		$this = $(this);
		$this.html('Scrooge McDuck!');
		$this.height($this.height() + 50);
	});

	$click.on("click", function(){
		$(this).html('Peace Out!')
		$(this).fadeout(1500);
		return false;
	});


	$sub.on('submit', function(e){
			e.preventDefault();
			if ($(this).find("input[type='text']").val() !== '') {
					$(this).find('input').each(function() {
						$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");
			}
	});



	$(document).on('ready', function() {
		$timeout.hide();
		setTimeout(function(){
			$timeout.fadeIn('slow');
		}, 1000);
	});

	$(".buttonClick").on('click',function(){
			$("#randomDiv").empty();
			$("#randomDiv").append("<button id='cookie' class='buttonCookie'>Keep It</button>")

			$(this).text("Change it");
			$dataString = requestAjax();


	});
	$("#randomDiv").on("click", ".buttonCookie", function(){
	    setCookie(stringData);
	});

	function requestAjax(str)
	{
		$.ajax({
			url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
			dataType:'json',
			type: "GET",
			success: function(data) {
			//	$('body').append(r);
					var d = data.data;
					var count = 0;
					for(var j in d)
					{
						count+=1;

				 	}
					var index = Math.floor(Math.random() * count);
					$("#randomDiv").append("<p>"+d[index]+"</p>");
					stringData = d[index];
			}


		});


	}
})();

function setCookie(string) {
    document.cookie = string;
}
