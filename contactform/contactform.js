$(document).ready(function() {
	$("#contactform").submit(function(e) {
		e.preventDefault();
	    var form = $(this);
	    var url = form.attr("action");
	    $("#contactform_btn").html('Please wait... <span class="fas fa-circle-notch fa-spin"></span>');
	    setTimeout(
			  function() 
			  {
				$.ajax({          
			        	type: "post",
			        	url: url,
			        	data: form.serialize(),
			        	dataType: "json",
			        	cache: false,
			        	success: function(data){
			        		if(data.status == 'ok'){
						        $("#contactform_btn").html('Send Message <span class="fa-solid fa-angle-right"></span>');
						        alert(data.msg);
						        form.trigger("reset");
						    }else{
						    	alert(data.msg);
						    	$("#contactform_btn").html('Send Message <span class="fa-solid fa-angle-right"></span>');
						    }
			        	}
				});
			}, 2000);
	});
});