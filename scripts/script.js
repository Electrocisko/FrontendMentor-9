const form = document.getElementById('email-form');
let regEx = /\S+@\S+\.\S+/; //short regexp for email
const container = document.querySelector('.container');
const cardThanks = document.querySelector('.card-thanks');
const inputEmail = document.querySelector('#email');
const emailWrong =document.querySelector('.form-label-wrong');
const dismissBtn = document.querySelector('.dismiss-btn');
const emailOk = document.querySelector('#email-ok');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let email = data.get('email');
    if (regEx.test(email)) {
        console.log('correcto');
        emailOk.innerHTML=email;
        container.classList.add('hide-card');
        cardThanks.classList.remove('hide-card');
    } else {
        console.log('incorrecto');
        emailWrong.classList.remove('hide-card');
        inputEmail.classList.add('email-wrong');
    }
})

dismissBtn.addEventListener('click', () => {
   window.location.reload();
})