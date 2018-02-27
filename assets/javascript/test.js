//initial array
let topics = ["animals", "food", "sports"];
let gifCounter = 0;
//render buttons function
function renderButtons() {
    $("#otherdiv").empty();
    for (let i = 0; i < topics.length; i++) {
        let a = $('<button>');
        a.addClass("gif");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#otherdiv").append(a);
    }
};

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    let gif = $("#gif-input").val().trim();
    topics.push(gif);
    renderButtons();
});
renderButtons();


//on click ajax (not working)
$("button").on("click", function() {
    let gif = $(this).attr("data-gif");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=ogKVVk194YjYpvSizlmqePBOtAnGMhZ7";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

       
        console.log(queryURL);
        console.log(response);
        let results = response.data;
        for (let x = 0; x < results.length; x++) {
            let gifDiv = $("<div>");
            let p = $("<p>").text("Rating: " + results[x].rating);
            let gifImage = $("<img>");
            gifImage.attr("src", results[x].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(gifImage);
            $("#gifdisplay").prepend(gifDiv);
        }});});