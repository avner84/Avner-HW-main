
let flag = true;



const allSquare = document.querySelectorAll(".square");

allSquare.forEach(element => {
    element.addEventListener("click", setXorO)
});

function setXorO(event) {
    event.target.textContent = flag ? "X" : "O";
    flag = !flag;
    // alert(event.target);

    checksIfBoardIsFull();
}

function checksIfBoardIsFull() {

    let avoid = 0;

    allSquare.forEach(element => {

        if (element.textContent == "") {
            avoid++;
        }
    });
    
    if (avoid===0){
        setTimeout(function() {alert ("game over")}, 200);
        
    }
    

}

