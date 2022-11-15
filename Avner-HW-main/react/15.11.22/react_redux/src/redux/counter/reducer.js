import { COUNTER_ACTIONS_TYPES } from "./actions.types";

const INITIAL_STATE = {
   count: 0
}

export function counterReducer(state = INITIAL_STATE, action) {
   switch (action.type) {

      case COUNTER_ACTIONS_TYPES.INCREMENT:
         return { count: state.count + action.payload }

      case COUNTER_ACTIONS_TYPES.DECREMENT:
         return { count: state.count - action.payload }

      case COUNTER_ACTIONS_TYPES.RESET:
         return { count: 0 }

      default:
         return state
   }
}