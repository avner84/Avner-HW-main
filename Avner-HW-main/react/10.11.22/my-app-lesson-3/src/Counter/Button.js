export default function Button(props) {
    return (
        <button  onClick={()=>{props.changeCpunter(props.actionType)}}>{props.text}</button>
     )
}

// 
