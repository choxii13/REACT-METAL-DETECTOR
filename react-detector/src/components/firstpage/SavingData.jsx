const SavingData = (obj) => {
  fetch("http://localhost:5000/Table", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
};

export default SavingData;
