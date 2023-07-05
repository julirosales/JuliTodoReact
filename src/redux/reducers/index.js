const initialState = {
  countVerde: 0,
};

const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TILDE_VERDE":
      return {
        ...state,
        //actualizo el estado que quiero
        countVerde: state.countVerde + action.payload,
      };
    case "TILDE_GRIS":
      return {
        ...state,
        countVerde:
          state.countVerde > 0
            ? state.countVerde - action.payload
            : state.countVerde,
      };
    case "TOTAL_TILDES_OK":
      return {
        ...state,
        countVerde: action.payload,
      };
    default:
      return state;
  }
};

export { toDosReducer };
