## Name of the project.
This is a javascript implementation of email reader of emails entered via an input field. It is built with only webpack and babel to run the code on a server and make use of ES6 functionalities.

## Code Structure
This mini project implements an API used to initialize and load the email input component, to add one or many emails, to remove an email and display the total number of valid emails added.

## API Methods

1. Create: this method creates and loads the email input component class
   ```js
        container = document.getElementById('email-input')
        const inputHandler = new InputHandler(container)
   ```
2. Add a new email and run a validation on it.
    ```js
        const input = document.querySelector('input')
        inputHandler.attachNewEmail(input)
    ```
    or
    ```js
        const email = document.getElementById('email-text')
        inputHandler.attachNewEmail(input, email)
    ```
3. Remove an email from the list
    ```js
        inputHandler.deleteEmail(emailItem, parentNode) {
    ```

4. Count valid emails
  ```js
    inputHandler.validEmails
  ```

## How to run it

1. Build:
```cmd
    npm run build
```
2. Run server:
```cmd
    npm run serve
```

MIT © 2021