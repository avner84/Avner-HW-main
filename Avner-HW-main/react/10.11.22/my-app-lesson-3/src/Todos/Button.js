import { PropTypes } from 'prop-types';



function Button(props) {
   return (
      <button style={{ color: props.color || "balck" }} onClick={props.handler}>{props.text}</button>
   )
}

Button.propTypes = {
   color: PropTypes.string,
   text: PropTypes.string.isRequired,
   handler: PropTypes.func.isRequired
}

export default Button