var DetailsMod = (function() {
   //items & content
	var items = document.querySelectorAll('.items')[0];
   var con = document.querySelector('#details .content');
   
   function whichDetail(e) {
      //whichDetail & page
      var page;
      var whichDetail = e.target.className;
      //page detail
      if(whichDetail.indexOf(1) > -1) {
         console.log(whichDetail);
         page = 0;
      } else if(whichDetail.indexOf(2) > -1) {
         console.log(whichDetail);
         page = 1;
      } else if(whichDetail.indexOf(3) > -1) {
         console.log(whichDetail);
         page = 2;
      } else if(whichDetail.indexOf(4) > -1) {
         console.log(whichDetail);
         page = 3;
      } else if(whichDetail.indexOf(5) > -1) {
         console.log(whichDetail);
         page = 4;
      } else if(whichDetail.indexOf(6) > -1) {
         console.log(whichDetail);
         page = 5;
      }
      
      loadAsync(page);
        
   }//whichDetail fn
   
   
   function loadAsync(page) {
      //load async
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
        
   }//loadAsync
   
   function init() {
      items.addEventListener('click',whichDetail, false); 
   }//init   
   
   
   return {
      init: init   
   };


	
})();	


//DetailsMod
document.addEventListener('DOMContentLoaded', DetailsMod.init);