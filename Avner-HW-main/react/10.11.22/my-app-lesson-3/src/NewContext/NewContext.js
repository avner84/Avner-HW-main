import { createContext, useState } from "react"

export const ColorContext = createContext(null)

export default function NewContext(props) {

const [color, setColor] = useState("white")

    function changeBackgroundColor(_color){
        setColor(_color)
    }


    document.body.style.backgroundColor=color
      return (
  <ColorContext.Provider value={{ changeBackgroundColor:changeBackgroundColor }}>
    {props.children}
 </ColorContext.Provider>
  )
}
