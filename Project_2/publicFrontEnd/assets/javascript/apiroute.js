  // can be maybe used to help get pictures into the card carousel
  
  
  
  
  $("#otherUserProjectsBtn").on("click", function() {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    console.log(queryURL)

    // After the data from the AJAX request comes back
      .then(function(response) {

      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var otherUserProjectImg = $("<img>");

        // Setting the catImage src attribute to imageUrl
        otherUserProjectImg.attr("src", imageUrl);
        otherUserProjectImg.attr("alt", "Your Projects");

        $("#images").append(userProjectImg);
      });
  });