
function App() {
   return (
      React.createElement("div", { className: "title" }, [
         React.createElement("h1", {}, "Title"),
         React.createElement(Content)
      ])
   )
}


function Content() {
   return (
      React.createElement(
         "p",
         { className: "title" },
         "Lorem ipsum dolor sit elit. Eligendi mollitia quo beatae consectetur magnam "
      )
   )
}

ReactDOM
   .createRoot(document.getElementById('root'))
   .render(React.createElement(App))