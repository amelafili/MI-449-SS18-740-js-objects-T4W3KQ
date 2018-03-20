// ----
// DATA
// ----
window.localStorage.getItem('jokes')

// A couple jokes to start with
var jokes = {
  'the horse': {
    setup: 'A horse walks into the bar. The bartender asks...',
    punchline: 'Why the long face?'
  },
  'Orion\'s pants': {
    setup: 'How does Orion keep his pants up?',
    punchline: 'With an asteroid belt.'
  }
}

// The message to display if the jokes object is empty
var noJokesMessage = 'I... I don\'t know any jokes. 😢'

// -------------
// PAGE UPDATERS
// -------------

// Update the listed jokes, based on the jokes object
var jokesMenuList = document.getElementById('jokes-menu')
var updateJokesMenu = function () {
  // Don't worry too much about this code for now.
  // You'll learn how to do advanced stuff like
  // this in a later lesson.
  var jokeKeys = Object.keys(jokes)
  var jokeKeyListItems = jokeKeys.join('</li><li>') || noJokesMessage
  jokesMenuList.innerHTML = '<li>' + jokeKeyListItems + '</li>'
}

// If no jokes, then display no joke message
if (jokes === null) {
  jokes.innerHTML = noJokesMessage
} else {

}

// Update the displayed joke, based on the requested joke
var requestedJokeInput = document.getElementById('requested-joke')
var jokeBox = document.getElementById('joke-box')
var updateDisplayedJoke = function () {
  var requestedJokeKey = requestedJokeInput.value
  jokeBox.textContent = requestedJokeKey
}

// if no joke then display no joke message
jokeBox.addEventListener('input', function () {
  if (jokes === null) {
    jokeBox.innerHTML = noJokesMessage
  } else {
    var requestedJokeKey = requestedJokeInput.value
    if (jokes[requestedJokeKey]) {
      jokeBox.innerHTML = requestedJokeKey
    } else {
      jokeBox.innerHTML = noJokesMessage
    }
  }
})

// press button to forget joke
var forgetButton = document.getElementById('forget')
var forgetJoke = document.getElementById('forgetInfo')
forgetButton.addEventListener('click', function () {
  var forgetInfo = forgetJoke.value
  delete jokes[forgetInfo]
})

// variables collected from html for input
var aboutInput = document.getElementById('jokeInfo')
var setUpInput = document.getElementById('setUp')
var punchLineInput = document.getElementById('punchLine')

// press button to remember joke
var rememberButton = document.getElementById('remember')
rememberButton.addEventListener('click', function () {
  var about = aboutInput.value
  var setUp = setUpInput.value
  var punchLine = punchLineInput.value
})

// Function to keep track of all other
// page update functions, so that we
// can call them all at once
var updatePage = function () {
  updateJokesMenu()
  updateDisplayedJoke()
}

// -------
// STARTUP
// -------

// Update the page immediately on startup
updatePage()

// ---------------
// EVENT LISTENERS
// ---------------

// Keep the requested joke up-to-date
requestedJokeInput.addEventListener('input', updateDisplayedJoke)
