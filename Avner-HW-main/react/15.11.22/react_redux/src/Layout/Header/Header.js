import { NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {
   return (
      <header>
         <nav>
            <NavLink to="/">Counter</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/user">Users</NavLink>
         </nav>
      </header>
   )
}
