// import { useState } from "react"

function Component() {

   // const [name, setName] = useState()
   // const [count, setCount] = useState(0)
   // const [inputValue, setInputValue] = useState("")
   // const [show, setShow] = useState(false)


   // function changeName(event) {
   //    const names = ["Sami", "Eli", "Moshe"]
   //    setName(names[count])
   //    setCount(count + 1)

   // }

   // function inputChange(event) {
   //    console.log(event.target.value)
   //    setInputValue(event.target.value)

   //    if (show) {
   //       setShow(false)
   //    }
   // }


   // function showInputValue() {
   //    setShow(true)
   // }

   // function toggleShow() {
   //    setShow(!show)
   // }

   // return (
   //    <div className="container">
   //       <h1 className="title">Hello</h1>
   //       <p>{name}</p>
   //       <p>{count}</p>
   //       <p style={{ display: show ? "block" : "none" }} >{inputValue}</p>

   //       <p className={show ? "show" : "not_show"}> Show </p>
   //       <button onClick={toggleShow} >Toggle Show</button>

   //       <button onClick={changeName} >Change Name</button>

   //       <button onClick={showInputValue}>Get Name From Input</button>
   //       <input type="text" onChange={inputChange} />
   //    </div>
   // );

   // const allSquare = document.querySelectorAll(".square");

   // allSquare.forEach(element => {
   //    element.addEventListener("click", setXorO)
   // });

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