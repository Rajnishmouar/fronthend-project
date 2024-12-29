var arr = [
   
    {
        dp:'https://media.istockphoto.com/id/1338106337/photo/man-leaving-the-house-with-his-baby-and-locking-the-door-using-a-home-automation-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=ehu-ToNffPwd2LOfK4aR9UnYauCRSJJ-7XtJjYg_GAQ=',
        story:'https://images.unsplash.com/photo-1734005302887-a95f70a01bbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
        username:'sumit'

    },
    
    
    {
        dp:'https://images.unsplash.com/photo-1730577836014-0689bfc83670?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1731595634152-112dca134142?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D',
        username:'Rozilina'

    },
    {
        dp:'https://images.unsplash.com/photo-1733858864100-138aaea0917b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D',
        username:'aryan'
    },
    {
        dp:'https://images.unsplash.com/photo-1734390151133-f6b8e8abceb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734532873375-574fd74045c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D',
        username:'maria'
    },
    {
        dp:'https://images.unsplash.com/photo-1702884163540-3e3b56dd2fed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1702884162674-b05320817c58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D',
        username:'dark_devil'
    },
    {
        dp:'https://images.unsplash.com/photo-1734387981971-037a15511ef6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1734466649856-6f7677852131?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D',
        username:'melonia'
    },
    


    
];

var sum = '';
arr.forEach(function(elem,idx){
    sum = sum + `<div class="story">
            <img id  = ${idx} src="${elem.dp}" alt="">
        </div>`
});
var storiyan = document.querySelector('#storiyan');
storiyan.innerHTML = sum;
var full = document.querySelector('#full');
var fulluser = document.querySelector('#full h2');
var growth = document.querySelector('#growth');

storiyan.addEventListener('click',function(dets){
    var grow = 0;
    var required = arr[dets.target.id];
    let interval = setInterval(function(){
       grow++;
       growth.style.width = grow + '%';
    },30)

    full.style.display ='block';
    full.style.backgroundImage = `url(${required.story})`;
    fulluser.innerHTML = required.username;

    setTimeout(function(){
     full.style.display ='none';
     clearInterval(interval);
    },2000)
})