// click button to perform a function
$("#cat-button").on("click", function () {

    // access giphy API to search for random cat gifs
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    // tell jQuery to evoke AJAX method to call URL and get data
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // then execute event handling function
        // that receives the response as a variable
        .then(function (response) {

            // declare local variable imageURL
            // find the image_original_url property inside
            // the data object which is a property
            // of the response object and assign the value
            var imageUrl = response.data.image_original_url;

            // get img element to store as object or tell jquery to create an image tag
            var catImage = $("<img>");

            // set the new image src and alt attributes
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            // add image to beginning to images div tag
            $("#images").prepend(catImage);
        });
});