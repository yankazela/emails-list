
import {validateEmail} from './utils'

class InputHandler {
    constructor(inputFieldContainer) {
        this.inputFieldContainer = inputFieldContainer;
        this.validEmails = 0
        this.submitEventCodes = [44, 13, 8]
        this.init()
    }

    changeValidEmailsCount(type) {
        if (type === 'a')
            this.validEmails ++
        else
            this.validEmails --
    }

    init() {
        this.createEmailField(this.inputFieldContainer)
        this.addEventListeners(this.inputFieldContainer)
    }

    createEmailField(inputFieldContainer) {
        var emailInput = document.createElement('input')
        var emailInputContainer = document.createElement('div')
        emailInput.setAttribute('placeholder', 'add more people ...')
        emailInput.classList.add('email-input-field')
        emailInputContainer.classList.add('email-input-field-container')
        emailInputContainer.appendChild(emailInput)
        inputFieldContainer.appendChild(emailInputContainer)
    }

    addEventListeners(inputFieldContainer) {

        inputFieldContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-email')) {
                const emailItem = event.target.parentNode.parentNode
                const email = emailItem.querySelector('.email-text').textContent
                if (validateEmail(email.substr(0, email.length - 1))) {
                    this.changeValidEmailsCount('r')
                }
                this.deleteEmail(emailItem, event.target.parentNode)
            }
        })

        inputFieldContainer.addEventListener('keypress', (event) => {
            if(this.submitEventCodes.includes(event.keyCode) && event.target.matches('input')) {
                event.preventDefault()
                this.attachNewEmail(event.target)
            }
        })

        inputFieldContainer.addEventListener('paste', (event) => {
            if(event.target.matches('input')) {
                event.preventDefault()
                const emailsSet = event.clipboardData.getData('Text')
                emailsSet.split(',').map(email => this.attachNewEmail(event.target, email))
            }

        })

        inputFieldContainer.addEventListener('focusout', (event) => {
            this.attachNewEmail(event.target)
        })
    }

    attachNewEmail(input, value) {
        const email = value || input.value
        if (!email || email === '')
            return
        const emailItem = document.createElement('span')
        emailItem.classList.add('email-item')
        emailItem.innerHTML = `<span class='email-text ${validateEmail(email) ? 'valid' : 'invalid'}'>${email}<a class='delete-email'>×<a></span>`
        input.parentNode.insertBefore(emailItem, input)
        input.value = null
        if (validateEmail(email))
            this.changeValidEmailsCount('a')
        this.updateScroll()
    }

    deleteEmail(emailItem, parentNode) {
        emailItem.removeChild(parentNode)
    }

    updateScroll(){
        var container = document.querySelector('.email-input-field-container');
        container.scrollTop = container.scrollHeight;
    }
}

export default InputHandler