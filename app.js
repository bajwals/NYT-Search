var userInputTerm = $("#exampleFormControlInput1").val().trim();
var userInputNumber = $("#exampleFormControlSelect1").val().trim();
var apiKey = "aLPiyHj0WptSjYynqy9weksUN4YE3oAY"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInputTerm + "&api-key=" + apiKey

function createArticles() {
    $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(data){
    var length = data.response.docs.length
    console.log(length)
    
    for (var i = 0; i < userInputNumber; i++) {
        var articleTitle = data.response.docs[i].headline.main; 
        console.log(articleTitle);
    };
});
}

$(document).on("click", ".btn-primary", createArticles);
