const SavingData = (obj) => {
  fetch("http://localhost:5000/Table", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((a) => {
      if (!a.ok) {
        throw new Error("it has the same id, it will not save");
      }
    })
    .catch((er) => console.log(er));
};

export default SavingData;
