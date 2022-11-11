import { useContext } from "react";
import { MoviesContext } from "./Context";

// const context= { movies: movies, addMovie: addMovie }
// const {movies} = context

export default function Movies() {
   const { addMovie, removeMovie } = useContext(MoviesContext)

   return (
      <div className="container">
         <button onClick={() => addMovie({ id: 3, name: "Spiderman" })}>Add Movie</button>
         <button onClick={removeMovie}>Remove Movie</button>
         <MovieList />
      </div>
   )
}

function MovieList() {

   const { movies } = useContext(MoviesContext)

   return (
      <div>
         {movies.map((movie) => {
            return (
               <MovieItem key={movie.id} movie={movie} />
            )
         })}
      </div>
   )

}

function MovieItem(props) {

   const { addMovie } = useContext(MoviesContext)

   return (
      <p>{props.movie.name}</p>
   )
}

