const form = document.querySelector('#form');
const password = document.querySelector('#password');



form.addEventListener('submit', (event) => {

    event.preventDefault();
    if (password.value.length < 8) {
        console.log('Your password is not allowed')
    } else {
        console.log('Your password is allowed')

    }

})