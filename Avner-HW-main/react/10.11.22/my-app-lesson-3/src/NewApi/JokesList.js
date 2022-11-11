import { useContext } from "react";
import { ApiContext } from "./ApiContext";
import JokeItem from "./JokeItem";

export default function JokesList() {
    const { jokes } = useContext(ApiContext)
    console.log('jokes :', jokes);
  return (
       
    <div className="joke_list">
               
          {jokes.map((joke) => {
             return (
                <JokeItem key={joke.id} joke={joke} />
             )
          })}
       </div>
    
  )
}
