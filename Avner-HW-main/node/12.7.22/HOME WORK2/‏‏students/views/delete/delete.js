const btn = document.querySelector("#deleteStudentBtn");
const divInfo = document.querySelector("#deletionInfo");

btn.addEventListener("click", () => {
    fetch("/removeStudent")
        .then((response) => response.json())
        .then((student) => {
            deletionInfo.innerHTML = `<h2>Student ${student.name} (ID: ${student.id}) deleted </h2>`;
        });
});