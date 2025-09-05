/**
 * The main script file of the application.
 *
 * @author Sofia Nord <sj224ds@student.lnu.se>
 * @version 1.0.0
 */

import { getBooks } from './api.js'

const userInput = document.getElementById('nameInput')
const submitBtn = document.getElementById('submitBtn')
const pageWrapper = document.getElementById('pageWrapper')

submitBtn.addEventListener('click', async () => {
  submitBtn.disabled = true
  const inputName = userInput.value.trim()

  if (!inputName) {
    alert('Please enter a name.')
    submitBtn.disabled = false
    return
  }

  pageWrapper.innerHTML = ''

  const greeting = document.createElement('h2')
  greeting.textContent = `Hello ${inputName}!`

  pageWrapper.appendChild(greeting)

  const book = await getBooks()
  if (book) {
    const bookTitleAndAuthor = document.createElement('p')
    bookTitleAndAuthor.textContent = `Your book recommendation is: ${book.title} by ${book.authors}`
    pageWrapper.appendChild(bookTitleAndAuthor)
  }

  if (book.imageLinks?.thumbnail) {
    const img = document.createElement('img')
    img.src = book.imageLinks.thumbnail
    img.alt = book.title
    pageWrapper.appendChild(img)
  }

  const backButton = document.createElement('button')
  backButton.textContent = 'Back'
  pageWrapper.appendChild(backButton)
  backButton.addEventListener('click', () => {
    return location.reload()
  })
})
