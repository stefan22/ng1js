var DetailsMod = function() {
   //items & content
	var items = document.querySelectorAll('.items')[0];
   var con = document.querySelector('#details .content');
   var page, pgId, xhr;
   
   
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
      
      pgId(page);
      //call details
      loadAsync(page);
        
   }//whichDetail fn
   
   
   function loadAsync(page) {
      //load async
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            con.innerHTML = data;         
        }//200ok 
     
      };//onreadystate
   
      xhr.open('GET','details/' + String(page) + '.html',true);
      xhr.send(null);
        
   }//loadAsync
   
   function init() {
      items.addEventListener('click',whichPerson, false); 
   }//init   
   
   function pgId() {
      var currentId = document.location.hash;
      currentId = currentId.substr(currentId.length - 6).charAt(0);
      page = page || currentId;
      console.log(page);
      return page;
   }
  
   
   
   return {
      init: init
     
     
   };


	
}();	