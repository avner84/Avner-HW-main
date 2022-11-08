import { useState } from "react";


function App() {

  const [name, setName] = useState("David")

  // const name = state[0];
  // const setName = state[1];

  function changeName(event) {

    setName("Pini")

  }


  return (
    <div className="App">
      <h1> Hello</h1>
      <p>{name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
