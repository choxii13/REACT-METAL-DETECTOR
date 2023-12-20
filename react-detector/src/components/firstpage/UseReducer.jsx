const reducer = (state, action) => {
  switch (action.type) {
    case "complete":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            left: (todo.left = action.x),
            top: (todo.top = action.y),
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default reducer;
