function Component() {

    let flag = true;

   function setXorO(event) {

      event.target.textContent = flag ? "X" : "O";
      flag = !flag;
      checksIfBoardIsFull();

   }

   
function checksIfBoardIsFull() {
   const allSquare = document.querySelectorAll(".square");

   let avoid = 0;

   allSquare.forEach(element => {

       if (element.textContent === "") {
           avoid++;
       }
   });
   
   if (avoid===0){
       setTimeout(function() {alert ("game over")}, 200);
       
   }
   

}

   return (

      <div className="board">
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
         <div className="square" onClick={setXorO}></div>
      </div>
   )
}

export default Component;