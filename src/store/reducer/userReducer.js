import {setToken,removeAll} from "../../util/localStorage"
const defaultState = {
  token: '',
  imgLink: '',
  name: '',
  role: '',
  username:'',
  _id: '',
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
        token: '',
        imgLink: '',
        name: '',
        role: '',
        username:'',
        _id: '',
      };
    case "SET_USER":
      return {
        ...previousState,
        imgLink: action.value.imgLink,
        name: action.value.name,
        role: action.value.role,
        username: action.value.username,
        _id: action.value._id,
      };


    default:
      return previousState;
  }
};
