'use strict'

const heading = document.createElement('h1')
heading.className = 'form-title'
heading.textContent = 'CREATE AN ACCOUNT'

const subtitle = document.createElement('p')
subtitle.className = 'form-subtitle';
subtitle.textContent = 'We always keep your name and email address private.'

const container = document.getElementById('container')


container.append(heading, subtitle)

const data = document.createElement('div')
data.className = 'input-data'

const fieldsData = [
    {type: 'text', name: 'firstName', placeholder: 'First name'},
    {type: 'text', name: 'lastName', placeholder: 'Last name'},
    {type: 'text', name: 'displayName', placeholder: 'Display Name'},
    {type: 'email', name: 'email', placeholder: 'Email Address'},
    {type: 'password', name: 'password', placeholder: 'Password'},
    {type: 'password', name: 'passwordConfirmation', placeholder: 'Password Confirmation'}
]

fieldsData.forEach(field => {
    const input = document.createElement('input')

    input.type = field.type
    input.name = field.name
    input.placeholder = field.placeholder

    data.append(input)
})

container.append(data)

const info = document.createElement('div')
info.className = 'info'

function RadioCard(name, titleText, descText, isChecked = false){
    const card = document.createElement('label')
    card.className = 'radio-card'

    const radio = document.createElement('input')
    // type radioButton causes an error
    radio.type = 'radio'
    radio.name = name
    radio.checked = isChecked

    const title = document.createElement('div')
    title.className = 'title-text'
    title.textContent = titleText

    const desc = document.createElement('div')
    desc.className = 'desc-text'
    desc.textContent = descText

    card.append(radio, title, desc)

    //return card нужен для того, чтобы результат работы функции можно было положить в переменную и передать дальше в браузер через .append().
    return card
}

const buyerCard = RadioCard(
    'userRole',
    'Join As a Buyer',
    'I am looking for a Name, Logo or Tagline for my business, brand or product.',
)

const sellerCard = RadioCard(
    'userRole',
    'Join As a Creative or Marketplace Seller',
    'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
)

info.append(buyerCard, sellerCard)
container.append(info)

// add for css
const sendOffers = document.createElement('input')
sendOffers.type = 'checkbox'

const sendOffersText = document.createElement('span')
sendOffersText.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time'

const checkboxWrapper = document.createElement('label')
checkboxWrapper.className = 'checkbox-wrapper'
checkboxWrapper.append(sendOffers, sendOffersText)

container.append(checkboxWrapper)

const subButton = document.createElement('button')
subButton.className = 'submit-btn'
subButton.textContent = 'Create account'
container.append(subButton)