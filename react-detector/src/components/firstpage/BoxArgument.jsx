import style from "./main.module.css";
// argument for box container
const myboxdata = {
  designMetal: null,
  designNonMetal: null,
  sensor: null,
  metalSave: false,
  notMetalSave: false,
};

const reducer = (state, action) => {
  const { x, y, className, id, drag } = action;
  if (drag) {
    return {
      ...state,
      designMetal: null,
      designNonMetal: null,
      sensor: null,
      metalSave: false,
      notMetalSave: false,
    };
  } else if (x > 5 && x < 20 && y > 25 && y < 50 && className === "metal") {
    return {
      ...state,
      designMetal: style.add,
      sensor: id,
      metalSave: true,
      notMetalSave: false,
    };
  } else if (x > 5 && x < 20 && y > 25 && y < 50 && className === "non-metal") {
    return {
      ...state,
      designMetal: style.addred,
      sensor: "Non-metal!!",
      metalSave: false,
      notMetalSave: false,
    };
  } else if (x > 5 && x < 20 && y > 63 && y < 84 && className === "non-metal") {
    return {
      ...state,
      designNonMetal: style.add,
      sensor: id,
      notMetalSave: true,
      metalSave: false,
    };
  } else if (x > 5 && x < 20 && y > 63 && y < 84 && className === "metal") {
    return {
      ...state,
      designNonMetal: style.addred,
      sensor: "Metal!!",
      notMetalSave: false,
      metalSave: false,
    };
  } else {
    return state;
  }
};

export { myboxdata, reducer };
