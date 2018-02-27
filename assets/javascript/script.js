let topics = ["animals", "food", "marijuana"]
// let search = document.getElementById("#input");
// let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ogKVVk194YjYpvSizlmqePBOtAnGMhZ7"
//***search equals the input variable *****/





console.log(topics);
//******for loop to append buttons ******/

for (let i = 0; i < topics.length; i++ ) {
    $("<input/>").attr({type: "button", value: topics[i]}).appendTo("#btndiv");
}

//****create and display text input and submit button ******/
let input = $('<input type="text" id="input">');
$('#searcher').prepend(input);
let submit = $('<input type="button" value="submit" id="submit">');
$('#searcher').append(submit);

//***catch input ****/
function sub(){
    topics.push(document.getElementById("#input"));
}
console.log(topics);
//******ajax call on button click or enter(aka key number 13) ******/
// $.ajax({
//     url: queryUrl,
//     method: "GET"
// })


 
// //*****promise function ******/

// .then(function(response) {
//     console.log(queryUrl);
//     console.log(response);
// })