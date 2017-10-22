var CarouselMod = (function() {
	//carousel	
	var slideIndex = 1;
	var url;
	
	
	
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}	

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
		var i;
		var slides = document.querySelectorAll('.items')[0].children;
			
		for(var i=0; i < slides.length; i++) {
			if(n < 1) {
				slides[slideIndex = slides.length-2].style.display= 'inline-block';
				slides[slideIndex = slides.length-1].style.display = 'inline-block';	
				
			}
			
			else if(n >= slides.length) {
				slides[slideIndex = 0].style.display = 'inline-block';
				slides[slideIndex = 1].style.display= 'inline-block';	
				
			}
			slides[i].style.display = 'none';	
		}
		
		slides[slideIndex].style.display= 'inline-block';
		slides[slideIndex-1].style.display = 'inline-block';
		;
		
	}//showSlides

 
 	function getArrow(e) {		
		//console.log(e);
		if(e.target.tagName == 'BUTTON' && e.target.className == 'right') {
			//console.log('right');
			url = e.target.baseURI;
			num = Number(url.charAt(url.length-6));
			plusSlides(1);
			num += 1;
				
		}//right
		else if(e.target.tagName == 'BUTTON' && e.target.className == 'left') {
			//console.log('left');
			url = e.target.baseURI;
			num = Number(url.charAt(url.length-6));
			plusSlides(-1);
			num -= 1;
		
		}//left
			
 	}//getPerson fn
 	
 	
 	
 
 	function init() {
 		//click event
		document.getElementById('carousel')
		.addEventListener('click', getArrow, false);
		
 	}//init
 
 	return {
 		init: init
 		
 		
 	}


})(); //CarouselMod




