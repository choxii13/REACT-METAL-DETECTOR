const DeleteData = (id) => {
  fetch(`http://localhost:5000/Table/${id}`, {
    method: "DELETE",
  }).then(() => {
    console.log("deleted");
  });
};

export default DeleteData;
