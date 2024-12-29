var teams = ['CSK','MI','KKR','GT','SRH','RCB','RR','GT','DC','LSG']
var h1 = document.querySelector('h1')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){ 
    
    var num =Math.floor( Math.random() * teams.length)
    h1.innerHTML = teams[num]
     console.log(num)
})