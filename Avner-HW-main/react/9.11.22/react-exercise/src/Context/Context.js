import { createContext, useState } from "react";

const moviesContext = createContext(null)

export default functionMoviesContextProvider(props){

    const [movie, setMovie] = useState({ id: 1, name: batman })

    return (
        <moviesContext.Provider value={{ movie: movie }}>
            {props.children}
        </moviesContext.Provider>
    )
}