import * as modelSearch from "./model.js";

const inputSearch = document.querySelector("#inputSearch");


export function init() {

    inputSearch.addEventListener("input", playMovieSearch)

    console.log("test");

}

// /////////
// async function playMovieSearch(inputSearch) {

//     console.log(inputSearch.value);

//     // return new Promise(resolve => {
//     //     resolve(modelSearch.movieSearch(inputSearch));

//     // });

// }

// async function asyncCall() {

//     const result = await playMovieSearch();
//     // if (!result) {
//     console.log(result)
//         // };

// }
///////



// async function playMovieSearch() {
//     var arr = await modelSearch.movieSearch(inputSearch);
//     console.log(arr);
// }

// playMovieSearch().then(
//     function(value) {
//         console.log("bdika: " + value);
//     });