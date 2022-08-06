export function showModal(movieObject) {
    const modalDetails = document.querySelector("#modalDetails");
    const titleModal = document.querySelector("#modalLabel");
    const modalContentId = document.querySelector("#modalContentId");

    if (movieObject.Response == "True") {
        titleModal.innerHTML = movieObject.Title;
        modalDetails.innerHTML = ` <h5>Year: ${movieObject.Year}</h5>
        <h5>Director: ${movieObject.Director}</h5>
        <h5>Runtime: ${movieObject.Runtime}</h5>
        <h5>Language: ${movieObject.Language}</h5>
        <p class="plot">
            Plot: ${movieObject.Plot}
        </p>`;
        modalContentId.style.backgroundImage = `url(${movieObject.Poster})`;

    }



}