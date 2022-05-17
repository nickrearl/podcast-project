
//extra api key
// var key = 'bfsz9kkmbuk6nxpcndc6';

// var key = 'vn2ssqduhzg9wf8v2nj6';

// var key = 'azk6ktkknuk6hnyhdp26';

var key = "uxdsytjvf6nxr38xakcm"

var genreSelector = document.getElementById("genres")

var submitButton = document.getElementById("submit")

var chosenGenre = ""

var pageNumber = ""

var allfeedsApiCall = function () {
    fetch("https://allfeeds.ai/api/find_podcasts?key="+key+"&genre=" + (chosenGenre) + "&page=" + pageNumber + "&language=en")
        .then((response) => {
            console.log(response)                   
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data)

            displayResults(data)


        })
        .catch((error) => console.error("FETCH ERROR:", error));
}

var getGenreChoice = function(event){

    event.preventDefault()

    var value = genreSelector.options[genreSelector.selectedIndex].value;

    $(".title").text("");
    $(".picture").removeAttr("src", "");

    chosenGenre = value

    console.log(chosenGenre);

    pageNumber = Math.floor(Math.random() * 50)

    allfeedsApiCall()
    

}


function displayResults(data) {
    var count = 0;
    $(".podCastTile").each(function () {
    $(this).children(".title").text(data.results[count].title);
    $(this).children(".picture").attr("src", data.results[count].image_url);
    count++;
    }
    )
};


function displaypod(data){
    
    for(let i = 0; i < data.items.length; i++){
        console.log(data.items[i]);
        var podtitle = $("<a>")
            .text(data.items[i].title)
            .attr("href",data.items[i].link)
            .attr("target","_blank")
            .attr("class", "info-preview"); 
        
        var poddiv = $("<div>");
        var snippet = $("<p>").text(data.items[i].snippet);
        
        poddiv.append(podtitle);
        poddiv.append(snippet); 
    
    
        $("#additionalInfo").append(poddiv);
    }

}

// additional google API key: AIzaSyACBNiDBxazqUdFnOPucyrZI_TFXXvG_ks
// additional google api key: AIzaSyBKNYKmAGd_FpXKpQQasarBUBeomYRGsx4

var googleApiCall = function(podcastTitle){
    fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyACBNiDBxazqUdFnOPucyrZI_TFXXvG_ks&cx=30fac650a9835a16a&q=" + podcastTitle)
    .then(function(response){
        if(response.ok){
            return response.json()
        }
        else {
            throw new Error("NETWORK RESPONSE ERROR")
        }
    })
    .then(function(data) {
        console.log(data);
        $(".info-preview").remove()
        displaypod(data);
    })
    
}

submitButton.addEventListener("click", getGenreChoice);

$("#genre-container").on("click", ".title", function(){
    var chosenPodcastTitle = $(this).text()
    $("#additionalInfo").html("");
    googleApiCall(chosenPodcastTitle)
    
})

