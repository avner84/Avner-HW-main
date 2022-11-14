
import {Route, Routes} from "react-router-dom"
import Movies from "./Context/Movies";


function App() {

   return (
      <div className="container">
         <header>
            <span>Home</span>
            <span>User</span>
            <span>Todos</span>

         </header>
         <main>
<Routes>

<Route path="/" element={<Movies/>} />
</Routes>

         </main>
      </div>
   );
}





export default App;














