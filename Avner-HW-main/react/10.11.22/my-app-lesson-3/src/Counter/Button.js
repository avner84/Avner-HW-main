import { PropTypes } from 'prop-types';

export default function Button(props) {
    return (
        <button  onClick={()=>{props.changeCpunter(props.actionType)}}>{props.text}</button>
     )
}

Button.propTypes = {

    changeCpunter: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    actionType: PropTypes.string.isRequired
}

// 
