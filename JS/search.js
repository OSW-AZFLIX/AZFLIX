window.onload = function() {
    var moviedata = JSON.parse(JSON.stringify(Movie));
    console.log(moviedata);
    document.getElementById('tmp').innerHTML = moviedata.movies[0].title;
}