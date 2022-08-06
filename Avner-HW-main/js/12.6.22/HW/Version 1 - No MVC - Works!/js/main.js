const btnSearch = document.querySelector("#button-addon2");
const inputSearch = document.querySelector("#inputSearch");
const btnMoreInfo = document.querySelector("#btnMoreInfo");
const modalDetails = document.querySelector("#modalDetails");
const titleModal = document.querySelector("#modalLabel");
const modalContentId = document.querySelector("#modalContentId");
var moviesArray = [];
const movieViewer = document.querySelector("#movieViewer");

inputSearch.addEventListener("input", movieSearch);
// btnMoreInfo.addEventListener("click", () => {
//     showModal("tt2268016")
// });
// () => { showModal("tt0088763") }



function movieSearch() {


    fetch(`http://www.omdbapi.com/?s=${inputSearch.value}&apikey=5e7de93e`)
        .then(response => response.json())
        .then(response => {
            if (response.Response == "True") {
                response.Search.forEach(element => {
                    moviesArray.push({ title: element.Title, year: element.Year, posterUrl: element.Poster, imdbID: element.imdbID })
                });
                console.log(moviesArray);
            }
        }).then(response => cardsGenerator());



}

function showModal(movieId) {
    const imdbID = movieId;


    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=5e7de93e`)
        .then(response => response.json())
        .then(response => {
            if (response.Response == "True") {
                titleModal.innerHTML = response.Title;
                modalDetails.innerHTML = ` <h5>Year: ${response.Year}</h5>
                <h5>Director: ${response.Director}</h5>
                <h5>Runtime: ${response.Runtime}</h5>
                <h5>Language: ${response.Language}</h5>
                <p class="plot">
                    Plot: ${response.Plot}
                </p>`;
                modalContentId.style.backgroundImage = `url(${response.Poster})`;

            }
        })



}

function cardsGenerator() {
    movieViewer.innerHTML = "";

    var shownMovies = "";
    moviesArray.forEach(movie => {
        shownMovies +=
            `<div class="cards">
        <div class="haderCard">
            <h4 clas="titelCard">${movie.title}</h4>
        </div>
        <div class="mainCard">
            <img src=${movie.posterUrl}/>
            <div class="detailsCard">
                <h5 class="yearCard">Year: ${movie.year}</h5>

                <h6 id="btnMoreInfo" data-bs-toggle="modal" data-bs-target="#movieModal" onclick="showModal('${movie.imdbID}')">
                    More info <i class="fa-solid fa-arrow-right"></i>
                </h6>
            </div>
        </div>
    </div>`;

    })


    movieViewer.innerHTML = shownMovies;
    shownMovies = "";
    moviesArray = [];

}