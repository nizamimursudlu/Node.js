/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */

const URL = "http://api.icndb.com/jokes/random";
const fetch = require('node-fetch');

async function printChuckNorrisJoke(req, res) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.value.joke)
  } catch (e) {
    console.error(e)
  }
}
printChuckNorrisJoke()
