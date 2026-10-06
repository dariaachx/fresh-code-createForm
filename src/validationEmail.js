'use strict'

const checkInput = document.querySelector('input[name="email"]')
const messageError = document.createElement('div')
messageError.className = 'error-message'
messageError.innerHTML = '<span>Invalid email</span>'
messageError.style.display = 'none'

checkInput.parentElement.append(messageError)

function ValidateEmail(){
    const value = checkInput.value 
    // base reg-exp for email
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailReg.test(value)){
        messageError.style.display = 'none'
    } else {
        messageError.style.display = 'block'
    }
}

checkInput.addEventListener('input', ValidateEmail)