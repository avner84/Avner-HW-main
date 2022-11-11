import { useContext } from "react";
import { ColorContext } from "./NewContext";

export default function Button(props) {

    const {changeBackgroundColor} = useContext(ColorContext)
    return (
        
        <button onClick={()=>{changeBackgroundColor(props.color)}}>{props.text}</button>
    )
}


