const movieViewer = document.querySelector("#movieViewer");

export async function cardsGenerator(arr) {

    movieViewer.innerHTML = "";

    if (arr) {

        var shownMovies = "";
        await arr.forEach(movie => {
                shownMovies +=
                    `<div class="cards">
        <div class="haderCard">
            <h4 clas="titelCard">${movie.title}</h4>
        </div>
        <div class="mainCard">
            <img src=${movie.posterUrl}/>
            <div class="detailsCard">
                <h5 class="yearCard">Year: ${movie.year}</h5>

                <h6 id="btnMoreInfo" data-bs-toggle="modal" data-bs-target="#movieModal" imdbID='${movie.imdbID}' >
                    More info <i class="fa-solid fa-arrow-right"></i>
                </h6>
            </div>
        </div>
    </div>`;

            })
            //onclick="showModal('${movie.imdbID}')"

        movieViewer.innerHTML = shownMovies;

    }


}