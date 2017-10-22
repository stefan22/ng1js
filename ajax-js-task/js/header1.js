var HeaderMod = (function() {
  //handler for reg,log
  var reglog = document.querySelector('#page .controls');
  var modal = document.getElementById('modal');
  var url,xhr;
  
  function headclicks() {
    //click evt
    reglog.addEventListener('click',function(e) {
        e.preventDefault();
        //new xhr call
        xhr = new XMLHttpRequest();
        //register
        if(e.target.textContent == 'register') {
          url = e.target.href;
        }//if
        //login
        else if(e.target.textContent == 'login') {
          url = e.target.href;  
        }//else if
        
        //callback fn
        xhr.onreadystatechange = calldata;
        xhr.open('GET',url, true);
        xhr.send(null);
      
    },false); //reglog
    
  }//headclicks
  
  
  function closeMo(e) {
    if(e.target.className == 'close') {
        modal.style.display = 'none';
    }//if x'spot
        
  }//closeMo   
  
  function calldata() {
    //if success
    if(xhr.status == 200) {
      var data = xhr.responseText;
      //console.log(data);
      modal.innerHTML = data;
      //display block
      modal.style.display = 'block';
      
      //x close evt
      var close = document.getElementById('modal');
      close.addEventListener('click', closeMo, false);
      
    }//if 200ok
    
 
  }//callback fn
  
  
  function init() {
    headclicks();
    
  }//init fn
  

  return {
    init: init
  }
  
   
})(); //HeaderModule