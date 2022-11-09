function Button(props) {
    return (
       <button onClick={() => props.showListById(props.userId)}>{props.text}</button>
    )
 }
 
 export default Button