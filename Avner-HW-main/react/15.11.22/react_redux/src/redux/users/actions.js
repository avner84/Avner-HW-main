import { USERS_ACTIONS_TYPES } from "./actions.type"


export function getUsersAction() {
   return async function (dispatch) {

      try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users")

         if (!response.ok) {
            throw new Error("Users fetch fail")
         }

         const data = await response.json()

         dispatch({ type: USERS_ACTIONS_TYPES.GET_USERS, payload: data })
      } catch (error) {
         dispatch({ type: USERS_ACTIONS_TYPES.GET_USERS_FAIL, payload: error.message })
      }
   }
}