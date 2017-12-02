$(function(){
	

   	for(var i=0;i<$('.packBtn').length;i++){
   		(function(a){
   		   	$('.packBtn').eq(a).click(function(){
   				$('.page'+(a+1)+'_mask').animate({
		    		top:"-100%"
		    	},'slow',function(){
		    		$('.main-nav').animate({top:0},'slow')
		    	})
    	
   			})	
   		})(i)
   	}
   	$('.packBtn1').click(function(){
   		$('.page1_mask').animate({
   			top:"-100%"
   		},'slow',function(){
    		$('.main-nav').animate({top:0},'slow')
    	})
   	})
   	$('.wap_nav_link').on("touchstart",function(){
   		$('.handle').toggleClass('closeBtn');
   		if($('.handle').hasClass('closeBtn')){
   			$('.wap_nav_list').animate({
   				right:0
   			})
   			$('.wap_nav_link').animate({
   				width:'100%'
   			})
   		}else{
    		$('.wap_nav_list').animate({
   				right:'-2.7rem'
   			})
   			$('.wap_nav_link').animate({
   				width:'1.46rem'
   			})  			
   		}
   	})
	$('.main-nav-logo').click(function(){
		location.href = 'index.html'
	})
	$('.bottom_logo img').click(function(){
		location.href = 'index.html'
	})
});

