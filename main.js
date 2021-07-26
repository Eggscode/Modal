let callMode = document.getElementsByClassName('exit')[0]
let btn = document.getElementById('btn').addEventListener
('click', buttonClick );
let modal = document.getElementsByClassName('modal-wrapper')[0];


function buttonClick(){
      modal.classList.add('active');
  }

// btn.addEventListener('click', function(){
//     modal.classList.add('modal-active');
// })

callMode.addEventListener('click', ()=>{
    modal.classList.remove('active');
})

console.log(modal)
