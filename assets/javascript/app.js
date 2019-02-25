/* 

UofT Coding Bootcamp 2019 -- GifTastic

Template credits to UofT week 06 / activity 09-ClickJSON

*/


$(document).ready(function () {

    /// GLOBAL VARIABLES
    // ================================================================================================================================

    // Initial array of topics: emotions
    var topics = [
        'awkward',
        'bored',
        'confused',
        'drunk',
        'excited',
        'frustrated',
        'hungry',
        'mindblown',
        'tired',
        'scared',
        'happy',
        'sick',
        'love',
        'lonely',
        'surprised',
        'hangry',
        'relaxed',
        'easy',
        'sleepy'
    ];


    /// FUNCTIONS
    // ================================================================================================================================

    // Function for dumping JSON content for each button into div
    function displayGifs() {
        var emotions = $(this).attr('data-name');
        // Setup URL query for search property, api key, limit and rating
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + emotions + '&api_key=Bn1uHegGkWWeet1KdK6hkDWIX0waai4j&limit=10&rating=pg-13';
        // Make the AJAX call to GIPHY API
        $.ajax({ url: queryURL, method: 'GET' }).done(function (response) {
            console.log(response);

            // Grabs data
            var results = response.data;
            // Empty the div before adding new gifs
            $('#gifContainer').empty();
            // Loop through results data
            for (var i = 0; i < results.length; i++) {
                var newDiv = $('<div>');
                // Display ratings
                var newRating = $('<h3>').html('Rating: ' + results[i].rating);
                // Display states of images
                var newImg = $('<img>');
                newImg.attr('src', results[i].images.fixed_height_still.url);
                newImg.attr('data-still', results[i].images.fixed_height_still.url);
                newImg.attr('data-animate', results[i].images.fixed_height.url);
                newImg.attr('data-state', 'still');
                newImg.addClass('gif');
                // Append new rating to div
                newDiv.append(newRating);
                // Append new image to div
                newDiv.append(newImg);
                // Append new gifs to the gifContainer
                $('#gifContainer').append(newDiv);
            }

            // Function for when animating gif and stop moving gif
            $('.gif').on('click', function () {
                event.preventDefault();
                var state = $(this).attr('data-state');
                // Make gif either animated or still depending on 'data-state' value
                if (state === 'still') {
                    $(this).attr('src', $(this).attr('data-animate'));
                    $(this).attr('data-state', 'animate');
                } else {
                    $(this).attr('src', $(this).attr('data-still'));
                    $(this).attr('data-state', 'still');
                }
            });
        });
    }

    // Function for displaying emotions data
    function renderButtons() {
        // Delete buttons prior to adding new emotions
        $('#emotionsGroup').empty();
        // Looping through the array of emotions
        for (var i = 0; i < topics.length; i++) {
            // Dynamically generate buttons for each emotion in array
            var button = $('<button>');
            // Adding a class of emotions to buttons
            button.addClass('emotions');
            // Adding a data-attribute
            button.attr('data-name', topics[i]);
            // Providing the initial button text
            button.text(topics[i]);
            // Adding the button to the emotionsGroup div
            $('#emotionsGroup').append(button);
        }
    }

    // Function for when events button is clicked
    $("#addEmotionsBtn").on("click", function (event) {
        event.preventDefault();
        // Alert textbox cannot be blank
        if ($('#newEmotionsInput').val().trim().toLowerCase() == '') {
            window.alert('Ops! Textbox cannot be left blank.');
        } else {
            // Grabs input from textbox
            var emotions = $('#newEmotionsInput').val().trim().toLowerCase();
            // Add item to topics array
            topics.push(emotions);
            // Call renderButtons to handle processing of topics array
            renderButtons();
        }
    });

    // On click emotions button and run displayGifs function 
    $(document).on("click", ".emotions", displayGifs);

    // Display all buttons on load
    renderButtons();

});