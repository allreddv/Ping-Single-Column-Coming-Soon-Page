


const email_address = document.getElementById('email_address')
const error = document.getElementById('error_msg')
const notify = document.getElementById('notify_btn')

// set error msg to hidden upon site load and email input to empty string
error.classList.add('hidden')
email_address.value = ''

//test if an email is valid, if invalid remove hidden class from error msg,
//change border of email input to red, move notify button down
const email_validation = (e) => {
    e.preventDefault();
   let email = email_address.value ;
   let regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
   if (window.innerWidth < 900) {
    notify.style.marginTop = '3rem';
    }
   if (!email.match(regex)) {
    error.classList.remove('hidden');
    email_address.style.border = '1px solid var(--Light-Red' 
    }
}

// check if email is valid upon notify button click
notify.addEventListener('click', email_validation);



