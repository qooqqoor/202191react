import {setToken,removeAll} from "../../util/localStorage"
const defaultState = {
  token: ''
}

export const userReducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      setToken( action.value)
      return {
        ...previousState,
        token: action.value
      };
    case "REMOVE_ALL":
      removeAll()
      return {
        ...previousState,
        token: ''
      };

    default:
      return previousState;
  }
};
