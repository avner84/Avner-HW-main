import React from 'react'
import { PropTypes } from 'prop-types';

export default function Input(props) {
  return (
    <input type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
          />
  )
}

Input.prototype={
    type:PropTypes.string.isRequired,
    id:PropTypes.string,
    onChange: PropTypes.func

}