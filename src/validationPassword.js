'use strict'

const passwordInput = document.querySelector('input[name="password"]')
const confirmInput = document.querySelector('input[name="passwordConfirmation"]')

const passwordError = document.createElement('div')
passwordError.className = 'error-password'
passwordError.innerHTML = '<span>Invalid password</span>'
passwordError.style.display = 'none'

passwordInput.parentElement.append(passwordError)

function ValidatePasswords(){
    const pass = passwordInput.value
    const passReg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g

    if(passReg.test(pass)){
        passwordError.style.display = 'none'
    } else {
        passwordError.style.display = 'block'
    }
}
passwordInput.addEventListener('input', ValidatePasswords)

function MatchPasswords(){
    const passVal = passwordInput.value
    const confirmVal = confirmInput.value

    if(confirmVal === passVal){
        passwordError.style.display = 'none'
    } else {
        passwordError.style.display = 'block'
    }
}

passwordInput.addEventListener('input', MatchPasswords)
confirmInput.addEventListener('input', MatchPasswords)