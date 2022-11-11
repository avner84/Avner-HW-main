

export default function JokeItem(props) {
    const joke = props.joke
  return (
    <p className="joke_item">{joke.setup}</p>
  )
}
