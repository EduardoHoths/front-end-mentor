function getUserDom(field) {
    let usuario = field.value.substring(0, field.value.indexOf('@'))
    let dominio = field.value.substring(field.value.indexOf('@')+1, field.value.length)
    validation(usuario, dominio)
}

let form = document.querySelector('form')

const removeError = () => form.classList.remove('error')


let input = document.querySelector('input')
input.addEventListener('click', removeError)



function validation(user, dom){
    if(user.length >= 1 && 
        dom.length >= 3 && 
        user.search('@') == -1 && 
        dom.search('@') == -1 && 
        user.search(' ') == -1 &&
        dom.search(' ') == -1 &&
        dom.search('.') != -1 &&
        dom.indexOf('.') >= 1 &&
        dom.lastIndexOf('.') < dom.length - 1){
            
        } else {
            
            form.classList.add('error')
            
        }
}

