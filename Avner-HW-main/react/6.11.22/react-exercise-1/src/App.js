import { useState } from "react"

function Component() {

   const [value1, setValue1] = useState("")
   const [value2, setValue2] = useState("")
   const [value3, setValue3] = useState("")
   const [value4, setValue4] = useState("")
   const [value5, setValue5] = useState("")
   const [value6, setValue6] = useState("")
   const [value7, setValue7] = useState("")
   const [value8, setValue8] = useState("")
   const [value9, setValue9] = useState("")

   const [flag, changeFlag] = useState(true)
   const [emptySquares, setEmptySquaresׂׂ] = useState(9)


   function setXorO(event) {

      const idSquare = event.target.id;

      DoesSquareClick(idSquare)

      switch (idSquare) {
         case "div1":
            setValue1(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div2":
            setValue2(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div3":
            setValue3(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div4":
            setValue4(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div5":
            setValue5(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div6":
            setValue6(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div7":
            setValue7(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div8":
            setValue8(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;
         case "div9":
            setValue9(flag === true ? "X" : "O");
            changeFlag(!flag)
            break;

         default:
            break;
      }

   }

   function DoesSquareClick(idSquare) {

      const square = document.getElementById(idSquare);

      if (square.textContent === "") {
         setEmptySquaresׂׂ(emptySquares - 1)
      }
   }

   
   function IsGameOver() {
      console.log(emptySquares);
      if (emptySquares === 0) {
         setTimeout(function () { alert("game over") }, 200);
         return;
      }
   }

   IsGameOver()

   return (
      <div className="board">
         <div className="square" id="div1" onClick={setXorO}>{value1}</div>
         <div className="square" id="div2" onClick={setXorO}>{value2}</div>
         <div className="square" id="div3" onClick={setXorO}>{value3}</div>
         <div className="square" id="div4" onClick={setXorO}>{value4}</div>
         <div className="square" id="div5" onClick={setXorO}>{value5}</div>
         <div className="square" id="div6" onClick={setXorO}>{value6}</div>
         <div className="square" id="div7" onClick={setXorO}>{value7}</div>
         <div className="square" id="div8" onClick={setXorO}>{value8}</div>
         <div className="square" id="div9" onClick={setXorO}>{value9}</div>
      </div>
   )
}

export default Component;