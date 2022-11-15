import { PropTypes } from 'prop-types';
import { COUNTER_ACTIONS_TYPES } from "./actions.types";


export function incrementCounterAction(value) {
   return {
      type: COUNTER_ACTIONS_TYPES.INCREMENT,
      payload: value
   }
}

export function decrementCounterAction(value) {
   return {
      type: COUNTER_ACTIONS_TYPES.DECREMENT,
      payload: value
   }
}

export function resetCounterAction() {
   return {
      type: COUNTER_ACTIONS_TYPES.RESET
   }
}

incrementCounterAction.prototype={
   value: PropTypes.number
}

decrementCounterAction.prototype={
   value: PropTypes.number
}
