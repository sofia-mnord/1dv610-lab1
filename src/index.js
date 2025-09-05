/**
 * The main script file of the application.
 *
 * @author Sofia Nord <sj224ds@student.lnu.se>
 * @version 1.0.0
 */

import { getBooks } from './api.js'

const userInput = document.getElementById('nameInput')
const submitBtn = document.getElementById('submitBtn')
const welcomeDiv = document.getElementById('welcomeMessageContainer')

// sätt upp eventlyssnare på submit-knappen
submitBtn.addEventListener('click', () => {
  submitBtn.disabled = true
  const inputName = userInput.value

  // ta bort översta diven
  welcomeDiv.remove()

  const greeting = document.createElement('h2')
  const greetingContent = document.createTextNode(`Welcome ${inputName}!`)
  greeting.appendChild(greetingContent)

  const greetingDiv = document.createElement('div')
  greetingDiv.appendChild(greeting)
  document.body.appendChild(greetingDiv)

  getBooks()
})
