$(document).ready(function(){
   //items & content
	var items = document.querySelectorAll('.items')[0];
   var con = document.querySelector('#details .content');
   //load content
   items.addEventListener('click', function(e) {
      //console.log(e);
      
      //whichDetail & page
      var page;
      var whichDetail = e.target.className;
      //page detail
      if(whichDetail.indexOf(1) > -1) {
         page = 1;
      } else if(whichDetail.indexOf(2) > -1) {
         page = 2;
      } else if(whichDetail.indexOf(3) > -1) {
         page = 3;
      } else if(whichDetail.indexOf(4) > -1) {
         page = 4;
      } else if(whichDetail.indexOf(5) > -1) {
         page = 5;
      } else if(whichDetail.indexOf(6) > -1) {
         page = 6;
      }
      
      var xhr = new XMLHttpRequest();
      //debugger;
      xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            //console.log(data);
            con.innerHTML = data;
         
        }//200ok 
     
      };//onreadystate
   
      xhr.open('GET','details/' + String(page) + '.html',true);
      xhr.send(null);
      
      
      
      
      
   },false); //items evt
   





	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.

});   
