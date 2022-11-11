function Container(props) {
   return (
      <div className="my_container" style={{ width: props.width }}>
         {props.children}
      </div>
   )
}

export default function Main() {
   return (
      <div>
         <Container width="300px">
            <div>
               <h1>Hello</h1>
               <p>dasdasdsa</p>
            </div>
         </Container>

         <Container width="200px">
            <div>
               <h1>Hello</h1>
               <p>dasdasdsa</p>
            </div>
         </Container>

      </div>
   )
}