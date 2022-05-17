// add event listener for when a selction is made from the genre drop down------

// return the slected genere to be added as a variable to the allfeeds api call url---------

// call allfeeds api for list of podcasts by top in the genre selected-----------

// display top ten results in a list with clickable buttons on the left side of the screen -------

// add an event listener so when a button is clicked that podcast is selected -------

// create variable so when a genre is selected it can be sent to the url for the google custom search api call ------

// run the google api call with the selected podcast to get more information about the podcast ------

// display the google api results on the right side of the screen

//extra api key
//var key = 'bfsz9kkmbuk6nxpcndc6';

// var key = 'azk6ktkknuk6hnyhdp26';

var key = 'vn2ssqduhzg9wf8v2nj6';

var genreSelector = document.getElementById("genres")

// var genreChoiceSelector = document.getElementById("genre-select-form")

var submitButton = document.getElementById("submit")

var chosenGenre = ""

var pageNumber = ""

var allfeedsApiCall = function () {
    fetch("https://allfeeds.ai/api/find_podcasts?key="+key+"&genre=" + (chosenGenre) + "&page=" + pageNumber)
        .then((response) => {
            console.log(response)                   
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data);
            displayResults(data)
            // podCast(data)

        })
        .catch((error) => console.error("FETCH ERROR:", error));


}

var getGenreChoice = function(event){

    event.preventDefault()
    var value = genreSelector.options[genreSelector.selectedIndex].value;

    // var text = genreSelector.options[genreSelector.selectedIndex].text;

    chosenGenre = value

    pageNumber = Math.floor(Math.random() * 10)

    allfeedsApiCall()
    

}

submitButton.addEventListener("click", getGenreChoice);

var count = 0;

// function displayResults (){
//     $(".podCastTile").each(function(){
//         $(this).children(".title").textContent=arr[count].title
//     })
// };

function displayResults(data) {
    $(".podCastTile").each(function () {
        $(this).children(".title").text("");
        $(this).children(".picture").attr("src", "");
        $(this).children(".title").text(data.results[count].title);
        $(this).children(".picture").attr("src", data.results[count].image_url);
        count++;
    }
    )
};


$("#genre-container").on("click", ".title", function(){
    var chosenPodcastTitle = $(this).text()
    $("#additionalInfo").html("");
    googleApiCall(chosenPodcastTitle)
     
})

function displaypod(data){
    
    for(let i = 0; i < data.items.length; i++){
        console.log(data.items[i]);
        var podtitle = $("<a>")
            .text(data.items[i].title)
            .attr("href",data.items[i].link)
            .attr("target","_blank"); 
        
        var poddiv = $("<div>");
        var snippet = $("<p>").text(data.items[i].snippet);
        
        poddiv.append(podtitle);
        poddiv.append(snippet); 
       
       
        $("#additionalInfo").append(poddiv);
    }

}




var googleApiCall = function(podcastTitle){
    fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyBKNYKmAGd_FpXKpQQasarBUBeomYRGsx4&cx=30fac650a9835a16a&q=" + podcastTitle)
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
        displaypod(data);
    })
    
}

// // testAPICall()

// var allfeedsApiCall = function () {
//     fetch("https://allfeeds.ai/api/find_podcasts?key=bfsz9kkmbuk6nxpcndc6&genre=" + (chosenGenre))
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("NETWORK RESPONSE ERROR");
//             }
//         })
//         .then(data => {
//             console.log(data);
//             podCast(data)
//         })
//         .catch((error) => console.error("FETCH ERROR:", error));
// }

// var ApiCall = function (genreid) {
//     fetch("https://allfeeds.ai/api/find_podcasts?key=bfsz9kkmbuk6nxpcndc6&genre=" + (genreid))
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("NETWORK RESPONSE ERROR");
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch((error) => console.error("FETCH ERROR:", error));
// }


// console.log(options[1].id);

// var genresList = document.querySelector("#genres");
// for (var i = 0; i < options.length; i++) {
//     var optionEl = document.createElement("option");
//     optionEl.setAttribute("value", options[i].id);
//     optionEl.textContent = options[i].genre;
//     genresList.appendChild(optionEl)
// };

// var formEl = document.querySelector("form")

// formEl.addEventListener("submit", function (event) {
//     event.preventDefault()
//     var genreid = (genresList.value)
//     ApiCall(genreid);
// }
// )

// var displayData = function(genreid) {
    
// }


