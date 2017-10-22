var DetailsMod = (function() {
   //items & content
	var items = document.querySelectorAll('.items')[0];
   var con = document.querySelector('#details .content');
   var page, xhr;
   
   
   function whichPerson(e) {
      var whichDetail = e.target.className;
      //page detail
      if(whichDetail.indexOf(1) > -1) {
         page = 0;
      } else if(whichDetail.indexOf(2) > -1) {
         page = 1;
      } else if(whichDetail.indexOf(3) > -1) {
         page = 2;
      } else if(whichDetail.indexOf(4) > -1) {
         page = 3;
      } else if(whichDetail.indexOf(5) > -1) {
         page = 4;
      } else if(whichDetail.indexOf(6) > -1) {
         page = 5;
      }
      
      //call details
      loadAsync();
        
   }//whichDetail fn
   
   
   function loadAsync() {
      //load async
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            con.innerHTML = data;         
        }//200ok 
     
      };//onreadystate
   
      xhr.open('GET','details/' + pgId(page) + '.html',true);
      xhr.send(null);
        
   }//loadAsync
   
   function init() {
      items.addEventListener('click',whichPerson, false); 
   }//init   
   
   function pgId(id) {
      return page;
   }
   
  
   
   
   return {
      init: init
     
   };


	
})();	