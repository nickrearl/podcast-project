

var ApiCall = function (genreid) {
    fetch("https://allfeeds.ai/api/find_podcasts?key=bfsz9kkmbuk6nxpcndc6&genre=" + (genreid))
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}

var options = [{ id: 1303, genre: "comedy" }, { id: 1301, genre: "arts" }, { id: 1302, genre: "personal journals" }, { id: 1304, genre: "education" }, { id: 1305, genre: "kids and family" }, { id: 1306, genre: "food" }, { id: 1309, genre: "tv & film" }, { id: 1310, genre: "music" }, { id: 1314, genre: "religion & spirituality" }, { id: 1318, genre: "technology" }, { id: 1320, genre: "Places & Travel" }, { id: 1321, genre: "business" }, { id: 1324, genre: "Society & Culture" }, { id: 1402, genre: "design" }, { id: 1405, genre: "Performing Arts" }, { id: 1406, genre: "Visual Arts" }, { id: 1410, genre: "Careers" }, { id: 1412, genre: "Investing" }, { id: 1438, genre: "Buddhism" }, { id: 1439, genre: "Christianity" }, { id: 1440, genre: "Islam" }, { id: 1441, genre: "Judaism" }, { id: 1443, genre: "Philosophy" }, { id: 1444, genre: "Spirituality" }, { id: 1459, genre: "Fashion & Beauty" }, { id: 1463, genre: "Hinduism" }, { id: 1482, genre: "books" }, { id: 1483, genre: "fiction" }, { id: 1484, genre: "drama" }, { id: 1485, genre: "Science Fiction" }, { id: 1486, genre: "Comedy Fiction" }, { id: 1487, genre: "history" }, { id: 1488, genre: "true crime" }, { id: 1489, genre: "news" }, { id: 1490, genre: "Business News" }, { id: 1491, genre: "management" }, { id: 1492, genre: "marketing" }, { id: 1493, genre: "Entrepreneurship" }, { id: 1494, genre: "Non-Profit" }, { id: 1495, genre: "Improv" }, { id: 1496, genre: "Comedy Interviews" }, { id: 1497, genre: "Stand-Up" }, { id: 1498, genre: "Language Learning" }, { id: 1499, genre: "How To" }, { id: 1500, genre: "Self-Improvement" }, { id: 1501, genre: "courses" }, { id: 1502, genre: "leisure" }, { id: 1503, genre: "automotive" }, { id: 1504, genre: "aviation" }, { id: 1505, genre: "hobbies" }, { id: 1506, genre: "crafts" }, { id: 1507, genre: "games" }, { id: 1508, genre: "home & garden" }, { id: 1509, genre: "video games" }, { id: 1510, genre: "animation & manga" }, { id: 1511, genre: "government" }, { id: 1512, genre: "Health & Fitness" }, { id: 1513, genre: "Alternative Health" }, { id: 1514, genre: "Fitness" }, { id: 1515, genre: "nutrition" }, { id: 1516, genre: "sexuality" }, { id: 1517, genre: "mental health" }, { id: 1518, genre: "medicine" }, { id: 1519, genre: "education for kids" }, { id: 1520, genre: "stories for kids" }, { id: 1521, genre: "Parenting" }, { id: 1522, genre: "Pets & Animals" }, { id: 1523, genre: "Music Commentary" }, { id: 1524, genre: "Music History" }, { id: 1525, genre: "Music Interviews" }, { id: 1526, genre: "Daily News" }, { id: 1527, genre: "Politics" }, { id: 1528, genre: "Tech News" }, { id: 1529, genre: "Sports News" }, { id: 1530, genre: "News Commentary" }, { id: 1531, genre: "Entertainment News" }, { id: 1532, genre: "Religion" }, { id: 1533, genre: "Science" }, { id: 1534, genre: "Natural Sciences" }, { id: 1535, genre: "Social Sciences" }, { id: 1536, genre: "Mathematics" }, { id: 1537, genre: "Nature" }, { id: 1538, genre: "Astronomy" }, { id: 1539, genre: "Chemistry" }, { id: 1540, genre: "Earth Sciences" }, { id: 1541, genre: "Life Sciences" }, { id: 1542, genre: "Physics" }, { id: 1543, genre: "Documentary" }, { id: 1544, genre: "Relationships" }, { id: 1545, genre: "Sports" }, { id: 1546, genre: "soccer" }, { id: 1547, genre: "football" }, { id: 1548, genre: "basketball" }, { id: 1549, genre: "baseball" }, { id: 1550, genre: "hockey" }, { id: 1551, genre: "running" }, { id: 1552, genre: "rugby" }, { id: 1553, genre: "golf" }, { id: 1554, genre: "cricket" }, { id: 1555, genre: "wrestling" }, { id: 1556, genre: "tennis" }, { id: 1557, genre: "volleyball" }, { id: 1558, genre: "swimming" }, { id: 1559, genre: "wilderness" }, { id: 1560, genre: "fantasy sports" }, { id: 1561, genre: "tv reviews" }, { id: 1562, genre: "after shows" }, { id: 1563, genre: "film reviews" }, { id: 1564, genre: "film history" }, { id: 1565, genre: "film interviews" }];

console.log(options[1].id);

var genresList = document.querySelector("#genres");
for (var i = 0; i < options.length; i++) {
    var optionEl = document.createElement("option");
    optionEl.setAttribute("value", options[i].id);
    optionEl.textContent = options[i].genre;
    genresList.appendChild(optionEl)
};

var formEl = document.querySelector("form")

formEl.addEventListener("submit", function (event) {
    event.preventDefault()
    var genreid = (genresList.value)
    ApiCall(genreid);
}
)

var displayData = function(genreid) {
    
}









