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

function showModal(obj) {
    var moviedata = JSON.parse(JSON.stringify(Movie));
    if (obj.getAttribute("src") != "") {
        var tmp = obj.getAttribute("src");
        var tmp1 = tmp.replace("../IMG/", "");
        var tmp2 = tmp1.replace(".png", "");

        var modals = document.getElementsByClassName("modal");

        for (var i = 0; i < moviedata.movies.length; i++) {
            if (moviedata.movies[i].title.match(tmp2)) {
                document.getElementById("youtube_video").setAttribute("src", moviedata.movies[i].link);
                document.getElementById("movie_img").setAttribute("src", "../IMG/" + moviedata.movies[i].title + ".png");
                document.getElementById("movie_title").innerHTML = moviedata.movies[i].title;
                document.getElementById("movie_story").innerHTML = moviedata.movies[i].story;
                document.getElementById("year").innerHTML = moviedata.movies[i].year;
                document.getElementById("genre").innerHTML = moviedata.movies[i].genre;
                document.getElementById("main_actor").innerHTML = moviedata.movies[i].actor;
                document.getElementById("director").innerHTML = moviedata.movies[i].director;

                modals[0].style.display = "block";
            }
        }
    }
}

function closeModal() {
    var modals = document.getElementsByClassName("modal");
    modals[0].style.display = "none";
}

$(document).ready(function() {
    $(".toggle_icon").click(function(){
        if($(this).text() == "♡") {
            $(this).text("♥");
        } else {
            $(this).text("♡");
        }
    });
});

window.onclick = function (event) {
    var ele = document.getElementsByClassName("modal");
    if (event.target == ele[0]) {
        ele[0].style.display = "none";
    }
}