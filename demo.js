
function store(event){
    event.preventDefault();
    const Name=event.target.name.value;
    const Email=event.target.email.value;
    localStorage.setItem('Name', Name)
    localStorage.setItem('Email', Email)
const obj={
    Name,
    Email
}
localStorage.setItem(obj.Email,JSON.stringify(obj))
showOnScreen(obj)
}
function showOnScreen(obj){
    const parentElement=document.getElementById('users')
    var childElement=document.createElement('li')
    childElement.textContent=obj.Name+'-'+obj.Email
    parentElement.appendChild(childElement)
     //parentElement.innerHTML = parentElement.innerHTML+ <li>${obj.Name} - ${obj.Email}</li>
}