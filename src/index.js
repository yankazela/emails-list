import './styles/main.css'
import InputHandler from './inputHandler'


class App {
    constructor (container) {
        this.inputHandler = new InputHandler(container)
        this.init()
    }

    init() {
        this.addEmail()
        this.countValidEmails()
    }
    addEmail() {
        const addButton = document.getElementById('add-email')
        const input = document.querySelector('input')
        addButton.addEventListener('click', () => {
            this.inputHandler.attachNewEmail(input)
        })
    }

    countValidEmails() {
        const countButton = document.getElementById('get-count')
        countButton.addEventListener('click', () => {
            alert(`The total number of valid emails provided is: ${this.inputHandler.validEmails}`)
        })
    }
}

new App(document.getElementById('email-input'))
