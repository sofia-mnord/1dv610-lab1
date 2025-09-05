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
submitBtn.addEventListener('click', async () => {
  submitBtn.disabled = true
  const inputName = userInput.value

  // ta bort översta diven
  welcomeDiv.remove()

  const greeting = document.createElement('h2')
  greeting.textContent = `Welcome ${inputName}!`

  const greetingDiv = document.createElement('div')
  greetingDiv.appendChild(greeting)

  const book = await getBooks()
  if (book) {
    const bookTitleAndAuthor = document.createElement('p')
    bookTitleAndAuthor.textContent = `Your book recommendation is: ${book.title} by ${book.authors}`
    greetingDiv.appendChild(bookTitleAndAuthor)
  }
  document.body.appendChild(greetingDiv)
})
