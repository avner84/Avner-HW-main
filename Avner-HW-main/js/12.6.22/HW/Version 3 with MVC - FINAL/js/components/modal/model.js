export async function serachMovieByImdbID(imdbID) {

    var somthing = [];

    return fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=5e7de93e`)
        .then(response => response.json())
        .then(response => {

            return (response);
        }).catch(() => {
            return false;;
        })






}