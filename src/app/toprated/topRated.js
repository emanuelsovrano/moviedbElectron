function getListOfTopRatedMovies() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var movies = JSON.parse(req.responseText).results;

            _.each(movies, function (movie, index) {
                $('<li>')
                    .appendTo('#list-top-rated-movies')
                    .text(movie.title)
                    .addClass('list-group-item');
            });
        }
    }

    req.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=ae03a3bcc77aae15f3e3d3bda3d7d325&language=de', true);
    req.send();
}