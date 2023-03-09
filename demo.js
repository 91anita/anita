
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
localStorage.setItem("userDetails",JSON.stringify(obj))
}