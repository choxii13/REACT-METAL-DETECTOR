const DeleteData = (id) => {
  fetch(`http://localhost:5000/Table/${id}`, {
    method: "DELETE",
  });
};

export default DeleteData;
