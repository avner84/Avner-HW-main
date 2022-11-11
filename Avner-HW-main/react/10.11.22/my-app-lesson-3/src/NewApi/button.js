import { useContext } from "react";
import { ApiContext } from "./ApiContext";



   
// return (
//    <div className="container">
//       <button onClick={PlayUrlFetch}>Give a list of random jokes</button>
//       <MovieList />
//    </div>
// )

export default function Button(props) {
    const { PlayUrlFetch } = useContext(ApiContext)
   return (
    
      <button onClick={PlayUrlFetch}>Give a list of random jokes</button>
    
   )
}

