var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&apikey=aLPiyHj0WptSjYynqy9weksUN4YE3oAY";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(data){

})