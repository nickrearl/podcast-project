var favoritesList = $(".favs-list")

var displayFavorites = function(){
    var favCasts = localStorage.getItem("savedCasts")

    var useableFavCasts = JSON.parse(favCasts)
    
    for (i = 0; i < useableFavCasts.length; i++) {
        var castTitle = useableFavCasts[i];
        
        favoritesList.append("<li class='cast-title'>" + castTitle + "<li>")


    }
}

displayFavorites()