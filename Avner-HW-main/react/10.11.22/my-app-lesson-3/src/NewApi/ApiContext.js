


import { useEffect, useState, createContext } from "react"

export const ApiContext = createContext(null)


export default function ApiContextProvider(props) {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    getJokes()
  }, [])

  function getJokes() {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setJokes(result)
        //   setUsers(result)
      })
      .catch((error) => {
        //   setError("Something went wrong")
      })
  }

  function PlayUrlFetch() {
    // if (urlPlay===true){
    //     setUrlPlay(false)
    // }
    // else {
    //     setUrlPlay(true)
    // }
    getJokes()
  }


  return (
    <ApiContext.Provider value={{ PlayUrlFetch: PlayUrlFetch, jokes: jokes }}>
      {props.children}
    </ApiContext.Provider>

  )
}
