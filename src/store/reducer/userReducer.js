const defaultState = {
  token: ''
}

export const userReducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      console.log(action.value)
      return {
        ...previousState,
        token: action.value
      };


    default:
      return previousState;
  }
};
