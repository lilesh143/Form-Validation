console.log('This is form validation tutorial')

const username = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const alert = document.getElementById('alt')
let validate

username.addEventListener('input', () => {
    console.log('Blur event is fire for name');
    let regex = /^([a-zA-Z])([a-zA-Z0-9]){2,10}$/
    let str = username.value;
    if (regex.test(str)) {
        validate = true;
        username.classList.remove('is-invalid')
        console.log('yes it match');
    } else {
        validate = false;
        username.classList.add('is-invalid')
        console.log('no, it doesnt match');
    }

})
email.addEventListener('input', () => {
    console.log('Blur event is fire for email');
    let regex = /^([\-\_\.a-zA-Z0-9]+)@([\-\_\.a-zA-Z0-9]+)\.([a-z]{2,7})$/
    console.log(regex);

    let str = email.value;
    if (regex.test(str)) {
        validate = true;
        email.classList.remove('is-invalid')
        console.log('yes it match');
    } else {
        validate = false;
        email.classList.add('is-invalid')
        console.log('no, it doesnt match');
    }
})
number.addEventListener('input', () => {
    console.log('Blur event is fire for number');
    let regex = /^([0-9]{10})$/
    let str = number.value;
    if (regex.test(str)) {
        validate = true;
        number.classList.remove('is-invalid')
        console.log('yes, it match');
    } else {
        validate = false;
        number.classList.add('is-invalid')
        console.log('no, it doesnt match');
    }
})

const submit = document.getElementById('submit');
submit.addEventListener('click', sub)

function sub(e) {
    e.preventDefault()
    const alert = document.getElementById('alt')

    if (validate) {
        console.log(validate);
        alert.innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
      </svg>
    <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
        <strong> Success : </strong> Your form submitted successfully
        </div>`;
        setTimeout(() => {
            alert.innerHTML = ``
        }, 3000);
    } else {
        console.log(validate);
        alert.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">

        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
       </symbol>
        </svg>
        <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
           <strong> Error : </strong> Please fill the form!
       </div>
       </div>  `;
        setTimeout(() => {
            alert.innerHTML = ``
        }, 3000);
    }
}