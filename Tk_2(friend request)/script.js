 var btn = document.querySelector('button');
 var h2 = document.querySelector('h2');

 var flag = 0;
 btn.addEventListener('click', function(){
    if(flag==0){
        h2.innerHTML = 'friend';
        btn .style.backgroundColor ='Red';
        btn.innerHTML = 'Remove friend'  ;  // change button text to 'Remove friend' when clicked on 'Friend'
        flag = 1;
    }
    else{
        h2.innerHTML = 'Stranger';
        btn .style.backgroundColor ='green';
        btn.innerHTML = 'Add friend'
        flag = 0;
    }
    
    
    
 })