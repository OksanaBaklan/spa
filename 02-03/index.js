const fetchButton = document.getElementById('fetchhandler')

fetchButton.addEventListener('click', (e)=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:"GET",
        mode:'cors' 
    }).then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
})

