import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Home() {
   return (
      <>
      <div className="homePage">
         <h1>Welcome To React Router</h1>
         <h3><Link to="/about-us">About Us</Link></h3>
         <h3><Link to="/recommend">Recommend</Link></h3>
               </div>
      <Outlet />
      </>
   )
}
