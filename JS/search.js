function search(obj) {
    var moviedata = JSON.parse(JSON.stringify(Movie));
    var cnt = 0;
    var name = obj.value;

    for (var i = 1; i < 41; i++) {
        document.getElementById("mov" + i).setAttribute("src", "");
    }

    for (var i = 0; i < moviedata.movies.length; i++) {
        if (moviedata.movies[i].title.match(new RegExp(name, "i")) || moviedata.movies[i].genre.match(new RegExp(name, "i"))) {
            cnt += 1;
            document.getElementById("mov" + cnt).setAttribute("src", "../IMG/" + moviedata.movies[i].title + ".png");
        }
    }

    if (name == "") {
        for (var i = 1; i < 41; i++) {
            document.getElementById("mov" + i).setAttribute("src", "");
        }
        cnt = 0;
    }

    if (name.match(new RegExp("all", "i"))) {
        for (var i = 0; i < 40; i++) {
            document.getElementById("mov" + (i + 1)).setAttribute("src", "../IMG/" + moviedata.movies[i].title + ".png");
        }
        cnt = 40;
    }

    document.getElementById("search_text").innerHTML = "RESULTS: " + cnt;
}