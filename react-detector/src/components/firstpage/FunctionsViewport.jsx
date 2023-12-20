const leftX = (x) => {
  return (x / window.innerWidth) * 100;
};
const topY = (y) => {
  return (y / window.innerHeight) * 100;
};

export { leftX, topY };
