var Login = (function(Login,$,undefined){

	$(function(){
	
		$("#loginForm").on("submit",function(){
			$.ajax({
				url: "login.html"
			});
			
			$("#username").val("erewr");
			
		});
	});
	
	return Login;
	
})(Login || {},$);