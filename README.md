# GifTastic

<a href="http://g.recordit.co/HH2g3J5CMz.gif"><img src="https://media.giphy.com/media/2vjlxHe4uyX9v6ExnA/giphy.gif" border="0"></a>

## Basic Feature
* Emotion GIFs pulled from GIPHY API
* Screen on load displays list of suggested emotions
* Prompts user to enter their emotions if preferred
* Appends new item to list of emotions
* Submit button will load 10 GIFs images in newDiv and respective ratings (G)
* Users may change the state of the GIFs from data-still to data-animate and so on

Preview and Play game here: https://xmkchen.github.io/GifTastic/

## Homework Instructions
Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

We chose animals for our theme, but you can make a list to your own liking.

Your app should take the topics in this array and create buttons in your HTML.

Try using a loop that appends a button for each string in the array.

When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

Under every gif, display its rating (PG, G, so on).

This data is provided by the GIPHY API.
Only once you get images displaying with button presses should you move on to the next step.

Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

## Acknowledgement
UofT Boot Camp 2019
