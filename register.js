var register = document.querySelector('.register');
var login = document.querySelector('.login');

var createAccount = document.getElementById('pageRegister');
var loginbtn = document.getElementById('login-container');


loginbtn.addEventListener('click', loginHandler)
function loginHandler(){
    login.classList.remove('hidden');
    register.classList.add('hidden');
}

createAccount.addEventListener('click',registerHandler)
function registerHandler(){
    login.classList.add('hidden');
    register.classList.remove('hidden');
}
  
