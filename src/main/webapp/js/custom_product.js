
$(function(){
	$('#add_cart_button').click(function(e){
		alert('adsasas');
		document.product_detail_cart.method='POST';
		document.product_detail_cart.action='shop_add_cart_action';
		document.product_detail_cart.submit();
		e.preventDefault();
		});
	
	

	$('#add_wishlist_button').click(function(e){
		alert('2');
		document.product_detail_cart.method='POST';
		document.product_detail_cart.action='shop_add_wishlist_action';
		document.product_detail_cart.submit();
		e.preventDefault();
		});
	


	$('#add_review_button').click(function(e){
		alert('adsasas');
		document.review_form.method='POST';
		document.review_form.action='rest_shop_product_review_action';
		document.review_form.submit();
		e.preventDefault();
		});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			 //e.target // newly activated tab
			 //console.log(e.target);
			 //console.log(e.relatedTarget);
			  
			product_no=$(e.relatedTarget).attr("product_no")
			param='product_no='+product_no
			$.ajax({
			url:'rest_shop_product_review_list',
			data:param,
			method:'POST',
			dataType:'json',
			success:function(reivewArray){
				html="";
				$.each(reivewArray,function(i,review){
					//console.log(review.review_no+","+review.review_name)
					html+="<div class=\"comment\">";
						html+="<div class=\"comment-author-ava\"><img src=\"img/reviews/02.jpg\" alt=\"Review author\"></div>";
						html+="<div class=\"comment-body\">";
							html+="<div class=\"comment-header d-flex flex-wrap justify-content-between\">";
								html+="<h4 class=\"comment-title\">"+review.review_title+"</h4>";
								html+="<div class=\"mb-2\">";
									html+="<div class=\"rating-stars\"><i class=\"icon-star filled\"></i><i class=\"icon-star filled\"></i><i class=\"icon-star filled\"></i><i class=\"icon-star filled\"></i><i class=\"icon-star filled\"></i>";
									html+="</div>";
								html+="</div>";
							html+="</div>";
							html+="<p class=\"comment-text\">"+review.review_content+"</p>";
							html+="<div class=\"comment-footer\"><span class=\"comment-meta\">"+review.review_name+"</span></div>";
						html+="</div>";
					html+="</div>";
					
				});
				html+="<h5 class=\"mb-30 padding-top-1x\">후기를 작성해주세요</h5>";
					html+="<form class=\"row\" method=\"post\">";
						html+="<div class=\"col-sm-6\">";
							html+="<div class=\"form-group\">";
								html+="<label for=\"review_name\">성함</label>";
								html+="<input class=\"form-control form-control-rounded\" type=\"text\" name=\"review_name\" id=\"review_name\" required>";
							html+="</div>";
					html+="</div>";
					html+="<div class=\"col-sm-6\">";
						html+="<div class=\"form-group\">";
							html+="<label for=\"review_email\">Your Email</label>";
							html+="<input class=\"form-control form-control-rounded\" type=\"email\" name=\"review_email\" id=\"review_email\" required>";
						html+="</div>";
					html+="</div>";
					html+="<div class=\"col-sm-6\">";
						html+="<div class=\"form-group\">";
							html+="<label for=\"review_subject\">Subject</label>";
							html+="<input class=\"form-control form-control-rounded\" type=\"text\" name=\"review_title\" id=\"review_subject\" required>";
						html+="</div>";
					html+="</div>";
					html+="<div class=\"col-sm-6\">";
						html+="<div class=\"form-group\">";
							html+="<label for=\"review_rating\">Rating</label>";
							html+="<select class=\"form-control form-control-rounded\" name =\"review_rating\" id=\"review_rating\">";
								html+="<option>5 Stars</option>";
								html+="<option>4 Stars</option>";
								html+="<option>3 Stars</option>";
								html+="<option>2 Stars</option>";
								html+="<option>1 Star</option>";
							html+="</select>";
						html+="</div>";
					html+="</div>";
					html+="<div class=\"col-12\">";
						html+="<div class=\"form-group\">";
							html+="<label for=\"review_text\">후기 작성란 </label>";
							html+="<textarea class=\"form-control form-control-rounded\" name =\"review_content\" id=\"review_text\" rows=\"8\" required></textarea>";
						html+="</div>";
					html+="</div>";
					html+="<div class=\"col-12 text-right\">";
						html+="<button class=\"btn btn-outline-primary\" id = \"add_review_button\" type=\"submit\">후기 작성</button>";
					html+="</div>";
					html+="</form>";
					
				$('#reviews').html(html);
				
			}
		});
		
	});
		
});



