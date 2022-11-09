import { useState } from "react";

const winOptions = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],

   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],

   [0, 4, 8],
   [2, 4, 6],
]


function Board() {
   const [isX, setIsX] = useState(true)
   const [status, setStatus] = useState(Array(9).fill(null))


   function clickCell(cellNumber) {
      const newStatus = [...status]

      if (newStatus[cellNumber] !== null) {
         return alert("Cell already set")
      }

      isX ? newStatus[cellNumber] = "X" : newStatus[cellNumber] = "O"

      setStatus(newStatus)
      setIsX(!isX)
      console.log(cellNumber)
   }

   function checkGameOver() {
      for (const option of winOptions) {

         if (status[option[0]] && status[option[0]] === status[option[1]] && status[option[0]] === status[option[2]]) {
            return { gameOver: true, text: `${isX ? "O" : "X"} Winner` }
         }
      }

      for (const stat of status) {
         if (stat === null) {
            return { gameOver: false, text: null }
         }
      }
      return { gameOver: true, text: "Draw" }
   }

   const game = checkGameOver()

   return (
      <div className="board_container">
         {game.gameOver ? <h2>{game.text}</h2> : <h2>Play: {isX ? "X" : "O"}</h2>}
         <div className="board">
            {/* <div className="cell" onClick={() => clickCell(0)}>{status[0]}</div>
            <div className="cell" onClick={() => clickCell(1)}>{status[1]}</div>
            <div className="cell" onClick={() => clickCell(2)}>{status[2]}</div>
            <div className="cell" onClick={() => clickCell(3)}>{status[3]}</div>
            <div className="cell" onClick={() => clickCell(4)}>{status[4]}</div>
            <div className="cell" onClick={() => clickCell(5)}>{status[5]}</div>
            <div className="cell" onClick={() => clickCell(6)}>{status[6]}</div>
            <div className="cell" onClick={() => clickCell(7)}>{status[7]}</div>
            <div className="cell" onClick={() => clickCell(8)}>{status[8]}</div> */}
            {/* <Cell index={0} status={status[0]} /> */}
            {/* <Cell index={1} status={status[1]} /> */}

            {status.map((stat, index) => {
               return <Cell index={index} status={stat} clickCell={clickCell} />
            })}

         </div>
      </div>
   )
}

function Cell(props) {

   return (
      <div className="cell" onClick={() => props.clickCell(props.index)}>{props.status}</div>
   )
}

export default Board