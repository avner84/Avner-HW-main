function Parent() {

   function deleteSomething() {
      console.log("deleteSomething")
   }

   return (
      <Child1 deleteSomething={deleteSomething} />
   )
}

function Child1(props) {
   return <Child2 deleteSomething={props.deleteSomething} />
}

function Child2(props) {
   return <button onClick={props.deleteSomething}></button>
}
