import { createContext, useState } from "react"


export const MoviesContext = createContext(null)


export default function MoviesContextProvider(props) {

   const [movies, setMovies] = useState([{ id: 1, name: "Batman" }, { id: 2, name: "Superman" }])

   function addMovie(movie) {

      const newMovies = [movie, ...movies]

      setMovies(newMovies)
   }

   function removeMovie() {

      // setMovies(movies.filter((element, index)=>index!==0))
const newMovies = [...movies]
newMovies.shift()
      setMovies(newMovies)
   }

   return (
      <MoviesContext.Provider value={{ movies: movies, addMovie: addMovie, removeMovie: removeMovie }}>
         {props.children}
      </MoviesContext.Provider>
   )
}

