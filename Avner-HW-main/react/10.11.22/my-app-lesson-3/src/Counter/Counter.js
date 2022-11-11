import { useState } from "react"
import Button from "./Button"

export default function Counter() {

    const [counter_var, setCounter] = useState(0)

    function changeCpunter(actionType){

        if(actionType==="plus"){
            setCounter(counter_var+1)
        }
        else if ((actionType==="minus")){
            setCounter(counter_var-1)
        }

    }

  return (
    <div>
    <div style={{ color:counter_var === 0 ? "black" : counter_var > 0 ? "green" : "red"  }}>{counter_var}</div>
    <Button
    changeCpunter={changeCpunter}
    actionType="plus"
    text="Counter Up"
    />
    <Button
    changeCpunter={changeCpunter}
    actionType="minus"
    text="Counter Down"
    />
    </div>
  )
}
