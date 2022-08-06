var moviesArray = [];



export function movieSearch(inputSearch) {
    console.log("123");

    return ("bdika" + inputSearch.value)

    moviesArray = []

    return await fetch(`http://www.omdbapi.com/?s=${inputSearch.value}&apikey=5e7de93e`)
        .then(response => response.json())
        .then(response => {
            if (response.Response == "True") {
                response.Search.forEach(element => {
                    moviesArray.push({ title: element.Title, year: element.Year, posterUrl: element.Poster, imdbID: element.imdbID })
                });





            }
        }).finally(() => {
            // console.log(moviesArray.length);

            var c = "i am from a model";

            return c;


        })

}