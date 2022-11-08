
function App() {
   return (
      React.createElement("div", { className: "title" }, [
         React.createElement("h1", { id: "p" }, "H1"),
         React.createElement("p", { id: "p" }, "P")
      ])
   )
}


const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

root.render(React.createElement(App))