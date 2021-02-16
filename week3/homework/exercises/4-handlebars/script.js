
/**
 * 4. Fun with Handlebars
 * 
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 * 
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */

const Handlebars = require("handlebars");

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];


function drawCard(subjectValue, punchlineValue) {
  const cardData = {
    subjects: subjectValue,
    punchline: punchlineValue
  }
  const card = "{{cardData.subjects}} is great to {{cardData.punchline}}."
  const template = Handlebars.compile(card);
  console.log(template({ cardData }))
}
function getRandomElement(array1, array2) {
  const randomNum1 = Math.floor(Math.random() * array1.length)
  const randomNum2 = Math.floor(Math.random() * array2.length)
  const element1 = array1[randomNum1]
  const element2 = array2[randomNum2]
  drawCard(element1, element2)
}
getRandomElement(subjects, punchlines)





