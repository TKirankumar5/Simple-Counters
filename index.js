
let saveEl = document.getElementById("save-el");
let CountEl = document.getElementById("count");
let count=0;

 function increment() 
   {
    count += 1;
    CountEl.innerHTML = count; 
    }
    
    
    function decrement() 
   {
    if(count>=1)
    { 
    count -= 1;
    CountEl.innerHTML = count;
   }
    }

    function reset(){
      count = 0;
      CountEl.innerHTML = 0;
     saveEl.textContent = "Previous Entries Are : " ;

    }
  
    
    function save(){
      saveEl.textContent += count + " - ";
      count = 0;
      CountEl.innerHTML =count ;
    }