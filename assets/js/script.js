// add event listener for when a selction is made from the genre drop down------

// return the slected genere to be added as a variable to the allfeeds api call url---------

// call allfeeds api for list of podcasts by top in the genre selected-----------

// display top ten results in a list with clickable buttons on the left side of the screen -------

// add an event listener so when a button is clicked that podcast is selected -------

// create variable so when a genre is selected it can be sent to the url for the google custom search api call ------

// run the google api call with the selected podcast to get more information about the podcast ------

// display the google api results on the right side of the screen


var genreSelector = document.getElementById("genres")

// var genreChoiceSelector = document.getElementById("genre-select-form")

var submitButton = document.getElementById("submit")

var chosenGenre = ""

var allfeedsApiCall = function () {
    fetch("https://allfeeds.ai/api/find_podcasts?key=bfsz9kkmbuk6nxpcndc6&genre=" + (chosenGenre))
        .then((response) => {
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

var getGenreChoice = function(){

    event.preventDefault()
    var value = genreSelector.options[genreSelector.selectedIndex].value;

    // var text = genreSelector.options[genreSelector.selectedIndex].text;

    chosenGenre = value

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
    googleApiCall(chosenPodcastTitle)
})

var googleApiCall = function(podcastTitle){
    fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyBKNYKmAGd_FpXKpQQasarBUBeomYRGsx4&cx=30fac650a9835a16a&q=" + podcastTitle)
    .then(function(response){
        if(response.ok){
            return response.json()
        }
        else {
            throw new Error("NETWROK RESPONSE ERROR")
        }
    })
    .then(data => {
        console.log(data);
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


