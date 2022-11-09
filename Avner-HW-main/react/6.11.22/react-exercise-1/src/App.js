import { useState } from "react"





function Component() {
   const [squres,setSqures]= useState(Array(9).fill(""))

   const [flag, changeFlag] = useState(true)
   const [emptySquares, setEmptySquaresׂׂ] = useState(9)


   function setXorO(index) {
   let isX= flag  ? "X" : "O"

squres[index]=isX
changeFlag(!flag)

console.log(squres)

      // const idSquare = event.target.id;

      // let isX= flag === true ? "X" : "O"

      // DoesSquareClick(idSquare)

      // switch (idSquare) {
      //    case "div1":
      //       setValue1(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div2":
      //       setValue2(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div3":
      //       setValue3(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div4":
      //       setValue4(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div5":
      //       setValue5(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div6":
      //       setValue6(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div7":
      //       setValue7(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div8":
      //       setValue8(isX);
      //       changeFlag(!flag)
      //       break;
      //    case "div9":
      //       setValue9(isX);
      //       changeFlag(!flag)
      //       break;

      //    default:
      //       break;
      // }

   }

   function DoesSquareClick(idSquare) {

      const square = document.getElementById(idSquare);

      if (square.textContent === "") {
         setEmptySquaresׂׂ(emptySquares - 1)
      }
   }

   
   function IsGameOver() {
       for(const s of squres){
         if(s === ""){ 
            return false
         }
       }

       return true
      // console.log(emptySquares);
      // if (emptySquares === 0) {
      //    setTimeout(function () { alert("game over") }, 200);
      //    return;
      // }
   }

  const isOver=  IsGameOver()

  if(isOver) alert("over")
   return (
      <div className="board">
         <div className="square"  onClick={(e)=> setXorO(0)}>{squres[0]}</div>
         <div className="square"  onClick={(e)=> setXorO(1)}>{squres[1]}</div>
         <div className="square"  onClick={(e)=> setXorO(2)}>{squres[2]}</div>
         <div className="square"  onClick={(e)=> setXorO(3)}>{squres[3]}</div>
         <div className="square"  onClick={(e)=> setXorO(4)}>{squres[4]}</div>
         <div className="square"  onClick={(e)=> setXorO(5)}>{squres[5]}</div>
         <div className="square"  onClick={(e)=> setXorO(6)}>{squres[6]}</div>
         <div className="square"  onClick={(e)=> setXorO(7)}>{squres[7]}</div>
         <div className="square"  onClick={(e)=> setXorO(8)}>{squres[8]}</div>
      </div>
   )
}

export default Component;