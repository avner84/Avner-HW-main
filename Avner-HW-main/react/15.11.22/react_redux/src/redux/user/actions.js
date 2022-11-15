import { USER_ACTIONS_TYPES } from "./actions.type"
import { PropTypes } from 'prop-types';

export function getUserAction(counter) {
            
   return async function (dispatch) {

      try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users/"+ counter)

         if (!response.ok) {
            throw new Error("User fetch fail")
         }

         const data = await response.json()

         dispatch({ type: USER_ACTIONS_TYPES.GET_USER, payload: data })
      } catch (error) {
         dispatch({ type: USER_ACTIONS_TYPES.GET_USER_FAIL, payload: error.message })
      }
   }
}

getUserAction.prototype={
   counter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
}