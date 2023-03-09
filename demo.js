
function store(){
var inputEmail= document.getElementById("email");
var inputName= document.getElementById("name");
localStorage.setItem("email", inputEmail.value);
localStorage.setItem("name", inputName.value);
}