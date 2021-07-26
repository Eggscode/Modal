let callMode = document.getElementsByClassName('exit')[0]
let close = document.getElementsByClassName('logout')[0]
let btn = document.getElementById('btn').addEventListener
('click', buttonClick);
let btnLogin = document.getElementById('login').addEventListener
('click', loginAcc );
let modal = document.getElementsByClassName('modal-wrapper')[0];
let login = document.getElementsByClassName('login-wrapper')[0];

// Exit Create account

callMode.addEventListener('click', ()=>{
    modal.classList.remove('active');
})

close.addEventListener('click', ()=>{
    login.classList.remove('active');
})

// Create account
function buttonClick(){
      modal.classList.add('active');
  }


function loginAcc(){
      login.classList.add('active');
  }