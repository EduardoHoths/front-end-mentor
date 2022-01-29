const form = document.querySelector('form')

const inputOnFocus = () => {
    form.classList.remove('error')
}

const emailInvalid = () =>{
    form.classList.add("error")
    const inputEmail = document.querySelector('#email').addEventListener("click", inputOnFocus)
}
const emailValidation = e => {
    const email = document.querySelector('#email').value
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
        e.preventDefault()
        emailInvalid()
    }
}


form.addEventListener('submit', emailValidation)





