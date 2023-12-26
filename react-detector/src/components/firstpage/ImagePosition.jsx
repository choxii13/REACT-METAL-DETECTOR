const ImagePosition = (state, action) => {
  switch (action.type) {
    case "complete":
      return state.map((pos) => {
        if (pos.id === action.id) {
          return {
            ...pos,
            left: (pos.left = action.x),
            top: (pos.top = action.y),
          };
        } else {
          return pos;
        }
      });

    default:
      return state;
  }
};

export default ImagePosition;
