import { useContext } from "react";
import { ApiContext } from "./ApiContext";
import Button from "./button";
import JokesList from "./JokesList";

export default function NewApi() {

   
   return (
      <div className="container">
         <Button/>
         <JokesList/>
      </div>
   )
}

