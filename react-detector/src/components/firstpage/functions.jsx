const functions = () => {
  const leftX = (x) => {
    return (x / window.innerWidth) * 100;
  };
  const topY = (y) => {
    return (y / window.innerHeight) * 100;
  };

  return { leftX, topY };
};

export default functions;
