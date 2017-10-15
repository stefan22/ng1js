var HeaderMod = (function() {  
   //reg & log
   var reg = document.querySelector('.controls a');
   var log = document.querySelectorAll('.controls')[0].children[1];
   
   function loadReg(e) {
      e.preventDefault();
      //load async
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
           var data = this.responseText;
           document.getElementById('modal').innerHTML = data;
           document.getElementById('modal').
           style.display = 'block';
          
           //once loaded close
           var close = document.querySelector('#modal .close');
           close.addEventListener('click', function() {
             document.getElementById('modal').style.display = 'none';
          
           });//close evt
       
        } //ok
         
      };//onreadystate
      
      xhr.open('GET','register.html', true);
      xhr.send(); 
    
   }//loadReg fn
   
   
   function loadLog(e) {
      e.preventDefault();
      //load async
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
           var data = this.responseText;
           document.getElementById('modal').innerHTML = data;
           document.getElementById('modal').
           style.display = 'block';
          
           //once loaded close
           var close = document.querySelector('#modal .close');
           close.addEventListener('click', function() {
             document.getElementById('modal').style.display = 'none';
          
           });//close evt
       
        } //ok
         
      };//onreadystate
      
      xhr.open('GET','login.html', true);
      xhr.send(); 
     
   }//loadLog fn
   
   function init() {
       console.log('init');
       reg.addEventListener('click',loadReg, false);
       log.addEventListener('click', loadLog, false);
   }//init
   
   
   return {
       init: init
   };
   

})();

//HeaderMod
document.addEventListener('DOMContentLoaded',HeaderMod.init);