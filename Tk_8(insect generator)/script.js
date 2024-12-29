  var btn = document.querySelector('button');
   var body = document.querySelector('body'); 

  btn.addEventListener('click', function(){
     var valuex = Math.random() * 100
     var valuey = Math.random() * 100
     var rot = Math.random() * 100
   var img = document.createElement('img');
   img.setAttribute('src','https://img.freepik.com/free-photo/leptura-quadrifasciata-longhorn-beetle-specimen_181624-59350.jpg?semt=ais_hybrid');
   img.style.height = '200px';
   img.style.width = '200px';
   img.style.position = 'absolute';
   img.style.rotate = rot+ 'deg';
   img.style.left = valuex+ '%';
   img.style.top = valuey+ '%';
   
   body.appendChild(img);
   
     

  })

// Add a timer that changes the background color every 5 seconds