/**
 * The script file that handles the API.
 *
 * @author Sofia Nord <sj224ds@student.lnu.se>
 * @version 1.0.0
 */

const url = 'https://www.googleapis.com/books/v1/volumes?q=4'

/**
 * Gets a randomized book from the url.
 *
 * @returns {object} - A json object containing all the info of the book.
 */
export async function getBooks () {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    // randomisera index
    const randomIndex = Math.floor(Math.random() * result.items.length)
    // visa bok
    console.log(result.items[randomIndex].volumeInfo)
    return result.items[randomIndex].volumeInfo
  } catch (error) {
    console.error(error.message)
  }
}
