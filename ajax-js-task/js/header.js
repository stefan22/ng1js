(function(global) {  
   //reg & log
   var reg = document.querySelector('.controls a');
   var log = document.querySelectorAll('.controls')[0].children[1];
   
   //register
   reg.addEventListener('click', function(e) {
      //console.log(e);
      e.preventDefault();
      //console.log('register');
      
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
      
   },false);//reg
   
   //login
   log.addEventListener('click', function(e) {
      e.preventDefault();
      //console.log('login');
      
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
      

      
   },false); //log
   
   
   
   
   
   
   
   
})(window);