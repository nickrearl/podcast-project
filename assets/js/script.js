// var podcastTitle = []

// var googleApiCall = function(){
//     fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyBKNYKmAGd_FpXKpQQasarBUBeomYRGsx4&cx=30fac650a9835a16a&q=")
//     .then(function(response){
//         if(response.ok){
//             return response.json()
//         }
//         else {
//             throw new Error("NETWROK RESPONSE ERROR")
//         }
//     })
// }

// // testAPICall()

// var allfeedsApiCall = function (genreid) {
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
//             podCast(data)
//         })
//         .catch((error) => console.error("FETCH ERROR:", error));
// }


// add event listener for when a selction is made from the genre drop down

// return the slected genere to be added as a variable to the allfeeds api call url

// call allfeeds api for list of podcasts by top in the genre selected

// display top ten results in a list with clickable buttons on the left side of the screen

// add an event listener so when a button is clicked that podcast is selected

// create variable so when a genre is selected it can be sent to the url for the google custom search api call

// run the google api call with the selected podcast to get more information about the podcast

// display the google api results on the right side of the screen

