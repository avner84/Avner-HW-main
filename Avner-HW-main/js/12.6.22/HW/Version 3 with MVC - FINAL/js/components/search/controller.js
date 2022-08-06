import * as modelSearch from "./model.js";
import * as viewSearch from "./view.js";

import * as controllerModal from "../modal/controller.js";

export function init() {
    const inputSearch = document.querySelector("#inputSearch");
    inputSearch.addEventListener("input", playMovieSearch);




}
async function playMovieSearch() {
    var arr = await modelSearch.movieSearch(inputSearch);
    var abc = await viewSearch.cardsGenerator(arr);
    controllerModal.addEventToBtnCard();

}