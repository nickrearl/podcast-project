var favoritesList = $(".favs-list")

var clearFavoritesButtons = $("#clear-favs")

var displayFavorites = function(){
    var favCasts = localStorage.getItem("savedCasts")

    var useableFavCasts = JSON.parse(favCasts)
    
    for (i = 0; i < useableFavCasts.length; i++) {
        var castTitle = useableFavCasts[i];
        
        favoritesList.append("<li class='cast-title'>" + castTitle + "<li>")


    }
}

var clearFavorites = function(){
    $(".cast-title").remove()

    localStorage.clear()
}

displayFavorites()

clearFavoritesButtons.on("click", clearFavorites)