import { PropTypes } from 'prop-types';



function Button(props) {
   return (
      <button style={{ color: props.color }} onClick={props.handler}>{props.text}</button>
   )
}

Button.propTypes = {
   color: PropTypes.string,
   text: PropTypes.string,
   handler: PropTypes.func
}

export default Button