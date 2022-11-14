import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function About() {
   return (
      <>
         <h1>About React Router</h1>
         <button><Link to="/about/info">Look info</Link></button>
         <Outlet />
      </>
   )
}
