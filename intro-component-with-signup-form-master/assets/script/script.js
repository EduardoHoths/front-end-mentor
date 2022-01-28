const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const firstName = document.getElementById('name')

    if (firstName.value == '') {
        firstName.parentNode.classList.add('error')
        e.preventDefault()
    }
    if (email.value == '') {
        email.parentNode.classList.add('error')
        email.placeholder = 'email@example.com'
        e.preventDefault()
    } else {
        if(emailValidation(email.value) == 'invalid'){
            email.parentNode.classList.add('error')
            e.preventDefault()
        }
    }
    if (password.value == '') {
        password.parentNode.classList.add('error')
        e.preventDefault()
    }
    if (lastName.value == '') {
        lastName.parentNode.classList.add('error')
        e.preventDefault()
    }
    const inputs = document.querySelectorAll('input').forEach(input => {
        input.addEventListener('click', inputOnFocus)
    })
    
})

    

function inputOnFocus(e) {
    e.target.parentNode.classList.remove('error')
}
function emailValidation(email) {

    const user = email.substring(0, email.indexOf('@'))
    const domain = email.substring(email.indexOf('@') + 1, email.length)

    if ((user.length >= 1) &&
        (domain.length >= 3) &&
        (user.search("@") == -1) &&
        (domain.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (domain.search(" ") == -1) &&
        (domain.search(".") != -1) &&
        (domain.indexOf(".") >= 1) &&
        (domain.lastIndexOf(".") < domain.length - 1)) {
            return
    } else {
        return 'invalid'
    }
}

