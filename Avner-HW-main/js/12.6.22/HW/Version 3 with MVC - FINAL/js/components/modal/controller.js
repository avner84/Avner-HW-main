import * as modelModal from "./model.js";
import * as viewModal from "./view.js";

export function init() {


}

export async function addEventToBtnCard() {

    var btnMoreInfo = document.querySelectorAll("h6");


    btnMoreInfo.forEach(element => element.addEventListener("click", getMovieDetailsByImdbID));

}



async function getMovieDetailsByImdbID(event) {

    var h6Btn = event.target;
    var imdbID = h6Btn.getAttribute("imdbID");
    var responseOmdbapi = await modelModal.serachMovieByImdbID(imdbID);
    viewModal.showModal(responseOmdbapi);



}