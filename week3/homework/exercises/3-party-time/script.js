
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */


const URL = "https://reservation100-sandbox.mxapps.io/api/reservations";
const fetch = require('node-fetch');

const body = {
  "name": "John Doe",
  "numberOfPeople": 3
}

async function makeReservation(req, res) {
  try {
    const response = await fetch(URL, {
      method: "post",
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json();
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}
makeReservation()
