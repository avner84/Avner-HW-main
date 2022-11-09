import { useState } from "react"

function Parent() {
   const [name, setName] = useState("Avi")

   function changeName(name) {
      setTimeout(() => {
         setName(name)
      }, 2000);
   }

   return (
      <div>
         {name}
         <Child name={name} changeName={changeName} />
      </div>
   );
}


function Child(props) {
   console.log(props)

   // send to parent
   props.changeName("David")

   return (
      <div></div>
   )
}

export default Parent;














